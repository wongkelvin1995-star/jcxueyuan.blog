import airportsRaw from './airports.json';

export type DeviceStatus = 'supported' | 'conditional' | 'unsupported' | 'unconfirmed';

export interface DeviceSupportInfo {
  status: DeviceStatus;
  label: string;
  note: string;
}

export interface AirportPlan {
  name: string;
  monthly: number | null;
  quarterly: number | null;
  halfYearly: number | null;
  yearly: number | null;
  twoYear?: number | null;
  threeYear?: number | null;
  oneTimePrice?: number | null;
  dataText: string;
  dataGB: number | null;
  isOneTime: boolean;
  isCustom: boolean;
  note?: string;
}

export interface AirportBrand {
  order: number;
  id: string;
  slug: string;
  name: string;
  englishName: string;
  aliases: string[];
  couponCode: string;
  affUrl: string;
  officialSite: string;
  priceDate: string;
  verifiedDate: string;
  couponEvidence: string;
  priceSourceUrl: string;
  summary: string;
  positioning: string;
  plans: AirportPlan[];
  minMonthlyPrice: number | null;
  minYearlyPrice: number | null;
  maxMonthlyDataGB: number | null;
  regions: string[];
  lines: string[];
  protocols: string[];
  devices: {
    android: DeviceSupportInfo;
    ios: DeviceSupportInfo;
    windows: DeviceSupportInfo;
    macos: DeviceSupportInfo;
    linux: DeviceSupportInfo;
    router: DeviceSupportInfo;
    clash: DeviceSupportInfo;
    shadowrocket: DeviceSupportInfo;
  };
  subscriptionPolicy: {
    thirdPartySupported: boolean;
    needTicket: boolean;
    summary: string;
  };
  concurrentDevices: string;
  isUnlimitedClaim: boolean;
  aiSupport: {
    supportedList: string[];
    evidenceNote: string;
  };
  streamingSupport: {
    supportedList: string[];
    evidenceNote: string;
  };
  gamingEvidence: string;
  refundPolicy: string;
  suitableFor: string[];
  notSuitableFor: string[];
  conflictsAndNotes: string[];
}

export const AIRPORTS: AirportBrand[] = airportsRaw as AirportBrand[];

export interface StudentEvaluationBreakdown {
  budgetScore: number;       // 25%
  beginnerEaseScore: number; // 20%
  valueScore: number;        // 15%
  shortTermScore: number;    // 15%
  clientCompatScore: number; // 10%
  supportScore: number;      // 10%
  transparencyScore: number; // 5%
  totalScore: number | null; // null if insufficient evidence
  hasEnoughEvidence: boolean;
  evidenceNotes: string[];
  difficultyLabel: '新手友好' | '中等（需看教程）' | '偏进阶' | '待进一步核验';
}

/**
 * Academy Student Evaluation 学生友好度评价模型
 * 权重：学生预算25% + 新手难度20% + 性价比15% + 短周期灵活性15% + 客户端兼容性10% + 教程客服10% + 政策透明度5%
 * 注：绝不将 AFF 佣金比例作为评分依据；资料不足时不强行生成评分。
 */
export function evaluateStudentFriendliness(brand: AirportBrand): StudentEvaluationBreakdown {
  const evidenceNotes: string[] = [];

  // 1. 学生消费预算 (25%)
  let budgetScore = 50;
  if (brand.minMonthlyPrice !== null) {
    if (brand.minMonthlyPrice <= 15) {
      budgetScore = 95;
      evidenceNotes.push(`月付门槛低至 ¥${brand.minMonthlyPrice}/月`);
    } else if (brand.minMonthlyPrice <= 20) {
      budgetScore = 85;
      evidenceNotes.push(`支持 ¥${brand.minMonthlyPrice}/月 入门月付`);
    } else if (brand.minMonthlyPrice <= 25) {
      budgetScore = 72;
      evidenceNotes.push(`月付起步 ¥${brand.minMonthlyPrice}/月`);
    } else {
      budgetScore = 60;
      evidenceNotes.push(`月付起步 ¥${brand.minMonthlyPrice}/月，对学生略高`);
    }
  } else if (brand.minYearlyPrice !== null) {
    budgetScore = 65;
    evidenceNotes.push(`暂无纯月付，年付最低 ¥${brand.minYearlyPrice}/年`);
  }

  // 2. 新手使用难度 (20%)
  let beginnerEaseScore = 65;
  const thirdParty = brand.subscriptionPolicy.thirdPartySupported;
  const needTicket = brand.subscriptionPolicy.needTicket;
  if (thirdParty && !needTicket) {
    beginnerEaseScore = 88;
    evidenceNotes.push('支持直接导入主流第三方客户端，无需额外工单');
  } else if (thirdParty && needTicket) {
    beginnerEaseScore = 72;
    evidenceNotes.push('支持第三方客户端，但部分接入或政策需工单确认');
  } else {
    beginnerEaseScore = 58;
    evidenceNotes.push('以官方客户端为主或第三方订阅受限');
  }

  // 3. 套餐性价比 (15%) - 计算入门月付每GB成本或年付折算
  let valueScore = 70;
  const starterPlan = brand.plans.find((p) => p.monthly !== null && !p.isCustom && (p.dataGB || 0) > 0);
  if (starterPlan && starterPlan.monthly && starterPlan.dataGB) {
    const perGB = starterPlan.monthly / starterPlan.dataGB;
    if (perGB <= 0.18) valueScore = 92;
    else if (perGB <= 0.25) valueScore = 84;
    else if (perGB <= 0.35) valueScore = 74;
    else valueScore = 64;
    evidenceNotes.push(`入门月付约 ¥${perGB.toFixed(2)}/GB（${starterPlan.dataText}）`);
  }

  // 4. 短周期购买灵活性 (15%)
  const hasMonthly = brand.plans.some((p) => p.monthly !== null);
  const hasQuarterly = brand.plans.some((p) => p.quarterly !== null);
  const hasOneTime = brand.plans.some((p) => p.isOneTime);
  let shortTermScore = 50;
  if (hasMonthly && hasQuarterly) shortTermScore = 92;
  else if (hasMonthly) shortTermScore = 82;
  else if (hasQuarterly) shortTermScore = 68;
  if (hasOneTime) shortTermScore = Math.min(100, shortTermScore + 6);

  // 5. 客户端兼容性 (10%)
  const platforms = [
    brand.devices.windows,
    brand.devices.macos,
    brand.devices.android,
    brand.devices.ios,
    brand.devices.clash,
    brand.devices.shadowrocket,
  ];
  const supportedCount = platforms.filter((d) => d.status === 'supported').length;
  const conditionalCount = platforms.filter((d) => d.status === 'conditional').length;
  const clientCompatScore = Math.min(100, Math.round(((supportedCount + conditionalCount * 0.5) / 6) * 100));

  // 6. 教程及客服支持 (10%)
  const supportScore = brand.refundPolicy && !brand.refundPolicy.includes('未确认') ? 80 : 65;

  // 7. 政策透明度 (5%)
  const hasRefundText = Boolean(brand.refundPolicy && brand.refundPolicy.length > 8);
  const hasConflicts = brand.conflictsAndNotes && brand.conflictsAndNotes.length > 0;
  const transparencyScore = hasRefundText ? (hasConflicts ? 72 : 85) : 55;

  const hasEnoughEvidence = Boolean(brand.plans.length > 0 && brand.priceDate);

  const totalScore = hasEnoughEvidence
    ? Math.round(
        budgetScore * 0.25 +
          beginnerEaseScore * 0.2 +
          valueScore * 0.15 +
          shortTermScore * 0.15 +
          clientCompatScore * 0.1 +
          supportScore * 0.1 +
          transparencyScore * 0.05
      )
    : null;

  let difficultyLabel: StudentEvaluationBreakdown['difficultyLabel'] = '待进一步核验';
  if (beginnerEaseScore >= 85) difficultyLabel = '新手友好';
  else if (beginnerEaseScore >= 70) difficultyLabel = '中等（需看教程）';
  else difficultyLabel = '偏进阶';

  return {
    budgetScore,
    beginnerEaseScore,
    valueScore,
    shortTermScore,
    clientCompatScore,
    supportScore,
    transparencyScore,
    totalScore,
    hasEnoughEvidence,
    evidenceNotes,
    difficultyLabel,
  };
}

export function getBrandBySlug(slug: string): AirportBrand | undefined {
  return AIRPORTS.find((b) => b.slug === slug || b.id === slug);
}

/**
 * 10元以下真实月付 vs 年付折合月均 <= 10元 区分查询
 * 绝不虚构价格，绝不把年付折合价伪装成月付价
 */
export function getUnder10Summary() {
  const realMonthlyUnder10 = AIRPORTS.filter((b) =>
    b.plans.some((p) => p.monthly !== null && p.monthly <= 10)
  );

  const yearlyAvgUnder10 = AIRPORTS.map((b) => {
    const qualifyingPlans = b.plans.filter(
      (p) => p.yearly !== null && p.yearly / 12 <= 10
    );
    return {
      brand: b,
      plans: qualifyingPlans,
      lowestYearly: qualifyingPlans.length
        ? Math.min(...qualifyingPlans.map((p) => p.yearly as number))
        : null,
    };
  })
    .filter((item) => item.plans.length > 0)
    .sort((a, b) => (a.lowestYearly || 999) - (b.lowestYearly || 999));

  return {
    realMonthlyUnder10,
    yearlyAvgUnder10,
  };
}

/**
 * 20元以内真实月付专区（仅筛选 monthly <= 20 的已核验真实月付套餐）
 */
export function getUnder20MonthlyBrands() {
  return AIRPORTS.map((b) => {
    const monthlyPlans = b.plans.filter(
      (p) => p.monthly !== null && p.monthly <= 20
    );
    return {
      brand: b,
      plans: monthlyPlans,
      lowestMonthly: monthlyPlans.length
        ? Math.min(...monthlyPlans.map((p) => p.monthly as number))
        : null,
    };
  })
    .filter((item) => item.plans.length > 0)
    .sort((a, b) => (a.lowestMonthly || 999) - (b.lowestMonthly || 999));
}

export function getDatabaseStats() {
  const brandCount = AIRPORTS.length;
  const planCount = AIRPORTS.reduce((sum, b) => sum + b.plans.length, 0);
  const latestPriceDate = AIRPORTS.reduce((latest, b) => {
    const d = b.verifiedDate || b.priceDate;
    return d > latest ? d : latest;
  }, '2026-10-31');

  return {
    brandCount,
    planCount,
    latestVerifiedDate: latestPriceDate,
    exclusiveToolsCount: 8,
  };
}
