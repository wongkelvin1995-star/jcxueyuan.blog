export interface SeoKeywordRecord {
  id: string; // '001' .. '100'
  keyword: string;
  intent: '导航与学习' | '学生选购' | '新手购买' | '流量计算' | '概念科普' | '电脑教程' | '手机教程' | '校园网络' | 'AI与学术' | '故障排查';
  targetUrl: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  cluster: string;
  priority: 'P0' | 'P1' | 'P2';
  status: '已发布' | '合并至专题';
  verificationStatus: '选题规划候选词（未验证搜索量）';
}

export const SEO_KEYWORDS: SeoKeywordRecord[] = [
  // 第01类：机场学院核心定位（001–010）
  { id: '001', keyword: '机场学院', intent: '导航与学习', targetUrl: '/', primaryKeyword: '机场学院', secondaryKeywords: ['Airport Academy', '樱羽学姐'], cluster: '新生入门学院', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '002', keyword: '学生党机场推荐', intent: '学生选购', targetUrl: '/', primaryKeyword: '学生党机场推荐', secondaryKeywords: ['学生低预算', '月付入门'], cluster: '新生入门学院', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '003', keyword: '新手机场推荐', intent: '学生选购', targetUrl: '/', primaryKeyword: '新手机场推荐', secondaryKeywords: ['新手友好', '零基础'], cluster: '新生入门学院', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '004', keyword: '大学生机场推荐', intent: '学生选购', targetUrl: '/student/', primaryKeyword: '大学生机场推荐', secondaryKeywords: ['高校学习', '宿舍网络'], cluster: '新生入门学院', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '005', keyword: '小白机场入门指南', intent: '导航与学习', targetUrl: '/beginner/', primaryKeyword: '小白机场入门指南', secondaryKeywords: ['零基础学习路线'], cluster: '新生入门学院', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '006', keyword: '学生科学上网入门', intent: '导航与学习', targetUrl: '/beginner/network-basics/', primaryKeyword: '学生科学上网入门', secondaryKeywords: ['基础网络原理'], cluster: '新生入门学院', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '007', keyword: '零基础机场使用教程', intent: '导航与学习', targetUrl: '/beginner/', primaryKeyword: '零基础机场使用教程', secondaryKeywords: ['入学第一课'], cluster: '新生入门学院', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '008', keyword: '机场新手学习指南', intent: '导航与学习', targetUrl: '/beginner/', primaryKeyword: '机场新手学习指南', secondaryKeywords: ['先学会再选择'], cluster: '新生入门学院', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '009', keyword: '新手梯子推荐', intent: '学生选购', targetUrl: '/beginner/selection/', primaryKeyword: '新手梯子推荐', secondaryKeywords: ['入门评价标准'], cluster: '新生入门学院', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '010', keyword: '学生党魔法上网指南', intent: '导航与学习', targetUrl: '/beginner/network-basics/', primaryKeyword: '学生党魔法上网指南', secondaryKeywords: ['合规学习网络'], cluster: '新生入门学院', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },

  // 第02类：学生低预算机场推荐（011–020）
  { id: '011', keyword: '学生党便宜机场推荐', intent: '学生选购', targetUrl: '/student/budget/', primaryKeyword: '学生党便宜机场推荐', secondaryKeywords: ['低预算筛选'], cluster: '学生低预算专区', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '012', keyword: '学生专用机场推荐', intent: '学生选购', targetUrl: '/student/', primaryKeyword: '学生专用机场推荐', secondaryKeywords: ['学生友好度'], cluster: '学生低预算专区', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '013', keyword: '适合大学生的梯子', intent: '学生选购', targetUrl: '/student/', primaryKeyword: '适合大学生的梯子', secondaryKeywords: ['大学生学习场景'], cluster: '学生低预算专区', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '014', keyword: '10元以下机场推荐', intent: '学生选购', targetUrl: '/student/under-10/', primaryKeyword: '10元以下机场推荐', secondaryKeywords: ['月付核验', '年付折合'], cluster: '学生低预算专区', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '015', keyword: '20元以内机场推荐', intent: '学生选购', targetUrl: '/student/under-20/', primaryKeyword: '20元以内机场推荐', secondaryKeywords: ['月付20元以内'], cluster: '学生低预算专区', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '016', keyword: '学生低价机场怎么选', intent: '学生选购', targetUrl: '/student/budget/', primaryKeyword: '学生低价机场怎么选', secondaryKeywords: ['避坑指南'], cluster: '学生低预算专区', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '017', keyword: '适合学生的月付机场', intent: '学生选购', targetUrl: '/student/monthly/', primaryKeyword: '适合学生的月付机场', secondaryKeywords: ['短周期试错'], cluster: '学生低预算专区', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '018', keyword: '学生党高性价比机场', intent: '学生选购', targetUrl: '/student/budget/', primaryKeyword: '学生党高性价比机场', secondaryKeywords: ['每GB成本'], cluster: '学生低预算专区', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '019', keyword: '预算有限怎么选机场', intent: '学生选购', targetUrl: '/student/budget/', primaryKeyword: '预算有限怎么选机场', secondaryKeywords: ['预算规划器'], cluster: '学生低预算专区', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '020', keyword: '学生机场套餐推荐', intent: '学生选购', targetUrl: '/student/plans/', primaryKeyword: '学生机场套餐推荐', secondaryKeywords: ['套餐对比'], cluster: '学生低预算专区', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },

  // 第03类：第一次购买与选购指南（021–030）
  { id: '021', keyword: '第一次买机场怎么选', intent: '新手购买', targetUrl: '/buying/', primaryKeyword: '第一次买机场怎么选', secondaryKeywords: ['首购流程'], cluster: '第一次购买指南', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '022', keyword: '新手怎么买机场订阅', intent: '新手购买', targetUrl: '/buying/subscription/', primaryKeyword: '新手怎么买机场订阅', secondaryKeywords: ['订阅获取'], cluster: '第一次购买指南', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '023', keyword: '学生第一次买梯子教程', intent: '新手购买', targetUrl: '/buying/', primaryKeyword: '学生第一次买梯子教程', secondaryKeywords: ['购买前检查'], cluster: '第一次购买指南', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '024', keyword: '机场月付和年付哪个好', intent: '新手购买', targetUrl: '/buying/monthly-vs-yearly/', primaryKeyword: '机场月付和年付哪个好', secondaryKeywords: ['长期预付风险'], cluster: '第一次购买指南', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '025', keyword: '新手买机场注意事项', intent: '新手购买', targetUrl: '/buying/checklist/', primaryKeyword: '新手买机场注意事项', secondaryKeywords: ['核对清单'], cluster: '第一次购买指南', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '026', keyword: '机场购买避坑教程', intent: '新手购买', targetUrl: '/buying/checklist/', primaryKeyword: '机场购买避坑教程', secondaryKeywords: ['虚假宣传识别'], cluster: '第一次购买指南', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '027', keyword: '怎么判断机场是否靠谱', intent: '新手购买', targetUrl: '/buying/reliability/', primaryKeyword: '怎么判断机场是否靠谱', secondaryKeywords: ['透明度核验'], cluster: '第一次购买指南', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '028', keyword: '机场试用和正式套餐区别', intent: '新手购买', targetUrl: '/buying/trial-vs-paid/', primaryKeyword: '机场试用和正式套餐区别', secondaryKeywords: ['短期体验'], cluster: '第一次购买指南', priority: 'P2', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '029', keyword: '学生买机场需要多少流量', intent: '流量计算', targetUrl: '/traffic/student/', primaryKeyword: '学生买机场需要多少流量', secondaryKeywords: ['流量估算'], cluster: '流量及套餐课堂', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '030', keyword: '新手适合买什么机场套餐', intent: '新手购买', targetUrl: '/buying/first-plan/', primaryKeyword: '新手适合买什么机场套餐', secondaryKeywords: ['入门档位'], cluster: '第一次购买指南', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },

  // 第04类：流量、套餐与费用学习（031–040）
  { id: '031', keyword: '学生机场流量怎么算', intent: '流量计算', targetUrl: '/traffic/student/', primaryKeyword: '学生机场流量怎么算', secondaryKeywords: ['流量数学'], cluster: '流量及套餐课堂', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '032', keyword: '每月50GB机场够用吗', intent: '流量计算', targetUrl: '/traffic/50gb-100gb/', primaryKeyword: '每月50GB机场够用吗', secondaryKeywords: ['轻度学习流量'], cluster: '流量及套餐课堂', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '033', keyword: '每月100GB机场够用吗', intent: '流量计算', targetUrl: '/traffic/50gb-100gb/', primaryKeyword: '每月100GB机场够用吗', secondaryKeywords: ['视频课程流量'], cluster: '流量及套餐课堂', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '034', keyword: '轻度用户机场流量推荐', intent: '流量计算', targetUrl: '/traffic/student/', primaryKeyword: '轻度用户机场流量推荐', secondaryKeywords: ['文献与AI'], cluster: '流量及套餐课堂', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '035', keyword: '机场套餐倍率是什么意思', intent: '概念科普', targetUrl: '/traffic/multiplier/', primaryKeyword: '机场套餐倍率是什么意思', secondaryKeywords: ['计费倍率'], cluster: '流量及套餐课堂', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '036', keyword: '机场流量重置是什么意思', intent: '概念科普', targetUrl: '/traffic/reset/', primaryKeyword: '机场流量重置是什么意思', secondaryKeywords: ['账单日重置'], cluster: '流量及套餐课堂', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '037', keyword: '按量付费机场适合学生吗', intent: '流量计算', targetUrl: '/traffic/pay-as-you-go/', primaryKeyword: '按量付费机场适合学生吗', secondaryKeywords: ['低频使用'], cluster: '流量及套餐课堂', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '038', keyword: '不限时流量包值得买吗', intent: '流量计算', targetUrl: '/traffic/non-expiring/', primaryKeyword: '不限时流量包值得买吗', secondaryKeywords: ['一次性流量包'], cluster: '流量及套餐课堂', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '039', keyword: '学生机场续费指南', intent: '新手购买', targetUrl: '/traffic/renewal/', primaryKeyword: '学生机场续费指南', secondaryKeywords: ['续费与换号'], cluster: '流量及套餐课堂', priority: 'P2', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '040', keyword: '机场流量超出后怎么办', intent: '故障排查', targetUrl: '/traffic/over-limit/', primaryKeyword: '机场流量超出后怎么办', secondaryKeywords: ['超额处理'], cluster: '流量及套餐课堂', priority: 'P2', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },

  // 第05类：机场基础知识课堂（041–050）
  { id: '041', keyword: '机场和VPN有什么区别', intent: '概念科普', targetUrl: '/knowledge/airport-vs-vpn/', primaryKeyword: '机场和VPN有什么区别', secondaryKeywords: ['代理与VPN'], cluster: '机场基础知识', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '042', keyword: '机场和梯子是一个意思吗', intent: '概念科普', targetUrl: '/knowledge/airport-vs-vpn/', primaryKeyword: '机场和梯子是一个意思吗', secondaryKeywords: ['术语辨析'], cluster: '机场基础知识', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '043', keyword: '机场订阅链接是什么', intent: '概念科普', targetUrl: '/knowledge/subscription/', primaryKeyword: '机场订阅链接是什么', secondaryKeywords: ['配置下发'], cluster: '机场基础知识', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '044', keyword: '机场节点是什么意思', intent: '概念科普', targetUrl: '/knowledge/node/', primaryKeyword: '机场节点是什么意思', secondaryKeywords: ['中转与落地'], cluster: '机场基础知识', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '045', keyword: '机场服务器地区怎么选', intent: '概念科普', targetUrl: '/knowledge/server-region/', primaryKeyword: '机场服务器地区怎么选', secondaryKeywords: ['香港日本美国'], cluster: '机场基础知识', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '046', keyword: '机场专线是什么意思', intent: '概念科普', targetUrl: '/knowledge/dedicated-line/', primaryKeyword: '机场专线是什么意思', secondaryKeywords: ['直连与中转'], cluster: '机场基础知识', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '047', keyword: 'IEPL和普通线路区别', intent: '概念科普', targetUrl: '/knowledge/dedicated-line/', primaryKeyword: 'IEPL和普通线路区别', secondaryKeywords: ['IPLC专线'], cluster: '机场基础知识', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '048', keyword: '系统代理和TUN模式区别', intent: '概念科普', targetUrl: '/knowledge/system-proxy-tun/', primaryKeyword: '系统代理和TUN模式区别', secondaryKeywords: ['虚拟网卡'], cluster: '机场基础知识', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '049', keyword: '规则模式和全局模式区别', intent: '概念科普', targetUrl: '/knowledge/proxy-modes/', primaryKeyword: '规则模式和全局模式区别', secondaryKeywords: ['分流规则'], cluster: '机场基础知识', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '050', keyword: '小白如何判断节点可用', intent: '概念科普', targetUrl: '/knowledge/node-availability/', primaryKeyword: '小白如何判断节点可用', secondaryKeywords: ['延迟与连通性'], cluster: '机场基础知识', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },

  // 第06类：电脑客户端入门（051–060）
  { id: '051', keyword: 'Windows 11机场新手教程', intent: '电脑教程', targetUrl: '/tutorials/desktop/windows-11/', primaryKeyword: 'Windows 11机场新手教程', secondaryKeywords: ['Win11配置'], cluster: '电脑客户端课堂', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '052', keyword: 'Windows 10机场配置步骤', intent: '电脑教程', targetUrl: '/tutorials/desktop/windows-10/', primaryKeyword: 'Windows 10机场配置步骤', secondaryKeywords: ['Win10教程'], cluster: '电脑客户端课堂', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '053', keyword: 'Mac电脑机场使用教程', intent: '电脑教程', targetUrl: '/tutorials/desktop/macos/', primaryKeyword: 'Mac电脑机场使用教程', secondaryKeywords: ['macOS配置'], cluster: '电脑客户端课堂', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '054', keyword: 'Clash Verge Rev新手入门', intent: '电脑教程', targetUrl: '/tutorials/desktop/clash-verge/', primaryKeyword: 'Clash Verge Rev新手入门', secondaryKeywords: ['开源客户端'], cluster: '电脑客户端课堂', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '055', keyword: 'v2rayN新手安装教程', intent: '电脑教程', targetUrl: '/tutorials/desktop/v2rayn/', primaryKeyword: 'v2rayN新手安装教程', secondaryKeywords: ['Windows客户端'], cluster: '电脑客户端课堂', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '056', keyword: '电脑端订阅链接导入教程', intent: '电脑教程', targetUrl: '/tutorials/desktop/subscription/', primaryKeyword: '电脑端订阅链接导入教程', secondaryKeywords: ['订阅导入'], cluster: '电脑客户端课堂', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '057', keyword: 'Windows节点切换教程', intent: '电脑教程', targetUrl: '/tutorials/desktop/windows-nodes/', primaryKeyword: 'Windows节点切换教程', secondaryKeywords: ['延迟测速'], cluster: '电脑客户端课堂', priority: 'P2', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '058', keyword: '电脑代理开关在哪里', intent: '电脑教程', targetUrl: '/tutorials/desktop/proxy-switch/', primaryKeyword: '电脑代理开关在哪里', secondaryKeywords: ['系统代理设置'], cluster: '电脑客户端课堂', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '059', keyword: 'Clash Verge规则模式设置', intent: '电脑教程', targetUrl: '/tutorials/desktop/clash-verge/', primaryKeyword: 'Clash Verge规则模式设置', secondaryKeywords: ['Rule模式'], cluster: '电脑客户端课堂', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '060', keyword: '电脑如何更新机场订阅', intent: '电脑教程', targetUrl: '/tutorials/desktop/subscription/', primaryKeyword: '电脑如何更新机场订阅', secondaryKeywords: ['刷新节点'], cluster: '电脑客户端课堂', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },

  // 第07类：手机与平板客户端教程（061–070）
  { id: '061', keyword: '安卓手机机场使用教程', intent: '手机教程', targetUrl: '/tutorials/mobile/android/', primaryKeyword: '安卓手机机场使用教程', secondaryKeywords: ['Android配置'], cluster: '手机与平板课堂', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '062', keyword: 'iPhone机场使用教程', intent: '手机教程', targetUrl: '/tutorials/mobile/iphone/', primaryKeyword: 'iPhone机场使用教程', secondaryKeywords: ['iOS配置'], cluster: '手机与平板课堂', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '063', keyword: 'iPad机场订阅配置', intent: '手机教程', targetUrl: '/tutorials/mobile/ipad/', primaryKeyword: 'iPad机场订阅配置', secondaryKeywords: ['iPadOS学习'], cluster: '手机与平板课堂', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '064', keyword: '小火箭Shadowrocket入门', intent: '手机教程', targetUrl: '/tutorials/mobile/shadowrocket/', primaryKeyword: '小火箭Shadowrocket入门', secondaryKeywords: ['iOS客户端'], cluster: '手机与平板课堂', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '065', keyword: '安卓FlClash使用教程', intent: '手机教程', targetUrl: '/tutorials/mobile/flclash/', primaryKeyword: '安卓FlClash使用教程', secondaryKeywords: ['FlClash配置'], cluster: '手机与平板课堂', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '066', keyword: 'v2rayNG订阅导入教程', intent: '手机教程', targetUrl: '/tutorials/mobile/v2rayng/', primaryKeyword: 'v2rayNG订阅导入教程', secondaryKeywords: ['安卓v2rayNG'], cluster: '手机与平板课堂', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '067', keyword: '苹果手机怎么添加机场节点', intent: '手机教程', targetUrl: '/tutorials/mobile/iphone/', primaryKeyword: '苹果手机怎么添加机场节点', secondaryKeywords: ['扫码导入'], cluster: '手机与平板课堂', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '068', keyword: '手机机场节点切换方法', intent: '手机教程', targetUrl: '/tutorials/mobile/nodes/', primaryKeyword: '手机机场节点切换方法', secondaryKeywords: ['移动端切换'], cluster: '手机与平板课堂', priority: 'P2', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '069', keyword: '手机代理软件怎么选', intent: '手机教程', targetUrl: '/tutorials/mobile/client-selection/', primaryKeyword: '手机代理软件怎么选', secondaryKeywords: ['客户端对比'], cluster: '手机与平板课堂', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '070', keyword: '手机热点与电脑代理区别', intent: '手机教程', targetUrl: '/tutorials/mobile/hotspot/', primaryKeyword: '手机热点与电脑代理区别', secondaryKeywords: ['共享网络'], cluster: '手机与平板课堂', priority: 'P2', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },

  // 第08类：校园网与宿舍网络知识（071–080）
  { id: '071', keyword: '校园网机场能不能用', intent: '校园网络', targetUrl: '/campus-network/compatibility/', primaryKeyword: '校园网机场能不能用', secondaryKeywords: ['校园网客观说明'], cluster: '校园网络课堂', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '072', keyword: '校园网代理连接失败怎么办', intent: '校园网络', targetUrl: '/campus-network/connection/', primaryKeyword: '校园网代理连接失败怎么办', secondaryKeywords: ['常规排查'], cluster: '校园网络课堂', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '073', keyword: '宿舍WiFi和手机流量差异', intent: '校园网络', targetUrl: '/campus-network/wifi-vs-mobile/', primaryKeyword: '宿舍WiFi和手机流量差异', secondaryKeywords: ['网络环境对比'], cluster: '校园网络课堂', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '074', keyword: '校园网DNS错误怎么排查', intent: '校园网络', targetUrl: '/campus-network/dns/', primaryKeyword: '校园网DNS错误怎么排查', secondaryKeywords: ['DNS解析'], cluster: '校园网络课堂', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '075', keyword: '学生宿舍网络慢怎么办', intent: '校园网络', targetUrl: '/campus-network/slow-network/', primaryKeyword: '学生宿舍网络慢怎么办', secondaryKeywords: ['晚高峰拥堵'], cluster: '校园网络课堂', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '076', keyword: '校园网和家庭宽带有什么不同', intent: '校园网络', targetUrl: '/campus-network/network-types/', primaryKeyword: '校园网和家庭宽带有什么不同', secondaryKeywords: ['NAT与认证'], cluster: '校园网络课堂', priority: 'P2', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '077', keyword: '校园网使用代理需要注意什么', intent: '校园网络', targetUrl: '/campus-network/safety/', primaryKeyword: '校园网使用代理需要注意什么', secondaryKeywords: ['网络规范'], cluster: '校园网络课堂', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '078', keyword: '大学校园网络安全须知', intent: '校园网络', targetUrl: '/campus-network/safety/', primaryKeyword: '大学校园网络安全须知', secondaryKeywords: ['账号隐私'], cluster: '校园网络课堂', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '079', keyword: '校园网限制常见原因', intent: '校园网络', targetUrl: '/campus-network/compatibility/', primaryKeyword: '校园网限制常见原因', secondaryKeywords: ['端口与认证'], cluster: '校园网络课堂', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '080', keyword: '校园网登录与代理冲突排查', intent: '校园网络', targetUrl: '/campus-network/login/', primaryKeyword: '校园网登录与代理冲突排查', secondaryKeywords: ['Portal认证页'], cluster: '校园网络课堂', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },

  // 第09类：AI学习与海外课程场景（081–090）
  { id: '081', keyword: '学生查英文文献网络准备', intent: 'AI与学术', targetUrl: '/study/academic-research/', primaryKeyword: '学生查英文文献网络准备', secondaryKeywords: ['开放获取文献'], cluster: 'AI及国际学习课堂', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '082', keyword: 'ChatGPT学生使用网络指南', intent: 'AI与学术', targetUrl: '/study/chatgpt/', primaryKeyword: 'ChatGPT学生使用网络指南', secondaryKeywords: ['地区与政策'], cluster: 'AI及国际学习课堂', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '083', keyword: '大学生使用Claude网络问题', intent: 'AI与学术', targetUrl: '/study/claude/', primaryKeyword: '大学生使用Claude网络问题', secondaryKeywords: ['合规访问'], cluster: 'AI及国际学习课堂', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '084', keyword: 'Gemini学生使用注意事项', intent: 'AI与学术', targetUrl: '/study/gemini/', primaryKeyword: 'Gemini学生使用注意事项', secondaryKeywords: ['Google AI'], cluster: 'AI及国际学习课堂', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '085', keyword: '海外公开课程网络访问教程', intent: 'AI与学术', targetUrl: '/study/open-courses/', primaryKeyword: '海外公开课程网络访问教程', secondaryKeywords: ['MIT OCW', 'Coursera'], cluster: 'AI及国际学习课堂', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '086', keyword: '学生观看YouTube课程网络优化', intent: 'AI与学术', targetUrl: '/study/video-learning/', primaryKeyword: '学生观看YouTube课程网络优化', secondaryKeywords: ['清晰度与流量'], cluster: 'AI及国际学习课堂', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '087', keyword: '访问学术网站出现地区限制怎么办', intent: 'AI与学术', targetUrl: '/study/academic-research/', primaryKeyword: '访问学术网站出现地区限制怎么办', secondaryKeywords: ['图书馆OA资源'], cluster: 'AI及国际学习课堂', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '088', keyword: '线上国际课程视频卡顿怎么办', intent: 'AI与学术', targetUrl: '/study/video-learning/', primaryKeyword: '线上国际课程视频卡顿怎么办', secondaryKeywords: ['视频缓冲排查'], cluster: 'AI及国际学习课堂', priority: 'P2', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '089', keyword: '留学生跨国学习网络方案', intent: 'AI与学术', targetUrl: '/study/international-students/', primaryKeyword: '留学生跨国学习网络方案', secondaryKeywords: ['多地区学习'], cluster: 'AI及国际学习课堂', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '090', keyword: '学生日常学习需要多少网络流量', intent: '流量计算', targetUrl: '/traffic/student/', primaryKeyword: '学生日常学习需要多少网络流量', secondaryKeywords: ['学习流量表'], cluster: '流量及套餐课堂', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },

  // 第10类：新手故障排查FAQ（091–100）
  { id: '091', keyword: '机场连接不上怎么办新手', intent: '故障排查', targetUrl: '/troubleshooting/connection/', primaryKeyword: '机场连接不上怎么办新手', secondaryKeywords: ['基础排查'], cluster: '新手故障答疑课堂', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '092', keyword: '订阅链接导入失败怎么办', intent: '故障排查', targetUrl: '/troubleshooting/subscription-import/', primaryKeyword: '订阅链接导入失败怎么办', secondaryKeywords: ['格式与网络'], cluster: '新手故障答疑课堂', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '093', keyword: 'Clash配置文件为空怎么办', intent: '故障排查', targetUrl: '/troubleshooting/empty-config/', primaryKeyword: 'Clash配置文件为空怎么办', secondaryKeywords: ['YAML解析'], cluster: '新手故障答疑课堂', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '094', keyword: '节点显示超时如何排查', intent: '故障排查', targetUrl: '/troubleshooting/timeout/', primaryKeyword: '节点显示超时如何排查', secondaryKeywords: ['Timeout排查'], cluster: '新手故障答疑课堂', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '095', keyword: '手机连接后网页打不开怎么办', intent: '故障排查', targetUrl: '/troubleshooting/mobile-no-internet/', primaryKeyword: '手机连接后网页打不开怎么办', secondaryKeywords: ['移动端断网'], cluster: '新手故障答疑课堂', priority: 'P0', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '096', keyword: '机场订阅更新失败怎么办', intent: '故障排查', targetUrl: '/troubleshooting/subscription-update/', primaryKeyword: '机场订阅更新失败怎么办', secondaryKeywords: ['关闭代理更新'], cluster: '新手故障答疑课堂', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '097', keyword: '切换网络后代理失效怎么办', intent: '故障排查', targetUrl: '/troubleshooting/network-switch/', primaryKeyword: '切换网络后代理失效怎么办', secondaryKeywords: ['WiFi切4G'], cluster: '新手故障答疑课堂', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '098', keyword: '机场突然变慢怎么办', intent: '故障排查', targetUrl: '/troubleshooting/slow-connection/', primaryKeyword: '机场突然变慢怎么办', secondaryKeywords: ['节点拥堵'], cluster: '新手故障答疑课堂', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '099', keyword: '小白如何联系机场客服', intent: '故障排查', targetUrl: '/troubleshooting/customer-service/', primaryKeyword: '小白如何联系机场客服', secondaryKeywords: ['工单模板'], cluster: '新手故障答疑课堂', priority: 'P2', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
  { id: '100', keyword: '机场退款规则怎么看', intent: '新手购买', targetUrl: '/buying/refund-policy/', primaryKeyword: '机场退款规则怎么看', secondaryKeywords: ['退款条款'], cluster: '第一次购买指南', priority: 'P1', status: '已发布', verificationStatus: '选题规划候选词（未验证搜索量）' },
];
