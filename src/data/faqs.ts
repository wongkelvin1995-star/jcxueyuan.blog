export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  relatedUrl: string;
  relatedLabel: string;
}

export const HOMEPAGE_FAQS: FaqItem[] = [
  { id: 1, question: '机场是什么意思？', answer: '“机场”是中文网络社区对多节点代理服务商的俗称。因为早期主流代理客户端使用纸飞机图标，提供多地区节点和订阅下发服务的平台就被形象地称为“机场”。它本质上按套餐周期或流量提供网络转发服务。', relatedUrl: '/knowledge/airport-vs-vpn/', relatedLabel: '阅读：机场和VPN的区别' },
  { id: 2, question: '机场与VPN有什么区别？', answer: '传统 VPN 通常在系统网卡层建立全局加密通道，常用于企业内网或高校图书馆校外访问；而机场代理配合 Clash 等客户端支持“规则分流”，可以让国内网站与校园内网直连，只对需要的国际网站进行转发，更省流量也更灵活。', relatedUrl: '/knowledge/airport-vs-vpn/', relatedLabel: '查看详细对比' },
  { id: 3, question: '零基础用户应该从哪里开始学习？', answer: '建议遵循机场学院“先学会，再选择，最后才考虑购买”的顺序：先花 10 分钟了解节点、订阅与规则模式的概念，再用流量计算器估算自己每月所需流量，接着选好自己设备对应的客户端，最后再从低预算月付套餐开始试错。', relatedUrl: '/beginner/', relatedLabel: '进入新生入门路线' },
  { id: 4, question: '学生党每个月需要多少机场预算？', answer: '根据本站收录的 18 家真实品牌数据，当前主流月付入门套餐大多集中在 14.9 元至 25 元/月之间。如果只是轻度查文献、使用 AI 助手和浏览网页，每月预留 15–20 元预算就非常充足。', relatedUrl: '/student/budget/', relatedLabel: '打开学生预算规划器' },
  { id: 5, question: '10元以下机场值得购买吗？', answer: '需要严格区分“真实月付”与“年付折合月均”。在已核验的 18 家品牌中，目前没有 10 元/月以下的纯月付套餐（最低月付为唯兔云 14.9 元/月）；但有多家品牌提供 79–119 元/年的轻量年付方案（折合约 6.58–9.92 元/月）。新手首购仍建议先月付体验，确认稳定后再考虑年付。', relatedUrl: '/student/under-10/', relatedLabel: '查看10元以下核验专题' },
  { id: 6, question: '20元以内的机场应该怎么选？', answer: '20 元以内真实月付目前有唯兔云（14.9元/月）、无忧链接（19元/月）以及灵动云、暮光加速、U1S1、全球云、跨界（均为 20元/月）等已核验方案。选择时优先看自己设备是否支持、流量是否够用（一般 50–100GB/月）以及是否有清晰退款或工单渠道。', relatedUrl: '/student/under-20/', relatedLabel: '查看20元以内专区' },
  { id: 7, question: '第一次买机场需要注意什么？', answer: '牢记四不原则：第一，首购不直接买年付或两年付；第二，不轻信“永久免费”或“绝对不限速”宣传；第三，不在公开场合泄露自己的订阅链接；第四，看清套餐流量倍率与重置日期再下单。', relatedUrl: '/buying/checklist/', relatedLabel: '查看首购避坑清单' },
  { id: 8, question: '月付和年付套餐有什么区别？', answer: '月付单月支出略高，但试错成本极低，万一线路不合宿舍网络或服务商调整政策，下个月随时可换；年付折合月均更便宜，但存在长期预付风险。学生党建议先月付 1–2 个月，确认满意后再评估季付或年付。', relatedUrl: '/buying/monthly-vs-yearly/', relatedLabel: '月付 vs 年付对比' },
  { id: 9, question: '机场如何判断是否靠谱？', answer: '可以从五个维度观察：是否有公开清晰的套餐与流量规则说明、是否支持主流开源第三方客户端（无需强制安装闭源未知软件）、是否有明确客服工单渠道、是否避免夸大“全平台永久解锁”等绝对化宣传，以及价格是否处于合理区间。', relatedUrl: '/buying/reliability/', relatedLabel: '学习靠谱度判断标准' },
  { id: 10, question: '每月50GB流量够用吗？', answer: '如果每天主要用于查英文文献、使用 AI 工具、看代码文档和偶尔看 720P 教学视频，每月实际消耗通常在 15–35GB 左右，50GB（按 1x 倍率计算）完全够用。', relatedUrl: '/traffic/50gb-100gb/', relatedLabel: '查看 50GB vs 100GB 实算' },
  { id: 11, question: '每月100GB流量适合什么用户？', answer: '100GB/月适合经常观看 1080P 海外公开课（如 YouTube 学术频道、Coursera）、需要同步大量文献 PDF 或在电脑、手机、平板多设备同时使用的大学生。', relatedUrl: '/traffic/50gb-100gb/', relatedLabel: '使用流量计算器估算' },
  { id: 12, question: '机场流量倍率是什么意思？', answer: '流量倍率是节点扣费的乘数。例如使用标有“2x”的专线节点下载 1GB 文件，套餐内会扣除 2GB 流量；使用“1x”节点则按实际 1GB 扣除。看视频或下载前记得切到 1x 倍率节点。', relatedUrl: '/traffic/multiplier/', relatedLabel: '深入学习倍率规则' },
  { id: 13, question: '机场节点是什么意思？', answer: '节点指机场在各个国家或地区部署的可用接入服务器（如香港、日本、新加坡、美国节点）。每个节点通常对应不同的物理位置、传输线路与倍率。', relatedUrl: '/knowledge/node/', relatedLabel: '节点基础知识' },
  { id: 14, question: '订阅链接是什么？', answer: '订阅链接是一串包含你账号验证信息的 HTTPS 网址。把它复制到 Clash Verge Rev、Shadowrocket 等客户端中点击更新，就能自动下载所有节点和分流规则。', relatedUrl: '/knowledge/subscription/', relatedLabel: '订阅链接使用教程' },
  { id: 15, question: '系统代理与TUN模式有什么区别？', answer: '系统代理只接管浏览器等遵循系统设置的软件，无需管理员权限；TUN 模式会创建虚拟网卡，能接管命令行、桌面端独立 App 等全部流量，但占用略高且校园网认证前建议先关闭。', relatedUrl: '/knowledge/system-proxy-tun/', relatedLabel: '系统代理 vs TUN 详解' },
  { id: 16, question: 'Windows电脑应该如何选择客户端？', answer: 'Windows 10/11 学生党首选开源、界面现代且支持 Mihomo 内核的 Clash Verge Rev；如果你习惯轻量经典界面或需要精细调整核心参数，也可以选择老牌开源的 v2rayN。', relatedUrl: '/tutorials/desktop/windows-11/', relatedLabel: 'Windows 客户端教程' },
  { id: 17, question: 'Mac电脑需要注意哪些兼容问题？', answer: '购买或下载前要区分 Apple Silicon（M1/M2/M3/M4 芯片，arm64）与 Intel 芯片（x64）安装包；同时 macOS 首次运行开源软件若提示“无法验证开发者”，需在系统设置-隐私与安全性中手动允许，切勿使用来路不明的第三方打包软件。', relatedUrl: '/tutorials/desktop/macos/', relatedLabel: 'macOS 安装与配置指南' },
  { id: 18, question: '为什么电脑连接后网页打不开？', answer: '最常见原因有四点：1）未打开“系统代理”开关；2）客户端节点全部超时或订阅已到期；3）电脑系统时间与标准时间偏差过大；4）同时开启了多个代理软件或浏览器插件冲突。', relatedUrl: '/troubleshooting/connection/', relatedLabel: '进入智能故障排查' },
  { id: 19, question: '安卓手机如何选择正规客户端？', answer: '安卓推荐从 GitHub 官方发布页下载开源的 FlClash（界面直观、支持 Clash 订阅）或 v2rayNG（轻量稳定、支持分应用代理）。切勿在搜索引擎广告中下载不知名的修改版 APK。', relatedUrl: '/tutorials/mobile/android/', relatedLabel: '安卓客户端选择教程' },
  { id: 20, question: '苹果手机的应用支持情况如何判断？', answer: 'iPhone 与 iPad 上最通用的工具是 Shadowrocket（小火箭），由于国区 App Store 无法下载，需要自备海外区 Apple ID 购买。切勿使用陌生人提供的共享 Apple ID 登录 iCloud，以免设备被锁定。', relatedUrl: '/tutorials/mobile/iphone/', relatedLabel: 'iPhone 配置安全须知' },
  { id: 21, question: '手机与平板可以共用套餐吗？', answer: '绝大多数机场套餐都允许同一账号在 3–5 台甚至不限数量的自用设备上同时使用（部分品牌会在条款中限制同时在线 IP 数）。只要是本人自用手机、平板、笔记本，通常可以共用一份订阅。', relatedUrl: '/tutorials/mobile/ipad/', relatedLabel: 'iPad 与多设备共用指南' },
  { id: 22, question: '校园网一定可以使用机场吗？', answer: '不一定。不同高校校园网在认证方式（Portal/802.1X）、UDP 端口限制、防火墙策略与出口带宽上差异很大，没有任何品牌能够承诺在所有校园网上 100% 可用，必须以月付实测为准。', relatedUrl: '/campus-network/compatibility/', relatedLabel: '阅读校园网客观说明' },
  { id: 23, question: '宿舍WiFi速度慢应该检查什么？', answer: '先用直连模式测试本地宽带/校园网本身的速度是否正常：晚高峰宿舍多人同时看视频或下载会导致局域网信道拥堵；可尝试切换 5GHz WiFi、插网线，或先排查是否因为节点选了高负载地区。', relatedUrl: '/campus-network/slow-network/', relatedLabel: '宿舍网速慢排查' },
  { id: 24, question: '校园网登录出现异常怎么办？', answer: '如果连上宿舍 WiFi 后弹不出学号认证网页，请先彻底关闭代理软件与浏览器代理插件，切回本地直连并尝试访问学校官方认证 IP 或任意 HTTP 网址完成登录，登录成功后再开启客户端。', relatedUrl: '/campus-network/login/', relatedLabel: '校园网认证冲突排查' },
  { id: 25, question: '学生使用AI工具需要注意什么？', answer: '除了网络连通性与地区政策外，更应注意学术诚信（遵守学校关于 AI 辅助写作的引用规范）与账号安全（不要在不明第三方镜像站输入个人主账号密码或敏感科研数据）。', relatedUrl: '/study/chatgpt/', relatedLabel: 'AI 学习网络指南' },
  { id: 26, question: '如何寻找开放获取的英文文献？', answer: '推荐优先使用 arXiv、PubMed Central (PMC)、DOAJ、Google Scholar 开放全文链接以及各大学开放课程库（如 MIT OpenCourseWare），并善用学校图书馆提供的正版校外访问通道。', relatedUrl: '/study/academic-research/', relatedLabel: '英文文献检索指南' },
  { id: 27, question: '观看国际课程卡顿怎么办？', answer: '首先将视频清晰度从 4K/1080P60 适当调至 720P 或 1080P（省流量且缓冲快），其次在客户端切换至邻近地区且低抖动的 1x 节点，并避开宿舍晚间 21:00–23:30 的本地宽带高峰。', relatedUrl: '/study/video-learning/', relatedLabel: '公开课流畅播放技巧' },
  { id: 28, question: '订阅链接导入失败怎么办？', answer: '请先确认复制链接时前后没有多出空格或中文；其次，如果当前已经开着失效的旧代理，请先关闭系统代理再点击更新订阅；部分机场对特定客户端格式有要求，需确认选对了 Clash 还是通用订阅格式。', relatedUrl: '/troubleshooting/subscription-import/', relatedLabel: '订阅导入失败排查' },
  { id: 29, question: '节点显示超时如何排查？', answer: '全部节点超时请检查：1）本地网络是否能正常打开国内网页；2）设备系统时间是否自动同步；3）套餐是否到期或流量已耗尽。若仅个别节点超时，属于节点临时维护，切换同地区其他节点即可。', relatedUrl: '/troubleshooting/timeout/', relatedLabel: '节点超时排查流程' },
  { id: 30, question: '机场退款规则应该在哪里查看？', answer: '购买前应在服务商官网的“服务条款（TOS）”、“用户协议”或“常见问题”中查看退款说明。机场学院在每个品牌的独立档案页中均已整理并标注各品牌公开记录的退款政策与核验日期。', relatedUrl: '/buying/refund-policy/', relatedLabel: '查看退款规则解读' },
];
