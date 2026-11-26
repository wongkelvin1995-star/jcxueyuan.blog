import { useState } from 'preact/hooks';

const SOLUTIONS: Record<string, { title: string; steps: string[]; warning: string; articleUrl: string }> = {
  'connect-fail': {
    title: '网络连接失败 / 无法打开任何外网',
    steps: [
      '先关闭代理开关，确认当前设备用本地直连能正常打开百度或学校官网。',
      '检查套餐是否仍在有效期内，且剩余流量大于 0。',
      '核对电脑或手机系统时间是否设为“自动同步”，时间误差超过 90 秒会导致 VMess 等节点握手失败。',
      '确认客户端内的“系统代理”或手机 VPN 总开关已开启，且没有同时运行两个代理软件。',
    ],
    warning: '如果正处于校园网环境中，请确认已完成学号 Portal 认证。',
    articleUrl: '/troubleshooting/connection/',
  },
  'import-fail': {
    title: '订阅链接导入失败',
    steps: [
      '先关闭当前已开启的系统代理或 VPN，再重新点击导入或更新订阅。',
      '检查粘贴的订阅地址前后是否多出了空格或换行符。',
      '确认你复制的格式与客户端匹配（Clash Verge Rev / FlClash 需用 Clash 格式，v2rayNG 需用通用格式）。',
      '若官网近期更换了订阅域名，请重新登录机场用户中心复制最新订阅地址。',
    ],
    warning: '切勿将个人订阅链接直接粘贴到公共群聊或陌生在线转换网站！',
    articleUrl: '/troubleshooting/subscription-import/',
  },
  'empty-config': {
    title: 'Clash 配置文件为空 / 节点列表空白',
    steps: [
      '登录机场后台确认账号内已有已付款且生效中的套餐（未付款订单无法下发节点）。',
      '在用户中心选择“Clash 专用订阅”链接或点击“一键导入 Clash”。',
      '检查电脑端 Clash Verge Rev 是否为最新开源版本（已支持 Mihomo 内核协议）。',
    ],
    warning: '不要使用已停止维护多年的老旧 Clash for Windows 版本。',
    articleUrl: '/troubleshooting/empty-config/',
  },
  'timeout': {
    title: '节点全部显示超时 (Timeout)',
    steps: [
      '在客户端点击“更新订阅”，排除机场后台刚刚更换了节点 IP 或端口的情况。',
      '检查系统时间与标准北京时间是否一致。',
      '尝试切换“宿舍 WiFi”与“手机移动热点”对比测试，确认是否是当前局域网或校园网限制了特定协议（如 UDP）。',
    ],
    warning: '本工具运行于本地浏览器，未连接你的真实网络，以上步骤需由你在设备端逐项核对。',
    articleUrl: '/troubleshooting/timeout/',
  },
  'mobile-no-net': {
    title: '手机连接后网页打不开',
    steps: [
      '打开节点列表，确认当前选中的不是“提示过期/剩余流量”文字信息行，而是一个真实的地区节点。',
      '将路由模式设为“配置（Config）”或“规则（Rule）”，然后执行一次真连接测速。',
      '检查手机系统电池优化，允许客户端后台运行并授予网络权限。',
    ],
    warning: 'iPhone 用户切勿使用来源不明的共享 Apple ID 登录 iCloud。',
    articleUrl: '/troubleshooting/mobile-no-internet/',
  },
  'campus-conflict': {
    title: '校园网登录冲突 / 弹不出认证页面',
    steps: [
      '先彻底关闭代理客户端，并在系统网络设置中确认“使用代理服务器”已关闭。',
      '在浏览器手动输入学校官方认证页面地址（使用 http:// 开头）完成学号密码登录。',
      '确认校园网已成功联网后，再重新打开代理客户端。',
    ],
    warning: '机场学院不提供绕过学校网络管理或安全认证的任何方法。',
    articleUrl: '/campus-network/login/',
  },
  'slow-speed': {
    title: '网速突然变慢 / 视频卡顿',
    steps: [
      '检查是否误切到了“全局模式（Global）”，请改回“规则模式（Rule）”。',
      '查看当前节点名称是否带有高倍率或处于热门 01 号节点，尝试切换同地区 02/03 备用节点。',
      '将视频清晰度调至 720P 或 1080P，并检查本地是否正在下载大文件或处于宿舍晚高峰。',
    ],
    warning: '宿舍 2.4GHz WiFi 干扰较大时，建议改连 5GHz WiFi 或网线。',
    articleUrl: '/troubleshooting/slow-connection/',
  },
};

export default function TroubleshooterTool() {
  const [os, setOs] = useState('Windows 11');
  const [client, setClient] = useState('Clash Verge Rev');
  const [network, setNetwork] = useState('高校校园网 / 宿舍WiFi');
  const [issue, setIssue] = useState('connect-fail');

  const current = SOLUTIONS[issue] || SOLUTIONS['connect-fail'];

  return (
    <div class="tool-box academy-card">
      <div class="grid-2">
        <div>
          <label class="tool-label">
            1. 你的设备与操作系统：
            <select class="tool-select" value={os} onChange={(e) => setOs((e.target as HTMLSelectElement).value)}>
              <option>Windows 11</option>
              <option>Windows 10</option>
              <option>macOS (Apple Silicon / Intel)</option>
              <option>Android 安卓手机/平板</option>
              <option>iPhone / iPad (iOS)</option>
            </select>
          </label>
          <label class="tool-label">
            2. 使用的客户端：
            <select class="tool-select" value={client} onChange={(e) => setClient((e.target as HTMLSelectElement).value)}>
              <option>Clash Verge Rev</option>
              <option>v2rayN</option>
              <option>Shadowrocket (小火箭)</option>
              <option>FlClash</option>
              <option>v2rayNG</option>
            </select>
          </label>
          <label class="tool-label">
            3. 当前网络环境：
            <select class="tool-select" value={network} onChange={(e) => setNetwork((e.target as HTMLSelectElement).value)}>
              <option>高校校园网 / 宿舍WiFi</option>
              <option>家庭宽带</option>
              <option>手机 4G / 5G 移动流量</option>
              <option>图书馆 / 公共WiFi</option>
            </select>
          </label>
          <label class="tool-label">
            4. 遇到的主要问题：
            <select class="tool-select" value={issue} onChange={(e) => setIssue((e.target as HTMLSelectElement).value)}>
              <option value="connect-fail">网络连接失败 / 无法打开网页</option>
              <option value="import-fail">订阅链接导入失败</option>
              <option value="empty-config">Clash 配置文件为空</option>
              <option value="timeout">节点全部显示超时 (Timeout)</option>
              <option value="mobile-no-net">手机连接后网页打不开</option>
              <option value="campus-conflict">校园网登录与代理冲突</option>
              <option value="slow-speed">网络速度突然变慢 / 卡顿</option>
            </select>
          </label>
        </div>

        <div class="notebook-card">
          <div class="badge badge-sakura" style="margin-bottom:0.5rem;">
            诊断环境：{os} · {client} · {network}
          </div>
          <h3 style="margin-top:0;">{current.title}</h3>
          <ol>
            {current.steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
          <p style="font-size:0.86rem;background:#FFF3E8;padding:0.55rem 0.8rem;border-radius:8px;margin-bottom:0.75rem;">
            <strong>安全提示：</strong>{current.warning}（本站绝不收集你的订阅链接、账号或密码。）
          </p>
          <a href={current.articleUrl} class="btn btn-sm btn-primary">阅读完整图文排查指南 →</a>
        </div>
      </div>
    </div>
  );
}
