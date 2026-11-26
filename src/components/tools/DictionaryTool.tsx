import { useState, useMemo } from 'preact/hooks';
import { DICTIONARY_TERMS } from '../../data/dictionary';

const CATEGORIES = ['全部', '基础概念', '线路与协议', '流量与计费', '客户端设置', '网络诊断', '校园与安全'] as const;

export default function DictionaryTool() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('全部');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return DICTIONARY_TERMS.filter((t) => {
      if (category !== '全部' && t.category !== category) return false;
      if (!q) return true;
      const hay = `${t.term} ${t.english} ${t.synonyms.join(' ')} ${t.shortDef} ${t.detail}`.toLowerCase();
      return hay.includes(q);
    });
  }, [query, category]);

  return (
    <div class="tool-box">
      <div class="academy-card" style="margin-bottom:1.25rem;">
        <div class="grid-2" style="align-items:center;">
          <input
            type="search"
            class="tool-input"
            value={query}
            onInput={(e) => setQuery((e.target as HTMLInputElement).value)}
            placeholder="搜索中文术语、英文缩写或同义词（如 TUN、IEPL、小火箭、倍率）…"
            aria-label="搜索知识词典"
          />
          <div style="display:flex;flex-wrap:wrap;gap:0.4rem;">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                class={`btn btn-sm ${category === c ? 'btn-primary' : 'btn-soft'}`}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div style="margin-top:0.65rem;font-size:0.85rem;color:var(--text-muted);">
          共收录 {DICTIONARY_TERMS.length} 个术语词条，当前匹配 {filtered.length} 条。
        </div>
      </div>

      <div class="grid-2">
        {filtered.map((t) => (
          <article id={`term-${t.id}`} key={t.id} class="academy-card">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;margin-bottom:0.4rem;">
              <span class="badge badge-purple">{t.category}</span>
              <small style="color:var(--text-muted);">第 {t.chapterId} 章关联</small>
            </div>
            <h3 style="margin-bottom:0.2rem;">{t.term} <small style="font-weight:500;color:var(--text-muted);">({t.english})</small></h3>
            <p style="font-weight:600;color:var(--text-primary);font-size:0.92rem;margin-bottom:0.45rem;">{t.shortDef}</p>
            <p style="font-size:0.88rem;margin-bottom:0.5rem;">{t.detail}</p>
            <div style="font-size:0.84rem;background:var(--rose-soft-bg);padding:0.5rem 0.75rem;border-radius:10px;margin-bottom:0.5rem;">
              <strong>学姐笔记：</strong>{t.studentTip}
            </div>
            <a href={t.relatedArticleUrl} style="font-size:0.85rem;font-weight:600;">阅读关联课堂 →</a>
          </article>
        ))}
      </div>
    </div>
  );
}
