import { AIRPORTS } from './airports';
import { CAMPUS_CHAPTERS } from './chapters';
import { DICTIONARY_TERMS } from './dictionary';
import { ALL_ARTICLES } from './articles';
import { CLIENT_SOFTWARES } from './clients';

export type SearchCategory =
  | '学习课程'
  | '基础术语'
  | '设备教程'
  | '故障排查'
  | '机场品牌'
  | '套餐资料';

export interface SearchEntry {
  id: string;
  category: SearchCategory;
  title: string;
  subtitle: string;
  url: string;
  keywords: string;
}

const SYNONYM_MAP: Record<string, string[]> = {
  '苹果': ['iphone', 'ipad', 'ios', 'mac', 'macos', 'shadowrocket', '小火箭'],
  'iphone': ['苹果', 'ios', '小火箭', 'shadowrocket'],
  'android': ['安卓', 'flclash', 'v2rayng'],
  '安卓': ['android', 'flclash', 'v2rayng'],
  'windows': ['win11', 'win10', '电脑', 'clash', 'v2rayn'],
  '50gb': ['流量', '50g', '轻度', '学生'],
  '100gb': ['流量', '100g', '公开课'],
  '校园网': ['宿舍', '认证', 'edu', 'cernet', 'wifi', 'dns'],
  '节点超时': ['timeout', '超时', '连不上', '断连'],
  '订阅失败': ['订阅', '导入失败', '更新失败', '配置文件为空'],
  '退款': ['退钱', 'refund', 'tos', '售后'],
  'tun': ['虚拟网卡', '系统代理', 'clash'],
  '学生': ['预算', '10元', '20元', '月付', '便宜'],
};

export function buildSearchIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];

  for (const ch of CAMPUS_CHAPTERS) {
    entries.push({
      id: `ch-${ch.id}`,
      category: '学习课程',
      title: `第${ch.id}章 · ${ch.chineseTitle} (${ch.englishTitle})`,
      subtitle: ch.purpose,
      url: ch.primaryUrl,
      keywords: `${ch.chineseTitle} ${ch.englishTitle} ${ch.purpose} ${ch.scene} ${ch.keywordRange}`,
    });
  }

  for (const term of DICTIONARY_TERMS) {
    entries.push({
      id: `dict-${term.id}`,
      category: '基础术语',
      title: `${term.term} (${term.english})`,
      subtitle: term.shortDef,
      url: `/tools/dictionary/#term-${term.id}`,
      keywords: `${term.term} ${term.english} ${term.synonyms.join(' ')} ${term.shortDef} ${term.category}`,
    });
  }

  for (const art of ALL_ARTICLES) {
    const isTroubleshoot = art.categorySlug === 'troubleshooting';
    const isDevice = art.categorySlug.startsWith('tutorials');
    entries.push({
      id: `art-${art.slug}`,
      category: isTroubleshoot ? '故障排查' : isDevice ? '设备教程' : '学习课程',
      title: art.title,
      subtitle: `${art.categoryName} · ${art.description.slice(0, 56)}…`,
      url: art.url,
      keywords: `${art.title} ${art.description} ${art.categoryName} ${art.senpaiTip}`,
    });
  }

  for (const client of CLIENT_SOFTWARES) {
    entries.push({
      id: `client-${client.id}`,
      category: '设备教程',
      title: `${client.name} 客户端教程与官方来源`,
      subtitle: `${client.platforms.join(' / ')} · ${client.difficulty}`,
      url: client.tutorialUrl,
      keywords: `${client.name} ${client.platforms.join(' ')} ${client.kernel} ${client.summary}`,
    });
  }

  for (const b of AIRPORTS) {
    entries.push({
      id: `brand-${b.slug}`,
      category: '机场品牌',
      title: `${b.name} (${b.englishName})`,
      subtitle: `${b.minMonthlyPrice ? `月付 ¥${b.minMonthlyPrice} 起` : `年付 ¥${b.minYearlyPrice} 起`} · 优惠码 ${b.couponCode}`,
      url: `/airports/${b.slug}/`,
      keywords: `${b.name} ${b.englishName} ${b.aliases.join(' ')} ${b.couponCode} ${b.summary} ${b.protocols.join(' ')}`,
    });

    for (const p of b.plans.slice(0, 4)) {
      const priceLabel = p.monthly
        ? `¥${p.monthly}/月`
        : p.yearly
          ? `¥${p.yearly}/年`
          : p.oneTimePrice
            ? `¥${p.oneTimePrice} 一次性`
            : '自定义';
      entries.push({
        id: `plan-${b.slug}-${p.name}`,
        category: '套餐资料',
        title: `${b.name} · ${p.name}（${priceLabel}）`,
        subtitle: `${p.dataText} · ${p.isOneTime ? '一次性流量包' : '周期套餐'}`,
        url: `/airports/${b.slug}/`,
        keywords: `${b.name} ${p.name} ${priceLabel} ${p.dataText} ${b.couponCode}`,
      });
    }
  }

  return entries;
}

export function searchEntries(entries: SearchEntry[], rawQuery: string): SearchEntry[] {
  const q = rawQuery.trim().toLowerCase();
  if (!q) return [];

  const tokens = q.split(/\s+/).filter(Boolean);
  const expandedTokens = new Set<string>(tokens);
  for (const t of tokens) {
    const syns = SYNONYM_MAP[t];
    if (syns) syns.forEach((s) => expandedTokens.add(s.toLowerCase()));
  }

  const scored = entries
    .map((entry) => {
      const hay = `${entry.title} ${entry.subtitle} ${entry.keywords}`.toLowerCase();
      let score = 0;
      if (entry.title.toLowerCase().includes(q)) score += 12;
      if (hay.includes(q)) score += 6;
      for (const tok of expandedTokens) {
        if (entry.title.toLowerCase().includes(tok)) score += 4;
        else if (hay.includes(tok)) score += 2;
      }
      return { entry, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, 24).map((s) => s.entry);
}
