import { useState, useMemo } from 'preact/hooks';
import { loadProfile, saveProfile } from '../../utils/storage';

const QUALITY_GB_PER_HOUR: Record<string, { label: string; gbPerHr: number }> = {
  '480p': { label: '480P 标清板书', gbPerHr: 0.45 },
  '720p': { label: '720P 高清公开课（推荐）', gbPerHr: 0.9 },
  '1080p': { label: '1080P 超清视频', gbPerHr: 1.8 },
  '4k': { label: '4K 极清（耗流量）', gbPerHr: 5.5 },
};

export default function TrafficCalculatorTool() {
  const [studyHoursDay, setStudyHoursDay] = useState(2);
  const [videoHoursDay, setVideoHoursDay] = useState(0.5);
  const [quality, setQuality] = useState('720p');
  const [downloadGBMonth, setDownloadGBMonth] = useState(5);
  const [multiplier, setMultiplier] = useState(1);
  const [planPrice, setPlanPrice] = useState(20);
  const [planQuotaGB, setPlanQuotaGB] = useState(100);
  const [usedGB, setUsedGB] = useState(18);
  const [savedMsg, setSavedMsg] = useState('');

  const calc = useMemo(() => {
    const webAiGB = studyHoursDay * 0.025 * 30; // ~25MB/hr for literature & AI text
    const videoGB = videoHoursDay * (QUALITY_GB_PER_HOUR[quality]?.gbPerHr || 0.9) * 30;
    const rawTotal = Number((webAiGB + videoGB + downloadGBMonth).toFixed(1));
    const billedTotal = Number((rawTotal * multiplier).toFixed(1));
    const costPerGB = planQuotaGB > 0 ? Number((planPrice / planQuotaGB).toFixed(2)) : 0;
    const remainingGB = Math.max(0, Number((planQuotaGB - usedGB).toFixed(1)));
    const recommendedTier = billedTotal <= 45 ? '50GB 入门档' : billedTotal <= 95 ? '100GB 标准档' : '150GB–300GB 高频档';

    return {
      webAiGB: Number(webAiGB.toFixed(1)),
      videoGB: Number(videoGB.toFixed(1)),
      rawTotal,
      billedTotal,
      costPerGB,
      remainingGB,
      recommendedTier,
    };
  }, [studyHoursDay, videoHoursDay, quality, downloadGBMonth, multiplier, planPrice, planQuotaGB, usedGB]);

  const saveRecord = () => {
    const profile = loadProfile();
    profile.trafficRecords = [
      { estimatedGB: calc.rawTotal, multiplier, billedGB: calc.billedTotal, date: new Date().toLocaleDateString('zh-CN') },
      ...profile.trafficRecords.slice(0, 9),
    ];
    saveProfile(profile);
    setSavedMsg('已保存流量估算记录！');
    setTimeout(() => setSavedMsg(''), 3000);
  };

  return (
    <div class="tool-box academy-card">
      <div class="grid-2">
        <div>
          <label class="tool-label">
            每天文字/文献/AI学习时长：<strong>{studyHoursDay} 小时/天</strong>
            <input type="range" min="0" max="8" step="0.5" value={studyHoursDay} onInput={(e) => setStudyHoursDay(Number((e.target as HTMLInputElement).value))} />
          </label>
          <label class="tool-label">
            每天海外视频课程时长：<strong>{videoHoursDay} 小时/天</strong>
            <input type="range" min="0" max="5" step="0.5" value={videoHoursDay} onInput={(e) => setVideoHoursDay(Number((e.target as HTMLInputElement).value))} />
          </label>
          <label class="tool-label">
            视频清晰度偏好：
            <select class="tool-select" value={quality} onChange={(e) => setQuality((e.target as HTMLSelectElement).value)}>
              {Object.entries(QUALITY_GB_PER_HOUR).map(([k, v]) => (
                <option value={k}>{v.label}（约 {v.gbPerHr} GB/小时）</option>
              ))}
            </select>
          </label>
          <div class="grid-2" style="gap:0.75rem;">
            <label class="tool-label">
              每月文件/镜像下载（GB）：
              <input type="number" class="tool-input" min="0" max="500" value={downloadGBMonth} onInput={(e) => setDownloadGBMonth(Number((e.target as HTMLInputElement).value))} />
            </label>
            <label class="tool-label">
              常用节点计费倍率：
              <select class="tool-select" value={multiplier} onChange={(e) => setMultiplier(Number((e.target as HTMLSelectElement).value))}>
                <option value={0.5}>0.5x 低倍率省流节点</option>
                <option value={1}>1.0x 标准节点（推荐）</option>
                <option value={1.5}>1.5x 中转专线</option>
                <option value={2}>2.0x 高倍率专线</option>
                <option value={3}>3.0x 稀缺节点</option>
              </select>
            </label>
          </div>
          <div class="grid-3" style="gap:0.65rem;margin-top:0.4rem;">
            <label class="tool-label">
              套餐价格（元）：
              <input type="number" class="tool-input" min="1" value={planPrice} onInput={(e) => setPlanPrice(Number((e.target as HTMLInputElement).value))} />
            </label>
            <label class="tool-label">
              套餐总额度（GB）：
              <input type="number" class="tool-input" min="1" value={planQuotaGB} onInput={(e) => setPlanQuotaGB(Number((e.target as HTMLInputElement).value))} />
            </label>
            <label class="tool-label">
              本月已用（GB）：
              <input type="number" class="tool-input" min="0" value={usedGB} onInput={(e) => setUsedGB(Number((e.target as HTMLInputElement).value))} />
            </label>
          </div>
          <button type="button" class="btn btn-primary btn-sm" onClick={saveRecord} style="margin-top:0.75rem;">
            💾 保存估算到我的学院
          </button>
          {savedMsg && <span style="margin-left:0.65rem;color:#256445;font-size:0.86rem;">{savedMsg}</span>}
        </div>

        <div class="notebook-card">
          <h3 style="margin-top:0;">流量数学课堂计算结果</h3>
          <ul>
            <li>文字与 AI 检索月耗：<strong>{calc.webAiGB} GB</strong></li>
            <li>公开课视频月耗：<strong>{calc.videoGB} GB</strong></li>
            <li>实际传输总流量：<strong>{calc.rawTotal} GB</strong></li>
            <li>按 {multiplier}x 倍率扣费流量：<strong>{calc.billedTotal} GB/月</strong></li>
            <li>推荐套餐档位：<span class="badge badge-mint">{calc.recommendedTier}</span></li>
            <li>当前目标套餐单价：<strong>¥{calc.costPerGB} / GB</strong>（剩余 {calc.remainingGB} GB）</li>
          </ul>
          <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:0;">
            提示：周期套餐未用完流量通常在账单日清零重置；若每月实际需求低于 15GB，也可对比一次性不限时流量包。
          </p>
        </div>
      </div>
    </div>
  );
}
