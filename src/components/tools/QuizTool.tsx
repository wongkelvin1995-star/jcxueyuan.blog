import { useState } from 'preact/hooks';
import { loadProfile, saveProfile } from '../../utils/storage';

const QUESTIONS = [
  {
    q: '1. 机场学院建议零基础学生第一次购买机场套餐时，最优先选择哪种付款周期？',
    options: ['三年付，因为平均每月最便宜', '月付，先用15–20元低成本验证宿舍和设备兼容性', '直接买大额不限时包'],
    answer: 1,
    explain: '学生党校园网与寒暑假网络环境变化快，首购月付试错成本最低。',
  },
  {
    q: '2. 当你在节点列表里看到某个节点标注为 [2x]，用它下载 1GB 课程文件会扣除多少套餐流量？',
    options: ['0.5 GB', '1 GB', '2 GB'],
    answer: 2,
    explain: '扣除流量 = 实际传输流量 × 节点倍率，2x 倍率会扣除双倍额度。',
  },
  {
    q: '3. 日常学习既要访问国内教务系统，又要查阅英文文献，客户端应该选哪种分流模式？',
    options: ['全局模式 (Global)', '规则模式 (Rule / Config)', '直连模式 (Direct)'],
    answer: 1,
    explain: '规则模式会让国内与校园内网直连，只让需要的国际域名走节点，既快又省流量。',
  },
  {
    q: '4. 更新机场订阅链接时反复提示失败，最常被忽略的解决操作是什么？',
    options: ['先把当前失效的系统代理/VPN关掉再点击更新', '把订阅链接发到公开贴吧请网友帮忙测试', '重启路由器十次'],
    answer: 0,
    explain: '开着失效节点去请求订阅地址会被卡住，关闭代理用本地直连往往立刻就能更新成功。',
  },
  {
    q: '5. iPhone / iPad 用户下载 Shadowrocket（小火箭）时，哪项操作存在严重的锁机与隐私风险？',
    options: ['使用自己合规注册的外区个人 Apple ID 购买', '在手机“设置-iCloud”中登录陌生人提供的免费共享 Apple ID', '在 App Store 内核对开发者信息'],
    answer: 1,
    explain: '在系统设置层登录他人的 iCloud 可能导致设备被“查找我的 iPhone”远程锁定。',
  },
  {
    q: '6. 当系统时间与标准北京时间偏差超过 90 秒时，哪种常见情况最容易发生？',
    options: ['VMess 等协议节点全部显示超时无法握手', '电脑屏幕变暗', '套餐流量自动翻倍'],
    answer: 0,
    explain: 'VMess 协议依赖时间戳校验，系统时间不准会直接导致握手失败。',
  },
];

export default function QuizTool() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = QUESTIONS.reduce((acc, item, idx) => (answers[idx] === item.answer ? acc + 1 : acc), 0);
  const pct = Math.round((score / QUESTIONS.length) * 100);

  const submit = () => {
    setSubmitted(true);
    const p = loadProfile();
    if (p.quizBestScore === null || pct > p.quizBestScore) {
      p.quizBestScore = pct;
      saveProfile(p);
    }
  };

  return (
    <div class="tool-box">
      <div style="display:flex;flex-direction:column;gap:1rem;">
        {QUESTIONS.map((item, idx) => (
          <div key={idx} class="academy-card">
            <h3 style="font-size:1.02rem;margin-bottom:0.65rem;">{item.q}</h3>
            <div style="display:flex;flex-direction:column;gap:0.45rem;">
              {item.options.map((opt, oIdx) => {
                const chosen = answers[idx] === oIdx;
                return (
                  <label key={oIdx} style={`display:flex;align-items:center;gap:0.5rem;padding:0.5rem 0.75rem;border-radius:10px;border:1px solid ${chosen ? 'var(--rose-deep)' : 'var(--border-subtle)'};background:${chosen ? 'var(--rose-soft-bg)' : '#fff'};cursor:pointer;`}>
                    <input
                      type="radio"
                      name={`q-${idx}`}
                      checked={chosen}
                      onChange={() => setAnswers({ ...answers, [idx]: oIdx })}
                    />
                    <span>{opt}</span>
                  </label>
                );
              })}
            </div>
            {submitted && (
              <div style={`margin-top:0.65rem;padding:0.55rem 0.8rem;border-radius:10px;font-size:0.88rem;background:${answers[idx] === item.answer ? '#EFF8F3' : '#FDF0F5'};`}>
                <strong>{answers[idx] === item.answer ? '✓ 回答正确！' : '✕ 再复习一下：'}</strong>{item.explain}
              </div>
            )}
          </div>
        ))}
      </div>

      <div class="notebook-card" style="margin-top:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;">
        <div>
          {submitted ? (
            <>
              <h3 style="margin-bottom:0.2rem;">本次测试成绩：{score} / {QUESTIONS.length}（{pct} 分）</h3>
              <p style="margin:0;">{pct >= 80 ? '🌸 樱羽学姐：“太棒了！你已经具备独立选购与排查基础故障的能力啦！”' : '📖 樱羽学姐：“有几道题可以再回樱花知识图书馆看一看哦~”'}</p>
            </>
          ) : (
            <p style="margin:0;">完成以上 {QUESTIONS.length} 道新生入门自测题，成绩将保存在本地“我的学院”。</p>
          )}
        </div>
        <button type="button" class="btn btn-primary" onClick={submit}>提交答卷并保存成绩</button>
      </div>
    </div>
  );
}
