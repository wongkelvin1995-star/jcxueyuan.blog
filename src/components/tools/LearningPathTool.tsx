import { useState, useEffect } from 'preact/hooks';
import { CAMPUS_CHAPTERS } from '../../data/chapters';
import { loadProfile, saveProfile, type AcademyProfileState, DEFAULT_PROFILE } from '../../utils/storage';

export default function LearningPathTool() {
  const [profile, setProfile] = useState<AcademyProfileState>(DEFAULT_PROFILE);

  useEffect(() => {
    setProfile(loadProfile());
  }, []);

  const toggleComplete = (id: number) => {
    const next = { ...profile };
    if (next.completedChapters.includes(id)) {
      next.completedChapters = next.completedChapters.filter((c) => c !== id);
    } else {
      next.completedChapters = [...next.completedChapters, id];
    }
    setProfile(next);
    saveProfile(next);
  };

  const toggleBookmark = (id: number) => {
    const next = { ...profile };
    if (next.bookmarkedCourses.includes(id)) {
      next.bookmarkedCourses = next.bookmarkedCourses.filter((c) => c !== id);
    } else {
      next.bookmarkedCourses = [...next.bookmarkedCourses, id];
    }
    setProfile(next);
    saveProfile(next);
  };

  const pct = Math.round((profile.completedChapters.length / CAMPUS_CHAPTERS.length) * 100);
  const nextChapter = CAMPUS_CHAPTERS.find((c) => !profile.completedChapters.includes(c.id)) || CAMPUS_CHAPTERS[0];

  return (
    <div class="tool-box">
      <div class="notebook-card" style="margin-bottom:1.5rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;">
          <div>
            <h3 style="margin-bottom:0.25rem;">樱羽学姐陪伴学习进度：{profile.completedChapters.length} / {CAMPUS_CHAPTERS.length} 章（{pct}%）</h3>
            <p style="margin:0;font-size:0.9rem;">
              {pct === 100
                ? '🎉 恭喜你完成全部十大校园课程，已解锁“机场学院毕业纪念徽章”！'
                : `建议下一课：第 ${nextChapter.id} 章 · ${nextChapter.chineseTitle}`}
            </p>
          </div>
          <div style="display:flex;gap:0.5rem;align-items:center;">
            {pct === 100 && <span class="badge badge-gold">🏅 学院毕业徽章</span>}
            <a href={nextChapter.primaryUrl} class="btn btn-primary btn-sm">继续学习 →</a>
          </div>
        </div>
        <div style="margin-top:0.85rem;height:10px;background:#F3E7EE;border-radius:999px;overflow:hidden;">
          <div style={`width:${pct}%;height:100%;background:var(--grad-rose-cta);transition:width 0.35s ease;`}></div>
        </div>
      </div>

      <div class="grid-2">
        {CAMPUS_CHAPTERS.map((ch) => {
          const done = profile.completedChapters.includes(ch.id);
          const bookmarked = profile.bookmarkedCourses.includes(ch.id);
          return (
            <div key={ch.id} class="academy-card" style={done ? 'border-color:#B9D9C8;background:#FBFDFC;' : ''}>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.4rem;">
                <span class="badge badge-sakura">第 {ch.id} 章 · {ch.englishTitle}</span>
                <div style="display:flex;gap:0.35rem;">
                  <button type="button" class="btn btn-sm btn-soft" onClick={() => toggleBookmark(ch.id)}>
                    {bookmarked ? '★ 已收藏' : '☆ 收藏'}
                  </button>
                  <button type="button" class={`btn btn-sm ${done ? 'btn-primary' : 'btn-secondary'}`} onClick={() => toggleComplete(ch.id)}>
                    {done ? '✓ 已学完' : '标记完成'}
                  </button>
                </div>
              </div>
              <h3><a href={ch.primaryUrl}>{ch.chineseTitle}</a></h3>
              <p style="font-size:0.88rem;margin-bottom:0.4rem;">{ch.purpose}</p>
              <small style="color:var(--text-muted);">对应关键词：{ch.keywordRange}</small>
            </div>
          );
        })}
      </div>
    </div>
  );
}
