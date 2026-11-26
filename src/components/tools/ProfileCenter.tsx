import { useState, useEffect } from 'preact/hooks';
import {
  loadProfile,
  saveProfile,
  clearProfile,
  DEFAULT_PROFILE,
  type AcademyProfileState,
} from '../../utils/storage';
import { CAMPUS_CHAPTERS } from '../../data/chapters';

export default function ProfileCenter() {
  const [profile, setProfile] = useState<AcademyProfileState>(DEFAULT_PROFILE);
  const [noteInput, setNoteInput] = useState('');
  const [notice, setNotice] = useState('');

  useEffect(() => {
    setProfile(loadProfile());
  }, []);

  const addNote = (e: Event) => {
    e.preventDefault();
    if (!noteInput.trim()) return;
    const next: AcademyProfileState = {
      ...profile,
      notes: [
        { id: String(Date.now()), text: noteInput.trim(), createdAt: new Date().toLocaleDateString('zh-CN') },
        ...profile.notes,
      ],
    };
    setProfile(next);
    saveProfile(next);
    setNoteInput('');
  };

  const deleteNote = (id: string) => {
    const next = { ...profile, notes: profile.notes.filter((n) => n.id !== id) };
    setProfile(next);
    saveProfile(next);
  };

  const toggleSetting = (key: 'largeFont' | 'reduceMotion') => {
    const next: AcademyProfileState = {
      ...profile,
      settings: {
        ...profile.settings,
        [key]: !profile.settings[key],
      },
    };
    setProfile(next);
    saveProfile(next);
  };

  const handleClear = () => {
    clearProfile();
    setProfile(DEFAULT_PROFILE);
    setNotice('已清除全部浏览器本地学习数据！');
    setTimeout(() => setNotice(''), 3000);
  };

  const pct = Math.round((profile.completedChapters.length / CAMPUS_CHAPTERS.length) * 100);

  return (
    <div class="tool-box">
      <div class="notebook-card" style="margin-bottom:1.5rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;">
          <div>
            <span class="badge badge-sakura">纯本地存储 · 无需注册登录</span>
            <h2 style="margin-top:0.4rem;margin-bottom:0.25rem;">我的学院 · 个人学习中心</h2>
            <p style="margin:0;font-size:0.9rem;">
              所有学习进度、笔记、收藏、预算与流量记录均保存在你的当前浏览器 `localStorage` 中，不上传任何服务器。
            </p>
          </div>
          <button type="button" class="btn btn-secondary btn-sm" onClick={handleClear}>
            🗑 清除本地数据
          </button>
        </div>
        {notice && <p style="color:#256445;font-weight:600;margin-top:0.6rem;margin-bottom:0;">{notice}</p>}
      </div>

      <div class="grid-3" style="margin-bottom:1.5rem;">
        <div class="academy-card">
          <h3>📚 课程学习进度</h3>
          <p style="font-size:1.5rem;font-weight:800;color:var(--rose-deep);margin-bottom:0.25rem;">{pct}%</p>
          <p style="font-size:0.86rem;">已完成 {profile.completedChapters.length} / {CAMPUS_CHAPTERS.length} 章 · 收藏课程 {profile.bookmarkedCourses.length} 门</p>
          <a href="/tools/learning-path/" class="btn btn-sm btn-soft">管理学习路线 →</a>
        </div>
        <div class="academy-card">
          <h3>📝 入学测试最高分</h3>
          <p style="font-size:1.5rem;font-weight:800;color:var(--rose-deep);margin-bottom:0.25rem;">
            {profile.quizBestScore !== null ? `${profile.quizBestScore} 分` : '尚未测试'}
          </p>
          <p style="font-size:0.86rem;">检验你对倍率、分流、订阅安全与月付试错的掌握程度。</p>
          <a href="/quiz/" class="btn btn-sm btn-soft">前往知识测试 →</a>
        </div>
        <div class="academy-card">
          <h3>⚙️ 阅读舒适度设置</h3>
          <div style="display:flex;flex-direction:column;gap:0.5rem;margin-top:0.5rem;">
            <label style="display:flex;align-items:center;justify-content:space-between;cursor:pointer;">
              <span>大号护眼字号</span>
              <input type="checkbox" checked={profile.settings.largeFont} onChange={() => toggleSetting('largeFont')} />
            </label>
            <label style="display:flex;align-items:center;justify-content:space-between;cursor:pointer;">
              <span>减弱樱花与背景动效</span>
              <input type="checkbox" checked={profile.settings.reduceMotion} onChange={() => toggleSetting('reduceMotion')} />
            </label>
          </div>
        </div>
      </div>

      <div class="grid-2">
        <div class="academy-card">
          <h3>✏️ 我的学习笔记</h3>
          <form onSubmit={addNote} style="display:flex;gap:0.5rem;margin-bottom:1rem;">
            <input
              type="text"
              class="tool-input"
              value={noteInput}
              onInput={(e) => setNoteInput((e.target as HTMLInputElement).value)}
              placeholder="记录一条学习备忘（如：宿舍选1x节点、月付预算19元）…"
            />
            <button type="submit" class="btn btn-primary btn-sm" style="white-space:nowrap;">添加</button>
          </form>
          {profile.notes.length === 0 ? (
            <p style="font-size:0.88rem;color:var(--text-muted);">暂无学习笔记。</p>
          ) : (
            <ul style="list-style:none;padding:0;">
              {profile.notes.map((n) => (
                <li key={n.id} style="display:flex;justify-content:space-between;align-items:center;padding:0.5rem 0;border-bottom:1px solid var(--border-subtle);">
                  <span>{n.text} <small style="color:var(--text-muted);">({n.createdAt})</small></span>
                  <button type="button" class="btn btn-sm btn-soft" onClick={() => deleteNote(n.id)}>删</button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div class="academy-card">
          <h3>📊 预算与流量计算记录</h3>
          <h4 style="font-size:0.92rem;margin-top:0.5rem;">预算保存记录（{profile.budgetRecords.length}）</h4>
          {profile.budgetRecords.length === 0 ? (
            <p style="font-size:0.85rem;color:var(--text-muted);">暂无预算记录，<a href="/tools/student-budget/">去算一算</a>。</p>
          ) : (
            <ul style="font-size:0.86rem;">
              {profile.budgetRecords.map((r, i) => (
                <li key={i}>月预算 ¥{r.monthlyBudget} × {r.months}个月 = 阶段总计 ¥{r.total}（{r.date}）</li>
              ))}
            </ul>
          )}

          <h4 style="font-size:0.92rem;margin-top:0.75rem;">流量计算记录（{profile.trafficRecords.length}）</h4>
          {profile.trafficRecords.length === 0 ? (
            <p style="font-size:0.85rem;color:var(--text-muted);">暂无流量记录，<a href="/tools/traffic-calculator/">去估算流量</a>。</p>
          ) : (
            <ul style="font-size:0.86rem;">
              {profile.trafficRecords.map((r, i) => (
                <li key={i}>实际 {r.estimatedGB}GB × {r.multiplier}x = 扣费 {r.billedGB}GB/月（{r.date}）</li>
              ))}
            </ul>
          )}

          <h4 style="font-size:0.92rem;margin-top:0.75rem;">收藏品牌（{profile.favoriteBrands.length}）</h4>
          {profile.favoriteBrands.length === 0 ? (
            <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:0;">在品牌档案页点击“收藏品牌”后会显示在这里。</p>
          ) : (
            <div style="display:flex;flex-wrap:wrap;gap:0.4rem;">
              {profile.favoriteBrands.map((b) => (
                <a key={b.slug} href={`/airports/${b.slug}/`} class="badge badge-sakura">{b.name}</a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
