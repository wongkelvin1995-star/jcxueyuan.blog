import { useState, useMemo } from 'preact/hooks';
import { AIRPORTS, type AirportBrand } from '../../data/airports';

type PlatformKey = 'windows' | 'macos' | 'android' | 'ios' | 'clash' | 'shadowrocket';

const PLATFORM_OPTIONS: { key: PlatformKey; label: string }[] = [
  { key: 'windows', label: 'Windows 10 / 11' },
  { key: 'macos', label: 'macOS (Mac电脑)' },
  { key: 'android', label: 'Android 安卓手机/平板' },
  { key: 'ios', label: 'iPhone / iPad (iOS)' },
  { key: 'clash', label: 'Clash Verge Rev / FlClash 订阅' },
  { key: 'shadowrocket', label: '小火箭 Shadowrocket' },
];

export default function DeviceCheckTool() {
  const [platform, setPlatform] = useState<PlatformKey>('windows');
  const [onlyThirdParty, setOnlyThirdParty] = useState(false);

  const filtered = useMemo(() => {
    return AIRPORTS.filter((b: AirportBrand) => {
      if (onlyThirdParty && !b.subscriptionPolicy.thirdPartySupported) return false;
      return true;
    });
  }, [onlyThirdParty]);

  return (
    <div class="tool-box">
      <div class="academy-card" style="margin-bottom:1.25rem;">
        <div style="display:flex;flex-wrap:wrap;gap:0.5rem;align-items:center;justify-content:space-between;">
          <div style="display:flex;flex-wrap:wrap;gap:0.45rem;">
            {PLATFORM_OPTIONS.map((opt) => (
              <button
                key={opt.key}
                type="button"
                class={`btn btn-sm ${platform === opt.key ? 'btn-primary' : 'btn-soft'}`}
                onClick={() => setPlatform(opt.key)}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <label style="display:flex;align-items:center;gap:0.45rem;font-size:0.88rem;font-weight:600;cursor:pointer;">
            <input type="checkbox" checked={onlyThirdParty} onChange={(e) => setOnlyThirdParty((e.target as HTMLInputElement).checked)} />
            仅看支持第三方开源客户端
          </label>
        </div>
      </div>

      <div class="table-scroll">
        <table class="academy-table">
          <thead>
            <tr>
              <th>品牌名称</th>
              <th>当前平台支持状态</th>
              <th>说明备注</th>
              <th>第三方订阅政策</th>
              <th>档案详情</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((b) => {
              const info = b.devices[platform];
              return (
                <tr>
                  <td><a href={`/airports/${b.slug}/`}><strong>{b.name}</strong></a></td>
                  <td>
                    <span class={`badge ${info.status === 'supported' ? 'badge-mint' : info.status === 'conditional' ? 'badge-gold' : 'badge-sakura'}`}>
                      {info.label}
                    </span>
                  </td>
                  <td style="font-size:0.85rem;">{info.note}</td>
                  <td style="font-size:0.85rem;">{b.subscriptionPolicy.summary}</td>
                  <td><a href={`/airports/${b.slug}/`} class="btn btn-sm btn-soft">查看</a></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
