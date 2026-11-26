import type { AcademyArticle } from './articles';

export const ARTICLES_PART_1: AcademyArticle[] = [
  // Chapter 1: Beginner
  {
    slug: 'beginner/network-basics',
    url: '/beginner/network-basics/',
    categorySlug: 'beginner',
    categoryName: '新生入门',
    chapterId: 1,
    template: 'B',
    keywordIds: ['006', '010'],
    title: '学生科学上网入门：零基础理解网络访问原理与合规学习准备',
    seoTitle: '学生科学上网入门与基础网络知识｜机场学院',
    description: '面向大学生与零基础新生的网络基础知识课，讲清本地网络、DNS、代理客户端与合规学术访问的底层逻辑。',
    readTime: '6 分钟',
    updatedAt: '2026-11-26',
    senpaiTip: '刚入学的同学最容易被各种行话吓到。其实你只需要记住“本地设备 → 客户端规则分流 → 远端节点”这一条主线就够了。',
    sections: [
      {
        heading: '一、为什么查英文文献和海外公开课需要了解网络工具',
        paragraphs: [
          '进入大学后，很多专业课程需要查阅国际期刊、GitHub 开源代码仓库或海外大学开放课程视频。由于跨境路由拥堵、DNS 解析异常或特定平台地区策略，直接访问经常出现加载缓慢或超时的情况。',
          '因此，理解基本的网络转发机制，并学会区分学校官方提供的校外学术 VPN 与个人使用的代理客户端，是每一位理工与人文社科同学都能用到的基础数字素养。',
        ],
        bullets: [
          '高校图书馆通常提供免费的官方校外访问系统（如 WebVPN 或 SSL VPN），查知网、IEEE、Springer 优先使用学校通道。',
          '开源代码托管、文档站点与国际公开课往往需要稳定的常规跨境网络或分流工具辅助。',
        ],
      },
      {
        heading: '二、三步理解代理客户端的工作方式',
        paragraphs: [
          '当你在电脑或手机上打开网页时，系统默认直接向目标服务器发送请求。启用客户端的“规则模式”后，软件会在本地充当智能调度员：访问学校教务系统、国内网站时直接走本地校园网或宽带；遇到规则列表中的国际学习域名时，才通过加密通道转发至选定节点。',
        ],
        callout: {
          title: '樱羽学姐的入门原则',
          body: '先学会看懂规则模式、节点地区和流量倍率，再去挑选月付套餐试错，比盲目跟风买年付更省钱也更安全。',
          tone: 'sakura',
        },
      },
      {
        heading: '三、新手必须养成的安全与合规习惯',
        paragraphs: [
          '切勿在来源不明的网页下载破解版客户端，也不要在公共社交平台泄露自己的订阅链接。同时，在校园网环境下请严格遵守学校网络信息中心的管理规定。',
        ],
      },
    ],
    relatedUrls: [
      { label: '零基础新生入学总览', url: '/beginner/' },
      { label: '机场和VPN有什么区别', url: '/knowledge/airport-vs-vpn/' },
      { label: '学生流量数学课堂', url: '/traffic/student/' },
    ],
    sourceNote: '机场学院原创课程体系 · 第1章内容，结合常见开源客户端官方文档整理。',
  },
  {
    slug: 'beginner/selection',
    url: '/beginner/selection/',
    categorySlug: 'beginner',
    categoryName: '新生入门',
    chapterId: 1,
    template: 'A',
    keywordIds: ['009'],
    title: '新手梯子推荐怎么看？学会用7个客观指标独立筛选服务商',
    seoTitle: '新手梯子推荐与独立筛选标准｜机场学院',
    description: '不看广告吹嘘，手把手教零基础新手用学生预算、客户端兼容性、短周期灵活性与退款透明度7项指标评估机场服务商。',
    readTime: '7 分钟',
    updatedAt: '2026-11-26',
    senpaiTip: '真正靠谱的“推荐”不是给你一个榜单让你盲买，而是教你一套自己也能核对的尺子。',
    sections: [
      {
        heading: '一、为什么新手不能只看“最便宜”或“不限流量”',
        paragraphs: [
          '许多新手第一次搜索时，容易被“1元无限流量”或“永久免费”的标题吸引。实际上，跨境带宽与服务器均有真实成本，违背常识的宣传往往伴随着极高的拥堵率、跑路风险或隐私隐患。',
        ],
      },
      {
        heading: '二、机场学院的 7 项学生友好度核验指标',
        paragraphs: [
          '在本站收录的 18 家真实品牌档案中，我们采用公开透明的评价权重：学生消费预算（25%）、新手使用难度（20%）、套餐性价比（15%）、短周期灵活性（15%）、客户端兼容性（10%）、教程与客服支持（10%）、政策透明度（5%）。',
        ],
        bullets: [
          '短周期灵活：优先选择支持月付（14.9–25元/月区间）或明确有小额试错周期的品牌。',
          '开源客户端兼容：支持 Clash Verge Rev、v2rayN、Shadowrocket、FlClash 等开源或商店正版工具，无需被迫安装未知闭源程序。',
          '退款与协议透明：公开标注流量重置日、并发设备限制与退款条款。',
        ],
      },
    ],
    relatedUrls: [
      { label: '查看18家品牌完整数据库', url: '/airports/' },
      { label: '20元以内月付专区', url: '/student/under-20/' },
      { label: '推荐及编辑标准说明', url: '/methodology/' },
    ],
    sourceNote: '基于机场学院 Academy Student Evaluation 评价模型编制。',
  },

  // Chapter 2: Student Budget
  {
    slug: 'student/budget',
    url: '/student/budget/',
    categorySlug: 'student',
    categoryName: '学生专区',
    chapterId: 2,
    template: 'A',
    keywordIds: ['011', '016', '018', '019'],
    title: '学生党便宜机场推荐与低预算选购全攻略（2027实证核验）',
    seoTitle: '学生党便宜机场推荐与高性价比选购攻略｜机场学院',
    description: '结合18家品牌真实套餐价格，分析学生党月均15–25元预算如何兼顾流量、客户端支持与短周期试错安全。',
    readTime: '8 分钟',
    updatedAt: '2026-11-26',
    senpaiTip: '算性价比时，既要看“每 GB 单价”，更要看“实际一次性掏出去的钱”能不能承受。',
    sections: [
      {
        heading: '一、学生党真实预算区间：月付 15–20 元最从容',
        paragraphs: [
          '对在校大学生而言，每月将网络工具支出控制在 15–20 元以内最为合理。从本站核验的 18 家品牌真实数据来看，月付起步在 20 元及以内的品牌包括唯兔云（14.9元/月）、无忧链接（19元/月）、灵动云（20元/月）、暮光加速（20元/月）、U1S1（20元/月）、全球云（20元/月）与跨界（20元/月）。',
        ],
      },
      {
        heading: '二、低预算选购的三大误区',
        paragraphs: [
          '第一，把“年付折合月均 7 元”误以为可以每月只花 7 元——实际上年付需要一次性支付 79–99 元，如果下个月换了宿舍网络不兼容，沉没成本反而更高。',
          '第二，盲目购买大流量套餐却只用掉 10%，导致每 GB 实际单价飙升。',
          '第三，忽视客户端兼容性，买了仅限特定客户端的套餐，结果自己的 iPad 或安卓手机用不了。',
        ],
        callout: {
          title: '互动工具：学生预算规划器',
          body: '你可以直接使用本站的 Student Budget 工具，输入每月可用生活费预算与预计使用月数，自动筛选匹配的真实品牌套餐。',
          tone: 'gold',
        },
      },
    ],
    relatedUrls: [
      { label: '打开学生预算规划器', url: '/tools/student-budget/' },
      { label: '10元以下机场核验专题', url: '/student/under-10/' },
      { label: '20元以内月付专区', url: '/student/under-20/' },
    ],
    sourceNote: '价格数据源自机场学院 18 家品牌数据库（历史公开核验日期见各品牌档案）。',
  },
  {
    slug: 'student/under-10',
    url: '/student/under-10/',
    categorySlug: 'student',
    categoryName: '学生专区',
    chapterId: 2,
    template: 'A',
    keywordIds: ['014'],
    title: '10元以下机场推荐存在吗？真实月付与年付折合月均实证核验',
    seoTitle: '10元以下机场推荐真实核验：月付与年付区分说明｜机场学院',
    description: '严格区分真实月付售价与年付折合月均价格！公开核验18家机场数据库，诚实说明当前是否有10元以下纯月付套餐。',
    readTime: '6 分钟',
    updatedAt: '2026-11-26',
    senpaiTip: '我们绝不会为了凑“10元以下推荐”而把年付折合价写成月付价，真实透明是学院的第一准则。',
    sections: [
      {
        heading: '一、核验结论：当前已核验数据库中暂无 10 元/月以下纯月付套餐',
        paragraphs: [
          '在机场学院已核验的 18 家品牌全部套餐中，目前真实按月付款（Monthly）最低起步价为唯兔云 14.9 元/月与无忧链接 19 元/月，没有任何一家提供 10 元/月及以下的纯月付方案。',
          '如果某些网页声称“月付 6 元”，请务必点开确认它是不是要求“一次性年付 79 元或 89 元”才折合每月 6–7 元。',
        ],
      },
      {
        heading: '二、哪些品牌提供“年付折合月均 10 元以下”的轻量年付套餐',
        paragraphs: [
          '如果你的预算确实卡在每月 10 元以内且明确愿意承担年付预付风险，在 18 家已核验品牌中，有多家提供 79 元至 119 元/年的轻量年付套餐（折合每月约 6.58 元–9.92 元），例如无忧链接（79元/年）、唯兔云（79.9元/年）、飞猫云（84元/年）、灵猫（85元/年）、梯子云（89元/年）、U1S1/闪跃/飞为/跨界（96元/年）、Sogo云（98元/年）以及灵动云/飞V/光速云/全球云（99元/年）。',
        ],
        callout: {
          title: '学姐风险提示',
          body: '轻量年付套餐通常每月仅有 45GB–70GB 左右流量，且属于一次性预付。零基础新生仍强烈建议先找一家月付 15–20 元的品牌体验 1 个月再做决定。',
          tone: 'sakura',
        },
      },
    ],
    relatedUrls: [
      { label: '20元以内真实月付专区', url: '/student/under-20/' },
      { label: '机场月付和年付哪个好', url: '/buying/monthly-vs-yearly/' },
    ],
    sourceNote: '数据严格筛选自 src/data/airports.json 已核验字段，不虚构任何低价套餐。',
  },
  {
    slug: 'student/under-20',
    url: '/student/under-20/',
    categorySlug: 'student',
    categoryName: '学生专区',
    chapterId: 2,
    template: 'A',
    keywordIds: ['015'],
    title: '20元以内机场推荐：已核验真实月付20元及以下品牌清单',
    seoTitle: '20元以内机场推荐：真实月付套餐核验清单｜机场学院',
    description: '基于18家机场数据库严格筛选月付价格<=20元的真实套餐，明确标注流量额度、设备支持、优惠码与核验日期。',
    readTime: '7 分钟',
    updatedAt: '2026-11-26',
    senpaiTip: '把单月试错成本压在 20 元以内，是大学生最稳妥、最没有心理负担的起步方式。',
    sections: [
      {
        heading: '一、真实月付 ≤ 20 元的已核验品牌',
        paragraphs: [
          '根据数据库筛选，目前支持 20 元及以内真实月付的品牌共有 7 家：唯兔云（V2云，14.9元/月起）、无忧链接（19元/月起）、灵动云（20元/月起）、暮光加速（20元/月起）、U1S1（20元/月起）、全球云（20元/月起）和跨界（20元/月起）。',
        ],
        bullets: [
          '唯兔云（V2云）：入门月付 14.9 元，适合极度控制单月支出的学生。',
          '无忧链接：入门月付 19 元，同时具备 79 元/年轻量选项。',
          '灵动云 / 暮光加速 / U1S1 / 全球云 / 跨界：入门月付均为 20 元，多数配给 100GB/月左右流量。',
        ],
      },
      {
        heading: '二、下单前的三项必查核对',
        paragraphs: [
          '选定 20 元以内套餐后，请点开对应品牌的独立档案页，重点核对三件事：是否支持你的手机/电脑系统第三方客户端、是否支持优惠码，以及退款条款是如何规定的。',
        ],
      },
    ],
    relatedUrls: [
      { label: '适合学生的月付机场', url: '/student/monthly/' },
      { label: '第一次买机场避坑指南', url: '/buying/checklist/' },
    ],
    sourceNote: '严格按 monthly <= 20 字段筛选自 18 家已核验品牌数据库。',
  },
  {
    slug: 'student/monthly',
    url: '/student/monthly/',
    categorySlug: 'student',
    categoryName: '学生专区',
    chapterId: 2,
    template: 'A',
    keywordIds: ['017'],
    title: '适合学生的月付机场指南：为什么第一单永远建议按月购买',
    seoTitle: '适合学生的月付机场推荐与试错指南｜机场学院',
    description: '解析月付机场对学生党的核心价值：低试错成本、适应寒暑假生活节奏、方便验证宿舍校园网兼容性。',
    readTime: '5 分钟',
    updatedAt: '2026-11-26',
    senpaiTip: '寒暑假回家和在学校宿舍，网络环境完全不同，按月购买能让你随时根据实际环境调整。',
    sections: [
      {
        heading: '一、学生党使用周期的特殊性',
        paragraphs: [
          '大学生活有明显的学期与假期节奏：学期内在校多用校园网或宿舍宽带，寒暑假回到家则用家庭宽带，实习或备考阶段流量需求又会突然增加。月付制允许你在不需要的月份暂停续费，不会浪费钱。',
        ],
      },
      {
        heading: '二、如何利用首月完成完整测试',
        paragraphs: [
          '购买首月套餐后，建议在 1 周内分别在宿舍早间、晚高峰（21:00–23:00）以及手机流量环境下测试自己常用的学术网站、公开课与客户端切换流畅度，满意后再考虑下个月续费。',
        ],
      },
    ],
    relatedUrls: [
      { label: '20元以内月付专区', url: '/student/under-20/' },
      { label: '学生机场套餐推荐总览', url: '/student/plans/' },
    ],
    sourceNote: '机场学院学生消费规划教研内容。',
  },
  {
    slug: 'student/plans',
    url: '/student/plans/',
    categorySlug: 'student',
    categoryName: '学生专区',
    chapterId: 2,
    template: 'A',
    keywordIds: ['020'],
    title: '学生机场套餐推荐：如何读懂月付、年付、轻量包与不限时流量包',
    seoTitle: '学生机场套餐推荐与套餐类型解析｜机场学院',
    description: '全面梳理常见机场套餐结构，帮助学生党根据每日学习时长与设备数量匹配最合适的套餐类型。',
    readTime: '6 分钟',
    updatedAt: '2026-11-26',
    senpaiTip: '买套餐就像选手机流量包，先看自己一个月用多少，再选档位，最忌讳为用不完的流量买单。',
    sections: [
      {
        heading: '一、四种主流套餐类型对比',
        paragraphs: [
          '1. 标准月付套餐（约 14.9–25 元/月，50GB–150GB）：最适合大多数每天查资料、看课程的大学生。',
          '2. 轻量年付套餐（约 79–119 元/年，每月 45–70GB 重置）：适合已经验证过某品牌在自己网络环境下很稳定、且每月流量需求不高的老用户。',
          '3. 一次性不限时流量包（用完为止）：适合每月仅偶尔查一两次英文文献、几乎不看视频的极轻度用户。',
          '4. 季付/半年付折中方案：在享有一点周期折扣的同时把风险控制在 3–6 个月内。',
        ],
      },
    ],
    relatedUrls: [
      { label: '浏览全部18家品牌套餐', url: '/airports/' },
      { label: '流量数学课堂', url: '/traffic/student/' },
    ],
    sourceNote: '汇总自机场学院 18 家真实品牌套餐结构。',
  },

  // Chapter 3: Buying Guide
  {
    slug: 'buying/subscription',
    url: '/buying/subscription/',
    categorySlug: 'buying',
    categoryName: '购买指南',
    chapterId: 3,
    template: 'B',
    keywordIds: ['022'],
    title: '新手怎么买机场订阅：从注册账号到获取订阅链接的标准流程',
    seoTitle: '新手怎么买机场订阅：完整购买与导入流程｜机场学院',
    description: '详细拆解新手购买机场订阅的每一步：邮箱注册、选择周期、优惠码核对、获取订阅链接以及导入客户端的注意事项。',
    readTime: '6 分钟',
    updatedAt: '2026-11-26',
    senpaiTip: '注册机场账号时，强烈建议单独设置一个专属强密码，不要和你的学校教务、微信或常用邮箱密码相同！',
    sections: [
      {
        heading: '一、购买前准备：独立邮箱与独立密码',
        paragraphs: [
          '在注册任何第三方服务站前，请使用常用可接收验证码的邮箱（或专门用于工具注册的邮箱），并配合密码管理器生成独立随机密码，避免因单一站点数据泄露波及其他重要账号。',
        ],
      },
      {
        heading: '二、下单与获取订阅的标准四步',
        paragraphs: [
          '1. 在套餐页面确认“周期（先选月付）”、“每月流量额度”及“设备数限制”。',
          '2. 若有可用优惠码，在结算页填入并确认最终实付金额再付款。',
          '3. 付款完成后进入用户中心（Dashboard），找到“一键导入”或“复制订阅地址”。',
          '4. 将复制好的 HTTPS 订阅链接粘贴到已安装好的 Clash Verge Rev、Shadowrocket 或 FlClash 中更新节点。',
        ],
      },
    ],
    relatedUrls: [
      { label: '电脑端订阅导入教程', url: '/tutorials/desktop/subscription/' },
      { label: '机场购买避坑清单', url: '/buying/checklist/' },
    ],
    sourceNote: '机场学院新生指导室标准操作指南。',
  },
  {
    slug: 'buying/monthly-vs-yearly',
    url: '/buying/monthly-vs-yearly/',
    categorySlug: 'buying',
    categoryName: '购买指南',
    chapterId: 3,
    template: 'A',
    keywordIds: ['024'],
    title: '机场月付和年付哪个好？从试错成本与预付风险客观对比',
    seoTitle: '机场月付和年付哪个好：学生党消费决策对比｜机场学院',
    description: '客观对比月付、季付、年付的折合月均成本与潜在风险，帮助大学生做出理性消费决策。',
    readTime: '5 分钟',
    updatedAt: '2026-11-26',
    senpaiTip: '“折合每月省几块钱”的前提是你能安稳用满 12 个月；新手第一单请坚定选择月付。',
    sections: [
      {
        heading: '一、月付与年付的核心差异',
        paragraphs: [
          '月付的优势在于现金流压力小、试错零负担。哪怕遇到校园网不兼容、晚高峰卡顿或者个人使用习惯变化，损失最多也就十几二十元。',
          '年付虽然在账面上往往能打 8 折左右（或推出百元以内的轻量年付），但一旦一次性付款，如果遇到服务商线路调整、客服失联或学校网络策略改变，维权和退款通常非常困难。',
        ],
      },
      {
        heading: '二、什么时候才适合考虑季付或年付',
        paragraphs: [
          '只有当你已经通过月付连续稳定使用了至少 1–2 个月，确认它在你的宿舍网、手机流量下都能满足日常学习需求，且你清楚了解该品牌的退款与重置政策时，才值得考虑季付或年付。',
        ],
      },
    ],
    relatedUrls: [
      { label: '使用学生预算规划器对比周期', url: '/tools/student-budget/' },
      { label: '机场退款规则怎么看', url: '/buying/refund-policy/' },
    ],
    sourceNote: '机场学院消费风险教育专题。',
  },
  {
    slug: 'buying/checklist',
    url: '/buying/checklist/',
    categorySlug: 'buying',
    categoryName: '购买指南',
    chapterId: 3,
    template: 'B',
    keywordIds: ['025', '026'],
    title: '新手买机场注意事项与避坑教程：下单前必核对的8件事',
    seoTitle: '新手买机场注意事项与购买避坑教程｜机场学院',
    description: '总结新手购买机场最容易踩坑的8个细节：长周期诱惑、虚假无限流量、共享账号风险、倍率陷阱与客户端兼容性。',
    readTime: '7 分钟',
    updatedAt: '2026-11-26',
    senpaiTip: '把这 8 条当成你的入学考试核对表，每次下单前过一遍，就能避开 90% 的新手遗憾。',
    sections: [
      {
        heading: '下单前 8 项核对清单',
        paragraphs: [
          '1. 确认付款周期：首购优先月付，不贪图三年付超低折扣。',
          '2. 核对设备与客户端：确认支持主流开源第三方客户端，不被迫安装不明软件。',
          '3. 看清流量与倍率：确认套餐总流量以及日常节点是否为 1x 倍率。',
          '4. 确认同时在线设备数：确保覆盖自己的电脑 + 手机，且不与陌生人合租。',
          '5. 阅读退款与续费规则：虚拟服务普遍不支持无理由退款，下单前先看 TOS。',
          '6. 警惕“保证校园网可用”宣传：没有任何服务商能对全国所有高校校园网打包票。',
          '7. 保护订阅与密码：使用独立密码，不把订阅链接发给他人。',
          '8. 保存官方发布页或工单入口：避免日后域名变更找不到售后渠道。',
        ],
      },
    ],
    relatedUrls: [
      { label: '怎么判断机场是否靠谱', url: '/buying/reliability/' },
      { label: '智能故障排查助手', url: '/tools/troubleshooter/' },
    ],
    sourceNote: '机场学院新生指导室原创避坑指南。',
  },
  {
    slug: 'buying/reliability',
    url: '/buying/reliability/',
    categorySlug: 'buying',
    categoryName: '购买指南',
    chapterId: 3,
    template: 'B',
    keywordIds: ['027'],
    title: '怎么判断机场是否靠谱？从信息透明度与技术规范看服务质量',
    seoTitle: '怎么判断机场是否靠谱：客观评估维度｜机场学院',
    description: '不依赖主观吹捧，教新手从条款透明度、客户端开放度、工单响应、线路标注诚实度判断一家机场是否靠谱。',
    readTime: '6 分钟',
    updatedAt: '2026-11-26',
    senpaiTip: '越是把限制条件（如退款条件、倍率、同时在线数）写得清清楚楚的平台，往往越省心。',
    sections: [
      {
        heading: '四个客观判断维度',
        paragraphs: [
          '1. 条款透明度：是否明确写出了流量重置方式、退款政策与并发设备限制，而不是含糊其辞。',
          '2. 技术开放性：是否支持标准订阅协议与 Clash、v2rayN、Shadowrocket 等主流客户端。',
          '3. 宣传克制度：是否避免使用“绝对不跑路”、“全校园网 100% 秒连”等无法证实的承诺。',
          '4. 售后可触达性：是否有清晰的站内工单系统或官方公告频道。',
        ],
      },
    ],
    relatedUrls: [
      { label: '查看18家品牌独立档案', url: '/airports/' },
      { label: '机场退款规则怎么看', url: '/buying/refund-policy/' },
    ],
    sourceNote: '机场学院编辑与评价方法论。',
  },
  {
    slug: 'buying/trial-vs-paid',
    url: '/buying/trial-vs-paid/',
    categorySlug: 'buying',
    categoryName: '购买指南',
    chapterId: 3,
    template: 'B',
    keywordIds: ['028'],
    title: '机场试用和正式套餐有什么区别？测试时重点看什么',
    seoTitle: '机场试用和正式套餐区别与测试要点｜机场学院',
    description: '解释免费/低价试用节点与正式套餐在节点池、带宽优先级与时长上的常见差异。',
    readTime: '4 分钟',
    updatedAt: '2026-11-26',
    senpaiTip: '试用主要用来验证“我的设备能不能正常导入订阅、我的网络环境能不能连上”，而不是用来白嫖看高清视频。',
    sections: [
      {
        heading: '试用与正式套餐的常见差异',
        paragraphs: [
          '部分服务商提供的 1 元试用或数小时体验，往往只开放少数测试节点或限制总流量（如 1–5GB），且可能因为测试用户集中而出现轻微拥堵；而正式月付套餐则会开放完整地区节点与更高并发配额。',
          '无论试用还是首月月付，测试重点应放在：订阅能否顺利导入客户端、校园网/宿舍 WiFi 下握手是否正常、以及常用学习网站是否可用。',
        ],
      },
    ],
    relatedUrls: [
      { label: '新手适合买什么机场套餐', url: '/buying/first-plan/' },
      { label: '20元以内月付专区', url: '/student/under-20/' },
    ],
    sourceNote: '机场学院新生指导室整理。',
  },
  {
    slug: 'buying/first-plan',
    url: '/buying/first-plan/',
    categorySlug: 'buying',
    categoryName: '购买指南',
    chapterId: 3,
    template: 'A',
    keywordIds: ['030'],
    title: '新手适合买什么机场套餐？按学习场景匹配的入门建议',
    seoTitle: '新手适合买什么机场套餐：按场景匹配指南｜机场学院',
    description: '针对查文献、使用AI工具、看公开课三类学生场景，给出具体的入门套餐档位与流量建议。',
    readTime: '5 分钟',
    updatedAt: '2026-11-26',
    senpaiTip: '新手第一份套餐，选“月付 + 50GB 到 100GB + 1x 倍率节点充足”的组合几乎不会出错。',
    sections: [
      {
        heading: '按学习场景选第一份套餐',
        paragraphs: [
          '如果你主要用来查英文文献、写论文用 AI 助手、同步 GitHub 代码：每月 50GB–100GB 的入门月付套餐（约 15–20 元）已经非常充裕。',
          '如果你每天都要看 1 小时以上海外大学高清公开课视频：建议直接选择 100GB–150GB 月付套餐，并注意在客户端选择 1x 倍率节点。',
        ],
      },
    ],
    relatedUrls: [
      { label: '打开流量数学计算器', url: '/tools/traffic-calculator/' },
      { label: '学生消费预算规划器', url: '/tools/student-budget/' },
    ],
    sourceNote: '机场学院课程教研组编制。',
  },
  {
    slug: 'buying/refund-policy',
    url: '/buying/refund-policy/',
    categorySlug: 'buying',
    categoryName: '购买指南',
    chapterId: 3,
    template: 'B',
    keywordIds: ['100'],
    title: '机场退款规则怎么看？下单前必读的虚拟服务退款条款解析',
    seoTitle: '机场退款规则怎么看：虚拟服务条款解析｜机场学院',
    description: '梳理常见机场退款政策类型（不支持退款、限时按比例退、仅退至站内余额），避免购买后产生纠纷。',
    readTime: '5 分钟',
    updatedAt: '2026-11-26',
    senpaiTip: '正因为绝大多数机场不支持无理由全额退款，我们才反复强调第一单先买月付！',
    sections: [
      {
        heading: '常见的三种退款规则表述',
        paragraphs: [
          '1. 明确不支持退款：虚拟数字商品一经发货/使用概不退换，这是行业最常见的条款。',
          '2. 限时/限流量条件退款：例如购买 24 小时内且已用流量不超过 1GB 可申请退回原渠道或站内余额（可能扣除手续费）。',
          '3. 仅退至站内余额：退回的金额只能用于换购该平台其他套餐，无法提现到微信或支付宝。',
        ],
      },
    ],
    relatedUrls: [
      { label: '查看18家品牌各自退款政策', url: '/airports/' },
      { label: '小白如何联系机场客服', url: '/troubleshooting/customer-service/' },
    ],
    sourceNote: '综合整理自 18 家品牌公开服务条款记录。',
  },
];
