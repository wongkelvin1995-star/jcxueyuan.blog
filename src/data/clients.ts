export interface ClientSoftware {
  id: string;
  name: string;
  platforms: string[];
  kernel: string;
  officialRepo: string;
  license: string;
  verifiedVersionNote: string;
  verifiedDate: string;
  difficulty: '新手友好' | '中等' | '需注意地区账号';
  summary: string;
  tutorialUrl: string;
  safetyNote: string;
}

export const CLIENT_SOFTWARES: ClientSoftware[] = [
  {
    id: 'clash-verge-rev',
    name: 'Clash Verge Rev',
    platforms: ['Windows 10/11', 'macOS (Intel / Apple Silicon)', 'Linux'],
    kernel: 'Mihomo (Clash.Meta)',
    officialRepo: 'https://github.com/clash-verge-rev/clash-verge-rev',
    license: 'GPL-3.0 开源软件',
    verifiedVersionNote: 'v2.x 系列（以官方 GitHub Releases 最新稳定版为准）',
    verifiedDate: '2026-11-26',
    difficulty: '新手友好',
    summary: '目前电脑端最受学生欢迎的现代开源客户端，支持中文界面、规则分流、TUN 虚拟网卡与快捷订阅更新。',
    tutorialUrl: '/tutorials/desktop/clash-verge/',
    safetyNote: '请仅从 GitHub 官方 Releases 页面下载安装包，警惕搜索引擎广告中的仿冒捆绑站。',
  },
  {
    id: 'v2rayn',
    name: 'v2rayN',
    platforms: ['Windows 10/11', 'Linux', 'macOS (社区构建)'],
    kernel: 'Xray-core / sing-box / Mihomo',
    officialRepo: 'https://github.com/2dust/v2rayN',
    license: 'GPL-3.0 开源软件',
    verifiedVersionNote: 'v7.x 系列（以官方 GitHub Releases 为准）',
    verifiedDate: '2026-11-26',
    difficulty: '中等',
    summary: 'Windows 平台老牌开源客户端，协议覆盖全面，适合习惯直观表格视图与多内核切换的同学。',
    tutorialUrl: '/tutorials/desktop/v2rayn/',
    safetyNote: '解压后建议放置于纯英文路径目录，部分安全软件可能对代理内核误报，请核对官方 SHA256 校验值。',
  },
  {
    id: 'shadowrocket',
    name: 'Shadowrocket (小火箭)',
    platforms: ['iPhone (iOS)', 'iPad (iPadOS)', 'macOS (Apple Silicon)'],
    kernel: 'Shadowrocket 闭源商用内核',
    officialRepo: 'https://apps.apple.com/us/app/shadowrocket/id932747118',
    license: 'App Store 付费软件（约 $2.99）',
    verifiedVersionNote: 'v2.2.x（以海外区 App Store 商店页面为准）',
    verifiedDate: '2026-11-26',
    difficulty: '需注意地区账号',
    summary: 'iOS 与 iPadOS 生态兼容性最广的经典工具，支持绝大多数机场订阅格式与扫码导入。',
    tutorialUrl: '/tutorials/mobile/shadowrocket/',
    safetyNote: '严禁在设备“设置-iCloud”中登录来源不明的共享 Apple ID，防止远程锁机与相册数据泄露。',
  },
  {
    id: 'flclash',
    name: 'FlClash',
    platforms: ['Android', 'Windows', 'macOS', 'Linux'],
    kernel: 'Mihomo (Clash.Meta)',
    officialRepo: 'https://github.com/chen08209/FlClash',
    license: 'GPL-3.0 开源软件',
    verifiedVersionNote: 'v0.8.x（以官方 GitHub Releases 为准）',
    verifiedDate: '2026-11-26',
    difficulty: '新手友好',
    summary: '基于 Flutter 构建的轻量跨平台客户端，在安卓手机与平板上界面简洁，适合零基础用户快速上手。',
    tutorialUrl: '/tutorials/mobile/flclash/',
    safetyNote: '仅从官方 GitHub 下载对应 CPU 架构（如 arm64-v8a）的 APK，并在系统电池设置中允许后台运行。',
  },
  {
    id: 'v2rayng',
    name: 'v2rayNG',
    platforms: ['Android'],
    kernel: 'Xray-core / libv2ray',
    officialRepo: 'https://github.com/2dust/v2rayNG',
    license: 'GPL-3.0 开源软件',
    verifiedVersionNote: 'v1.9.x（以官方 GitHub Releases / Google Play 为准）',
    verifiedDate: '2026-11-26',
    difficulty: '中等',
    summary: '安卓端历史悠久、稳定性极佳的开源客户端，支持分应用代理，可精确控制哪些 App 走节点。',
    tutorialUrl: '/tutorials/mobile/v2rayng/',
    safetyNote: '部分机场提供的“Clash 专用订阅”在 v2rayNG 中需改用通用/V2Ray 订阅链接导入。',
  },
];
