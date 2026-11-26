import { useState, useMemo } from 'preact/hooks';
import { AIRPORTS, type AirportBrand } from '../../data/airports';
import { loadProfile, saveProfile } from '../../utils/storage';

interface Props {
  brands?: AirportBrand[];
}

export default function StudentBudgetTool({ brands = AIRPORTS }: Props) {
  const [monthlyBudget, setMonthlyBudget] = useState(20);
  const [months, setMonths] = useState(3);
  const [cycle, setCycle] = useState<'monthly' | 'quarterly' | 'yearly'>('monthly');
  const [discountPct, setDiscountPct] = useState(0);
  const [backupBudget, setBackupBudget] = useState(10);
  const [savedMsg, setSavedMsg] = useState('');

  const totalBudget = useMemo(() => monthlyBudget * months + backupBudget, [monthlyBudget, months, backupBudget]);

  const matchingPlans = useMemo(() => {
    const results: { brand: AirportBrand; planName: string; upfront: number; monthlyEq: number; dataText: string }[] = [];
    for (const b of brands) {
      for (const p of b.plans) {
        if (p.isCustom) continue;
        let rawPrice: number | null = null;
        let divMonths = 1;
        if (cycle === 'monthly' && p.monthly !== null) {
          rawPrice = p.monthly;
          divMonths = 1;
        } else if (cycle === 'quarterly' && p.quarterly !== null) {
          rawPrice = p.quarterly;
          divMonths = 3;
        } else if (cycle === 'yearly' && p.yearly !== null) {
          rawPrice = p.yearly;
          divMonths = 12;
        }
        if (rawPrice === null) continue;
        const discounted = Number((rawPrice * (1 - discountPct / 100)).toFixed(2));
        const monthlyEq = Number((discounted / divMonths).toFixed(2));
        if (monthlyEq <= monthlyBudget) {
          results.push({
            brand: b,
            planName: p.name,
            upfront: discounted,
            monthlyEq,
            dataText: p.dataText,
          });
        }
      }
    }
    return results.sort((a, b) => a.monthlyEq - b.monthlyEq).slice(0, 12);
  }, [brands, monthlyBudget, cycle, discountPct]);

  const saveRecord = () => {
    const profile = loadProfile();
    profile.budgetRecords = [
      { monthlyBudget, months, total: totalBudget, date: new Date().toLocaleDateString('zh-CN') },
      ...profile.budgetRecords.slice(0, 9),
    ];
    saveProfile(profile);
    setSavedMsg('已保存到“我的学院”本地记录！');
    setTimeout(() => setSavedMsg(''), 3000);
  };

  return (
    <div class="tool-box academy-card">
      <div class="grid-2">
        <div>
          <label class="tool-label">
            每月消费预算（元）：<strong>¥{monthlyBudget}</strong>
            <input
              type="range"
              min="8"
              max="60"
              step="1"
              value={monthlyBudget}
              onInput={(e) => setMonthlyBudget(Number((e.target as HTMLInputElement).value))}
            />
          </label>
          <label class="tool-label">
            预计使用时间（月）：<strong>{months} 个月</strong>
            <input
              type="range"
              min="1"
              max="12"
              step="1"
              value={months}
              onInput={(e) => setMonths(Number((e.target as HTMLInputElement).value))}
            />
          </label>
          <label class="tool-label">
            目标付款周期：
            <select
              class="tool-select"
              value={cycle}
              onChange={(e) => setCycle((e.target as HTMLSelectElement).value as any)}
            >
              <option value="monthly">月付（最推荐新手试错）</option>
              <option value="quarterly">季付（适合已验证稳定后）</option>
              <option value="yearly">年付（一次性预付较多，注意风险）</option>
            </select>
          </label>
          <div class="grid-2" style="gap:0.75rem;">
            <label class="tool-label">
              优惠折扣（%）：
              <input
                type="number"
                class="tool-input"
                min="0"
                max="50"
                value={discountPct}
                onInput={(e) => setDiscountPct(Number((e.target as HTMLInputElement).value))}
              />
            </label>
            <label class="tool-label">
              备用应急预算（元）：
              <input
                type="number"
                class="tool-input"
                min="0"
                max="100"
                value={backupBudget}
                onInput={(e) => setBackupBudget(Number((e.target as HTMLInputElement).value))}
              />
            </label>
          </div>
          <button type="button" class="btn btn-primary btn-sm" onClick={saveRecord} style="margin-top:0.75rem;">
            💾 保存本次预算方案到我的学院
          </button>
          {savedMsg && <span style="margin-left:0.65rem;color:#256445;font-size:0.86rem;">{savedMsg}</span>}
        </div>

        <div class="notebook-card">
          <h3 style="margin-top:0;">学姐预算诊断结果</h3>
          <p>阶段总消费预算（含备用金）：<strong>¥{totalBudget}</strong></p>
          <p>折合每月主预算上限：<strong>¥{monthlyBudget}/月</strong></p>
          {cycle === 'yearly' && (
            <div class="badge badge-gold" style="white-space:normal;border-radius:10px;padding:0.5rem 0.75rem;margin-bottom:0.75rem;">
              ⚠️ 长期预付风险提示：年付需一次性支付整年费用，若未用过该品牌，建议先月付 1 个月再决定！
            </div>
          )}
          <p style="font-size:0.88rem;color:var(--text-muted);margin-bottom:0;">
            下方列表实时读取自本站 18 家已核验品牌数据库（按真实{cycle === 'monthly' ? '月付' : cycle === 'quarterly' ? '季付折合' : '年付折合'}筛选）。
          </p>
        </div>
      </div>

      <hr style="border:none;border-top:1px dashed var(--border-sakura);margin:1.5rem 0;" />

      <h3>符合当前预算的真实已核验套餐（共 {matchingPlans.length} 项）</h3>
      {matchingPlans.length === 0 ? (
        <p class="badge badge-sakura" style="white-space:normal;padding:0.65rem 1rem;border-radius:12px;">
          当前条件下暂无已核验的真实匹配套餐（例如 10 元以下暂无纯月付套餐）。建议将预算调至 15–20 元/月，或切换付款周期查看。
        </p>
      ) : (
        <div class="table-scroll">
          <table class="academy-table">
            <thead>
              <tr>
                <th>品牌</th>
                <th>套餐名称</th>
                <th>整期实付金额</th>
                <th>折合每月成本</th>
                <th>流量配额</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {matchingPlans.map((m) => (
                <tr>
                  <td><a href={`/airports/${m.brand.slug}/`}><strong>{m.brand.name}</strong></a></td>
                  <td>{m.planName}</td>
                  <td><strong>¥{m.upfront}</strong></td>
                  <td>¥{m.monthlyEq}/月</td>
                  <td>{m.dataText}</td>
                  <td><a href={`/airports/${m.brand.slug}/`} class="btn btn-sm btn-soft">查看档案</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
