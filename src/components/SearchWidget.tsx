import { useState, useMemo, useEffect, useRef } from 'preact/hooks';
import { searchEntries, type SearchEntry, type SearchCategory } from '../data/search-index';

interface Props {
  entries: SearchEntry[];
  inline?: boolean;
  initialQuery?: string;
}

const HOT_QUERIES = ['学生', '50GB', '校园网', '节点超时', 'TUN', '苹果', 'Windows', '退款', '订阅失败'];

const CATEGORY_ORDER: SearchCategory[] = [
  '学习课程',
  '基础术语',
  '设备教程',
  '故障排查',
  '机场品牌',
  '套餐资料',
];

export default function SearchWidget({ entries, inline = false, initialQuery = '' }: Props) {
  const [query, setQuery] = useState(initialQuery);
  const [activeIdx, setActiveIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => searchEntries(entries, query), [entries, query]);

  const grouped = useMemo(() => {
    const map = new Map<SearchCategory, SearchEntry[]>();
    for (const cat of CATEGORY_ORDER) map.set(cat, []);
    for (const item of results) {
      map.get(item.category)?.push(item);
    }
    return CATEGORY_ORDER.map((cat) => ({
      category: cat,
      items: map.get(cat) || [],
    })).filter((g) => g.items.length > 0);
  }, [results]);

  const flatResults = useMemo(() => grouped.flatMap((g) => g.items), [grouped]);

  useEffect(() => {
    setActiveIdx(-1);
  }, [query]);

  const onKeyDown = (e: KeyboardEvent) => {
    if (!flatResults.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIdx((prev) => (prev + 1) % flatResults.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIdx((prev) => (prev <= 0 ? flatResults.length - 1 : prev - 1));
    } else if (e.key === 'Enter' && activeIdx >= 0 && flatResults[activeIdx]) {
      e.preventDefault();
      window.location.href = flatResults[activeIdx].url;
    }
  };

  return (
    <div class={`search-widget ${inline ? 'search-inline' : ''}`}>
      <div class="search-input-wrap">
        <span class="search-icon" aria-hidden="true">🔍</span>
        <input
          ref={inputRef}
          type="search"
          class="search-input"
          value={query}
          onInput={(e) => setQuery((e.target as HTMLInputElement).value)}
          onKeyDown={onKeyDown as unknown as (e: any) => void}
          placeholder="搜索关键词：学生、50GB、校园网、TUN、苹果、Windows、退款…"
          aria-label="全站搜索"
          autoComplete="off"
        />
        {query && (
          <button
            type="button"
            class="search-clear"
            onClick={() => {
              setQuery('');
              inputRef.current?.focus();
            }}
            aria-label="清空搜索"
          >
            ✕
          </button>
        )}
      </div>

      <div class="search-hot-row" aria-label="热门搜索联想词">
        <span class="hot-label">MOCHI 建议：</span>
        {HOT_QUERIES.map((tag) => (
          <button
            key={tag}
            type="button"
            class="hot-chip"
            onClick={() => setQuery(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {query.trim() === '' ? (
        <div class="search-empty-hint">
          <p style="margin:0;color:var(--text-muted);font-size:0.9rem;">
            输入中文关键词、英文术语（如 TUN / IEPL）、品牌名称（如 唯兔云 / 灵动云）、优惠码或故障现象，即可实时联想匹配结果。
          </p>
        </div>
      ) : flatResults.length === 0 ? (
        <div class="search-empty-hint">
          <p style="margin:0;color:var(--text-secondary);">
            未找到与 <strong>“{query}”</strong> 直接匹配的条目，可以尝试输入“学生”、“月付”、“校园网”或前往{' '}
            <a href="/tools/dictionary/">知识词典</a> / <a href="/tools/troubleshooter/">智能故障排查</a>。
          </p>
        </div>
      ) : (
        <div class="search-results-box" role="listbox">
          {grouped.map((group) => (
            <div key={group.category} class="search-group">
              <div class="search-group-title">{group.category}（{group.items.length}）</div>
              {group.items.map((item) => {
                const idx = flatResults.indexOf(item);
                const isActive = idx === activeIdx;
                return (
                  <a
                    key={item.id}
                    href={item.url}
                    role="option"
                    aria-selected={isActive}
                    class={`search-result-item ${isActive ? 'is-active' : ''}`}
                  >
                    <div class="search-result-title">{item.title}</div>
                    <div class="search-result-sub">{item.subtitle}</div>
                  </a>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
