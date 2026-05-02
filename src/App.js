import React, { useMemo, useState, useEffect } from "react";

const L = {
  zh: {
    login: "登录",
    register: "注册",
    logout: "退出",
    help: "帮助",
    cart: "购物车",
    wish: "收藏",
    orders: "我的订单",
    search: "搜索商品",
    all: "全部商品类目",
    hot: "热销商品",
    deal: "超级特价",
    member: "会员优惠券专区",
    coupon: "活动优惠券专区",
    stock: "库存",
    details: "详情",
    addCart: "加入购物车",
    order: "下单",
    back: "返回",
    total: "总计",
    emptyCart: "购物车为空",
    emptyWish: "收藏为空",
    emptyOrders: "暂无订单",
    needLogin: "请先登录后继续",
    id: "账号 / 手机号",
    password: "密码",
    submit: "登录",
    festival: "Gmarket Global Festival",
    festivalText: "韩国精选商品大型优惠",
    count: "个商品",
    reviews: "商品评价",
    service: "客服中心",
    map: "地图",
    orderOk: "订单提交成功",
    notice: "通知！",
    noticeText: "每天确认新闻和活动。",
    seeMore: "查看更多细节",
    saveId: "保存 ID",
    forgot: "忘记 ID 或密码",
    findIdTitle: "找回 ID",
    findIdQuestion: "忘记会员ID?",
    findIdDesc1: "请输入以下会员信息，找回用户ID",
    findIdDesc2: "用户ID，将发送到，您的邮箱中。10分钟以内，发送到您的邮箱中。",
    findIdDesc3: "如您是用身份证或者外国人登陆证加入会员请",
    findIdClick: "点击",
    findIdEmailLabel: "加入会员时,输入的邮箱地址",
    findIdCaptchaPlaceholder: "图片中的验证码",
    findIdGetCode: "获取验证码",
    findIdBottomPrefix: "如以上信息，全部记不清，请",
    findIdBottomLink: "点击此处",
    findIdBottomSuffix: "，重新加入会员。",
    findIdCaptchaError: "请输入图片中的验证码",
    findIdCodeSent: "验证码已发送",
    findIdEmailNotRegistered: "邮箱未注册会员",
    joinText: "现在可以简单、快速地加入会员！",
    about: "关于Gmarket",
    terms: "用户协议",
    privacy: "隐私政策",
    siteMap: "网站地图",
    weibo: "微博",
    or: "或",
    kakao: "KakaoTalk",
    gmarketKR: "Gmarket KR",
    copyright: "版权所有",    
    customerTime: "工作时间：24小时（全年无休）",
    onlineService: "在线联系客服",
    companyAddress: "香港旺角太子道西193号新世纪广场1座17楼",
    phone: "电话",
    fax: "传真",
    email: "电子邮件",
    company: "Gmarket Asia Ltd",
    businessNo: "营业执照号码",
    salesReport: "通信销售业申报",
    salesReportNo: "香港旺角10630号",
    footerNotice:
      "Gmarket 提供韩国大交易的平台，并非商品的直接销售商，网上的商品由个人卖家上传到平台销售，因此对在线销售的商品不承担任何责任。",
    regionKorea: "韩国",
    currency: "货币",
    keywordTitle: "热门搜索",
    bestTitle: "热卖商品",
    bestTab1: "热卖商品",
    bestTab2: "热卖店铺",
    bestTab3: "国家和地区类热卖商品",
    superBanner: "超级特价",
    weeklyDeal: "本周特价",
    clothing: "服饰",
    beauty: "美妆",
    sportsOutdoor: "运动/户外",
    life: "生活",
    food: "食品",
    digital: "数码",
    memberTitle: "在Gmarket享受更多优惠！",
    monthCoupon: "本月优惠券",
    memberLevelCoupon: "会员等级优惠券",
    newMemberCoupon: "新加入&未购买会员优惠",
    couponReceive: "领取优惠券",
    eventTitle: "全球活动专区",
    dailyLucky: "每日幸运抽奖",
    memberZone: "会员专区",
    eventCouponTitle: "10% OFF SSG Special Week Discount Coupon",
    rank: "排名",
    discount: "折扣",
    sales: "销量",
    fastShipping: "快速国际配送",
    remove: "删除",
    prev: "上一页",
    next: "下一页",
    top: "回顶部",
    home: "首页",
    couponGuide: "优惠券使用说明",
    couponTip: "部分优惠券可能根据会员等级、地区和商品条件限制使用。",
    downloadAll: "全部领取",
    specialBenefit: "会员专属特别福利",
    firstBenefit: "首次购买会员专享",
    availableNow: "立即可用",
    maxDiscount: "最高优惠",
    eventSubTitle: "每天都有惊喜活动和专属优惠券",
    goNow: "立即前往",
    couponSuccess: "领取成功",
    guideOpened: "已打开优惠券使用说明",
    lineConfirm: "即将跳转到 LINE 在线客服聊天，是否继续？",
    lineNeedLogin: "请先登录后联系客服",
    verifyCode: "验证码",
    sendVerifyCode: "发送验证码",
    verifyCodeSent: "验证码已发送",
    pleaseSendCode: "请先发送验证码",
    verifyCodeWrong: "验证码错误，请重新填写",
    registerOk: "注册成功",
    fillRegisterInfo: "请填写完整注册信息",
    invalidEmail: "请输入正确的邮箱格式",
    invalidPhone: "请输入正确的电话号码",
    registerPhone: "手机号码（请添加国家区号，如 +82）",
    customerChat: "在线客服",
    customerEmailInput: "请输入邮箱，方便客服回复",
    customerMessageInput: "请输入您的问题",
    customerStartChat: "开始咨询",
    customerSend: "发送",
    customerClose: "关闭",
    customerChatWelcome: "您好，请问需要帮您查询什么？",
    customerNoMessage: "请输入咨询内容",
    customerChatError: "连接客服失败，请确认后台已启动",
  },
  en: {
    login: "Sign In",
    register: "Register",
    logout: "Logout",
    help: "Help",
    cart: "Cart",
    wish: "Wish List",
    orders: "My Orders",
    search: "Search products",
    all: "All Categories",
    hot: "Best Sellers",
    deal: "Super Deal",
    member: "Member Coupon Zone",
    coupon: "Event Coupon Zone",
    stock: "Stock",
    details: "Details",
    addCart: "Add Cart",
    order: "Order",
    back: "Back",
    total: "Total",
    emptyCart: "Your cart is empty",
    emptyWish: "Your wish list is empty",
    emptyOrders: "No orders yet",
    needLogin: "Please sign in to continue",
    id: "ID / Phone",
    password: "Password",
    submit: "Sign In",
    festival: "Gmarket Global Festival",
    festivalText: "Big sale for Korea shopping lovers",
    count: "products",
    reviews: "Reviews",
    service: "Customer Center",
    map: "Map",
    orderOk: "Order completed",
    notice: "Notice!",
    noticeText: "Check news and events every day.",
    seeMore: "See more details",
    saveId: "Save ID",
    forgot: "Forgot ID or password",
    findIdTitle: "Find ID",
    findIdQuestion: "Forgot your member ID?",
    findIdDesc1: "Enter your member information below to find your user ID.",
    findIdDesc2: "Your user ID will be sent to your email within 10 minutes.",
    findIdDesc3: "If you joined with an ID card or foreign registration card, please",
    findIdClick: "click here",
    findIdEmailLabel: "Email address used when joining",
    findIdCaptchaPlaceholder: "Enter the image verification code",
    findIdGetCode: "Get verification code",
    findIdBottomPrefix: "If you cannot remember the information above, please",
    findIdBottomLink: "click here",
    findIdBottomSuffix: " to register again.",
    findIdCaptchaError: "Please enter the image verification code",
    findIdCodeSent: "Verification code sent",
    findIdEmailNotRegistered: "Email is not a registered member",
    joinText: "Join quickly and enjoy member benefits!",
    about: "About Gmarket",
    terms: "Terms",
    privacy: "Privacy Policy",
    siteMap: "Site Map",
    weibo: "Weibo",
    or: "OR",
    kakao: "KakaoTalk",
    gmarketKR: "Gmarket KR",
    copyright: "All rights reserved.",
    customerTime: "Service hours: 24 hours",
    onlineService: "Online Customer Service",
    companyAddress:
      "17/F, Tower 1, MOKO, 193 Prince Edward Road West, Mong Kok, Hong Kong",
    phone: "Phone",
    fax: "Fax",
    email: "Email",
    company: "Gmarket Asia Ltd",
    businessNo: "Business Registration No.",
    salesReport: "Online Sales Registration",
    salesReportNo: "Mong Kok 10630, Hong Kong",
    footerNotice:
      "Gmarket provides a marketplace platform and is not the direct seller of listed products.",
    regionKorea: "South Korea",
    currency: "Currency",
    keywordTitle: "Trending",
    bestTitle: "Best Sellers",
    bestTab1: "Best Sellers",
    bestTab2: "Hot Stores",
    bestTab3: "Best Sellers by Region",
    superBanner: "Super Deal",
    weeklyDeal: "Weekly Deal",
    clothing: "Fashion",
    beauty: "Beauty",
    sportsOutdoor: "Sports/Outdoor",
    life: "Life",
    food: "Food",
    digital: "Digital",
    memberTitle: "Enjoy more benefits at Gmarket!",
    monthCoupon: "This Month Coupons",
    memberLevelCoupon: "Member Level Coupons",
    newMemberCoupon: "New & First Purchase Member Benefits",
    couponReceive: "Get Coupon",
    eventTitle: "Global Event Zone",
    dailyLucky: "Daily Lucky Draw",
    memberZone: "Member Zone",
    eventCouponTitle: "10% OFF SSG Special Week Discount Coupon",
    rank: "Rank",
    discount: "Discount",
    sales: "Sales",
    fastShipping: "Fast international shipping",
    remove: "Remove",
    prev: "Prev",
    next: "Next",
    top: "TOP",
    home: "Home",
    couponGuide: "Coupon Guide",
    couponTip:
      "Some coupons may be limited by member level, region, and item conditions.",
    downloadAll: "Get All",
    specialBenefit: "Special Member Benefits",
    firstBenefit: "First Purchase Benefits",
    availableNow: "Available Now",
    maxDiscount: "Max Discount",
    eventSubTitle: "Daily events and exclusive coupons are waiting for you",
    goNow: "Go Now",
    couponSuccess: "Coupon received",
    guideOpened: "Coupon guide opened",
    lineConfirm: "You will be redirected to LINE customer service. Continue?",
    lineNeedLogin: "Please sign in before contacting customer service",
    verifyCode: "Verification Code",
    sendVerifyCode: "Send Code",
    verifyCodeSent: "Verification code sent",
    pleaseSendCode: "Please send the verification code first",
    verifyCodeWrong: "Incorrect verification code",
    registerOk: "Registration successful",
    fillRegisterInfo: "Please complete the registration form",
    invalidEmail: "Please enter a valid email address",
    invalidPhone: "Please enter a valid phone number",
    registerPhone: "Phone number with country code, e.g. +82",
    customerChat: "Online Customer Service",
    customerEmailInput: "Enter your email for customer service reply",
    customerMessageInput: "Type your question",
    customerStartChat: "Start Chat",
    customerSend: "Send",
    customerClose: "Close",
    customerChatWelcome: "Hello, how can we help you?",
    customerNoMessage: "Please enter your message",
    customerChatError: "Failed to connect. Please make sure the backend is running",
  },
  ko: {
    login: "로그인",
    register: "회원가입",
    logout: "로그아웃",
    help: "고객센터",
    cart: "장바구니",
    wish: "찜",
    orders: "주문내역",
    search: "상품 검색",
    all: "전체 카테고리",
    hot: "베스트셀러",
    deal: "슈퍼딜",
    member: "회원 쿠폰존",
    coupon: "이벤트 쿠폰존",
    stock: "재고",
    details: "상세보기",
    addCart: "장바구니",
    order: "주문하기",
    back: "뒤로",
    total: "합계",
    emptyCart: "장바구니가 비어 있습니다",
    emptyWish: "찜 목록이 비어 있습니다",
    emptyOrders: "주문내역이 없습니다",
    needLogin: "로그인이 필요합니다",
    id: "아이디 / 전화번호",
    password: "비밀번호",
    submit: "로그인",
    festival: "Gmarket Global Festival",
    festivalText: "한국 인기 상품 대형 할인",
    count: "개 상품",
    reviews: "상품평",
    service: "고객센터",
    map: "지도",
    orderOk: "주문이 완료되었습니다",
    notice: "공지!",
    noticeText: "매일 뉴스와 이벤트를 확인하세요.",
    seeMore: "자세히 보기",
    saveId: "아이디 저장",
    forgot: "아이디 또는 비밀번호 찾기",
    findIdTitle: "아이디 찾기",
    findIdQuestion: "회원 ID를 잊으셨나요?",
    findIdDesc1: "아래 회원 정보를 입력하여 사용자 ID를 찾으세요.",
    findIdDesc2: "사용자 ID는 10분 이내에 이메일로 발송됩니다.",
    findIdDesc3: "신분증 또는 외국인등록증으로 가입하신 경우",
    findIdClick: "클릭",
    findIdEmailLabel: "가입 시 입력한 이메일 주소",
    findIdCaptchaPlaceholder: "이미지 속 인증번호",
    findIdGetCode: "인증번호 받기",
    findIdBottomPrefix: "위 정보를 모두 기억하지 못하시면",
    findIdBottomLink: "여기를 클릭",
    findIdBottomSuffix: "하여 다시 가입하세요.",
    findIdCaptchaError: "이미지 속 인증번호를 입력하세요",
    findIdCodeSent: "인증번호가 발송되었습니다",
    findIdEmailNotRegistered: "등록되지 않은 회원 이메일입니다",
    joinText: "쉽고 빠르게 회원가입하세요!",
    about: "Gmarket 소개",
    terms: "이용약관",
    privacy: "개인정보처리방침",
    siteMap: "사이트맵",
    weibo: "웨이보",
    or: "또는",
    kakao: "카카오톡",
    gmarketKR: "Gmarket KR",
    copyright: "모든 권리 보유.",
    customerTime: "운영시간: 24시간",
    onlineService: "온라인 고객센터",
    companyAddress:
      "홍콩 몽콕 프린스 에드워드 로드 웨스트 193 MOKO 타워1 17층",
    phone: "전화",
    fax: "팩스",
    email: "이메일",
    company: "Gmarket Asia Ltd",
    businessNo: "사업자등록번호",
    salesReport: "통신판매신고",
    salesReportNo: "홍콩 몽콕 10630호",
    footerNotice:
      "Gmarket은 거래 플랫폼을 제공하며 상품의 직접 판매자가 아닙니다.",
    regionKorea: "한국",
    currency: "통화",
    keywordTitle: "인기검색어",
    bestTitle: "베스트셀러",
    bestTab1: "베스트셀러",
    bestTab2: "인기 스토어",
    bestTab3: "국가/지역별 인기상품",
    superBanner: "슈퍼딜",
    weeklyDeal: "이번 주 특가",
    clothing: "패션",
    beauty: "뷰티",
    sportsOutdoor: "스포츠/아웃도어",
    life: "생활",
    food: "식품",
    digital: "디지털",
    memberTitle: "Gmarket에서 더 많은 혜택을 누리세요!",
    monthCoupon: "이번 달 쿠폰",
    memberLevelCoupon: "회원 등급 쿠폰",
    newMemberCoupon: "신규&첫 구매 회원 혜택",
    couponReceive: "쿠폰 받기",
    eventTitle: "글로벌 이벤트존",
    dailyLucky: "매일 행운 추첨",
    memberZone: "회원 전용관",
    eventCouponTitle: "10% OFF SSG Special Week Discount Coupon",
    rank: "순위",
    discount: "할인",
    sales: "판매량",
    fastShipping: "빠른 국제배송",
    remove: "삭제",
    prev: "이전",
    next: "다음",
    top: "맨 위",
    home: "홈",
    couponGuide: "쿠폰 이용 안내",
    couponTip: "일부 쿠폰은 회원 등급, 지역, 상품 조건에 따라 제한될 수 있습니다.",
    downloadAll: "전체 받기",
    specialBenefit: "회원 전용 특별 혜택",
    firstBenefit: "첫 구매 회원 혜택",
    availableNow: "즉시 사용 가능",
    maxDiscount: "최대 할인",
    eventSubTitle: "매일 새로운 이벤트와 전용 쿠폰을 만나보세요",
    goNow: "바로가기",
    couponSuccess: "쿠폰을 받았습니다",
    guideOpened: "쿠폰 안내를 열었습니다",
    lineConfirm: "LINE 고객센터 채팅으로 이동합니다. 계속하시겠습니까?",
    lineNeedLogin: "고객센터 문의 전 로그인이 필요합니다",
    verifyCode: "인증번호",
    sendVerifyCode: "인증번호 발송",
    verifyCodeSent: "인증번호가 발송되었습니다",
    pleaseSendCode: "먼저 인증번호를 발송해 주세요",
    verifyCodeWrong: "인증번호가 올바르지 않습니다",
    registerOk: "회원가입이 완료되었습니다",
    fillRegisterInfo: "회원가입 정보를 모두 입력해 주세요",
    invalidEmail: "올바른 이메일 형식을 입력해 주세요",
    invalidPhone: "올바른 전화번호를 입력해 주세요",
    registerPhone: "휴대폰 번호（국가번호 포함, 예: +82）",
    customerChat: "온라인 고객센터",
    customerEmailInput: "답변 받을 이메일을 입력하세요",
    customerMessageInput: "문의 내용을 입력하세요",
    customerStartChat: "상담 시작",
    customerSend: "전송",
    customerClose: "닫기",
    customerChatWelcome: "안녕하세요, 무엇을 도와드릴까요?",
    customerNoMessage: "문의 내용을 입력해 주세요",
    customerChatError: "고객센터 연결 실패. 백엔드가 실행 중인지 확인하세요",
  },
};

const cats = [
  { key: "fashion", icon: "🎁", zh: "品牌时尚", en: "Brand Fashion", ko: "브랜드패션" },
  { key: "clothing", icon: "👕", zh: "服装", en: "Clothing", ko: "의류" },
  { key: "shoes", icon: "👟", zh: "配饰/鞋类", en: "Accessories/Shoes", ko: "잡화/신발" },
  { key: "beauty", icon: "💄", zh: "美妆/护发", en: "Beauty/Hair", ko: "뷰티/헤어" },
  { key: "kids", icon: "🧸", zh: "母婴/儿童", en: "Baby / Kids", ko: "유아/아동" },
  { key: "food", icon: "🍜", zh: "食品", en: "Food", ko: "식품" },
  { key: "home", icon: "🏠", zh: "生活用品", en: "Household Supplies", ko: "생활용품" },
  { key: "kitchen", icon: "🍳", zh: "家居/厨房", en: "Home/Kitchen", ko: "홈/주방" },
  { key: "sports", icon: "⚽", zh: "运动/户外", en: "Sports/Outdoor", ko: "스포츠/아웃도어" },
  { key: "health", icon: "💊", zh: "健康/保健", en: "Health/Diet", ko: "건강/다이어트" },
  { key: "kpop", icon: "🎵", zh: "兴趣/KPOP", en: "Hobbies/KPOP", ko: "취미/KPOP" },
  { key: "electronics", icon: "📱", zh: "电子/数码", en: "Electronics/Motor", ko: "전자/디지털" },
  { key: "computer", icon: "💻", zh: "电脑/数码", en: "Computer/Digital", ko: "컴퓨터/디지털" },
];

// ================== 方案A：稳定真实感商品系统 ==================
// 重点：不再硬凑 500，不再用错图配错名。
// 每个分类 24 个精选商品；第一页 12 个商品使用 12 张不同图片，避免首屏重复和灰图。
const allProducts = [
  {
    "id": 1,
    "categoryKey": "computer",
    "name": "Apple MacBook Air 13英寸 M2 256GB 午夜色",
    "nameZh": "Apple MacBook Air 13英寸 M2 256GB 午夜色",
    "nameEn": "Apple MacBook Air 13-inch M2 256GB Midnight",
    "nameKo": "Apple MacBook Air 13형 M2 256GB 미드나이트",
    "price": 1278800,
    "oldPrice": 1432300,
    "stock": 18,
    "sales": 650,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 2,
    "categoryKey": "computer",
    "name": "LG UltraWide 34英寸 IPS 显示器",
    "nameZh": "LG UltraWide 34英寸 IPS 显示器",
    "nameEn": "LG UltraWide 34-inch IPS Monitor",
    "nameKo": "LG 울트라와이드 34형 IPS 모니터",
    "price": 494000,
    "oldPrice": 578000,
    "stock": 37,
    "sales": 1383,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 3,
    "categoryKey": "computer",
    "name": "Keychron K8 Pro 无线机械键盘",
    "nameZh": "Keychron K8 Pro 无线机械键盘",
    "nameEn": "Keychron K8 Pro Wireless Mechanical Keyboard",
    "nameKo": "키크론 K8 Pro 무선 기계식 키보드",
    "price": 129300,
    "oldPrice": 157700,
    "stock": 56,
    "sales": 2116,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 4,
    "categoryKey": "computer",
    "name": "Logitech MX Master 3S 无线鼠标",
    "nameZh": "Logitech MX Master 3S 无线鼠标",
    "nameEn": "Logitech MX Master 3S Wireless Mouse",
    "nameKo": "로지텍 MX Master 3S 무선 마우스",
    "price": 129000,
    "oldPrice": 163800,
    "stock": 75,
    "sales": 2849,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1527814050087-3793815479db?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 5,
    "categoryKey": "computer",
    "name": "Samsung Galaxy Book4 15.6英寸笔记本",
    "nameZh": "Samsung Galaxy Book4 15.6英寸笔记本",
    "nameEn": "Samsung Galaxy Book4 15.6-inch Laptop",
    "nameKo": "삼성 갤럭시북4 15.6형 노트북",
    "price": 1118600,
    "oldPrice": 1476600,
    "stock": 94,
    "sales": 3582,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 6,
    "categoryKey": "computer",
    "name": "ASUS Zenbook 14 OLED 512GB",
    "nameZh": "ASUS Zenbook 14 OLED 512GB",
    "nameEn": "ASUS Zenbook 14 OLED 512GB",
    "nameKo": "ASUS 젠북 14 OLED 512GB",
    "price": 1312000,
    "oldPrice": 1508800,
    "stock": 113,
    "sales": 4315,
    "rating": "4.7",
    "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 7,
    "categoryKey": "computer",
    "name": "Dell XPS 13 Plus 512GB 银色",
    "nameZh": "Dell XPS 13 Plus 512GB 银色",
    "nameEn": "Dell XPS 13 Plus 512GB Silver",
    "nameKo": "Dell XPS 13 Plus 512GB 실버",
    "price": 1700500,
    "oldPrice": 2040600,
    "stock": 132,
    "sales": 5048,
    "rating": "4.8",
    "image": "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 8,
    "categoryKey": "computer",
    "name": "Lenovo ThinkPad X1 Carbon 14英寸",
    "nameZh": "Lenovo ThinkPad X1 Carbon 14英寸",
    "nameEn": "Lenovo ThinkPad X1 Carbon 14-inch",
    "nameKo": "레노버 ThinkPad X1 Carbon 14형",
    "price": 1927800,
    "oldPrice": 2409800,
    "stock": 151,
    "sales": 5781,
    "rating": "4.9",
    "image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 9,
    "categoryKey": "computer",
    "name": "HP Pavilion Plus 14 OLED 笔记本",
    "nameZh": "HP Pavilion Plus 14 OLED 笔记本",
    "nameEn": "HP Pavilion Plus 14 OLED Laptop",
    "nameKo": "HP 파빌리온 플러스 14 OLED 노트북",
    "price": 1046400,
    "oldPrice": 1360300,
    "stock": 170,
    "sales": 6514,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 10,
    "categoryKey": "computer",
    "name": "Razer BlackWidow V4 机械键盘",
    "nameZh": "Razer BlackWidow V4 机械键盘",
    "nameEn": "Razer BlackWidow V4 Mechanical Keyboard",
    "nameKo": "레이저 BlackWidow V4 기계식 키보드",
    "price": 235900,
    "oldPrice": 266600,
    "stock": 189,
    "sales": 7247,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 11,
    "categoryKey": "computer",
    "name": "Samsung T7 Shield 1TB 移动SSD",
    "nameZh": "Samsung T7 Shield 1TB 移动SSD",
    "nameEn": "Samsung T7 Shield 1TB Portable SSD",
    "nameKo": "삼성 T7 Shield 1TB 외장 SSD",
    "price": 144500,
    "oldPrice": 170500,
    "stock": 208,
    "sales": 7980,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 12,
    "categoryKey": "computer",
    "name": "Logitech G Pro X Superlight 鼠标",
    "nameZh": "Logitech G Pro X Superlight 鼠标",
    "nameEn": "Logitech G Pro X Superlight Mouse",
    "nameKo": "로지텍 G Pro X Superlight 마우스",
    "price": 175800,
    "oldPrice": 216200,
    "stock": 227,
    "sales": 8713,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 13,
    "categoryKey": "computer",
    "name": "Apple MacBook Air 13英寸 M2 256GB 午夜色 限量款",
    "nameZh": "Apple MacBook Air 13英寸 M2 256GB 午夜色 限量款",
    "nameEn": "Apple MacBook Air 13-inch M2 256GB Midnight Limited Edition",
    "nameKo": "Apple MacBook Air 13형 M2 256GB 미드나이트 한정판",
    "price": 1320500,
    "oldPrice": 1492200,
    "stock": 25,
    "sales": 1647,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 14,
    "categoryKey": "computer",
    "name": "LG UltraWide 34英寸 IPS 显示器 新款",
    "nameZh": "LG UltraWide 34英寸 IPS 显示器 新款",
    "nameEn": "LG UltraWide 34-inch IPS Monitor New Arrival",
    "nameKo": "LG 울트라와이드 34형 IPS 모니터 신상품",
    "price": 509000,
    "oldPrice": 600600,
    "stock": 44,
    "sales": 2380,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 15,
    "categoryKey": "computer",
    "name": "Keychron K8 Pro 无线机械键盘 限量款",
    "nameZh": "Keychron K8 Pro 无线机械键盘 限量款",
    "nameEn": "Keychron K8 Pro Wireless Mechanical Keyboard Limited Edition",
    "nameKo": "키크론 K8 Pro 무선 기계식 키보드 한정판",
    "price": 133400,
    "oldPrice": 164100,
    "stock": 63,
    "sales": 3113,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 16,
    "categoryKey": "computer",
    "name": "Logitech MX Master 3S 无线鼠标 新款",
    "nameZh": "Logitech MX Master 3S 无线鼠标 新款",
    "nameEn": "Logitech MX Master 3S Wireless Mouse New Arrival",
    "nameKo": "로지텍 MX Master 3S 무선 마우스 신상품",
    "price": 132900,
    "oldPrice": 170100,
    "stock": 82,
    "sales": 3846,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1527814050087-3793815479db?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 17,
    "categoryKey": "computer",
    "name": "Samsung Galaxy Book4 15.6英寸笔记本 限量款",
    "nameZh": "Samsung Galaxy Book4 15.6英寸笔记本 限量款",
    "nameEn": "Samsung Galaxy Book4 15.6-inch Laptop Limited Edition",
    "nameKo": "삼성 갤럭시북4 15.6형 노트북 한정판",
    "price": 1154300,
    "oldPrice": 1535200,
    "stock": 101,
    "sales": 4579,
    "rating": "4.7",
    "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 18,
    "categoryKey": "computer",
    "name": "ASUS Zenbook 14 OLED 512GB 新款",
    "nameZh": "ASUS Zenbook 14 OLED 512GB 新款",
    "nameEn": "ASUS Zenbook 14 OLED 512GB New Arrival",
    "nameKo": "ASUS 젠북 14 OLED 512GB 신상품",
    "price": 1351000,
    "oldPrice": 1567200,
    "stock": 120,
    "sales": 5312,
    "rating": "4.8",
    "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 19,
    "categoryKey": "computer",
    "name": "Dell XPS 13 Plus 512GB 银色 限量款",
    "nameZh": "Dell XPS 13 Plus 512GB 银色 限量款",
    "nameEn": "Dell XPS 13 Plus 512GB Silver Limited Edition",
    "nameKo": "Dell XPS 13 Plus 512GB 실버 한정판",
    "price": 1754200,
    "oldPrice": 2122600,
    "stock": 139,
    "sales": 6045,
    "rating": "4.9",
    "image": "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 20,
    "categoryKey": "computer",
    "name": "Lenovo ThinkPad X1 Carbon 14英寸 新款",
    "nameZh": "Lenovo ThinkPad X1 Carbon 14英寸 新款",
    "nameEn": "Lenovo ThinkPad X1 Carbon 14-inch New Arrival",
    "nameKo": "레노버 ThinkPad X1 Carbon 14형 신상품",
    "price": 1738800,
    "oldPrice": 2190900,
    "stock": 158,
    "sales": 6778,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 21,
    "categoryKey": "computer",
    "name": "HP Pavilion Plus 14 OLED 笔记本 限量款",
    "nameZh": "HP Pavilion Plus 14 OLED 笔记本 限量款",
    "nameEn": "HP Pavilion Plus 14 OLED Laptop Limited Edition",
    "nameKo": "HP 파빌리온 플러스 14 OLED 노트북 한정판",
    "price": 1079100,
    "oldPrice": 1413600,
    "stock": 177,
    "sales": 7511,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 22,
    "categoryKey": "computer",
    "name": "Razer BlackWidow V4 机械键盘 新款",
    "nameZh": "Razer BlackWidow V4 机械键盘 新款",
    "nameEn": "Razer BlackWidow V4 Mechanical Keyboard New Arrival",
    "nameKo": "레이저 BlackWidow V4 기계식 키보드 신상품",
    "price": 213000,
    "oldPrice": 242800,
    "stock": 196,
    "sales": 8244,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 23,
    "categoryKey": "computer",
    "name": "Samsung T7 Shield 1TB 移动SSD 限量款",
    "nameZh": "Samsung T7 Shield 1TB 移动SSD 限量款",
    "nameEn": "Samsung T7 Shield 1TB Portable SSD Limited Edition",
    "nameKo": "삼성 T7 Shield 1TB 외장 SSD 한정판",
    "price": 149000,
    "oldPrice": 177300,
    "stock": 215,
    "sales": 8977,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 24,
    "categoryKey": "computer",
    "name": "Logitech G Pro X Superlight 鼠标 新款",
    "nameZh": "Logitech G Pro X Superlight 鼠标 新款",
    "nameEn": "Logitech G Pro X Superlight Mouse New Arrival",
    "nameKo": "로지텍 G Pro X Superlight 마우스 신상품",
    "price": 158900,
    "oldPrice": 197000,
    "stock": 234,
    "sales": 9710,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 25,
    "categoryKey": "electronics",
    "name": "Samsung Galaxy S24 256GB 紫色",
    "nameZh": "Samsung Galaxy S24 256GB 紫色",
    "nameEn": "Samsung Galaxy S24 256GB Violet",
    "nameKo": "삼성 갤럭시 S24 256GB 바이올렛",
    "price": 966000,
    "oldPrice": 1081900,
    "stock": 18,
    "sales": 650,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 26,
    "categoryKey": "electronics",
    "name": "Apple AirPods Pro 2 主动降噪耳机",
    "nameZh": "Apple AirPods Pro 2 主动降噪耳机",
    "nameEn": "Apple AirPods Pro 2 Noise Cancelling Earbuds",
    "nameKo": "애플 AirPods Pro 2 노이즈 캔슬링 이어폰",
    "price": 286100,
    "oldPrice": 334700,
    "stock": 37,
    "sales": 1383,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 27,
    "categoryKey": "electronics",
    "name": "Apple Watch Series 9 GPS 45mm",
    "nameZh": "Apple Watch Series 9 GPS 45mm",
    "nameEn": "Apple Watch Series 9 GPS 45mm",
    "nameKo": "애플 워치 Series 9 GPS 45mm",
    "price": 557100,
    "oldPrice": 679700,
    "stock": 56,
    "sales": 2116,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 28,
    "categoryKey": "electronics",
    "name": "Apple iPhone 15 Pro 128GB 原色钛金属",
    "nameZh": "Apple iPhone 15 Pro 128GB 原色钛金属",
    "nameEn": "Apple iPhone 15 Pro 128GB Natural Titanium",
    "nameKo": "애플 iPhone 15 Pro 128GB 내추럴 티타늄",
    "price": 1390000,
    "oldPrice": 1765300,
    "stock": 75,
    "sales": 2849,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 29,
    "categoryKey": "electronics",
    "name": "Samsung Galaxy Z Flip5 256GB",
    "nameZh": "Samsung Galaxy Z Flip5 256GB",
    "nameEn": "Samsung Galaxy Z Flip5 256GB",
    "nameKo": "삼성 갤럭시 Z Flip5 256GB",
    "price": 1118600,
    "oldPrice": 1476600,
    "stock": 94,
    "sales": 3582,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 30,
    "categoryKey": "electronics",
    "name": "Anker Nano 30W USB-C 快充头",
    "nameZh": "Anker Nano 30W USB-C 快充头",
    "nameEn": "Anker Nano 30W USB-C Charger",
    "nameKo": "앤커 Nano 30W USB-C 충전기",
    "price": 30200,
    "oldPrice": 34700,
    "stock": 113,
    "sales": 4315,
    "rating": "4.7",
    "image": "https://images.unsplash.com/photo-1512499617640-c2f999098c01?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 31,
    "categoryKey": "electronics",
    "name": "Sony WH-1000XM5 降噪耳机",
    "nameZh": "Sony WH-1000XM5 降噪耳机",
    "nameEn": "Sony WH-1000XM5 Noise Cancelling Headphones",
    "nameKo": "소니 WH-1000XM5 노이즈 캔슬링 헤드폰",
    "price": 407600,
    "oldPrice": 489100,
    "stock": 132,
    "sales": 5048,
    "rating": "4.8",
    "image": "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 32,
    "categoryKey": "electronics",
    "name": "JBL Flip 6 便携蓝牙音箱",
    "nameZh": "JBL Flip 6 便携蓝牙音箱",
    "nameEn": "JBL Flip 6 Portable Bluetooth Speaker",
    "nameKo": "JBL Flip 6 휴대용 블루투스 스피커",
    "price": 152000,
    "oldPrice": 190000,
    "stock": 151,
    "sales": 5781,
    "rating": "4.9",
    "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 33,
    "categoryKey": "electronics",
    "name": "Xiaomi 13T Pro 256GB 黑色",
    "nameZh": "Xiaomi 13T Pro 256GB 黑色",
    "nameEn": "Xiaomi 13T Pro 256GB Black",
    "nameKo": "샤오미 13T Pro 256GB 블랙",
    "price": 767000,
    "oldPrice": 997100,
    "stock": 170,
    "sales": 6514,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 34,
    "categoryKey": "electronics",
    "name": "Nintendo Switch OLED 白色套装",
    "nameZh": "Nintendo Switch OLED 白色套装",
    "nameEn": "Nintendo Switch OLED White Console",
    "nameKo": "닌텐도 스위치 OLED 화이트 본체",
    "price": 427400,
    "oldPrice": 483000,
    "stock": 189,
    "sales": 7247,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 35,
    "categoryKey": "electronics",
    "name": "Canon EOS R50 微单相机套机",
    "nameZh": "Canon EOS R50 微单相机套机",
    "nameEn": "Canon EOS R50 Mirrorless Camera Kit",
    "nameKo": "캐논 EOS R50 미러리스 카메라 키트",
    "price": 872000,
    "oldPrice": 1029000,
    "stock": 208,
    "sales": 7980,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1585386959984-a41552231658?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 36,
    "categoryKey": "electronics",
    "name": "DJI Osmo Mobile 6 手机云台",
    "nameZh": "DJI Osmo Mobile 6 手机云台",
    "nameEn": "DJI Osmo Mobile 6 Smartphone Gimbal",
    "nameKo": "DJI Osmo Mobile 6 스마트폰 짐벌",
    "price": 196600,
    "oldPrice": 241800,
    "stock": 227,
    "sales": 8713,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 37,
    "categoryKey": "electronics",
    "name": "Samsung Galaxy S24 256GB 紫色 限量款",
    "nameZh": "Samsung Galaxy S24 256GB 紫色 限量款",
    "nameEn": "Samsung Galaxy S24 256GB Violet Limited Edition",
    "nameKo": "삼성 갤럭시 S24 256GB 바이올렛 한정판",
    "price": 997500,
    "oldPrice": 1127200,
    "stock": 25,
    "sales": 1647,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 38,
    "categoryKey": "electronics",
    "name": "Apple AirPods Pro 2 主动降噪耳机 新款",
    "nameZh": "Apple AirPods Pro 2 主动降噪耳机 新款",
    "nameEn": "Apple AirPods Pro 2 Noise Cancelling Earbuds New Arrival",
    "nameKo": "애플 AirPods Pro 2 노이즈 캔슬링 이어폰 신상품",
    "price": 294800,
    "oldPrice": 347900,
    "stock": 44,
    "sales": 2380,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 39,
    "categoryKey": "electronics",
    "name": "Apple Watch Series 9 GPS 45mm 限量款",
    "nameZh": "Apple Watch Series 9 GPS 45mm 限量款",
    "nameEn": "Apple Watch Series 9 GPS 45mm Limited Edition",
    "nameKo": "애플 워치 Series 9 GPS 45mm 한정판",
    "price": 575000,
    "oldPrice": 707300,
    "stock": 63,
    "sales": 3113,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 40,
    "categoryKey": "electronics",
    "name": "Apple iPhone 15 Pro 128GB 原色钛金属 新款",
    "nameZh": "Apple iPhone 15 Pro 128GB 原色钛金属 新款",
    "nameEn": "Apple iPhone 15 Pro 128GB Natural Titanium New Arrival",
    "nameKo": "애플 iPhone 15 Pro 128GB 내추럴 티타늄 신상품",
    "price": 1431700,
    "oldPrice": 1832600,
    "stock": 82,
    "sales": 3846,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 41,
    "categoryKey": "electronics",
    "name": "Samsung Galaxy Z Flip5 256GB 限量款",
    "nameZh": "Samsung Galaxy Z Flip5 256GB 限量款",
    "nameEn": "Samsung Galaxy Z Flip5 256GB Limited Edition",
    "nameKo": "삼성 갤럭시 Z Flip5 256GB 한정판",
    "price": 1154300,
    "oldPrice": 1535200,
    "stock": 101,
    "sales": 4579,
    "rating": "4.7",
    "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 42,
    "categoryKey": "electronics",
    "name": "Anker Nano 30W USB-C 快充头 新款",
    "nameZh": "Anker Nano 30W USB-C 快充头 新款",
    "nameEn": "Anker Nano 30W USB-C Charger New Arrival",
    "nameKo": "앤커 Nano 30W USB-C 충전기 신상품",
    "price": 31100,
    "oldPrice": 36100,
    "stock": 120,
    "sales": 5312,
    "rating": "4.8",
    "image": "https://images.unsplash.com/photo-1512499617640-c2f999098c01?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 43,
    "categoryKey": "electronics",
    "name": "Sony WH-1000XM5 降噪耳机 限量款",
    "nameZh": "Sony WH-1000XM5 降噪耳机 限量款",
    "nameEn": "Sony WH-1000XM5 Noise Cancelling Headphones Limited Edition",
    "nameKo": "소니 WH-1000XM5 노이즈 캔슬링 헤드폰 한정판",
    "price": 420400,
    "oldPrice": 508700,
    "stock": 139,
    "sales": 6045,
    "rating": "4.9",
    "image": "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 44,
    "categoryKey": "electronics",
    "name": "JBL Flip 6 便携蓝牙音箱 新款",
    "nameZh": "JBL Flip 6 便携蓝牙音箱 新款",
    "nameEn": "JBL Flip 6 Portable Bluetooth Speaker New Arrival",
    "nameKo": "JBL Flip 6 휴대용 블루투스 스피커 신상품",
    "price": 137100,
    "oldPrice": 172700,
    "stock": 158,
    "sales": 6778,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 45,
    "categoryKey": "electronics",
    "name": "Xiaomi 13T Pro 256GB 黑色 限量款",
    "nameZh": "Xiaomi 13T Pro 256GB 黑色 限量款",
    "nameEn": "Xiaomi 13T Pro 256GB Black Limited Edition",
    "nameKo": "샤오미 13T Pro 256GB 블랙 한정판",
    "price": 791000,
    "oldPrice": 1036200,
    "stock": 177,
    "sales": 7511,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 46,
    "categoryKey": "electronics",
    "name": "Nintendo Switch OLED 白色套装 新款",
    "nameZh": "Nintendo Switch OLED 白色套装 新款",
    "nameEn": "Nintendo Switch OLED White Console New Arrival",
    "nameKo": "닌텐도 스위치 OLED 화이트 본체 신상품",
    "price": 386000,
    "oldPrice": 440000,
    "stock": 196,
    "sales": 8244,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 47,
    "categoryKey": "electronics",
    "name": "Canon EOS R50 微单相机套机 限量款",
    "nameZh": "Canon EOS R50 微单相机套机 限量款",
    "nameEn": "Canon EOS R50 Mirrorless Camera Kit Limited Edition",
    "nameKo": "캐논 EOS R50 미러리스 카메라 키트 한정판",
    "price": 899000,
    "oldPrice": 1069800,
    "stock": 215,
    "sales": 8977,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1585386959984-a41552231658?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 48,
    "categoryKey": "electronics",
    "name": "DJI Osmo Mobile 6 手机云台 新款",
    "nameZh": "DJI Osmo Mobile 6 手机云台 新款",
    "nameEn": "DJI Osmo Mobile 6 Smartphone Gimbal New Arrival",
    "nameKo": "DJI Osmo Mobile 6 스마트폰 짐벌 신상품",
    "price": 177700,
    "oldPrice": 220300,
    "stock": 234,
    "sales": 9710,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 49,
    "categoryKey": "sports",
    "name": "Manduka PRO 防滑瑜伽垫 6mm",
    "nameZh": "Manduka PRO 防滑瑜伽垫 6mm",
    "nameEn": "Manduka PRO Non-Slip Yoga Mat 6mm",
    "nameKo": "만두카 PRO 논슬립 요가매트 6mm",
    "price": 118700,
    "oldPrice": 132900,
    "stock": 18,
    "sales": 650,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 50,
    "categoryKey": "sports",
    "name": "Snow Peak Amenity Dome 露营帐篷",
    "nameZh": "Snow Peak Amenity Dome 露营帐篷",
    "nameEn": "Snow Peak Amenity Dome Camping Tent",
    "nameKo": "스노우피크 어메니티 돔 캠핑 텐트",
    "price": 395000,
    "oldPrice": 462200,
    "stock": 37,
    "sales": 1383,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 51,
    "categoryKey": "sports",
    "name": "Nike Strength 训练手套 黑色",
    "nameZh": "Nike Strength 训练手套 黑色",
    "nameEn": "Nike Strength Training Gloves Black",
    "nameKo": "나이키 스트렝스 트레이닝 장갑 블랙",
    "price": 36300,
    "oldPrice": 44300,
    "stock": 56,
    "sales": 2116,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 52,
    "categoryKey": "sports",
    "name": "TheraBand 阻力训练带套装",
    "nameZh": "TheraBand 阻力训练带套装",
    "nameEn": "TheraBand Resistance Band Set",
    "nameKo": "테라밴드 저항 밴드 세트",
    "price": 29000,
    "oldPrice": 36800,
    "stock": 75,
    "sales": 2849,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 53,
    "categoryKey": "sports",
    "name": "Nike Zoom Pegasus 40 跑步鞋",
    "nameZh": "Nike Zoom Pegasus 40 跑步鞋",
    "nameEn": "Nike Zoom Pegasus 40 Running Shoes",
    "nameKo": "나이키 줌 페가수스 40 러닝화",
    "price": 130700,
    "oldPrice": 172500,
    "stock": 94,
    "sales": 3582,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 54,
    "categoryKey": "sports",
    "name": "Wilson NBA Authentic 篮球 7号",
    "nameZh": "Wilson NBA Authentic 篮球 7号",
    "nameEn": "Wilson NBA Authentic Basketball Size 7",
    "nameKo": "윌슨 NBA Authentic 농구공 7호",
    "price": 49500,
    "oldPrice": 56900,
    "stock": 113,
    "sales": 4315,
    "rating": "4.7",
    "image": "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 55,
    "categoryKey": "sports",
    "name": "Garmin Forerunner 265 运动手表",
    "nameZh": "Garmin Forerunner 265 运动手表",
    "nameEn": "Garmin Forerunner 265 Sports Watch",
    "nameKo": "가민 Forerunner 265 스포츠 워치",
    "price": 569000,
    "oldPrice": 682800,
    "stock": 132,
    "sales": 5048,
    "rating": "4.8",
    "image": "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 56,
    "categoryKey": "sports",
    "name": "Columbia 防晒徒步帽 卡其色",
    "nameZh": "Columbia 防晒徒步帽 卡其色",
    "nameEn": "Columbia Sun Protection Hiking Cap Khaki",
    "nameKo": "컬럼비아 자외선 차단 하이킹 캡 카키",
    "price": 35700,
    "oldPrice": 44600,
    "stock": 151,
    "sales": 5781,
    "rating": "4.9",
    "image": "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 57,
    "categoryKey": "sports",
    "name": "Decathlon 20kg 可调节哑铃套装",
    "nameZh": "Decathlon 20kg 可调节哑铃套装",
    "nameEn": "Decathlon 20kg Adjustable Dumbbell Set",
    "nameKo": "데카트론 20kg 조절식 덤벨 세트",
    "price": 114200,
    "oldPrice": 148500,
    "stock": 170,
    "sales": 6514,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 58,
    "categoryKey": "sports",
    "name": "Adidas Training Essentials 运动包",
    "nameZh": "Adidas Training Essentials 运动包",
    "nameEn": "Adidas Training Essentials Duffel Bag",
    "nameKo": "아디다스 트레이닝 에센셜 더플백",
    "price": 60800,
    "oldPrice": 68700,
    "stock": 189,
    "sales": 7247,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 59,
    "categoryKey": "sports",
    "name": "Molten V5M5000 排球",
    "nameZh": "Molten V5M5000 排球",
    "nameEn": "Molten V5M5000 Volleyball",
    "nameKo": "몰텐 V5M5000 배구공",
    "price": 76600,
    "oldPrice": 90400,
    "stock": 208,
    "sales": 7980,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 60,
    "categoryKey": "sports",
    "name": "Black Diamond Trail Trekking Pole",
    "nameZh": "Black Diamond Trail Trekking Pole",
    "nameEn": "Black Diamond Trail Trekking Pole",
    "nameKo": "블랙다이아몬드 트레일 트레킹 폴",
    "price": 103000,
    "oldPrice": 126700,
    "stock": 227,
    "sales": 8713,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1526401485004-2aa3a0fc8a3a?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 61,
    "categoryKey": "sports",
    "name": "Manduka PRO 防滑瑜伽垫 6mm 限量款",
    "nameZh": "Manduka PRO 防滑瑜伽垫 6mm 限量款",
    "nameEn": "Manduka PRO Non-Slip Yoga Mat 6mm Limited Edition",
    "nameKo": "만두카 PRO 논슬립 요가매트 6mm 한정판",
    "price": 122600,
    "oldPrice": 138500,
    "stock": 25,
    "sales": 1647,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 62,
    "categoryKey": "sports",
    "name": "Snow Peak Amenity Dome 露营帐篷 新款",
    "nameZh": "Snow Peak Amenity Dome 露营帐篷 新款",
    "nameEn": "Snow Peak Amenity Dome Camping Tent New Arrival",
    "nameKo": "스노우피크 어메니티 돔 캠핑 텐트 신상품",
    "price": 407000,
    "oldPrice": 480300,
    "stock": 44,
    "sales": 2380,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 63,
    "categoryKey": "sports",
    "name": "Nike Strength 训练手套 黑色 限量款",
    "nameZh": "Nike Strength 训练手套 黑色 限量款",
    "nameEn": "Nike Strength Training Gloves Black Limited Edition",
    "nameKo": "나이키 스트렝스 트레이닝 장갑 블랙 한정판",
    "price": 37400,
    "oldPrice": 46000,
    "stock": 63,
    "sales": 3113,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 64,
    "categoryKey": "sports",
    "name": "TheraBand 阻力训练带套装 新款",
    "nameZh": "TheraBand 阻力训练带套装 新款",
    "nameEn": "TheraBand Resistance Band Set New Arrival",
    "nameKo": "테라밴드 저항 밴드 세트 신상품",
    "price": 29900,
    "oldPrice": 38300,
    "stock": 82,
    "sales": 3846,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 65,
    "categoryKey": "sports",
    "name": "Nike Zoom Pegasus 40 跑步鞋 限量款",
    "nameZh": "Nike Zoom Pegasus 40 跑步鞋 限量款",
    "nameEn": "Nike Zoom Pegasus 40 Running Shoes Limited Edition",
    "nameKo": "나이키 줌 페가수스 40 러닝화 한정판",
    "price": 134800,
    "oldPrice": 179300,
    "stock": 101,
    "sales": 4579,
    "rating": "4.7",
    "image": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 66,
    "categoryKey": "sports",
    "name": "Wilson NBA Authentic 篮球 7号 新款",
    "nameZh": "Wilson NBA Authentic 篮球 7号 新款",
    "nameEn": "Wilson NBA Authentic Basketball Size 7 New Arrival",
    "nameKo": "윌슨 NBA Authentic 농구공 7호 신상품",
    "price": 51000,
    "oldPrice": 59200,
    "stock": 120,
    "sales": 5312,
    "rating": "4.8",
    "image": "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 67,
    "categoryKey": "sports",
    "name": "Garmin Forerunner 265 运动手表 限量款",
    "nameZh": "Garmin Forerunner 265 运动手表 限量款",
    "nameEn": "Garmin Forerunner 265 Sports Watch Limited Edition",
    "nameKo": "가민 Forerunner 265 스포츠 워치 한정판",
    "price": 587000,
    "oldPrice": 710300,
    "stock": 139,
    "sales": 6045,
    "rating": "4.9",
    "image": "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 68,
    "categoryKey": "sports",
    "name": "Columbia 防晒徒步帽 卡其色 新款",
    "nameZh": "Columbia 防晒徒步帽 卡其色 新款",
    "nameEn": "Columbia Sun Protection Hiking Cap Khaki New Arrival",
    "nameKo": "컬럼비아 자외선 차단 하이킹 캡 카키 신상품",
    "price": 32200,
    "oldPrice": 40600,
    "stock": 158,
    "sales": 6778,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 69,
    "categoryKey": "sports",
    "name": "Decathlon 20kg 可调节哑铃套装 限量款",
    "nameZh": "Decathlon 20kg 可调节哑铃套装 限量款",
    "nameEn": "Decathlon 20kg Adjustable Dumbbell Set Limited Edition",
    "nameKo": "데카트론 20kg 조절식 덤벨 세트 한정판",
    "price": 117800,
    "oldPrice": 154300,
    "stock": 177,
    "sales": 7511,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 70,
    "categoryKey": "sports",
    "name": "Adidas Training Essentials 运动包 新款",
    "nameZh": "Adidas Training Essentials 运动包 新款",
    "nameEn": "Adidas Training Essentials Duffel Bag New Arrival",
    "nameKo": "아디다스 트레이닝 에센셜 더플백 신상품",
    "price": 54900,
    "oldPrice": 62600,
    "stock": 196,
    "sales": 8244,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 71,
    "categoryKey": "sports",
    "name": "Molten V5M5000 排球 限量款",
    "nameZh": "Molten V5M5000 排球 限量款",
    "nameEn": "Molten V5M5000 Volleyball Limited Edition",
    "nameKo": "몰텐 V5M5000 배구공 한정판",
    "price": 79000,
    "oldPrice": 94000,
    "stock": 215,
    "sales": 8977,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 72,
    "categoryKey": "sports",
    "name": "Black Diamond Trail Trekking Pole 新款",
    "nameZh": "Black Diamond Trail Trekking Pole 新款",
    "nameEn": "Black Diamond Trail Trekking Pole New Arrival",
    "nameKo": "블랙다이아몬드 트레일 트레킹 폴 신상품",
    "price": 93100,
    "oldPrice": 115400,
    "stock": 234,
    "sales": 9710,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1526401485004-2aa3a0fc8a3a?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 73,
    "categoryKey": "health",
    "name": "KGC 正官庄红参浓缩液 240g",
    "nameZh": "KGC 正官庄红参浓缩液 240g",
    "nameEn": "KGC CheongKwanJang Red Ginseng Extract 240g",
    "nameKo": "정관장 홍삼정 240g",
    "price": 173900,
    "oldPrice": 194800,
    "stock": 18,
    "sales": 650,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 74,
    "categoryKey": "health",
    "name": "Nutri D-Day 每日综合维生素 60片",
    "nameZh": "Nutri D-Day 每日综合维生素 60片",
    "nameEn": "Nutri D-Day Daily Multivitamin 60 Tablets",
    "nameKo": "뉴트리디데이 데일리 멀티비타민 60정",
    "price": 24700,
    "oldPrice": 28900,
    "stock": 37,
    "sales": 1383,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 75,
    "categoryKey": "health",
    "name": "Centrum 成人综合维生素 100片",
    "nameZh": "Centrum 成人综合维生素 100片",
    "nameEn": "Centrum Adult Multivitamin 100 Tablets",
    "nameKo": "센트룸 성인 멀티비타민 100정",
    "price": 39900,
    "oldPrice": 48700,
    "stock": 56,
    "sales": 2116,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 76,
    "categoryKey": "health",
    "name": "GNC 乳清蛋白粉 巧克力味 2kg",
    "nameZh": "GNC 乳清蛋白粉 巧克力味 2kg",
    "nameEn": "GNC Whey Protein Chocolate 2kg",
    "nameKo": "GNC 웨이 프로틴 초콜릿 2kg",
    "price": 79000,
    "oldPrice": 100300,
    "stock": 75,
    "sales": 2849,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1550572017-edd951b55104?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 77,
    "categoryKey": "health",
    "name": "Osulloc 有机绿茶茶包 20入",
    "nameZh": "Osulloc 有机绿茶茶包 20入",
    "nameEn": "Osulloc Organic Green Tea Bags 20pcs",
    "nameKo": "오설록 유기농 녹차 티백 20입",
    "price": 17800,
    "oldPrice": 23500,
    "stock": 94,
    "sales": 3582,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 78,
    "categoryKey": "health",
    "name": "Lacto-Fit 益生菌黄金版 50包",
    "nameZh": "Lacto-Fit 益生菌黄金版 50包",
    "nameEn": "Lacto-Fit Probiotics Gold 50 Sticks",
    "nameKo": "락토핏 생유산균 골드 50포",
    "price": 24100,
    "oldPrice": 27700,
    "stock": 113,
    "sales": 4315,
    "rating": "4.7",
    "image": "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 79,
    "categoryKey": "health",
    "name": "CJ BYO 益生菌女性护理 30包",
    "nameZh": "CJ BYO 益生菌女性护理 30包",
    "nameEn": "CJ BYO Women Probiotics 30 Sticks",
    "nameKo": "CJ BYO 여성 유산균 30포",
    "price": 37900,
    "oldPrice": 45500,
    "stock": 132,
    "sales": 5048,
    "rating": "4.8",
    "image": "https://images.unsplash.com/photo-1563213126-a4273aed2016?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 80,
    "categoryKey": "health",
    "name": "California Gold Omega-3 鱼油 100粒",
    "nameZh": "California Gold Omega-3 鱼油 100粒",
    "nameEn": "California Gold Omega-3 Fish Oil 100 Softgels",
    "nameKo": "캘리포니아 골드 오메가3 100캡슐",
    "price": 30500,
    "oldPrice": 38100,
    "stock": 151,
    "sales": 5781,
    "rating": "4.9",
    "image": "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 81,
    "categoryKey": "health",
    "name": "Nalgene 运动水壶 1L 透明",
    "nameZh": "Nalgene 运动水壶 1L 透明",
    "nameEn": "Nalgene Sports Water Bottle 1L Clear",
    "nameKo": "날진 스포츠 물병 1L 투명",
    "price": 19100,
    "oldPrice": 24800,
    "stock": 170,
    "sales": 6514,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 82,
    "categoryKey": "health",
    "name": "Kirkland 维生素C 1000mg 500片",
    "nameZh": "Kirkland 维生素C 1000mg 500片",
    "nameEn": "Kirkland Vitamin C 1000mg 500 Tablets",
    "nameKo": "커클랜드 비타민C 1000mg 500정",
    "price": 33900,
    "oldPrice": 38300,
    "stock": 189,
    "sales": 7247,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 83,
    "categoryKey": "health",
    "name": "Now Foods 镁片 180粒",
    "nameZh": "Now Foods 镁片 180粒",
    "nameEn": "Now Foods Magnesium 180 Tablets",
    "nameKo": "나우푸드 마그네슘 180정",
    "price": 22200,
    "oldPrice": 26200,
    "stock": 208,
    "sales": 7980,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 84,
    "categoryKey": "health",
    "name": "Doctor’s Best 叶黄素 120粒",
    "nameZh": "Doctor’s Best 叶黄素 120粒",
    "nameEn": "Doctor’s Best Lutein 120 Softgels",
    "nameKo": "닥터스베스트 루테인 120캡슐",
    "price": 29000,
    "oldPrice": 35700,
    "stock": 227,
    "sales": 8713,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 85,
    "categoryKey": "health",
    "name": "KGC 正官庄红参浓缩液 240g 限量款",
    "nameZh": "KGC 正官庄红参浓缩液 240g 限量款",
    "nameEn": "KGC CheongKwanJang Red Ginseng Extract 240g Limited Edition",
    "nameKo": "정관장 홍삼정 240g 한정판",
    "price": 179600,
    "oldPrice": 202900,
    "stock": 25,
    "sales": 1647,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 86,
    "categoryKey": "health",
    "name": "Nutri D-Day 每日综合维生素 60片 新款",
    "nameZh": "Nutri D-Day 每日综合维生素 60片 新款",
    "nameEn": "Nutri D-Day Daily Multivitamin 60 Tablets New Arrival",
    "nameKo": "뉴트리디데이 데일리 멀티비타민 60정 신상품",
    "price": 25400,
    "oldPrice": 30000,
    "stock": 44,
    "sales": 2380,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 87,
    "categoryKey": "health",
    "name": "Centrum 成人综合维生素 100片 限量款",
    "nameZh": "Centrum 成人综合维生素 100片 限量款",
    "nameEn": "Centrum Adult Multivitamin 100 Tablets Limited Edition",
    "nameKo": "센트룸 성인 멀티비타민 100정 한정판",
    "price": 41200,
    "oldPrice": 50700,
    "stock": 63,
    "sales": 3113,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 88,
    "categoryKey": "health",
    "name": "GNC 乳清蛋白粉 巧克力味 2kg 新款",
    "nameZh": "GNC 乳清蛋白粉 巧克力味 2kg 新款",
    "nameEn": "GNC Whey Protein Chocolate 2kg New Arrival",
    "nameKo": "GNC 웨이 프로틴 초콜릿 2kg 신상품",
    "price": 81400,
    "oldPrice": 104200,
    "stock": 82,
    "sales": 3846,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1550572017-edd951b55104?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 89,
    "categoryKey": "health",
    "name": "Osulloc 有机绿茶茶包 20入 限量款",
    "nameZh": "Osulloc 有机绿茶茶包 20入 限量款",
    "nameEn": "Osulloc Organic Green Tea Bags 20pcs Limited Edition",
    "nameKo": "오설록 유기농 녹차 티백 20입 한정판",
    "price": 18300,
    "oldPrice": 24300,
    "stock": 101,
    "sales": 4579,
    "rating": "4.7",
    "image": "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 90,
    "categoryKey": "health",
    "name": "Lacto-Fit 益生菌黄金版 50包 新款",
    "nameZh": "Lacto-Fit 益生菌黄金版 50包 新款",
    "nameEn": "Lacto-Fit Probiotics Gold 50 Sticks New Arrival",
    "nameKo": "락토핏 생유산균 골드 50포 신상품",
    "price": 24900,
    "oldPrice": 28900,
    "stock": 120,
    "sales": 5312,
    "rating": "4.8",
    "image": "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 91,
    "categoryKey": "health",
    "name": "CJ BYO 益生菌女性护理 30包 限量款",
    "nameZh": "CJ BYO 益生菌女性护理 30包 限量款",
    "nameEn": "CJ BYO Women Probiotics 30 Sticks Limited Edition",
    "nameKo": "CJ BYO 여성 유산균 30포 한정판",
    "price": 39100,
    "oldPrice": 47300,
    "stock": 139,
    "sales": 6045,
    "rating": "4.9",
    "image": "https://images.unsplash.com/photo-1563213126-a4273aed2016?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 92,
    "categoryKey": "health",
    "name": "California Gold Omega-3 鱼油 100粒 新款",
    "nameZh": "California Gold Omega-3 鱼油 100粒 新款",
    "nameEn": "California Gold Omega-3 Fish Oil 100 Softgels New Arrival",
    "nameKo": "캘리포니아 골드 오메가3 100캡슐 신상품",
    "price": 27500,
    "oldPrice": 34700,
    "stock": 158,
    "sales": 6778,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 93,
    "categoryKey": "health",
    "name": "Nalgene 运动水壶 1L 透明 限量款",
    "nameZh": "Nalgene 运动水壶 1L 透明 限量款",
    "nameEn": "Nalgene Sports Water Bottle 1L Clear Limited Edition",
    "nameKo": "날진 스포츠 물병 1L 투명 한정판",
    "price": 19700,
    "oldPrice": 25800,
    "stock": 177,
    "sales": 7511,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 94,
    "categoryKey": "health",
    "name": "Kirkland 维生素C 1000mg 500片 新款",
    "nameZh": "Kirkland 维生素C 1000mg 500片 新款",
    "nameEn": "Kirkland Vitamin C 1000mg 500 Tablets New Arrival",
    "nameKo": "커클랜드 비타민C 1000mg 500정 신상품",
    "price": 30600,
    "oldPrice": 34900,
    "stock": 196,
    "sales": 8244,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 95,
    "categoryKey": "health",
    "name": "Now Foods 镁片 180粒 限量款",
    "nameZh": "Now Foods 镁片 180粒 限量款",
    "nameEn": "Now Foods Magnesium 180 Tablets Limited Edition",
    "nameKo": "나우푸드 마그네슘 180정 한정판",
    "price": 22900,
    "oldPrice": 27300,
    "stock": 215,
    "sales": 8977,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 96,
    "categoryKey": "health",
    "name": "Doctor’s Best 叶黄素 120粒 新款",
    "nameZh": "Doctor’s Best 叶黄素 120粒 新款",
    "nameEn": "Doctor’s Best Lutein 120 Softgels New Arrival",
    "nameKo": "닥터스베스트 루테인 120캡슐 신상품",
    "price": 26200,
    "oldPrice": 32500,
    "stock": 234,
    "sales": 9710,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 97,
    "categoryKey": "fashion",
    "name": "MUSINSA Standard 羊毛混纺大衣 黑色",
    "nameZh": "MUSINSA Standard 羊毛混纺大衣 黑色",
    "nameEn": "MUSINSA Standard Wool Blend Coat Black",
    "nameKo": "무신사 스탠다드 울 블렌드 코트 블랙",
    "price": 118700,
    "oldPrice": 132900,
    "stock": 18,
    "sales": 650,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 98,
    "categoryKey": "fashion",
    "name": "Matin Kim 经典皮革单肩包 黑色",
    "nameZh": "Matin Kim 经典皮革单肩包 黑色",
    "nameEn": "Matin Kim Classic Leather Shoulder Bag Black",
    "nameKo": "마뗑킴 클래식 레더 숄더백 블랙",
    "price": 157400,
    "oldPrice": 184200,
    "stock": 37,
    "sales": 1383,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 99,
    "categoryKey": "fashion",
    "name": "Fennec 半月皮革钱包 棕色",
    "nameZh": "Fennec 半月皮革钱包 棕色",
    "nameEn": "Fennec Half-Moon Leather Wallet Brown",
    "nameKo": "페넥 하프문 가죽 지갑 브라운",
    "price": 73500,
    "oldPrice": 89700,
    "stock": 56,
    "sales": 2116,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 100,
    "categoryKey": "fashion",
    "name": "Low Classic 真丝衬衫 象牙白",
    "nameZh": "Low Classic 真丝衬衫 象牙白",
    "nameEn": "Low Classic Silk Shirt Ivory",
    "nameKo": "로우클래식 실크 셔츠 아이보리",
    "price": 139000,
    "oldPrice": 176500,
    "stock": 75,
    "sales": 2849,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 101,
    "categoryKey": "fashion",
    "name": "Mardi Mercredi 针织开衫 奶油色",
    "nameZh": "Mardi Mercredi 针织开衫 奶油色",
    "nameEn": "Mardi Mercredi Knit Cardigan Cream",
    "nameKo": "마르디메크르디 니트 가디건 크림",
    "price": 92100,
    "oldPrice": 121600,
    "stock": 94,
    "sales": 3582,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 102,
    "categoryKey": "fashion",
    "name": "ADER Error Logo 棒球帽 海军蓝",
    "nameZh": "ADER Error Logo 棒球帽 海军蓝",
    "nameEn": "ADER Error Logo Ball Cap Navy",
    "nameKo": "아더에러 로고 볼캡 네이비",
    "price": 89900,
    "oldPrice": 103400,
    "stock": 113,
    "sales": 4315,
    "rating": "4.7",
    "image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 103,
    "categoryKey": "fashion",
    "name": "Stand Oil Chubby Bag 奶油白",
    "nameZh": "Stand Oil Chubby Bag 奶油白",
    "nameEn": "Stand Oil Chubby Bag Cream",
    "nameKo": "스탠드오일 처비백 크림",
    "price": 113100,
    "oldPrice": 135700,
    "stock": 132,
    "sales": 5048,
    "rating": "4.8",
    "image": "https://images.unsplash.com/photo-1544441893-675973e31985?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 104,
    "categoryKey": "fashion",
    "name": "Covernat Daily Tote Bag 黑色",
    "nameZh": "Covernat Daily Tote Bag 黑色",
    "nameEn": "Covernat Daily Tote Bag Black",
    "nameKo": "커버낫 데일리 토트백 블랙",
    "price": 70400,
    "oldPrice": 88000,
    "stock": 151,
    "sales": 5781,
    "rating": "4.9",
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 105,
    "categoryKey": "fashion",
    "name": "Andersson Bell 羊毛围巾 灰色",
    "nameZh": "Andersson Bell 羊毛围巾 灰色",
    "nameEn": "Andersson Bell Wool Scarf Grey",
    "nameKo": "앤더슨벨 울 머플러 그레이",
    "price": 75800,
    "oldPrice": 98500,
    "stock": 170,
    "sales": 6514,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1506629905607-d9d297d4f5f4?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 106,
    "categoryKey": "fashion",
    "name": "Gentle Monster 墨镜 Her 01",
    "nameZh": "Gentle Monster 墨镜 Her 01",
    "nameEn": "Gentle Monster Sunglasses Her 01",
    "nameKo": "젠틀몬스터 선글라스 Her 01",
    "price": 297700,
    "oldPrice": 336400,
    "stock": 189,
    "sales": 7247,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 107,
    "categoryKey": "fashion",
    "name": "J.ESTINA 银色项链",
    "nameZh": "J.ESTINA 银色项链",
    "nameEn": "J.ESTINA Silver Necklace",
    "nameKo": "제이에스티나 실버 목걸이",
    "price": 96000,
    "oldPrice": 113300,
    "stock": 208,
    "sales": 7980,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 108,
    "categoryKey": "fashion",
    "name": "Beanpole 女士皮革腰带 棕色",
    "nameZh": "Beanpole 女士皮革腰带 棕色",
    "nameEn": "Beanpole Women Leather Belt Brown",
    "nameKo": "빈폴 여성 가죽 벨트 브라운",
    "price": 82200,
    "oldPrice": 101100,
    "stock": 227,
    "sales": 8713,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 109,
    "categoryKey": "fashion",
    "name": "MUSINSA Standard 羊毛混纺大衣 黑色 限量款",
    "nameZh": "MUSINSA Standard 羊毛混纺大衣 黑色 限量款",
    "nameEn": "MUSINSA Standard Wool Blend Coat Black Limited Edition",
    "nameKo": "무신사 스탠다드 울 블렌드 코트 블랙 한정판",
    "price": 122600,
    "oldPrice": 138500,
    "stock": 25,
    "sales": 1647,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 110,
    "categoryKey": "fashion",
    "name": "Matin Kim 经典皮革单肩包 黑色 新款",
    "nameZh": "Matin Kim 经典皮革单肩包 黑色 新款",
    "nameEn": "Matin Kim Classic Leather Shoulder Bag Black New Arrival",
    "nameKo": "마뗑킴 클래식 레더 숄더백 블랙 신상품",
    "price": 162200,
    "oldPrice": 191400,
    "stock": 44,
    "sales": 2380,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 111,
    "categoryKey": "fashion",
    "name": "Fennec 半月皮革钱包 棕色 限量款",
    "nameZh": "Fennec 半月皮革钱包 棕色 限量款",
    "nameEn": "Fennec Half-Moon Leather Wallet Brown Limited Edition",
    "nameKo": "페넥 하프문 가죽 지갑 브라운 한정판",
    "price": 75800,
    "oldPrice": 93200,
    "stock": 63,
    "sales": 3113,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 112,
    "categoryKey": "fashion",
    "name": "Low Classic 真丝衬衫 象牙白 新款",
    "nameZh": "Low Classic 真丝衬衫 象牙白 新款",
    "nameEn": "Low Classic Silk Shirt Ivory New Arrival",
    "nameKo": "로우클래식 실크 셔츠 아이보리 신상품",
    "price": 143200,
    "oldPrice": 183300,
    "stock": 82,
    "sales": 3846,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 113,
    "categoryKey": "fashion",
    "name": "Mardi Mercredi 针织开衫 奶油色 限量款",
    "nameZh": "Mardi Mercredi 针织开衫 奶油色 限量款",
    "nameEn": "Mardi Mercredi Knit Cardigan Cream Limited Edition",
    "nameKo": "마르디메크르디 니트 가디건 크림 한정판",
    "price": 95100,
    "oldPrice": 126500,
    "stock": 101,
    "sales": 4579,
    "rating": "4.7",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 114,
    "categoryKey": "fashion",
    "name": "ADER Error Logo 棒球帽 海军蓝 新款",
    "nameZh": "ADER Error Logo 棒球帽 海军蓝 新款",
    "nameEn": "ADER Error Logo Ball Cap Navy New Arrival",
    "nameKo": "아더에러 로고 볼캡 네이비 신상품",
    "price": 92600,
    "oldPrice": 107400,
    "stock": 120,
    "sales": 5312,
    "rating": "4.8",
    "image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 115,
    "categoryKey": "fashion",
    "name": "Stand Oil Chubby Bag 奶油白 限量款",
    "nameZh": "Stand Oil Chubby Bag 奶油白 限量款",
    "nameEn": "Stand Oil Chubby Bag Cream Limited Edition",
    "nameKo": "스탠드오일 처비백 크림 한정판",
    "price": 116600,
    "oldPrice": 141100,
    "stock": 139,
    "sales": 6045,
    "rating": "4.9",
    "image": "https://images.unsplash.com/photo-1544441893-675973e31985?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 116,
    "categoryKey": "fashion",
    "name": "Covernat Daily Tote Bag 黑色 新款",
    "nameZh": "Covernat Daily Tote Bag 黑色 新款",
    "nameEn": "Covernat Daily Tote Bag Black New Arrival",
    "nameKo": "커버낫 데일리 토트백 블랙 신상품",
    "price": 63500,
    "oldPrice": 80000,
    "stock": 158,
    "sales": 6778,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 117,
    "categoryKey": "fashion",
    "name": "Andersson Bell 羊毛围巾 灰色 限量款",
    "nameZh": "Andersson Bell 羊毛围巾 灰色 限量款",
    "nameEn": "Andersson Bell Wool Scarf Grey Limited Edition",
    "nameKo": "앤더슨벨 울 머플러 그레이 한정판",
    "price": 78200,
    "oldPrice": 102400,
    "stock": 177,
    "sales": 7511,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1506629905607-d9d297d4f5f4?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 118,
    "categoryKey": "fashion",
    "name": "Gentle Monster 墨镜 Her 01 新款",
    "nameZh": "Gentle Monster 墨镜 Her 01 新款",
    "nameEn": "Gentle Monster Sunglasses Her 01 New Arrival",
    "nameKo": "젠틀몬스터 선글라스 Her 01 신상품",
    "price": 268800,
    "oldPrice": 306400,
    "stock": 196,
    "sales": 8244,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 119,
    "categoryKey": "fashion",
    "name": "J.ESTINA 银色项链 限量款",
    "nameZh": "J.ESTINA 银色项链 限量款",
    "nameEn": "J.ESTINA Silver Necklace Limited Edition",
    "nameKo": "제이에스티나 실버 목걸이 한정판",
    "price": 99000,
    "oldPrice": 117800,
    "stock": 215,
    "sales": 8977,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 120,
    "categoryKey": "fashion",
    "name": "Beanpole 女士皮革腰带 棕色 新款",
    "nameZh": "Beanpole 女士皮革腰带 棕色 新款",
    "nameEn": "Beanpole Women Leather Belt Brown New Arrival",
    "nameKo": "빈폴 여성 가죽 벨트 브라운 신상품",
    "price": 74300,
    "oldPrice": 92100,
    "stock": 234,
    "sales": 9710,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 121,
    "categoryKey": "clothing",
    "name": "thisisneverthat 宽松连帽卫衣 灰色",
    "nameZh": "thisisneverthat 宽松连帽卫衣 灰色",
    "nameEn": "thisisneverthat Oversized Hoodie Grey",
    "nameKo": "디스이즈네버댓 오버핏 후디 그레이",
    "price": 91100,
    "oldPrice": 102000,
    "stock": 18,
    "sales": 650,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 122,
    "categoryKey": "clothing",
    "name": "8Seconds 纯棉基础T恤 白色",
    "nameZh": "8Seconds 纯棉基础T恤 白色",
    "nameEn": "8Seconds Cotton Basic T-Shirt White",
    "nameKo": "에잇세컨즈 코튼 베이직 티셔츠 화이트",
    "price": 19700,
    "oldPrice": 23000,
    "stock": 37,
    "sales": 1383,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 123,
    "categoryKey": "clothing",
    "name": "Levi’s 501 直筒牛仔裤 深蓝",
    "nameZh": "Levi’s 501 直筒牛仔裤 深蓝",
    "nameEn": "Levi’s 501 Straight Jeans Dark Blue",
    "nameKo": "리바이스 501 스트레이트 진 다크블루",
    "price": 110700,
    "oldPrice": 135100,
    "stock": 56,
    "sales": 2116,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1542272604-787c3835535d?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 124,
    "categoryKey": "clothing",
    "name": "ZARA 夏季休闲连衣裙 白色",
    "nameZh": "ZARA 夏季休闲连衣裙 白色",
    "nameEn": "ZARA Summer Casual Dress White",
    "nameKo": "자라 여름 캐주얼 원피스 화이트",
    "price": 79000,
    "oldPrice": 100300,
    "stock": 75,
    "sales": 2849,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 125,
    "categoryKey": "clothing",
    "name": "TOPTEN 轻薄针织衫 奶油色",
    "nameZh": "TOPTEN 轻薄针织衫 奶油色",
    "nameEn": "TOPTEN Lightweight Knit Sweater Cream",
    "nameKo": "탑텐 라이트 니트 스웨터 크림",
    "price": 37500,
    "oldPrice": 49500,
    "stock": 94,
    "sales": 3582,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 126,
    "categoryKey": "clothing",
    "name": "SPAO 牛津纺衬衫 天蓝色",
    "nameZh": "SPAO 牛津纺衬衫 天蓝色",
    "nameEn": "SPAO Oxford Shirt Sky Blue",
    "nameKo": "스파오 옥스포드 셔츠 스카이블루",
    "price": 30200,
    "oldPrice": 34700,
    "stock": 113,
    "sales": 4315,
    "rating": "4.7",
    "image": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 127,
    "categoryKey": "clothing",
    "name": "Uniqlo AIRism Polo衫 黑色",
    "nameZh": "Uniqlo AIRism Polo衫 黑色",
    "nameEn": "Uniqlo AIRism Polo Shirt Black",
    "nameKo": "유니클로 에어리즘 폴로셔츠 블랙",
    "price": 37900,
    "oldPrice": 45500,
    "stock": 132,
    "sales": 5048,
    "rating": "4.8",
    "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 128,
    "categoryKey": "clothing",
    "name": "Nike Sportswear 运动长裤 黑色",
    "nameZh": "Nike Sportswear 运动长裤 黑色",
    "nameEn": "Nike Sportswear Jogger Pants Black",
    "nameKo": "나이키 스포츠웨어 조거 팬츠 블랙",
    "price": 90800,
    "oldPrice": 113500,
    "stock": 151,
    "sales": 5781,
    "rating": "4.9",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 129,
    "categoryKey": "clothing",
    "name": "Adidas Essentials 运动夹克",
    "nameZh": "Adidas Essentials 运动夹克",
    "nameEn": "Adidas Essentials Track Jacket",
    "nameKo": "아디다스 에센셜 트랙 재킷",
    "price": 75800,
    "oldPrice": 98500,
    "stock": 170,
    "sales": 6514,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 130,
    "categoryKey": "clothing",
    "name": "H&M Linen Blend Shorts 米色",
    "nameZh": "H&M Linen Blend Shorts 米色",
    "nameEn": "H&M Linen Blend Shorts Beige",
    "nameKo": "H&M 린넨 블렌드 쇼츠 베이지",
    "price": 35900,
    "oldPrice": 40600,
    "stock": 189,
    "sales": 7247,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1506629905607-d9d297d4f5f4?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 131,
    "categoryKey": "clothing",
    "name": "MUSINSA Standard 西装外套 黑色",
    "nameZh": "MUSINSA Standard 西装外套 黑色",
    "nameEn": "MUSINSA Standard Blazer Black",
    "nameKo": "무신사 스탠다드 블레이저 블랙",
    "price": 125100,
    "oldPrice": 147600,
    "stock": 208,
    "sales": 7980,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1544441893-675973e31985?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 132,
    "categoryKey": "clothing",
    "name": "Covernat Rugby Sweatshirt 绿色",
    "nameZh": "Covernat Rugby Sweatshirt 绿色",
    "nameEn": "Covernat Rugby Sweatshirt Green",
    "nameKo": "커버낫 럭비 스웨트셔츠 그린",
    "price": 92600,
    "oldPrice": 113900,
    "stock": 227,
    "sales": 8713,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 133,
    "categoryKey": "clothing",
    "name": "thisisneverthat 宽松连帽卫衣 灰色 限量款",
    "nameZh": "thisisneverthat 宽松连帽卫衣 灰色 限量款",
    "nameEn": "thisisneverthat Oversized Hoodie Grey Limited Edition",
    "nameKo": "디스이즈네버댓 오버핏 후디 그레이 한정판",
    "price": 94000,
    "oldPrice": 106200,
    "stock": 25,
    "sales": 1647,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 134,
    "categoryKey": "clothing",
    "name": "8Seconds 纯棉基础T恤 白色 新款",
    "nameZh": "8Seconds 纯棉基础T恤 白色 新款",
    "nameEn": "8Seconds Cotton Basic T-Shirt White New Arrival",
    "nameKo": "에잇세컨즈 코튼 베이직 티셔츠 화이트 신상품",
    "price": 20300,
    "oldPrice": 24000,
    "stock": 44,
    "sales": 2380,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 135,
    "categoryKey": "clothing",
    "name": "Levi’s 501 直筒牛仔裤 深蓝 限量款",
    "nameZh": "Levi’s 501 直筒牛仔裤 深蓝 限量款",
    "nameEn": "Levi’s 501 Straight Jeans Dark Blue Limited Edition",
    "nameKo": "리바이스 501 스트레이트 진 다크블루 한정판",
    "price": 114200,
    "oldPrice": 140500,
    "stock": 63,
    "sales": 3113,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1542272604-787c3835535d?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 136,
    "categoryKey": "clothing",
    "name": "ZARA 夏季休闲连衣裙 白色 新款",
    "nameZh": "ZARA 夏季休闲连衣裙 白色 新款",
    "nameEn": "ZARA Summer Casual Dress White New Arrival",
    "nameKo": "자라 여름 캐주얼 원피스 화이트 신상품",
    "price": 81400,
    "oldPrice": 104200,
    "stock": 82,
    "sales": 3846,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 137,
    "categoryKey": "clothing",
    "name": "TOPTEN 轻薄针织衫 奶油色 限量款",
    "nameZh": "TOPTEN 轻薄针织衫 奶油色 限量款",
    "nameEn": "TOPTEN Lightweight Knit Sweater Cream Limited Edition",
    "nameKo": "탑텐 라이트 니트 스웨터 크림 한정판",
    "price": 38700,
    "oldPrice": 51500,
    "stock": 101,
    "sales": 4579,
    "rating": "4.7",
    "image": "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 138,
    "categoryKey": "clothing",
    "name": "SPAO 牛津纺衬衫 天蓝色 新款",
    "nameZh": "SPAO 牛津纺衬衫 天蓝色 新款",
    "nameEn": "SPAO Oxford Shirt Sky Blue New Arrival",
    "nameKo": "스파오 옥스포드 셔츠 스카이블루 신상품",
    "price": 31100,
    "oldPrice": 36100,
    "stock": 120,
    "sales": 5312,
    "rating": "4.8",
    "image": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 139,
    "categoryKey": "clothing",
    "name": "Uniqlo AIRism Polo衫 黑色 限量款",
    "nameZh": "Uniqlo AIRism Polo衫 黑色 限量款",
    "nameEn": "Uniqlo AIRism Polo Shirt Black Limited Edition",
    "nameKo": "유니클로 에어리즘 폴로셔츠 블랙 한정판",
    "price": 39100,
    "oldPrice": 47300,
    "stock": 139,
    "sales": 6045,
    "rating": "4.9",
    "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 140,
    "categoryKey": "clothing",
    "name": "Nike Sportswear 运动长裤 黑色 新款",
    "nameZh": "Nike Sportswear 运动长裤 黑色 新款",
    "nameEn": "Nike Sportswear Jogger Pants Black New Arrival",
    "nameKo": "나이키 스포츠웨어 조거 팬츠 블랙 신상품",
    "price": 81900,
    "oldPrice": 103200,
    "stock": 158,
    "sales": 6778,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 141,
    "categoryKey": "clothing",
    "name": "Adidas Essentials 运动夹克 限量款",
    "nameZh": "Adidas Essentials 运动夹克 限量款",
    "nameEn": "Adidas Essentials Track Jacket Limited Edition",
    "nameKo": "아디다스 에센셜 트랙 재킷 한정판",
    "price": 78200,
    "oldPrice": 102400,
    "stock": 177,
    "sales": 7511,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 142,
    "categoryKey": "clothing",
    "name": "H&M Linen Blend Shorts 米色 新款",
    "nameZh": "H&M Linen Blend Shorts 米色 新款",
    "nameEn": "H&M Linen Blend Shorts Beige New Arrival",
    "nameKo": "H&M 린넨 블렌드 쇼츠 베이지 신상품",
    "price": 32500,
    "oldPrice": 37100,
    "stock": 196,
    "sales": 8244,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1506629905607-d9d297d4f5f4?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 143,
    "categoryKey": "clothing",
    "name": "MUSINSA Standard 西装外套 黑色 限量款",
    "nameZh": "MUSINSA Standard 西装外套 黑色 限量款",
    "nameEn": "MUSINSA Standard Blazer Black Limited Edition",
    "nameKo": "무신사 스탠다드 블레이저 블랙 한정판",
    "price": 129000,
    "oldPrice": 153500,
    "stock": 215,
    "sales": 8977,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1544441893-675973e31985?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 144,
    "categoryKey": "clothing",
    "name": "Covernat Rugby Sweatshirt 绿色 新款",
    "nameZh": "Covernat Rugby Sweatshirt 绿色 新款",
    "nameEn": "Covernat Rugby Sweatshirt Green New Arrival",
    "nameKo": "커버낫 럭비 스웨트셔츠 그린 신상품",
    "price": 83700,
    "oldPrice": 103800,
    "stock": 234,
    "sales": 9710,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 145,
    "categoryKey": "shoes",
    "name": "Nike Air Force 1 Low 白色",
    "nameZh": "Nike Air Force 1 Low 白色",
    "nameEn": "Nike Air Force 1 Low White",
    "nameKo": "나이키 에어포스 1 로우 화이트",
    "price": 127900,
    "oldPrice": 143200,
    "stock": 18,
    "sales": 650,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 146,
    "categoryKey": "shoes",
    "name": "Adidas Samba OG 黑白",
    "nameZh": "Adidas Samba OG 黑白",
    "nameEn": "Adidas Samba OG Black White",
    "nameKo": "아디다스 삼바 OG 블랙 화이트",
    "price": 137600,
    "oldPrice": 161000,
    "stock": 37,
    "sales": 1383,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 147,
    "categoryKey": "shoes",
    "name": "New Balance 530 银灰",
    "nameZh": "New Balance 530 银灰",
    "nameEn": "New Balance 530 Silver Grey",
    "nameKo": "뉴발란스 530 실버 그레이",
    "price": 120000,
    "oldPrice": 146400,
    "stock": 56,
    "sales": 2116,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 148,
    "categoryKey": "shoes",
    "name": "ASICS Gel-Kayano 14 奶油银",
    "nameZh": "ASICS Gel-Kayano 14 奶油银",
    "nameEn": "ASICS Gel-Kayano 14 Cream Silver",
    "nameKo": "아식스 젤카야노 14 크림 실버",
    "price": 179000,
    "oldPrice": 227300,
    "stock": 75,
    "sales": 2849,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 149,
    "categoryKey": "shoes",
    "name": "Vans Old Skool 黑白",
    "nameZh": "Vans Old Skool 黑白",
    "nameEn": "Vans Old Skool Black White",
    "nameKo": "반스 올드스쿨 블랙 화이트",
    "price": 74300,
    "oldPrice": 98100,
    "stock": 94,
    "sales": 3582,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 150,
    "categoryKey": "shoes",
    "name": "Converse Chuck 70 High 黑色",
    "nameZh": "Converse Chuck 70 High 黑色",
    "nameEn": "Converse Chuck 70 High Black",
    "nameKo": "컨버스 척 70 하이 블랙",
    "price": 96000,
    "oldPrice": 110400,
    "stock": 113,
    "sales": 4315,
    "rating": "4.7",
    "image": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 151,
    "categoryKey": "shoes",
    "name": "Dr. Martens 1461 皮鞋 黑色",
    "nameZh": "Dr. Martens 1461 皮鞋 黑色",
    "nameEn": "Dr. Martens 1461 Leather Shoes Black",
    "nameKo": "닥터마틴 1461 가죽화 블랙",
    "price": 208100,
    "oldPrice": 249700,
    "stock": 132,
    "sales": 5048,
    "rating": "4.8",
    "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 152,
    "categoryKey": "shoes",
    "name": "Fila Disruptor 2 白色",
    "nameZh": "Fila Disruptor 2 白色",
    "nameEn": "Fila Disruptor 2 White",
    "nameKo": "휠라 디스럽터 2 화이트",
    "price": 80600,
    "oldPrice": 100800,
    "stock": 151,
    "sales": 5781,
    "rating": "4.9",
    "image": "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 153,
    "categoryKey": "shoes",
    "name": "Crocs Classic Clog 骨白色",
    "nameZh": "Crocs Classic Clog 骨白色",
    "nameEn": "Crocs Classic Clog Bone",
    "nameKo": "크록스 클래식 클로그 본",
    "price": 56600,
    "oldPrice": 73600,
    "stock": 170,
    "sales": 6514,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 154,
    "categoryKey": "shoes",
    "name": "UGG Tasman Slipper 栗色",
    "nameZh": "UGG Tasman Slipper 栗色",
    "nameEn": "UGG Tasman Slipper Chestnut",
    "nameKo": "어그 타스만 슬리퍼 체스넛",
    "price": 163800,
    "oldPrice": 185100,
    "stock": 189,
    "sales": 7247,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 155,
    "categoryKey": "shoes",
    "name": "Nike Zoom Vomero 5 白银",
    "nameZh": "Nike Zoom Vomero 5 白银",
    "nameEn": "Nike Zoom Vomero 5 White Silver",
    "nameKo": "나이키 줌 보메로 5 화이트 실버",
    "price": 183300,
    "oldPrice": 216300,
    "stock": 208,
    "sales": 7980,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 156,
    "categoryKey": "shoes",
    "name": "Adidas Ultraboost Light 黑色",
    "nameZh": "Adidas Ultraboost Light 黑色",
    "nameEn": "Adidas Ultraboost Light Black",
    "nameKo": "아디다스 울트라부스트 라이트 블랙",
    "price": 227800,
    "oldPrice": 280200,
    "stock": 227,
    "sales": 8713,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 157,
    "categoryKey": "shoes",
    "name": "Nike Air Force 1 Low 白色 限量款",
    "nameZh": "Nike Air Force 1 Low 白色 限量款",
    "nameEn": "Nike Air Force 1 Low White Limited Edition",
    "nameKo": "나이키 에어포스 1 로우 화이트 한정판",
    "price": 132000,
    "oldPrice": 149200,
    "stock": 25,
    "sales": 1647,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 158,
    "categoryKey": "shoes",
    "name": "Adidas Samba OG 黑白 新款",
    "nameZh": "Adidas Samba OG 黑白 新款",
    "nameEn": "Adidas Samba OG Black White New Arrival",
    "nameKo": "아디다스 삼바 OG 블랙 화이트 신상품",
    "price": 141800,
    "oldPrice": 167300,
    "stock": 44,
    "sales": 2380,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 159,
    "categoryKey": "shoes",
    "name": "New Balance 530 银灰 限量款",
    "nameZh": "New Balance 530 银灰 限量款",
    "nameEn": "New Balance 530 Silver Grey Limited Edition",
    "nameKo": "뉴발란스 530 실버 그레이 한정판",
    "price": 123800,
    "oldPrice": 152300,
    "stock": 63,
    "sales": 3113,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 160,
    "categoryKey": "shoes",
    "name": "ASICS Gel-Kayano 14 奶油银 新款",
    "nameZh": "ASICS Gel-Kayano 14 奶油银 新款",
    "nameEn": "ASICS Gel-Kayano 14 Cream Silver New Arrival",
    "nameKo": "아식스 젤카야노 14 크림 실버 신상품",
    "price": 184400,
    "oldPrice": 236000,
    "stock": 82,
    "sales": 3846,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 161,
    "categoryKey": "shoes",
    "name": "Vans Old Skool 黑白 限量款",
    "nameZh": "Vans Old Skool 黑白 限量款",
    "nameEn": "Vans Old Skool Black White Limited Edition",
    "nameKo": "반스 올드스쿨 블랙 화이트 한정판",
    "price": 76600,
    "oldPrice": 101900,
    "stock": 101,
    "sales": 4579,
    "rating": "4.7",
    "image": "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 162,
    "categoryKey": "shoes",
    "name": "Converse Chuck 70 High 黑色 新款",
    "nameZh": "Converse Chuck 70 High 黑色 新款",
    "nameEn": "Converse Chuck 70 High Black New Arrival",
    "nameKo": "컨버스 척 70 하이 블랙 신상품",
    "price": 98800,
    "oldPrice": 114600,
    "stock": 120,
    "sales": 5312,
    "rating": "4.8",
    "image": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 163,
    "categoryKey": "shoes",
    "name": "Dr. Martens 1461 皮鞋 黑色 限量款",
    "nameZh": "Dr. Martens 1461 皮鞋 黑色 限量款",
    "nameEn": "Dr. Martens 1461 Leather Shoes Black Limited Edition",
    "nameKo": "닥터마틴 1461 가죽화 블랙 한정판",
    "price": 214600,
    "oldPrice": 259700,
    "stock": 139,
    "sales": 6045,
    "rating": "4.9",
    "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 164,
    "categoryKey": "shoes",
    "name": "Fila Disruptor 2 白色 新款",
    "nameZh": "Fila Disruptor 2 白色 新款",
    "nameEn": "Fila Disruptor 2 White New Arrival",
    "nameKo": "휠라 디스럽터 2 화이트 신상품",
    "price": 72700,
    "oldPrice": 91600,
    "stock": 158,
    "sales": 6778,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 165,
    "categoryKey": "shoes",
    "name": "Crocs Classic Clog 骨白色 限量款",
    "nameZh": "Crocs Classic Clog 骨白色 限量款",
    "nameEn": "Crocs Classic Clog Bone Limited Edition",
    "nameKo": "크록스 클래식 클로그 본 한정판",
    "price": 58400,
    "oldPrice": 76500,
    "stock": 177,
    "sales": 7511,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 166,
    "categoryKey": "shoes",
    "name": "UGG Tasman Slipper 栗色 新款",
    "nameZh": "UGG Tasman Slipper 栗色 新款",
    "nameEn": "UGG Tasman Slipper Chestnut New Arrival",
    "nameKo": "어그 타스만 슬리퍼 체스넛 신상품",
    "price": 147900,
    "oldPrice": 168600,
    "stock": 196,
    "sales": 8244,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 167,
    "categoryKey": "shoes",
    "name": "Nike Zoom Vomero 5 白银 限量款",
    "nameZh": "Nike Zoom Vomero 5 白银 限量款",
    "nameEn": "Nike Zoom Vomero 5 White Silver Limited Edition",
    "nameKo": "나이키 줌 보메로 5 화이트 실버 한정판",
    "price": 189000,
    "oldPrice": 224900,
    "stock": 215,
    "sales": 8977,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 168,
    "categoryKey": "shoes",
    "name": "Adidas Ultraboost Light 黑色 新款",
    "nameZh": "Adidas Ultraboost Light 黑色 新款",
    "nameEn": "Adidas Ultraboost Light Black New Arrival",
    "nameKo": "아디다스 울트라부스트 라이트 블랙 신상품",
    "price": 205900,
    "oldPrice": 255300,
    "stock": 234,
    "sales": 9710,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 169,
    "categoryKey": "beauty",
    "name": "Laneige 水库补水面霜 50ml",
    "nameZh": "Laneige 水库补水面霜 50ml",
    "nameEn": "Laneige Water Bank Cream 50ml",
    "nameKo": "라네즈 워터뱅크 크림 50ml",
    "price": 33100,
    "oldPrice": 37100,
    "stock": 18,
    "sales": 650,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 170,
    "categoryKey": "beauty",
    "name": "Mise en scène 完美修护发膜",
    "nameZh": "Mise en scène 完美修护发膜",
    "nameEn": "Mise en scène Perfect Repair Hair Mask",
    "nameKo": "미쟝센 퍼펙트 리페어 헤어팩",
    "price": 12800,
    "oldPrice": 15000,
    "stock": 37,
    "sales": 1383,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 171,
    "categoryKey": "beauty",
    "name": "Sulwhasoo 润燥精华 60ml",
    "nameZh": "Sulwhasoo 润燥精华 60ml",
    "nameEn": "Sulwhasoo First Care Serum 60ml",
    "nameKo": "설화수 윤조에센스 60ml",
    "price": 82800,
    "oldPrice": 101000,
    "stock": 56,
    "sales": 2116,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 172,
    "categoryKey": "beauty",
    "name": "Romand 果汁唇釉 5.5g",
    "nameZh": "Romand 果汁唇釉 5.5g",
    "nameEn": "Romand Juicy Lasting Tint 5.5g",
    "nameKo": "롬앤 쥬시래스팅 틴트 5.5g",
    "price": 9900,
    "oldPrice": 12600,
    "stock": 75,
    "sales": 2849,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 173,
    "categoryKey": "beauty",
    "name": "Dr.Jart+ 神经酰胺面霜 50ml",
    "nameZh": "Dr.Jart+ 神经酰胺面霜 50ml",
    "nameEn": "Dr.Jart+ Ceramidin Cream 50ml",
    "nameKo": "닥터자르트 세라마이딘 크림 50ml",
    "price": 36700,
    "oldPrice": 48400,
    "stock": 94,
    "sales": 3582,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 174,
    "categoryKey": "beauty",
    "name": "Innisfree 绿茶籽精华 80ml",
    "nameZh": "Innisfree 绿茶籽精华 80ml",
    "nameEn": "Innisfree Green Tea Seed Serum 80ml",
    "nameKo": "이니스프리 그린티 씨드 세럼 80ml",
    "price": 31300,
    "oldPrice": 36000,
    "stock": 113,
    "sales": 4315,
    "rating": "4.7",
    "image": "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 175,
    "categoryKey": "beauty",
    "name": "Etude 睫毛膏卷翘款 黑色",
    "nameZh": "Etude 睫毛膏卷翘款 黑色",
    "nameEn": "Etude Curl Fix Mascara Black",
    "nameKo": "에뛰드 컬픽스 마스카라 블랙",
    "price": 14300,
    "oldPrice": 17200,
    "stock": 132,
    "sales": 5048,
    "rating": "4.8",
    "image": "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 176,
    "categoryKey": "beauty",
    "name": "CLIO Kill Cover 气垫粉底",
    "nameZh": "CLIO Kill Cover 气垫粉底",
    "nameEn": "CLIO Kill Cover Cushion Foundation",
    "nameKo": "클리오 킬커버 쿠션 파운데이션",
    "price": 27500,
    "oldPrice": 34400,
    "stock": 151,
    "sales": 5781,
    "rating": "4.9",
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 177,
    "categoryKey": "beauty",
    "name": "AHC 眼霜 40ml",
    "nameZh": "AHC 眼霜 40ml",
    "nameEn": "AHC Eye Cream 40ml",
    "nameKo": "AHC 아이크림 40ml",
    "price": 18200,
    "oldPrice": 23700,
    "stock": 170,
    "sales": 6514,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1617897903246-719242758050?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 178,
    "categoryKey": "beauty",
    "name": "Round Lab 独岛爽肤水 200ml",
    "nameZh": "Round Lab 独岛爽肤水 200ml",
    "nameEn": "Round Lab Dokdo Toner 200ml",
    "nameKo": "라운드랩 독도 토너 200ml",
    "price": 17500,
    "oldPrice": 19800,
    "stock": 189,
    "sales": 7247,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 179,
    "categoryKey": "beauty",
    "name": "Beauty of Joseon 防晒霜 50ml",
    "nameZh": "Beauty of Joseon 防晒霜 50ml",
    "nameEn": "Beauty of Joseon Relief Sun 50ml",
    "nameKo": "조선미녀 선크림 50ml",
    "price": 17500,
    "oldPrice": 20700,
    "stock": 208,
    "sales": 7980,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 180,
    "categoryKey": "beauty",
    "name": "Torriden 低分子玻尿酸精华",
    "nameZh": "Torriden 低分子玻尿酸精华",
    "nameEn": "Torriden Dive-In Serum",
    "nameKo": "토리든 다이브인 세럼",
    "price": 22900,
    "oldPrice": 28200,
    "stock": 227,
    "sales": 8713,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 181,
    "categoryKey": "beauty",
    "name": "Laneige 水库补水面霜 50ml 限量款",
    "nameZh": "Laneige 水库补水面霜 50ml 限量款",
    "nameEn": "Laneige Water Bank Cream 50ml Limited Edition",
    "nameKo": "라네즈 워터뱅크 크림 50ml 한정판",
    "price": 34200,
    "oldPrice": 38600,
    "stock": 25,
    "sales": 1647,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 182,
    "categoryKey": "beauty",
    "name": "Mise en scène 完美修护发膜 新款",
    "nameZh": "Mise en scène 完美修护发膜 新款",
    "nameEn": "Mise en scène Perfect Repair Hair Mask New Arrival",
    "nameKo": "미쟝센 퍼펙트 리페어 헤어팩 신상품",
    "price": 13200,
    "oldPrice": 15600,
    "stock": 44,
    "sales": 2380,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 183,
    "categoryKey": "beauty",
    "name": "Sulwhasoo 润燥精华 60ml 限量款",
    "nameZh": "Sulwhasoo 润燥精华 60ml 限量款",
    "nameEn": "Sulwhasoo First Care Serum 60ml Limited Edition",
    "nameKo": "설화수 윤조에센스 60ml 한정판",
    "price": 85400,
    "oldPrice": 105000,
    "stock": 63,
    "sales": 3113,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 184,
    "categoryKey": "beauty",
    "name": "Romand 果汁唇釉 5.5g 新款",
    "nameZh": "Romand 果汁唇釉 5.5g 新款",
    "nameEn": "Romand Juicy Lasting Tint 5.5g New Arrival",
    "nameKo": "롬앤 쥬시래스팅 틴트 5.5g 신상품",
    "price": 10200,
    "oldPrice": 13100,
    "stock": 82,
    "sales": 3846,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 185,
    "categoryKey": "beauty",
    "name": "Dr.Jart+ 神经酰胺面霜 50ml 限量款",
    "nameZh": "Dr.Jart+ 神经酰胺面霜 50ml 限量款",
    "nameEn": "Dr.Jart+ Ceramidin Cream 50ml Limited Edition",
    "nameKo": "닥터자르트 세라마이딘 크림 50ml 한정판",
    "price": 37800,
    "oldPrice": 50300,
    "stock": 101,
    "sales": 4579,
    "rating": "4.7",
    "image": "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 186,
    "categoryKey": "beauty",
    "name": "Innisfree 绿茶籽精华 80ml 新款",
    "nameZh": "Innisfree 绿茶籽精华 80ml 新款",
    "nameEn": "Innisfree Green Tea Seed Serum 80ml New Arrival",
    "nameKo": "이니스프리 그린티 씨드 세럼 80ml 신상품",
    "price": 32200,
    "oldPrice": 37400,
    "stock": 120,
    "sales": 5312,
    "rating": "4.8",
    "image": "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 187,
    "categoryKey": "beauty",
    "name": "Etude 睫毛膏卷翘款 黑色 限量款",
    "nameZh": "Etude 睫毛膏卷翘款 黑色 限量款",
    "nameEn": "Etude Curl Fix Mascara Black Limited Edition",
    "nameKo": "에뛰드 컬픽스 마스카라 블랙 한정판",
    "price": 14700,
    "oldPrice": 17800,
    "stock": 139,
    "sales": 6045,
    "rating": "4.9",
    "image": "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 188,
    "categoryKey": "beauty",
    "name": "CLIO Kill Cover 气垫粉底 新款",
    "nameZh": "CLIO Kill Cover 气垫粉底 新款",
    "nameEn": "CLIO Kill Cover Cushion Foundation New Arrival",
    "nameKo": "클리오 킬커버 쿠션 파운데이션 신상품",
    "price": 24800,
    "oldPrice": 31200,
    "stock": 158,
    "sales": 6778,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 189,
    "categoryKey": "beauty",
    "name": "AHC 眼霜 40ml 限量款",
    "nameZh": "AHC 眼霜 40ml 限量款",
    "nameEn": "AHC Eye Cream 40ml Limited Edition",
    "nameKo": "AHC 아이크림 40ml 한정판",
    "price": 18800,
    "oldPrice": 24600,
    "stock": 177,
    "sales": 7511,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1617897903246-719242758050?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 190,
    "categoryKey": "beauty",
    "name": "Round Lab 独岛爽肤水 200ml 新款",
    "nameZh": "Round Lab 独岛爽肤水 200ml 新款",
    "nameEn": "Round Lab Dokdo Toner 200ml New Arrival",
    "nameKo": "라운드랩 독도 토너 200ml 신상품",
    "price": 15800,
    "oldPrice": 18000,
    "stock": 196,
    "sales": 8244,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 191,
    "categoryKey": "beauty",
    "name": "Beauty of Joseon 防晒霜 50ml 限量款",
    "nameZh": "Beauty of Joseon 防晒霜 50ml 限量款",
    "nameEn": "Beauty of Joseon Relief Sun 50ml Limited Edition",
    "nameKo": "조선미녀 선크림 50ml 한정판",
    "price": 18000,
    "oldPrice": 21400,
    "stock": 215,
    "sales": 8977,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 192,
    "categoryKey": "beauty",
    "name": "Torriden 低分子玻尿酸精华 新款",
    "nameZh": "Torriden 低分子玻尿酸精华 新款",
    "nameEn": "Torriden Dive-In Serum New Arrival",
    "nameKo": "토리든 다이브인 세럼 신상품",
    "price": 20700,
    "oldPrice": 25700,
    "stock": 234,
    "sales": 9710,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 193,
    "categoryKey": "food",
    "name": "Nongshim 辛拉面 20包",
    "nameZh": "Nongshim 辛拉面 20包",
    "nameEn": "Nongshim Shin Ramyun 20 Pack",
    "nameKo": "농심 신라면 20봉",
    "price": 21100,
    "oldPrice": 23600,
    "stock": 18,
    "sales": 650,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 194,
    "categoryKey": "food",
    "name": "Orion 韩国零食礼盒",
    "nameZh": "Orion 韩国零食礼盒",
    "nameEn": "Orion Korean Snack Box",
    "nameKo": "오리온 과자 선물박스",
    "price": 32600,
    "oldPrice": 38100,
    "stock": 37,
    "sales": 1383,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 195,
    "categoryKey": "food",
    "name": "宗家府切件泡菜 1kg",
    "nameZh": "宗家府切件泡菜 1kg",
    "nameEn": "Jongga Sliced Kimchi 1kg",
    "nameKo": "종가집 맛김치 1kg",
    "price": 13900,
    "oldPrice": 17000,
    "stock": 56,
    "sales": 2116,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1583224964978-2257b960c3d3?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 196,
    "categoryKey": "food",
    "name": "Maxim 摩卡咖啡 100条",
    "nameZh": "Maxim 摩卡咖啡 100条",
    "nameEn": "Maxim Mocha Coffee Mix 100 Sticks",
    "nameKo": "맥심 모카골드 커피믹스 100T",
    "price": 18900,
    "oldPrice": 24000,
    "stock": 75,
    "sales": 2849,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 197,
    "categoryKey": "food",
    "name": "CJ 햇반 即食米饭 24个",
    "nameZh": "CJ 햇반 即食米饭 24个",
    "nameEn": "CJ Hetbahn Cooked Rice 24 Cups",
    "nameKo": "CJ 햇반 24개입",
    "price": 28100,
    "oldPrice": 37100,
    "stock": 94,
    "sales": 3582,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 198,
    "categoryKey": "food",
    "name": "Bibigo 王饺子 1.05kg",
    "nameZh": "Bibigo 王饺子 1.05kg",
    "nameEn": "Bibigo Mandu Dumplings 1.05kg",
    "nameKo": "비비고 왕교자 1.05kg",
    "price": 12000,
    "oldPrice": 13800,
    "stock": 113,
    "sales": 4315,
    "rating": "4.7",
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 199,
    "categoryKey": "food",
    "name": "乐天巧克力派 12个",
    "nameZh": "乐天巧克力派 12个",
    "nameEn": "Lotte Choco Pie 12 Pack",
    "nameKo": "롯데 초코파이 12개입",
    "price": 6600,
    "oldPrice": 7900,
    "stock": 132,
    "sales": 5048,
    "rating": "4.8",
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 200,
    "categoryKey": "food",
    "name": "Samyang 火鸡面 10包",
    "nameZh": "Samyang 火鸡面 10包",
    "nameEn": "Samyang Buldak Ramen 10 Pack",
    "nameKo": "삼양 불닭볶음면 10봉",
    "price": 16200,
    "oldPrice": 20200,
    "stock": 151,
    "sales": 5781,
    "rating": "4.9",
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 201,
    "categoryKey": "food",
    "name": "Osulloc 绿茶曲奇礼盒",
    "nameZh": "Osulloc 绿茶曲奇礼盒",
    "nameEn": "Osulloc Green Tea Cookie Gift Box",
    "nameKo": "오설록 녹차 쿠키 세트",
    "price": 23900,
    "oldPrice": 31100,
    "stock": 170,
    "sales": 6514,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 202,
    "categoryKey": "food",
    "name": "Market O 布朗尼 16个",
    "nameZh": "Market O 布朗尼 16个",
    "nameEn": "Market O Real Brownie 16 Pack",
    "nameKo": "마켓오 리얼브라우니 16개입",
    "price": 13300,
    "oldPrice": 15000,
    "stock": 189,
    "sales": 7247,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 203,
    "categoryKey": "food",
    "name": "Dongwon 金枪鱼罐头 12罐",
    "nameZh": "Dongwon 金枪鱼罐头 12罐",
    "nameEn": "Dongwon Tuna Can 12 Pack",
    "nameKo": "동원참치 12캔",
    "price": 24200,
    "oldPrice": 28600,
    "stock": 208,
    "sales": 7980,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 204,
    "categoryKey": "food",
    "name": "Binggrae 香蕉牛奶 24瓶",
    "nameZh": "Binggrae 香蕉牛奶 24瓶",
    "nameEn": "Binggrae Banana Milk 24 Bottles",
    "nameKo": "빙그레 바나나맛우유 24개",
    "price": 34200,
    "oldPrice": 42100,
    "stock": 227,
    "sales": 8713,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 205,
    "categoryKey": "food",
    "name": "Nongshim 辛拉面 20包 限量款",
    "nameZh": "Nongshim 辛拉面 20包 限量款",
    "nameEn": "Nongshim Shin Ramyun 20 Pack Limited Edition",
    "nameKo": "농심 신라면 20봉 한정판",
    "price": 21800,
    "oldPrice": 24600,
    "stock": 25,
    "sales": 1647,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 206,
    "categoryKey": "food",
    "name": "Orion 韩国零食礼盒 新款",
    "nameZh": "Orion 韩国零食礼盒 新款",
    "nameEn": "Orion Korean Snack Box New Arrival",
    "nameKo": "오리온 과자 선물박스 신상품",
    "price": 33600,
    "oldPrice": 39600,
    "stock": 44,
    "sales": 2380,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 207,
    "categoryKey": "food",
    "name": "宗家府切件泡菜 1kg 限量款",
    "nameZh": "宗家府切件泡菜 1kg 限量款",
    "nameEn": "Jongga Sliced Kimchi 1kg Limited Edition",
    "nameKo": "종가집 맛김치 1kg 한정판",
    "price": 14300,
    "oldPrice": 17600,
    "stock": 63,
    "sales": 3113,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1583224964978-2257b960c3d3?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 208,
    "categoryKey": "food",
    "name": "Maxim 摩卡咖啡 100条 新款",
    "nameZh": "Maxim 摩卡咖啡 100条 新款",
    "nameEn": "Maxim Mocha Coffee Mix 100 Sticks New Arrival",
    "nameKo": "맥심 모카골드 커피믹스 100T 신상품",
    "price": 19500,
    "oldPrice": 25000,
    "stock": 82,
    "sales": 3846,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 209,
    "categoryKey": "food",
    "name": "CJ 햇반 即食米饭 24个 限量款",
    "nameZh": "CJ 햇반 即食米饭 24个 限量款",
    "nameEn": "CJ Hetbahn Cooked Rice 24 Cups Limited Edition",
    "nameKo": "CJ 햇반 24개입 한정판",
    "price": 29000,
    "oldPrice": 38600,
    "stock": 101,
    "sales": 4579,
    "rating": "4.7",
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 210,
    "categoryKey": "food",
    "name": "Bibigo 王饺子 1.05kg 新款",
    "nameZh": "Bibigo 王饺子 1.05kg 新款",
    "nameEn": "Bibigo Mandu Dumplings 1.05kg New Arrival",
    "nameKo": "비비고 왕교자 1.05kg 신상품",
    "price": 12400,
    "oldPrice": 14400,
    "stock": 120,
    "sales": 5312,
    "rating": "4.8",
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 211,
    "categoryKey": "food",
    "name": "乐天巧克力派 12个 限量款",
    "nameZh": "乐天巧克力派 12个 限量款",
    "nameEn": "Lotte Choco Pie 12 Pack Limited Edition",
    "nameKo": "롯데 초코파이 12개입 한정판",
    "price": 6800,
    "oldPrice": 8200,
    "stock": 139,
    "sales": 6045,
    "rating": "4.9",
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 212,
    "categoryKey": "food",
    "name": "Samyang 火鸡面 10包 新款",
    "nameZh": "Samyang 火鸡面 10包 新款",
    "nameEn": "Samyang Buldak Ramen 10 Pack New Arrival",
    "nameKo": "삼양 불닭볶음면 10봉 신상품",
    "price": 14600,
    "oldPrice": 18400,
    "stock": 158,
    "sales": 6778,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 213,
    "categoryKey": "food",
    "name": "Osulloc 绿茶曲奇礼盒 限量款",
    "nameZh": "Osulloc 绿茶曲奇礼盒 限量款",
    "nameEn": "Osulloc Green Tea Cookie Gift Box Limited Edition",
    "nameKo": "오설록 녹차 쿠키 세트 한정판",
    "price": 24700,
    "oldPrice": 32400,
    "stock": 177,
    "sales": 7511,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 214,
    "categoryKey": "food",
    "name": "Market O 布朗尼 16个 新款",
    "nameZh": "Market O 布朗尼 16个 新款",
    "nameEn": "Market O Real Brownie 16 Pack New Arrival",
    "nameKo": "마켓오 리얼브라우니 16개입 신상품",
    "price": 12000,
    "oldPrice": 13700,
    "stock": 196,
    "sales": 8244,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 215,
    "categoryKey": "food",
    "name": "Dongwon 金枪鱼罐头 12罐 限量款",
    "nameZh": "Dongwon 金枪鱼罐头 12罐 限量款",
    "nameEn": "Dongwon Tuna Can 12 Pack Limited Edition",
    "nameKo": "동원참치 12캔 한정판",
    "price": 24900,
    "oldPrice": 29600,
    "stock": 215,
    "sales": 8977,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 216,
    "categoryKey": "food",
    "name": "Binggrae 香蕉牛奶 24瓶 新款",
    "nameZh": "Binggrae 香蕉牛奶 24瓶 新款",
    "nameEn": "Binggrae Banana Milk 24 Bottles New Arrival",
    "nameKo": "빙그레 바나나맛우유 24개 신상품",
    "price": 30900,
    "oldPrice": 38300,
    "stock": 234,
    "sales": 9710,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 217,
    "categoryKey": "home",
    "name": "3M Scotch-Brite 清洁套装",
    "nameZh": "3M Scotch-Brite 清洁套装",
    "nameEn": "3M Scotch-Brite Cleaning Kit",
    "nameKo": "3M 스카치브라이트 청소세트",
    "price": 17400,
    "oldPrice": 19500,
    "stock": 18,
    "sales": 650,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 218,
    "categoryKey": "home",
    "name": "Living Box 折叠收纳箱 3个",
    "nameZh": "Living Box 折叠收纳箱 3个",
    "nameEn": "Foldable Storage Box 3 Pack",
    "nameKo": "접이식 수납박스 3개입",
    "price": 24700,
    "oldPrice": 28900,
    "stock": 37,
    "sales": 1383,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 219,
    "categoryKey": "home",
    "name": "Persil 洗衣液 2.7L",
    "nameZh": "Persil 洗衣液 2.7L",
    "nameEn": "Persil Laundry Detergent 2.7L",
    "nameKo": "퍼실 세탁세제 2.7L",
    "price": 20400,
    "oldPrice": 24900,
    "stock": 56,
    "sales": 2116,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 220,
    "categoryKey": "home",
    "name": "Songwol 纯棉浴巾 4条",
    "nameZh": "Songwol 纯棉浴巾 4条",
    "nameEn": "Songwol Cotton Bath Towel 4 Pack",
    "nameKo": "송월 순면 바스타월 4장",
    "price": 39900,
    "oldPrice": 50700,
    "stock": 75,
    "sales": 2849,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 221,
    "categoryKey": "home",
    "name": "LocknLock 收纳篮套装",
    "nameZh": "LocknLock 收纳篮套装",
    "nameEn": "LocknLock Organizer Basket Set",
    "nameKo": "락앤락 정리 바스켓 세트",
    "price": 18700,
    "oldPrice": 24700,
    "stock": 94,
    "sales": 3582,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 222,
    "categoryKey": "home",
    "name": "Dyson V12 Detect Slim 吸尘器",
    "nameZh": "Dyson V12 Detect Slim 吸尘器",
    "nameEn": "Dyson V12 Detect Slim Vacuum",
    "nameKo": "다이슨 V12 디텍트 슬림 청소기",
    "price": 807000,
    "oldPrice": 928100,
    "stock": 113,
    "sales": 4315,
    "rating": "4.7",
    "image": "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 223,
    "categoryKey": "home",
    "name": "IKEA LACK 边桌 白色",
    "nameZh": "IKEA LACK 边桌 白色",
    "nameEn": "IKEA LACK Side Table White",
    "nameKo": "이케아 LACK 사이드테이블 화이트",
    "price": 18900,
    "oldPrice": 22700,
    "stock": 132,
    "sales": 5048,
    "rating": "4.8",
    "image": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 224,
    "categoryKey": "home",
    "name": "Hanssem 北欧落地灯",
    "nameZh": "Hanssem 北欧落地灯",
    "nameEn": "Hanssem Nordic Floor Lamp",
    "nameKo": "한샘 북유럽 플로어 램프",
    "price": 90800,
    "oldPrice": 113500,
    "stock": 151,
    "sales": 5781,
    "rating": "4.9",
    "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 225,
    "categoryKey": "home",
    "name": "Muji 香薰机 白色",
    "nameZh": "Muji 香薰机 白色",
    "nameEn": "Muji Aroma Diffuser White",
    "nameKo": "무인양품 아로마 디퓨저 화이트",
    "price": 66200,
    "oldPrice": 86100,
    "stock": 170,
    "sales": 6514,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 226,
    "categoryKey": "home",
    "name": "Cuckoo 空气净化器 20坪",
    "nameZh": "Cuckoo 空气净化器 20坪",
    "nameEn": "Cuckoo Air Purifier 20 Pyeong",
    "nameKo": "쿠쿠 공기청정기 20평형",
    "price": 256500,
    "oldPrice": 289800,
    "stock": 189,
    "sales": 7247,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 227,
    "categoryKey": "home",
    "name": "Casamia 抱枕套 2个",
    "nameZh": "Casamia 抱枕套 2个",
    "nameEn": "Casamia Cushion Cover 2 Pack",
    "nameKo": "까사미아 쿠션커버 2개입",
    "price": 29000,
    "oldPrice": 34200,
    "stock": 208,
    "sales": 7980,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 228,
    "categoryKey": "home",
    "name": "Jaju 防滑衣架 30个",
    "nameZh": "Jaju 防滑衣架 30个",
    "nameEn": "Jaju Non-Slip Hanger 30 Pack",
    "nameKo": "자주 논슬립 옷걸이 30개",
    "price": 20700,
    "oldPrice": 25500,
    "stock": 227,
    "sales": 8713,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 229,
    "categoryKey": "home",
    "name": "3M Scotch-Brite 清洁套装 限量款",
    "nameZh": "3M Scotch-Brite 清洁套装 限量款",
    "nameEn": "3M Scotch-Brite Cleaning Kit Limited Edition",
    "nameKo": "3M 스카치브라이트 청소세트 한정판",
    "price": 18000,
    "oldPrice": 20300,
    "stock": 25,
    "sales": 1647,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 230,
    "categoryKey": "home",
    "name": "Living Box 折叠收纳箱 3个 新款",
    "nameZh": "Living Box 折叠收纳箱 3个 新款",
    "nameEn": "Foldable Storage Box 3 Pack New Arrival",
    "nameKo": "접이식 수납박스 3개입 신상품",
    "price": 25400,
    "oldPrice": 30000,
    "stock": 44,
    "sales": 2380,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 231,
    "categoryKey": "home",
    "name": "Persil 洗衣液 2.7L 限量款",
    "nameZh": "Persil 洗衣液 2.7L 限量款",
    "nameEn": "Persil Laundry Detergent 2.7L Limited Edition",
    "nameKo": "퍼실 세탁세제 2.7L 한정판",
    "price": 21000,
    "oldPrice": 25800,
    "stock": 63,
    "sales": 3113,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 232,
    "categoryKey": "home",
    "name": "Songwol 纯棉浴巾 4条 新款",
    "nameZh": "Songwol 纯棉浴巾 4条 新款",
    "nameEn": "Songwol Cotton Bath Towel 4 Pack New Arrival",
    "nameKo": "송월 순면 바스타월 4장 신상품",
    "price": 41100,
    "oldPrice": 52600,
    "stock": 82,
    "sales": 3846,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 233,
    "categoryKey": "home",
    "name": "LocknLock 收纳篮套装 限量款",
    "nameZh": "LocknLock 收纳篮套装 限量款",
    "nameEn": "LocknLock Organizer Basket Set Limited Edition",
    "nameKo": "락앤락 정리 바스켓 세트 한정판",
    "price": 19300,
    "oldPrice": 25700,
    "stock": 101,
    "sales": 4579,
    "rating": "4.7",
    "image": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 234,
    "categoryKey": "home",
    "name": "Dyson V12 Detect Slim 吸尘器 新款",
    "nameZh": "Dyson V12 Detect Slim 吸尘器 新款",
    "nameEn": "Dyson V12 Detect Slim Vacuum New Arrival",
    "nameKo": "다이슨 V12 디텍트 슬림 청소기 신상품",
    "price": 831000,
    "oldPrice": 964000,
    "stock": 120,
    "sales": 5312,
    "rating": "4.8",
    "image": "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 235,
    "categoryKey": "home",
    "name": "IKEA LACK 边桌 白色 限量款",
    "nameZh": "IKEA LACK 边桌 白色 限量款",
    "nameEn": "IKEA LACK Side Table White Limited Edition",
    "nameKo": "이케아 LACK 사이드테이블 화이트 한정판",
    "price": 19500,
    "oldPrice": 23600,
    "stock": 139,
    "sales": 6045,
    "rating": "4.9",
    "image": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 236,
    "categoryKey": "home",
    "name": "Hanssem 北欧落地灯 新款",
    "nameZh": "Hanssem 北欧落地灯 新款",
    "nameEn": "Hanssem Nordic Floor Lamp New Arrival",
    "nameKo": "한샘 북유럽 플로어 램프 신상품",
    "price": 81900,
    "oldPrice": 103200,
    "stock": 158,
    "sales": 6778,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 237,
    "categoryKey": "home",
    "name": "Muji 香薰机 白色 限量款",
    "nameZh": "Muji 香薰机 白色 限量款",
    "nameEn": "Muji Aroma Diffuser White Limited Edition",
    "nameKo": "무인양품 아로마 디퓨저 화이트 한정판",
    "price": 68300,
    "oldPrice": 89500,
    "stock": 177,
    "sales": 7511,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 238,
    "categoryKey": "home",
    "name": "Cuckoo 空气净化器 20坪 新款",
    "nameZh": "Cuckoo 空气净化器 20坪 新款",
    "nameEn": "Cuckoo Air Purifier 20 Pyeong New Arrival",
    "nameKo": "쿠쿠 공기청정기 20평형 신상품",
    "price": 231600,
    "oldPrice": 264000,
    "stock": 196,
    "sales": 8244,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 239,
    "categoryKey": "home",
    "name": "Casamia 抱枕套 2个 限量款",
    "nameZh": "Casamia 抱枕套 2个 限量款",
    "nameEn": "Casamia Cushion Cover 2 Pack Limited Edition",
    "nameKo": "까사미아 쿠션커버 2개입 한정판",
    "price": 29900,
    "oldPrice": 35600,
    "stock": 215,
    "sales": 8977,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 240,
    "categoryKey": "home",
    "name": "Jaju 防滑衣架 30个 新款",
    "nameZh": "Jaju 防滑衣架 30个 新款",
    "nameEn": "Jaju Non-Slip Hanger 30 Pack New Arrival",
    "nameKo": "자주 논슬립 옷걸이 30개 신상품",
    "price": 18700,
    "oldPrice": 23200,
    "stock": 234,
    "sales": 9710,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 241,
    "categoryKey": "kitchen",
    "name": "Tefal 不粘锅 28cm",
    "nameZh": "Tefal 不粘锅 28cm",
    "nameEn": "Tefal Non-Stick Frying Pan 28cm",
    "nameKo": "테팔 논스틱 프라이팬 28cm",
    "price": 35900,
    "oldPrice": 40200,
    "stock": 18,
    "sales": 650,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 242,
    "categoryKey": "kitchen",
    "name": "PN Poongnyun 不锈钢锅 24cm",
    "nameZh": "PN Poongnyun 不锈钢锅 24cm",
    "nameEn": "PN Poongnyun Stainless Pot 24cm",
    "nameKo": "PN풍년 스테인리스 냄비 24cm",
    "price": 58400,
    "oldPrice": 68300,
    "stock": 37,
    "sales": 1383,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1584990347449-a5d9f800a783?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 243,
    "categoryKey": "kitchen",
    "name": "Corelle 4人餐具套装",
    "nameZh": "Corelle 4人餐具套装",
    "nameEn": "Corelle Dinnerware Set for 4",
    "nameKo": "코렐 4인 식기세트",
    "price": 110700,
    "oldPrice": 135100,
    "stock": 56,
    "sales": 2116,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 244,
    "categoryKey": "kitchen",
    "name": "Starbucks 陶瓷马克杯 355ml",
    "nameZh": "Starbucks 陶瓷马克杯 355ml",
    "nameEn": "Starbucks Ceramic Mug 355ml",
    "nameKo": "스타벅스 세라믹 머그 355ml",
    "price": 18000,
    "oldPrice": 22900,
    "stock": 75,
    "sales": 2849,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 245,
    "categoryKey": "kitchen",
    "name": "LocknLock 保鲜盒 10件套",
    "nameZh": "LocknLock 保鲜盒 10件套",
    "nameEn": "LocknLock Food Container 10 Set",
    "nameKo": "락앤락 밀폐용기 10종",
    "price": 28100,
    "oldPrice": 37100,
    "stock": 94,
    "sales": 3582,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 246,
    "categoryKey": "kitchen",
    "name": "Joseph Joseph 砧板套装",
    "nameZh": "Joseph Joseph 砧板套装",
    "nameEn": "Joseph Joseph Chopping Board Set",
    "nameKo": "조셉조셉 도마 세트",
    "price": 79800,
    "oldPrice": 91800,
    "stock": 113,
    "sales": 4315,
    "rating": "4.7",
    "image": "https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 247,
    "categoryKey": "kitchen",
    "name": "Zwilling 厨房刀具 2件套",
    "nameZh": "Zwilling 厨房刀具 2件套",
    "nameEn": "Zwilling Kitchen Knife 2 Piece Set",
    "nameKo": "헹켈 즈윌링 칼 2종 세트",
    "price": 122600,
    "oldPrice": 147100,
    "stock": 132,
    "sales": 5048,
    "rating": "4.8",
    "image": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 248,
    "categoryKey": "kitchen",
    "name": "Nespresso Vertuo 咖啡机",
    "nameZh": "Nespresso Vertuo 咖啡机",
    "nameEn": "Nespresso Vertuo Coffee Machine",
    "nameKo": "네스프레소 버츄오 커피머신",
    "price": 203000,
    "oldPrice": 253800,
    "stock": 151,
    "sales": 5781,
    "rating": "4.9",
    "image": "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 249,
    "categoryKey": "kitchen",
    "name": "Philips 空气炸锅 4.1L",
    "nameZh": "Philips 空气炸锅 4.1L",
    "nameEn": "Philips Air Fryer 4.1L",
    "nameKo": "필립스 에어프라이어 4.1L",
    "price": 123800,
    "oldPrice": 160900,
    "stock": 170,
    "sales": 6514,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 250,
    "categoryKey": "kitchen",
    "name": "Cuchen 电饭煲 6人份",
    "nameZh": "Cuchen 电饭煲 6人份",
    "nameEn": "Cuchen Rice Cooker 6-Cup",
    "nameKo": "쿠첸 6인용 전기밥솥",
    "price": 194700,
    "oldPrice": 220000,
    "stock": 189,
    "sales": 7247,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1584269600519-11242c8a142f?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 251,
    "categoryKey": "kitchen",
    "name": "Bodum 法压壶 350ml",
    "nameZh": "Bodum 法压壶 350ml",
    "nameEn": "Bodum French Press 350ml",
    "nameKo": "보덤 프렌치프레스 350ml",
    "price": 28100,
    "oldPrice": 33200,
    "stock": 208,
    "sales": 7980,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 252,
    "categoryKey": "kitchen",
    "name": "IKEA 调味罐 4件套",
    "nameZh": "IKEA 调味罐 4件套",
    "nameEn": "IKEA Spice Jar 4 Pack",
    "nameKo": "이케아 양념통 4개입",
    "price": 10300,
    "oldPrice": 12700,
    "stock": 227,
    "sales": 8713,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 253,
    "categoryKey": "kitchen",
    "name": "Tefal 不粘锅 28cm 限量款",
    "nameZh": "Tefal 不粘锅 28cm 限量款",
    "nameEn": "Tefal Non-Stick Frying Pan 28cm Limited Edition",
    "nameKo": "테팔 논스틱 프라이팬 28cm 한정판",
    "price": 37000,
    "oldPrice": 41800,
    "stock": 25,
    "sales": 1647,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 254,
    "categoryKey": "kitchen",
    "name": "PN Poongnyun 不锈钢锅 24cm 新款",
    "nameZh": "PN Poongnyun 不锈钢锅 24cm 新款",
    "nameEn": "PN Poongnyun Stainless Pot 24cm New Arrival",
    "nameKo": "PN풍년 스테인리스 냄비 24cm 신상품",
    "price": 60200,
    "oldPrice": 71000,
    "stock": 44,
    "sales": 2380,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1584990347449-a5d9f800a783?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 255,
    "categoryKey": "kitchen",
    "name": "Corelle 4人餐具套装 限量款",
    "nameZh": "Corelle 4人餐具套装 限量款",
    "nameEn": "Corelle Dinnerware Set for 4 Limited Edition",
    "nameKo": "코렐 4인 식기세트 한정판",
    "price": 114200,
    "oldPrice": 140500,
    "stock": 63,
    "sales": 3113,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 256,
    "categoryKey": "kitchen",
    "name": "Starbucks 陶瓷马克杯 355ml 新款",
    "nameZh": "Starbucks 陶瓷马克杯 355ml 新款",
    "nameEn": "Starbucks Ceramic Mug 355ml New Arrival",
    "nameKo": "스타벅스 세라믹 머그 355ml 신상품",
    "price": 18500,
    "oldPrice": 23700,
    "stock": 82,
    "sales": 3846,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 257,
    "categoryKey": "kitchen",
    "name": "LocknLock 保鲜盒 10件套 限量款",
    "nameZh": "LocknLock 保鲜盒 10件套 限量款",
    "nameEn": "LocknLock Food Container 10 Set Limited Edition",
    "nameKo": "락앤락 밀폐용기 10종 한정판",
    "price": 29000,
    "oldPrice": 38600,
    "stock": 101,
    "sales": 4579,
    "rating": "4.7",
    "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 258,
    "categoryKey": "kitchen",
    "name": "Joseph Joseph 砧板套装 新款",
    "nameZh": "Joseph Joseph 砧板套装 新款",
    "nameEn": "Joseph Joseph Chopping Board Set New Arrival",
    "nameKo": "조셉조셉 도마 세트 신상품",
    "price": 82200,
    "oldPrice": 95400,
    "stock": 120,
    "sales": 5312,
    "rating": "4.8",
    "image": "https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 259,
    "categoryKey": "kitchen",
    "name": "Zwilling 厨房刀具 2件套 限量款",
    "nameZh": "Zwilling 厨房刀具 2件套 限量款",
    "nameEn": "Zwilling Kitchen Knife 2 Piece Set Limited Edition",
    "nameKo": "헹켈 즈윌링 칼 2종 세트 한정판",
    "price": 126400,
    "oldPrice": 152900,
    "stock": 139,
    "sales": 6045,
    "rating": "4.9",
    "image": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 260,
    "categoryKey": "kitchen",
    "name": "Nespresso Vertuo 咖啡机 新款",
    "nameZh": "Nespresso Vertuo 咖啡机 新款",
    "nameEn": "Nespresso Vertuo Coffee Machine New Arrival",
    "nameKo": "네스프레소 버츄오 커피머신 신상품",
    "price": 183100,
    "oldPrice": 230700,
    "stock": 158,
    "sales": 6778,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 261,
    "categoryKey": "kitchen",
    "name": "Philips 空气炸锅 4.1L 限量款",
    "nameZh": "Philips 空气炸锅 4.1L 限量款",
    "nameEn": "Philips Air Fryer 4.1L Limited Edition",
    "nameKo": "필립스 에어프라이어 4.1L 한정판",
    "price": 127700,
    "oldPrice": 167300,
    "stock": 177,
    "sales": 7511,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 262,
    "categoryKey": "kitchen",
    "name": "Cuchen 电饭煲 6人份 新款",
    "nameZh": "Cuchen 电饭煲 6人份 新款",
    "nameEn": "Cuchen Rice Cooker 6-Cup New Arrival",
    "nameKo": "쿠첸 6인용 전기밥솥 신상품",
    "price": 175800,
    "oldPrice": 200400,
    "stock": 196,
    "sales": 8244,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1584269600519-11242c8a142f?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 263,
    "categoryKey": "kitchen",
    "name": "Bodum 法压壶 350ml 限量款",
    "nameZh": "Bodum 法压壶 350ml 限量款",
    "nameEn": "Bodum French Press 350ml Limited Edition",
    "nameKo": "보덤 프렌치프레스 350ml 한정판",
    "price": 29000,
    "oldPrice": 34500,
    "stock": 215,
    "sales": 8977,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 264,
    "categoryKey": "kitchen",
    "name": "IKEA 调味罐 4件套 新款",
    "nameZh": "IKEA 调味罐 4件套 新款",
    "nameEn": "IKEA Spice Jar 4 Pack New Arrival",
    "nameKo": "이케아 양념통 4개입 신상품",
    "price": 9300,
    "oldPrice": 11500,
    "stock": 234,
    "sales": 9710,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 265,
    "categoryKey": "kids",
    "name": "Huggies 婴儿纸尿裤 3段",
    "nameZh": "Huggies 婴儿纸尿裤 3段",
    "nameEn": "Huggies Baby Diapers Stage 3",
    "nameKo": "하기스 기저귀 3단계",
    "price": 27500,
    "oldPrice": 30800,
    "stock": 18,
    "sales": 650,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 266,
    "categoryKey": "kids",
    "name": "Lego Classic 创意积木盒",
    "nameZh": "Lego Classic 创意积木盒",
    "nameEn": "LEGO Classic Creative Brick Box",
    "nameKo": "레고 클래식 창의력 브릭 박스",
    "price": 58400,
    "oldPrice": 68300,
    "stock": 37,
    "sales": 1383,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 267,
    "categoryKey": "kids",
    "name": "Pigeon PPSU 奶瓶 240ml",
    "nameZh": "Pigeon PPSU 奶瓶 240ml",
    "nameEn": "Pigeon PPSU Baby Bottle 240ml",
    "nameKo": "피죤 PPSU 젖병 240ml",
    "price": 17600,
    "oldPrice": 21500,
    "stock": 56,
    "sales": 2116,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 268,
    "categoryKey": "kids",
    "name": "Mikihouse 儿童连帽卫衣",
    "nameZh": "Mikihouse 儿童连帽卫衣",
    "nameEn": "Mikihouse Kids Hoodie",
    "nameKo": "미키하우스 키즈 후디",
    "price": 79000,
    "oldPrice": 100300,
    "stock": 75,
    "sales": 2849,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 269,
    "categoryKey": "kids",
    "name": "Pororo 儿童餐具套装",
    "nameZh": "Pororo 儿童餐具套装",
    "nameEn": "Pororo Kids Tableware Set",
    "nameKo": "뽀로로 유아 식기세트",
    "price": 18700,
    "oldPrice": 24700,
    "stock": 94,
    "sales": 3582,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 270,
    "categoryKey": "kids",
    "name": "Joie 儿童安全座椅",
    "nameZh": "Joie 儿童安全座椅",
    "nameEn": "Joie Child Car Seat",
    "nameKo": "조이 유아 카시트",
    "price": 251500,
    "oldPrice": 289200,
    "stock": 113,
    "sales": 4315,
    "rating": "4.7",
    "image": "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 271,
    "categoryKey": "kids",
    "name": "Stokke Tripp Trapp 成长椅",
    "nameZh": "Stokke Tripp Trapp 成长椅",
    "nameEn": "Stokke Tripp Trapp Chair",
    "nameKo": "스토케 트립트랩 체어",
    "price": 350600,
    "oldPrice": 420700,
    "stock": 132,
    "sales": 5048,
    "rating": "4.8",
    "image": "https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 272,
    "categoryKey": "kids",
    "name": "Mother-K 奶瓶清洁剂 500ml",
    "nameZh": "Mother-K 奶瓶清洁剂 500ml",
    "nameEn": "Mother-K Baby Bottle Cleanser 500ml",
    "nameKo": "마더케이 젖병세정제 500ml",
    "price": 9100,
    "oldPrice": 11400,
    "stock": 151,
    "sales": 5781,
    "rating": "4.9",
    "image": "https://images.unsplash.com/photo-1546015720-b8b30df5aa27?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 273,
    "categoryKey": "kids",
    "name": "Babybjorn 婴儿背带",
    "nameZh": "Babybjorn 婴儿背带",
    "nameEn": "Babybjorn Baby Carrier",
    "nameKo": "베이비뵨 아기띠",
    "price": 181400,
    "oldPrice": 235800,
    "stock": 170,
    "sales": 6514,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 274,
    "categoryKey": "kids",
    "name": "Combi 婴儿推车",
    "nameZh": "Combi 婴儿推车",
    "nameEn": "Combi Baby Stroller",
    "nameKo": "콤비 유모차",
    "price": 308000,
    "oldPrice": 348000,
    "stock": 189,
    "sales": 7247,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1604467794349-0b74285de7e7?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 275,
    "categoryKey": "kids",
    "name": "Toyroyal 洗澡玩具套装",
    "nameZh": "Toyroyal 洗澡玩具套装",
    "nameEn": "Toyroyal Bath Toy Set",
    "nameKo": "토이로얄 목욕놀이 세트",
    "price": 15400,
    "oldPrice": 18200,
    "stock": 208,
    "sales": 7980,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 276,
    "categoryKey": "kids",
    "name": "Blue Dog Baby 连体衣",
    "nameZh": "Blue Dog Baby 连体衣",
    "nameEn": "Blue Dog Baby Bodysuit",
    "nameKo": "블루독베이비 바디수트",
    "price": 51000,
    "oldPrice": 62700,
    "stock": 227,
    "sales": 8713,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 277,
    "categoryKey": "kids",
    "name": "Huggies 婴儿纸尿裤 3段 限量款",
    "nameZh": "Huggies 婴儿纸尿裤 3段 限量款",
    "nameEn": "Huggies Baby Diapers Stage 3 Limited Edition",
    "nameKo": "하기스 기저귀 3단계 한정판",
    "price": 28400,
    "oldPrice": 32100,
    "stock": 25,
    "sales": 1647,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 278,
    "categoryKey": "kids",
    "name": "Lego Classic 创意积木盒 新款",
    "nameZh": "Lego Classic 创意积木盒 新款",
    "nameEn": "LEGO Classic Creative Brick Box New Arrival",
    "nameKo": "레고 클래식 창의력 브릭 박스 신상품",
    "price": 60200,
    "oldPrice": 71000,
    "stock": 44,
    "sales": 2380,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 279,
    "categoryKey": "kids",
    "name": "Pigeon PPSU 奶瓶 240ml 限量款",
    "nameZh": "Pigeon PPSU 奶瓶 240ml 限量款",
    "nameEn": "Pigeon PPSU Baby Bottle 240ml Limited Edition",
    "nameKo": "피죤 PPSU 젖병 240ml 한정판",
    "price": 18100,
    "oldPrice": 22300,
    "stock": 63,
    "sales": 3113,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 280,
    "categoryKey": "kids",
    "name": "Mikihouse 儿童连帽卫衣 新款",
    "nameZh": "Mikihouse 儿童连帽卫衣 新款",
    "nameEn": "Mikihouse Kids Hoodie New Arrival",
    "nameKo": "미키하우스 키즈 후디 신상품",
    "price": 81400,
    "oldPrice": 104200,
    "stock": 82,
    "sales": 3846,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 281,
    "categoryKey": "kids",
    "name": "Pororo 儿童餐具套装 限量款",
    "nameZh": "Pororo 儿童餐具套装 限量款",
    "nameEn": "Pororo Kids Tableware Set Limited Edition",
    "nameKo": "뽀로로 유아 식기세트 한정판",
    "price": 19300,
    "oldPrice": 25700,
    "stock": 101,
    "sales": 4579,
    "rating": "4.7",
    "image": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 282,
    "categoryKey": "kids",
    "name": "Joie 儿童安全座椅 新款",
    "nameZh": "Joie 儿童安全座椅 新款",
    "nameEn": "Joie Child Car Seat New Arrival",
    "nameKo": "조이 유아 카시트 신상품",
    "price": 259000,
    "oldPrice": 300400,
    "stock": 120,
    "sales": 5312,
    "rating": "4.8",
    "image": "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 283,
    "categoryKey": "kids",
    "name": "Stokke Tripp Trapp 成长椅 限量款",
    "nameZh": "Stokke Tripp Trapp 成长椅 限量款",
    "nameEn": "Stokke Tripp Trapp Chair Limited Edition",
    "nameKo": "스토케 트립트랩 체어 한정판",
    "price": 361600,
    "oldPrice": 437500,
    "stock": 139,
    "sales": 6045,
    "rating": "4.9",
    "image": "https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 284,
    "categoryKey": "kids",
    "name": "Mother-K 奶瓶清洁剂 500ml 新款",
    "nameZh": "Mother-K 奶瓶清洁剂 500ml 新款",
    "nameEn": "Mother-K Baby Bottle Cleanser 500ml New Arrival",
    "nameKo": "마더케이 젖병세정제 500ml 신상품",
    "price": 8200,
    "oldPrice": 10300,
    "stock": 158,
    "sales": 6778,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1546015720-b8b30df5aa27?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 285,
    "categoryKey": "kids",
    "name": "Babybjorn 婴儿背带 限量款",
    "nameZh": "Babybjorn 婴儿背带 限量款",
    "nameEn": "Babybjorn Baby Carrier Limited Edition",
    "nameKo": "베이비뵨 아기띠 한정판",
    "price": 187100,
    "oldPrice": 245100,
    "stock": 177,
    "sales": 7511,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 286,
    "categoryKey": "kids",
    "name": "Combi 婴儿推车 新款",
    "nameZh": "Combi 婴儿推车 新款",
    "nameEn": "Combi Baby Stroller New Arrival",
    "nameKo": "콤비 유모차 신상품",
    "price": 278100,
    "oldPrice": 317000,
    "stock": 196,
    "sales": 8244,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1604467794349-0b74285de7e7?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 287,
    "categoryKey": "kids",
    "name": "Toyroyal 洗澡玩具套装 限量款",
    "nameZh": "Toyroyal 洗澡玩具套装 限量款",
    "nameEn": "Toyroyal Bath Toy Set Limited Edition",
    "nameKo": "토이로얄 목욕놀이 세트 한정판",
    "price": 15900,
    "oldPrice": 18900,
    "stock": 215,
    "sales": 8977,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 288,
    "categoryKey": "kids",
    "name": "Blue Dog Baby 连体衣 新款",
    "nameZh": "Blue Dog Baby 连体衣 新款",
    "nameEn": "Blue Dog Baby Bodysuit New Arrival",
    "nameKo": "블루독베이비 바디수트 신상품",
    "price": 46100,
    "oldPrice": 57200,
    "stock": 234,
    "sales": 9710,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 289,
    "categoryKey": "kpop",
    "name": "BTS Proof Album 标准版",
    "nameZh": "BTS Proof Album 标准版",
    "nameEn": "BTS Proof Album Standard Edition",
    "nameKo": "BTS Proof 앨범 스탠다드 에디션",
    "price": 59700,
    "oldPrice": 66900,
    "stock": 18,
    "sales": 650,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 290,
    "categoryKey": "kpop",
    "name": "IVE 官方小卡收纳册",
    "nameZh": "IVE 官方小卡收纳册",
    "nameEn": "IVE Official Photo Card Binder",
    "nameKo": "아이브 공식 포토카드 바인더",
    "price": 22700,
    "oldPrice": 26600,
    "stock": 37,
    "sales": 1383,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 291,
    "categoryKey": "kpop",
    "name": "NewJeans 官方应援棒",
    "nameZh": "NewJeans 官方应援棒",
    "nameEn": "NewJeans Official Light Stick",
    "nameKo": "뉴진스 공식 응원봉",
    "price": 45600,
    "oldPrice": 55600,
    "stock": 56,
    "sales": 2116,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 292,
    "categoryKey": "kpop",
    "name": "SEVENTEEN 海报套装",
    "nameZh": "SEVENTEEN 海报套装",
    "nameEn": "SEVENTEEN Poster Set",
    "nameKo": "세븐틴 포스터 세트",
    "price": 19900,
    "oldPrice": 25300,
    "stock": 75,
    "sales": 2849,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 293,
    "categoryKey": "kpop",
    "name": "BLACKPINK Born Pink Album",
    "nameZh": "BLACKPINK Born Pink Album",
    "nameEn": "BLACKPINK Born Pink Album",
    "nameKo": "블랙핑크 Born Pink 앨범",
    "price": 25300,
    "oldPrice": 33400,
    "stock": 94,
    "sales": 3582,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 294,
    "categoryKey": "kpop",
    "name": "Stray Kids 樂-STAR Album",
    "nameZh": "Stray Kids 樂-STAR Album",
    "nameEn": "Stray Kids ROCK-STAR Album",
    "nameKo": "스트레이키즈 樂-STAR 앨범",
    "price": 24100,
    "oldPrice": 27700,
    "stock": 113,
    "sales": 4315,
    "rating": "4.7",
    "image": "https://images.unsplash.com/photo-1521334726092-b509a19597c6?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 295,
    "categoryKey": "kpop",
    "name": "LE SSERAFIM 官方钥匙扣",
    "nameZh": "LE SSERAFIM 官方钥匙扣",
    "nameEn": "LE SSERAFIM Official Keyring",
    "nameKo": "르세라핌 공식 키링",
    "price": 16100,
    "oldPrice": 19300,
    "stock": 132,
    "sales": 5048,
    "rating": "4.8",
    "image": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 296,
    "categoryKey": "kpop",
    "name": "aespa 官方照片套装",
    "nameZh": "aespa 官方照片套装",
    "nameEn": "aespa Official Photo Set",
    "nameKo": "에스파 공식 포토 세트",
    "price": 15200,
    "oldPrice": 19000,
    "stock": 151,
    "sales": 5781,
    "rating": "4.9",
    "image": "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 297,
    "categoryKey": "kpop",
    "name": "TXT 官方徽章套装",
    "nameZh": "TXT 官方徽章套装",
    "nameEn": "TXT Official Badge Set",
    "nameKo": "투모로우바이투게더 공식 뱃지 세트",
    "price": 15300,
    "oldPrice": 19900,
    "stock": 170,
    "sales": 6514,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 298,
    "categoryKey": "kpop",
    "name": "ENHYPEN Manifesto Album",
    "nameZh": "ENHYPEN Manifesto Album",
    "nameEn": "ENHYPEN Manifesto Album",
    "nameKo": "엔하이픈 Manifesto 앨범",
    "price": 23600,
    "oldPrice": 26700,
    "stock": 189,
    "sales": 7247,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1464375117522-1311d1a5b81f?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 299,
    "categoryKey": "kpop",
    "name": "TWICE 官方明信片套装",
    "nameZh": "TWICE 官方明信片套装",
    "nameEn": "TWICE Official Postcard Set",
    "nameKo": "트와이스 공식 엽서 세트",
    "price": 12500,
    "oldPrice": 14800,
    "stock": 208,
    "sales": 7980,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 300,
    "categoryKey": "kpop",
    "name": "NCT 官方亚克力立牌",
    "nameZh": "NCT 官方亚克力立牌",
    "nameEn": "NCT Official Acrylic Stand",
    "nameKo": "NCT 공식 아크릴 스탠드",
    "price": 19700,
    "oldPrice": 24200,
    "stock": 227,
    "sales": 8713,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 301,
    "categoryKey": "kpop",
    "name": "BTS Proof Album 标准版 限量款",
    "nameZh": "BTS Proof Album 标准版 限量款",
    "nameEn": "BTS Proof Album Standard Edition Limited Edition",
    "nameKo": "BTS Proof 앨범 스탠다드 에디션 한정판",
    "price": 61700,
    "oldPrice": 69700,
    "stock": 25,
    "sales": 1647,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 302,
    "categoryKey": "kpop",
    "name": "IVE 官方小卡收纳册 新款",
    "nameZh": "IVE 官方小卡收纳册 新款",
    "nameEn": "IVE Official Photo Card Binder New Arrival",
    "nameKo": "아이브 공식 포토카드 바인더 신상품",
    "price": 23400,
    "oldPrice": 27600,
    "stock": 44,
    "sales": 2380,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 303,
    "categoryKey": "kpop",
    "name": "NewJeans 官方应援棒 限量款",
    "nameZh": "NewJeans 官方应援棒 限量款",
    "nameEn": "NewJeans Official Light Stick Limited Edition",
    "nameKo": "뉴진스 공식 응원봉 한정판",
    "price": 47000,
    "oldPrice": 57800,
    "stock": 63,
    "sales": 3113,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 304,
    "categoryKey": "kpop",
    "name": "SEVENTEEN 海报套装 新款",
    "nameZh": "SEVENTEEN 海报套装 新款",
    "nameEn": "SEVENTEEN Poster Set New Arrival",
    "nameKo": "세븐틴 포스터 세트 신상품",
    "price": 20500,
    "oldPrice": 26200,
    "stock": 82,
    "sales": 3846,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 305,
    "categoryKey": "kpop",
    "name": "BLACKPINK Born Pink Album 限量款",
    "nameZh": "BLACKPINK Born Pink Album 限量款",
    "nameEn": "BLACKPINK Born Pink Album Limited Edition",
    "nameKo": "블랙핑크 Born Pink 앨범 한정판",
    "price": 26100,
    "oldPrice": 34700,
    "stock": 101,
    "sales": 4579,
    "rating": "4.7",
    "image": "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 306,
    "categoryKey": "kpop",
    "name": "Stray Kids 樂-STAR Album 新款",
    "nameZh": "Stray Kids 樂-STAR Album 新款",
    "nameEn": "Stray Kids ROCK-STAR Album New Arrival",
    "nameKo": "스트레이키즈 樂-STAR 앨범 신상품",
    "price": 24900,
    "oldPrice": 28900,
    "stock": 120,
    "sales": 5312,
    "rating": "4.8",
    "image": "https://images.unsplash.com/photo-1521334726092-b509a19597c6?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 307,
    "categoryKey": "kpop",
    "name": "LE SSERAFIM 官方钥匙扣 限量款",
    "nameZh": "LE SSERAFIM 官方钥匙扣 限量款",
    "nameEn": "LE SSERAFIM Official Keyring Limited Edition",
    "nameKo": "르세라핌 공식 키링 한정판",
    "price": 16600,
    "oldPrice": 20100,
    "stock": 139,
    "sales": 6045,
    "rating": "4.9",
    "image": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 308,
    "categoryKey": "kpop",
    "name": "aespa 官方照片套装 新款",
    "nameZh": "aespa 官方照片套装 新款",
    "nameEn": "aespa Official Photo Set New Arrival",
    "nameKo": "에스파 공식 포토 세트 신상품",
    "price": 13700,
    "oldPrice": 17300,
    "stock": 158,
    "sales": 6778,
    "rating": "4.2",
    "image": "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 309,
    "categoryKey": "kpop",
    "name": "TXT 官方徽章套装 限量款",
    "nameZh": "TXT 官方徽章套装 限量款",
    "nameEn": "TXT Official Badge Set Limited Edition",
    "nameKo": "투모로우바이투게더 공식 뱃지 세트 한정판",
    "price": 15700,
    "oldPrice": 20600,
    "stock": 177,
    "sales": 7511,
    "rating": "4.3",
    "image": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 310,
    "categoryKey": "kpop",
    "name": "ENHYPEN Manifesto Album 新款",
    "nameZh": "ENHYPEN Manifesto Album 新款",
    "nameEn": "ENHYPEN Manifesto Album New Arrival",
    "nameKo": "엔하이픈 Manifesto 앨범 신상품",
    "price": 21300,
    "oldPrice": 24300,
    "stock": 196,
    "sales": 8244,
    "rating": "4.4",
    "image": "https://images.unsplash.com/photo-1464375117522-1311d1a5b81f?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 311,
    "categoryKey": "kpop",
    "name": "TWICE 官方明信片套装 限量款",
    "nameZh": "TWICE 官方明信片套装 限量款",
    "nameEn": "TWICE Official Postcard Set Limited Edition",
    "nameKo": "트와이스 공식 엽서 세트 한정판",
    "price": 12900,
    "oldPrice": 15400,
    "stock": 215,
    "sales": 8977,
    "rating": "4.5",
    "image": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  },
  {
    "id": 312,
    "categoryKey": "kpop",
    "name": "NCT 官方亚克力立牌 新款",
    "nameZh": "NCT 官方亚克力立牌 新款",
    "nameEn": "NCT Official Acrylic Stand New Arrival",
    "nameKo": "NCT 공식 아크릴 스탠드 신상품",
    "price": 17800,
    "oldPrice": 22100,
    "stock": 234,
    "sales": 9710,
    "rating": "4.6",
    "image": "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=900&auto=format&fit=crop&q=80",
    "desc": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descZh": "官方正品 · 韩国本地/国际配送 · 支持售后",
    "descEn": "Authentic item · Local/international shipping · After-sales support",
    "descKo": "정품 보장 · 국내/해외 배송 · A/S 지원",
    "reviews": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsZh": [
      "商品包装完整，和页面描述一致。",
      "发货速度不错，价格也比较合理。",
      "质量比想象中好，下次还会购买。"
    ],
    "reviewsEn": [
      "The packaging was complete and matched the description.",
      "Delivery was smooth and the price felt reasonable.",
      "Quality was better than expected. I would buy again."
    ],
    "reviewsKo": [
      "포장이 깔끔하고 상품 설명과 일치합니다.",
      "배송이 원활했고 가격도 합리적입니다.",
      "생각보다 품질이 좋아서 다시 구매하고 싶습니다."
    ]
  }
];

function productName(p, lang) {
  if (!p) return "";
  if (lang === "en") return p.nameEn || p.name || "";
  if (lang === "ko") return p.nameKo || p.name || "";
  return p.nameZh || p.name || "";
}

function productDesc(p, lang) {
  if (!p) return "";
  if (lang === "en") return p.descEn || p.desc || "";
  if (lang === "ko") return p.descKo || p.desc || "";
  return p.descZh || p.desc || "";
}

function productReviews(p, lang) {
  if (!p) return [];
  if (lang === "en") return p.reviewsEn || p.reviews || [];
  if (lang === "ko") return p.reviewsKo || p.reviews || [];
  return p.reviewsZh || p.reviews || [];
}

function localizeProduct(p, lang) {
  return {
    ...p,
    name: productName(p, lang),
    desc: productDesc(p, lang),
    reviews: productReviews(p, lang),
  };
}

const FALLBACK_PRODUCT_IMAGE =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="900" height="650" viewBox="0 0 900 650"><rect width="900" height="650" fill="#f3f5f8"/><rect x="120" y="90" width="660" height="470" rx="28" fill="#e7edf5"/><path d="M230 470l145-165 110 120 85-92 110 137z" fill="#d0dbe8"/><circle cx="610" cy="230" r="48" fill="#ccd8e6"/></svg>`);

function ResponsiveStyle() {
  useEffect(() => {
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      document.head.appendChild(viewport);
    }
    viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1');
  }, []);

  return (
    <style>{`
      * { box-sizing: border-box; }
      img, iframe { max-width: 100%; }
      button, input { font-family: inherit; }

      @media (max-width: 900px) {
        body { margin: 0; overflow-x: hidden; }
        .gm-top { height: auto !important; padding: 8px 12px !important; flex-direction: column !important; gap: 8px !important; align-items: stretch !important; }
        .gm-top > div:first-child { display: flex !important; gap: 6px !important; justify-content: center !important; flex-wrap: wrap !important; }
        .gm-top-links { justify-content: center !important; flex-wrap: wrap !important; gap: 10px !important; font-size: 12px !important; }
        .gm-header { display: flex !important; flex-direction: column !important; padding: 18px 12px !important; gap: 14px !important; text-align: center !important; }
        .gm-header > div { width: 100% !important; }
        .gm-search-box { width: 100% !important; max-width: 100% !important; }
        .gm-keywords { overflow-x: auto !important; white-space: nowrap !important; padding-bottom: 6px !important; justify-content: flex-start !important; }
        .gm-notice { display: none !important; }
        .gm-nav-in { width: 100% !important; height: auto !important; grid-template-columns: repeat(2, 1fr) !important; font-size: 13px !important; }
        .gm-nav-in > div { height: 40px !important; line-height: 40px !important; border-bottom: 1px solid rgba(255,255,255,.15) !important; }
        .gm-main { width: 94% !important; display: block !important; padding-top: 14px !important; }
        .gm-side { display: grid !important; grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 6px 12px !important; margin-bottom: 16px !important; border: 1px solid #eee !important; border-radius: 12px !important; padding: 10px !important; }
        .gm-hero { height: auto !important; min-height: 150px !important; padding: 24px !important; border-radius: 14px !important; }
        .gm-title { font-size: 24px !important; }
        .gm-product-grid, .gm-rank-grid, .gm-big-product-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 14px !important; }
        .gm-card h3 { font-size: 15px !important; min-height: 38px !important; }
        .gm-card p { font-size: 12px !important; }
        .gm-card button { padding: 7px 8px !important; margin-top: 4px !important; font-size: 12px !important; }
        .gm-img { height: 135px !important; }
        .gm-big-img { height: 180px !important; }
        .gm-float { display: none !important; }
        .gm-container, .gm-special-wrap, .gm-member-page, .gm-event-coupon-section { width: 94% !important; margin-left: auto !important; margin-right: auto !important; }
        .gm-detail { flex-direction: column !important; padding: 18px !important; gap: 20px !important; }
        .gm-detail-img { width: 100% !important; height: auto !important; max-height: 380px !important; }
        .gm-login-area { width: 94% !important; grid-template-columns: 1fr !important; margin: 28px auto 46px !important; }
        .gm-login-card, .gm-join-card { height: auto !important; min-height: 260px !important; }
        .gm-login-body, .gm-join-body { padding: 32px 22px !important; }
        .gm-login-input-row { grid-template-columns: 1fr !important; }
        .gm-login-button { height: 42px !important; }
        .gm-register-area { width: 94% !important; margin: 28px auto 46px !important; }
        .gm-register-box { padding: 24px 18px !important; }
        .gm-verify-row { grid-template-columns: 1fr !important; gap: 10px !important; }
        .gm-verify-btn { height: 42px !important; }
        .gm-footer-links { height: auto !important; min-height: 52px !important; padding: 12px 10px !important; gap: 18px !important; flex-wrap: wrap !important; font-size: 12px !important; }
        .gm-footer-info { width: 94% !important; grid-template-columns: 1fr !important; gap: 16px !important; }
        .gm-map-box iframe { height: 190px !important; }
        .gm-cart-row { flex-wrap: wrap !important; }
        .gm-thumb { width: 58px !important; height: 58px !important; }
        .gm-login-modal { width: 92% !important; padding: 24px 18px !important; }
        .gm-deal-cats { height: auto !important; padding: 12px !important; gap: 12px !important; flex-wrap: wrap !important; font-size: 13px !important; }
        .gm-super-text { font-size: 42px !important; }
        .gm-deal-hero { height: 170px !important; }
        .gm-best-tabs { margin-left: 0 !important; grid-template-columns: 1fr !important; height: auto !important; line-height: 42px !important; }
        .gm-icon-line { grid-template-columns: repeat(3, 1fr) !important; height: auto !important; row-gap: 8px !important; padding: 10px 0 !important; }
        .gm-icon-active { height: 70px !important; }
        .gm-event-hero-title { font-size: 36px !important; }
        .gm-event-coupon-list { flex-direction: column !important; padding: 22px !important; }
        .gm-coupon-big { width: 100% !important; }
      }

      @media (max-width: 480px) {
        .gm-product-grid, .gm-rank-grid, .gm-big-product-grid { grid-template-columns: 1fr !important; }
        .gm-side { grid-template-columns: 1fr !important; }
        .gm-logo { font-size: 36px !important; }
        .gm-title { font-size: 22px !important; }
        .gm-nav-in { grid-template-columns: 1fr !important; }
      }
    `}</style>
  );
}


const REGISTER_VERIFY_CODE = "746291";
const API_BASE = "http://localhost:4000";

export default function App() {
  const [lang, setLang] = useState("zh");
  const [page, setPage] = useState("home");
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);
  const [orders, setOrders] = useState([]);
  const [selected, setSelected] = useState(allProducts[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [toast, setToast] = useState("");
  const [user, setUser] = useState(null);
  const [loginId, setLoginId] = useState("");
  const [loginPw, setLoginPw] = useState("");
  const [registerId, setRegisterId] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPw, setRegisterPw] = useState("");
  const [registerCode, setRegisterCode] = useState("");
  const [sentVerifyCode, setSentVerifyCode] = useState("");
  const [registeredEmails, setRegisteredEmails] = useState([
    "le1778763@gmail.com",
    "lel778763@gmail.com",
    "le778763@gmail.com",
    "test@gmail.com",
  ]);
  const [currency, setCurrency] = useState("KRW");
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatId, setChatId] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatEmail, setChatEmail] = useState("");
  const [chatText, setChatText] = useState("");
  const [chatLoading, setChatLoading] = useState(false);

  const t = L[lang];
  const perPage = 12;

  const catName = (c) => c?.[lang] || c?.en || "";

  const show = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 1500);
  };

  const openLoginModal = () => {
    setLoginId("");
    setLoginPw("");
    show(t.needLogin);
    setLoginModalOpen(true);
  };

  const requireLogin = () => {
    if (!user) {
      openLoginModal();
      return false;
    }
    return true;
  };

  const protectedClick = (callback) => {
    if (!user) {
      openLoginModal();
      return;
    }
    callback();
  };

  const openLineService = () => {
    setChatOpen(true);
    setChatEmail((old) => old || (user?.id && user.id.includes("@") ? user.id : ""));
  };

  const loadCustomerChat = async (id = chatId) => {
    if (!id) return;
    try {
      const res = await fetch(`${API_BASE}/api/chats`, { cache: "no-store" });
      if (!res.ok) throw new Error("chat list request failed");
      const list = await res.json();
      const chat = list.find((item) => String(item.id) === String(id));
      if (chat) {
        setChatMessages(chat.messages || []);
      } else {
        // 后台重启后，旧 chatId 会失效；自动清空，下一次发送会重新创建对话
        setChatId(null);
        setChatMessages([]);
      }
    } catch (err) {
      // 后台没启动时不让页面崩溃
    }
  };

  const createCustomerChat = async (customer, text) => {
    const res = await fetch(`${API_BASE}/api/chats`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ customer, text }),
    });
    if (!res.ok) throw new Error("create chat failed");
    const chat = await res.json();
    setChatId(chat.id);
    setChatMessages(chat.messages || []);
    return chat;
  };

  const sendCustomerMessage = async () => {
    const text = chatText.trim();
    if (!text) return show(t.customerNoMessage || "请输入咨询内容");

    const customer = (chatEmail || user?.id || "guest@gmarket.com").trim();
    setChatLoading(true);

    try {
      let chat = null;

      // 没有对话ID：先创建对话
      if (!chatId) {
        chat = await createCustomerChat(customer, text);
      } else {
        // 已有对话ID：正常发送消息
        const res = await fetch(`${API_BASE}/api/chats/${chatId}/messages`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ from: "customer", text }),
        });

        // 后台重启 / 对话丢失时会 404；自动重新创建对话，不再卡住
        if (res.status === 404) {
          chat = await createCustomerChat(customer, text);
        } else if (!res.ok) {
          throw new Error("send message failed");
        } else {
          chat = await res.json();
          setChatMessages(chat.messages || []);
        }
      }

      setChatText("");

      // 后台有延迟自动回复，稍后自动刷新一次，保证前台能看到客服回复
      setTimeout(() => {
        loadCustomerChat(chat?.id || chatId);
      }, 1300);
    } catch (err) {
      show(t.customerChatError || "连接客服失败，请确认后台已启动");
    } finally {
      setChatLoading(false);
    }
  };

  useEffect(() => {
    if (!chatOpen || !chatId) return;
    loadCustomerChat(chatId);
    const timer = setInterval(() => loadCustomerChat(chatId), 2000);
    return () => clearInterval(timer);
  }, [chatOpen, chatId]);

  const money = (value) => {
    const n = Number(value) || 0;
    if (currency === "KRW") return `₩${Math.round(n).toLocaleString()}`;
    if (currency === "USD") return `$${(n / 1300).toFixed(2)}`;
    return `HK$${Math.round(n / 170).toLocaleString()}`;
  };

  const currentLocalized = (p) => localizeProduct(p, lang);

  const filtered = useMemo(() => {
    const keyword = search.toLowerCase();
    return allProducts.filter((p) => {
      const c = cats.find((x) => x.key === p.categoryKey);
      const n = productName(p, lang).toLowerCase();
      const d = productDesc(p, lang).toLowerCase();
      return (
        (category === "All" || p.categoryKey === category) &&
        (n.includes(keyword) ||
          d.includes(keyword) ||
          c.en.toLowerCase().includes(keyword) ||
          c.zh.includes(search) ||
          c.ko.includes(search))
      );
    });
  }, [category, search, lang]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const pageProducts = filtered
    .slice((currentPage - 1) * perPage, currentPage * perPage)
    .map(currentLocalized);

  const changeCat = (key) => {
    setCategory(key);
    setCurrentPage(1);
    setPage("home");
  };

  const addCart = (p) => {
    if (!requireLogin()) return;
    setCart((old) => {
      const found = old.find((x) => x.id === p.id);
      if (found) return old.map((x) => (x.id === p.id ? { ...x, qty: x.qty + 1 } : x));
      return [...old, { ...p, qty: 1 }];
    });
    show(t.addCart);
  };

  const addWish = (p) => {
    if (!requireLogin()) return;
    setWish((old) => (old.find((x) => x.id === p.id) ? old : [...old, p]));
    show(t.wish);
  };

  const openDetail = (p) => {
    if (!requireLogin()) return;
    setSelected(p);
    setPage("detail");
  };

  const submitLogin = () => {
    if (!loginId || !loginPw) return show(t.needLogin);
    setUser({ id: loginId });
    setLoginModalOpen(false);
    if (page === "login") setPage("home");
  };

  const isValidEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
  };

  const normalizePhone = (value) => {
    return value.replace(/[\s\-()]/g, "").trim();
  };

  const isValidInternationalPhone = (value) => {
    const phone = normalizePhone(value);

    // 必须使用国际格式：+国家区号 + 当地号码
    if (!/^\+[1-9]\d{8,14}$/.test(phone)) return false;

    // 常用国家/地区精确格式校验；韩国和香港会被明确区分
    const countryRules = [
      // 韩国：+82 10xxxxxxxx，或常见座机/网络号码
      /^\+82(10\d{8}|[2-6]\d{7,9}|70\d{8})$/,
      // 香港：+852 后面 8 位；2/3常见座机，5/6/9常见手机，7/4也兼容部分号码段
      /^\+852[2345679]\d{7}$/,
      // 中国大陆：+86 1xxxxxxxxxx
      /^\+861[3-9]\d{9}$/,
      // 美国/加拿大：+1 + 10位 NANP，第一位2-9
      /^\+1[2-9]\d{9}$/,
      // 日本：+81 后面常见手机/座机，去掉国内开头0
      /^\+81(70|80|90)\d{8}$|^\+81[1-9]\d{8,9}$/,
      // 新加坡：+65 8位，手机8/9开头，座机6开头
      /^\+65[689]\d{7}$/,
      // 台湾：+886 手机9开头8位，或座机
      /^\+886(9\d{8}|[2-8]\d{7,8})$/,
      // 澳门：+853 8位，常见6/8/2开头
      /^\+853[268]\d{7}$/,
      // 英国：+44 后面10位左右，去掉国内开头0
      /^\+44[1-9]\d{8,9}$/,
      // 澳大利亚：+61 手机4开头8位，或座机
      /^\+61(4\d{8}|[2378]\d{8})$/,
      // 德国/法国/意大利/西班牙等欧洲常见长度
      /^\+49[1-9]\d{6,13}$/,
      /^\+33[1-9]\d{8}$/,
      /^\+39\d{8,11}$/,
      /^\+34[6-9]\d{8}$/,
      // 泰国/越南/马来西亚/印尼/菲律宾
      /^\+66[689]\d{8}$/,
      /^\+84[3-9]\d{8}$/,
      /^\+60[1-9]\d{7,9}$/,
      /^\+62[2-9]\d{7,11}$/,
      /^\+63[9]\d{9}$/,
    ];

    return countryRules.some((rule) => rule.test(phone));
  };

  const validateRegisterBaseInfo = () => {
    if (!registerId || !registerEmail || !registerPw) {
      show(t.fillRegisterInfo);
      return false;
    }

    if (!isValidInternationalPhone(registerId)) {
      show(t.invalidPhone);
      return false;
    }

    if (!isValidEmail(registerEmail)) {
      show(t.invalidEmail);
      return false;
    }

    return true;
  };

  const sendRegisterCode = () => {
    if (!validateRegisterBaseInfo()) return;
    setSentVerifyCode(REGISTER_VERIFY_CODE);
    setRegisterCode("");
    show(t.verifyCodeSent);
  };

  const submitRegister = () => {
    if (!registerId || !registerEmail || !registerPw || !registerCode) {
      show(t.fillRegisterInfo);
      return;
    }

    if (!validateRegisterBaseInfo()) return;

    if (!sentVerifyCode) {
      show(t.pleaseSendCode);
      return;
    }

    if (registerCode !== sentVerifyCode) {
      show(t.verifyCodeWrong);
      return;
    }

    setRegisteredEmails((old) => {
      const emailValue = registerEmail.trim().toLowerCase();
      return old.includes(emailValue) ? old : [...old, emailValue];
    });
    setUser({ id: normalizePhone(registerId) });
    setRegisterId("");
    setRegisterEmail("");
    setRegisterPw("");
    setRegisterCode("");
    setSentVerifyCode("");
    setPage("home");
    show(t.registerOk);
  };

  const submitOrder = () => {
    if (!cart.length) return show(t.emptyCart);
    const order = {
      id: "KR" + Date.now(),
      time: new Date().toLocaleString(),
      items: cart,
      total: cart.reduce((n, x) => n + x.price * x.qty, 0),
    };
    setOrders([order, ...orders]);
    setCart([]);
    setPage("orders");
    show(t.orderOk);
  };

  const title = category === "All" ? t.deal : catName(cats.find((c) => c.key === category));
  const showHeader = !["detail", "cart", "orders", "wishlist", "service", "map", "find"].includes(page);
  const displaySelected = currentLocalized(selected);

  const hotProducts = [...allProducts]
    .sort((a, b) => b.sales - a.sales)
    .slice(0, 20)
    .map(currentLocalized);
  const dealProducts = [...allProducts]
    .sort((a, b) => (b.oldPrice - b.price) / b.oldPrice - (a.oldPrice - a.price) / a.oldPrice)
    .slice(0, 24)
    .map(currentLocalized);

  return (
    <div className="gm-page" style={s.page}>
      <ResponsiveStyle />
      {toast && <div style={s.toast}>{toast}</div>}

      {loginModalOpen && (
        <LoginModal
          t={t}
          loginId={loginId}
          setLoginId={setLoginId}
          loginPw={loginPw}
          setLoginPw={setLoginPw}
          submitLogin={submitLogin}
          close={() => setLoginModalOpen(false)}
          goFind={() => {
            setLoginModalOpen(false);
            setPage("find");
          }}
          goRegister={() => {
            setLoginModalOpen(false);
            setPage("register");
          }}
        />
      )}

      {chatOpen && (
        <CustomerChatWidget
          t={t}
          chatId={chatId}
          chatEmail={chatEmail}
          setChatEmail={setChatEmail}
          chatMessages={chatMessages}
          chatText={chatText}
          setChatText={setChatText}
          chatLoading={chatLoading}
          sendCustomerMessage={sendCustomerMessage}
          close={() => setChatOpen(false)}
        />
      )}

      <TopBar
        {...{
          lang,
          setLang,
          t,
          user,
          setUser,
          cart,
          wish,
          setPage,
          openLoginModal,
          protectedClick,
          currency,
          setCurrency,
          currencyOpen,
          setCurrencyOpen,
        }}
      />

      {showHeader && (
        <>
          <Header
            {...{
              lang,
              t,
              search,
              setSearch,
              setCurrentPage,
              changeCat,
              setPage,
            }}
          />
          <Nav {...{ t, page, setPage, changeCat, protectedClick }} />
        </>
      )}

      {page === "home" && (
        <main className="gm-main" style={s.main}>
          <aside className="gm-side">
            {cats.map((c) => (
              <div
                key={c.key}
                onClick={() => changeCat(c.key)}
                style={{
                  ...s.sideItem,
                  color: category === c.key ? "#0077ff" : "#111",
                  fontWeight: category === c.key ? "bold" : "normal",
                }}
              >
                <span>{c.icon}</span> {catName(c)}
                <span style={s.arrow}>›</span>
              </div>
            ))}
          </aside>

          <section className="gm-content">
            <div className="gm-hero" style={s.hero}>
              <div>
                <h2>{t.festival}</h2>
                <p>{t.festivalText}</p>
                <button style={s.heroBtn} onClick={() => protectedClick(() => setPage("deal"))}>
                  {t.deal}
                </button>
              </div>
            </div>

            <h1 className="gm-title" style={s.title}>{title}</h1>
            <p style={s.sub}>
              {filtered.length.toLocaleString()} {t.count} · {currentPage} / {totalPages}
            </p>

            <div className="gm-product-grid" style={s.grid}>
              {pageProducts.map((p) => (
                <Product
                  key={p.id}
                  p={p}
                  t={t}
                  money={money}
                  onDetail={() => openDetail(p)}
                  onCart={() => addCart(p)}
                  onWish={() => addWish(p)}
                />
              ))}
            </div>

            <div style={s.pagination}>
              <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
                ◀ {t.prev}
              </button>
              <span>{currentPage} / {totalPages}</span>
              <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
                {t.next} ▶
              </button>
            </div>
          </section>

          <FloatingBox t={t} cart={cart} setPage={setPage} protectedClick={protectedClick} />
        </main>
      )}

      {page === "hot" && (
        <SpecialLayout>
          <HotPage
            t={t}
            cats={cats}
            catName={catName}
            products={hotProducts}
            money={money}
            openDetail={openDetail}
            addCart={addCart}
            addWish={addWish}
            protectedClick={protectedClick}
            changeCat={changeCat}
          />
        </SpecialLayout>
      )}

      {page === "deal" && (
        <SpecialLayout>
          <DealPage
            t={t}
            products={dealProducts}
            money={money}
            openDetail={openDetail}
            addCart={addCart}
            addWish={addWish}
            protectedClick={protectedClick}
            changeCat={changeCat}
          />
        </SpecialLayout>
      )}

      {page === "member" && (
        <SpecialLayout>
          <MemberCouponPage t={t} protectedClick={protectedClick} show={show} />
        </SpecialLayout>
      )}

      {page === "coupon" && (
        <SpecialLayout>
          <EventCouponPage t={t} protectedClick={protectedClick} show={show} setPage={setPage} />
        </SpecialLayout>
      )}

      {page === "login" && (
        <>
          <div className="gm-login-area" style={s.loginArea}>
            <div className="gm-login-card" style={s.loginCard}>
              <h1>{t.login}</h1>
              <div className="gm-login-body" style={s.loginBody}>
                <div className="gm-login-input-row" style={s.loginInputRow}>
                  <div>
                    <input
                      style={s.loginInput}
                      type="text"
                      placeholder={t.id}
                      autoComplete="new-password"
                      name="gmarket-no-save-user"
                      value={loginId || ""}
                      onChange={(e) => setLoginId(e.target.value)}
                    />
                    <input
                      style={s.loginInput}
                      type="password"
                      placeholder={t.password}
                      autoComplete="new-password"
                      name="gmarket-no-save-pass"
                      value={loginPw || ""}
                      onChange={(e) => setLoginPw(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && submitLogin()}
                    />
                  </div>
                  <button className="gm-login-button" style={s.loginButton} onClick={submitLogin}>{t.login}</button>
                </div>
                <div style={s.loginOptions}>
                  <label><input type="checkbox" /> {t.saveId}</label>
                  <button
                    type="button"
                    style={s.forgotLinkButton}
                    onClick={() => setPage("find")}
                  >
                    {t.forgot}
                  </button>
                </div>
              </div>
            </div>

            <div className="gm-join-card" style={s.joinCard}>
              <h1>{t.register}</h1>
              <div className="gm-join-body" style={s.joinBody}>
                <p>{t.joinText}</p>
                <button style={s.joinButton} onClick={() => setPage("register")}>{t.register}</button>
              </div>
            </div>
          </div>
         <Footer
  t={t}
  openLineService={openLineService}
  protectedClick={protectedClick}
  setPage={setPage}
/>
        </>
      )}

      {page === "find" && (
        <>
          <FindIdPage t={t} show={show} setPage={setPage} registeredEmails={registeredEmails} />
        </>
      )}

      {page === "register" && (
        <>
          <div className="gm-register-area" style={s.registerArea}>
            <div className="gm-register-box" style={s.registerBox}>
              <h1>{t.register}</h1>
              <input
                style={s.fullInput}
                type="tel"
                placeholder={t.registerPhone}
                value={registerId}
                onChange={(e) => setRegisterId(e.target.value.trim())}
                autoComplete="off"
              />
              <input
                style={s.fullInput}
                type="email"
                placeholder={t.email}
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                autoComplete="off"
              />
              <input
                style={s.fullInput}
                type="password"
                placeholder={t.password}
                value={registerPw}
                onChange={(e) => setRegisterPw(e.target.value)}
                autoComplete="new-password"
              />

              <div className="gm-verify-row" style={s.verifyRow}>
                <input
                  style={{ ...s.fullInput, margin: 0 }}
                  placeholder={t.verifyCode}
                  value={registerCode}
                  onChange={(e) => setRegisterCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  maxLength={6}
                  autoComplete="off"
                />
                <button className="gm-verify-btn" style={s.verifyBtn} onClick={sendRegisterCode}>
                  {t.sendVerifyCode}
                </button>
              </div>

              <label><input type="checkbox" /> {t.terms} / {t.privacy}</label>
              <div style={{ marginTop: 20 }}>
                <button
                  style={s.submitBtn}
                  onClick={submitRegister}
                >
                  {t.register}
                </button>
                <button onClick={() => setPage("login")}>{t.back}</button>
              </div>
            </div>
          </div>
          <Footer
  t={t}
  openLineService={openLineService}
  protectedClick={protectedClick}
  setPage={setPage}
/>
        </>
      )}

      {page === "detail" && (
        <div className="gm-container" style={s.container}>
          <button onClick={() => setPage("home")}>← {t.back}</button>
          <div className="gm-detail" style={s.detail}>
            <img
              className="gm-detail-img"
              src={displaySelected.image}
              alt={displaySelected.name}
              style={s.detailImg}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = FALLBACK_PRODUCT_IMAGE;
              }}
            />
            <div>
              <h1>{displaySelected.name}</h1>
              <p>{displaySelected.desc}</p>
              <h2 style={s.price}>{money(displaySelected.price)}</h2>
              <p><del>{money(displaySelected.oldPrice)}</del></p>
              <p>✅ {t.stock}: {displaySelected.stock}</p>
              <p>⭐ {displaySelected.rating} / 5.0</p>
              <p>🔥 {t.sales}: {displaySelected.sales.toLocaleString()}</p>
              <p>🚚 {t.fastShipping}</p>

              <button style={s.buy} onClick={() => { addCart(displaySelected); setPage("cart"); }}>{t.order}</button>
              <button style={s.cartBtn} onClick={() => addCart(displaySelected)}>{t.addCart}</button>
              <button style={s.wishBtn} onClick={() => addWish(displaySelected)}>♡ {t.wish}</button>

              <h2 style={{ marginTop: 30 }}>{t.reviews}</h2>
              {displaySelected.reviews.map((r, i) => <p key={i}>⭐ ⭐ ⭐ ⭐ ⭐ {r}</p>)}
            </div>
          </div>
        </div>
      )}

      {page === "cart" && (
        <div className="gm-container" style={s.container}>
          <button onClick={() => setPage("home")}>← {t.back}</button>
          <h1>{t.cart}</h1>
          <div style={s.panel}>
            {cart.length === 0 ? (
              <p>{t.emptyCart}</p>
            ) : (
              cart.map((x) => (
                <div key={x.id} style={s.cartRow}>
                  <img className="gm-thumb" src={x.image} alt="" style={s.thumb} />
                  <div style={{ flex: 1 }}>
                    <b>{productName(x, lang)}</b>
                    <p>{money(x.price)} × {x.qty}</p>
                  </div>
                  <button onClick={() => setCart(cart.map((i) => (i.id === x.id ? { ...i, qty: i.qty + 1 } : i)))}>+</button>
                  <button onClick={() => setCart(cart.map((i) => (i.id === x.id ? { ...i, qty: Math.max(1, i.qty - 1) } : i)))}>-</button>
                  <button onClick={() => setCart(cart.filter((i) => i.id !== x.id))}>{t.remove}</button>
                </div>
              ))
            )}
            <h2>{t.total}: {money(cart.reduce((n, x) => n + x.price * x.qty, 0))}</h2>
            <button style={s.buy} onClick={submitOrder}>{t.order}</button>
          </div>
        </div>
      )}

      {page === "wishlist" && (
        <div className="gm-container" style={s.container}>
          <button onClick={() => setPage("home")}>← {t.back}</button>
          <h1>{t.wish}</h1>
          {wish.length === 0 ? (
            <div style={s.panel}>{t.emptyWish}</div>
          ) : (
            <div className="gm-product-grid" style={s.grid}>
              {wish.map((p) => (
                <Product key={p.id} p={p} t={t} money={money} onDetail={() => openDetail(p)} onCart={() => addCart(p)} onWish={() => addWish(p)} />
              ))}
            </div>
          )}
        </div>
      )}

      {page === "orders" && (
        <div className="gm-container" style={s.container}>
          <button onClick={() => setPage("home")}>← {t.back}</button>
          <h1>{t.orders}</h1>
          <div style={s.panel}>
            {orders.length === 0 ? (
              <p>{t.emptyOrders}</p>
            ) : (
              orders.map((o) => (
                <div key={o.id} style={s.order}>
                  <h3>Order #{o.id}</h3>
                  <p>{o.time}</p>
                  {o.items.map((i) => <p key={i.id}>{productName(i, lang)} × {i.qty}</p>)}
                  <b>{t.total}: {money(o.total)}</b>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {page === "service" && (
        <div className="gm-container" style={s.container}>
          <button onClick={() => setPage("home")}>← {t.back}</button>
          <h1>{t.service}</h1>
          <div style={s.panel}>
            <p>{t.customerTime}</p>
            <p>{t.phone}: +852-2-1566-5701</p>
            <p>{t.fax}: +852-2-589-8844</p>
            <p>{t.email}: support@gmarket.hk</p>
            <button style={s.submitBtn} onClick={openLineService}>{t.onlineService}</button>
          </div>
        </div>
      )}

      {page === "map" && (
        <div className="gm-container" style={s.container}>
          <button onClick={() => setPage("home")}>← {t.back}</button>
          <h1>{t.map}</h1>
          <Footer
  t={t}
  openLineService={openLineService}
  protectedClick={protectedClick}
  setPage={setPage}
/>
        </div>
      )}
    </div>
  );
}


function createFindCaptcha() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 5; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

function FindIdPage({ t, show, setPage, registeredEmails }) {
  const [email, setEmail] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [captchaText, setCaptchaText] = useState(() => createFindCaptcha());

  const refreshCaptcha = () => {
    setCaptcha("");
    setCaptchaText(createFindCaptcha());
  };

  const requestFindCode = () => {
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
    if (!validEmail) {
      show(t.invalidEmail || "请输入正确的邮箱格式");
      return;
    }
    const emailValue = email.trim().toLowerCase();
    const isRegisteredMember = registeredEmails.some((item) => item.toLowerCase() === emailValue);
    if (!isRegisteredMember) {
      show(t.findIdEmailNotRegistered || "邮箱未注册会员");
      return;
    }
    if (captcha.trim().toUpperCase() !== captchaText) {
      show(t.findIdCaptchaError || "请输入图片中的验证码");
      return;
    }
    show(t.findIdCodeSent || "验证码已发送");
  };

  return (
    <div style={s.findPageWrap}>
      <div style={s.findPageBox}>
        <h1 style={s.findTitle}>{t.findIdTitle}</h1>
        <div style={s.findDivider}></div>

        <div style={s.findIntro}>
          <p>{t.findIdQuestion}</p>
          <p>{t.findIdDesc1}</p>
          <p>{t.findIdDesc2}</p>
        </div>

        <div style={s.findFormTable}>
          <div style={s.findRow}>
            <div style={s.findLabel}>{t.findIdEmailLabel}</div>
            <div style={s.findField}>
              <input
                style={s.findInput}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
              />
            </div>
          </div>

          <div style={s.findCaptchaRow}>
            <div style={s.findCaptchaImage}>{captchaText}</div>
            <button style={s.findIconBtn} type="button">🔊</button>
            <button style={s.findIconBtn} type="button" onClick={refreshCaptcha}>↻</button>
            <div style={s.findField}>
              <input
                style={s.findCaptchaInput}
                placeholder={t.findIdCaptchaPlaceholder}
                value={captcha}
                onChange={(e) => setCaptcha(e.target.value.toUpperCase())}
                autoComplete="off"
              />
            </div>
          </div>
        </div>

        <button style={s.findSubmitBtn} onClick={requestFindCode}>{t.findIdGetCode}</button>


        <button style={s.findBackBtn} onClick={() => setPage("home")}>← {t.back}</button>
      </div>
    </div>
  );
}


function CustomerChatWidget({
  t,
  chatId,
  chatEmail,
  setChatEmail,
  chatMessages,
  chatText,
  setChatText,
  chatLoading,
  sendCustomerMessage,
  close,
}) {
  return (
    <div style={s.customerChatOverlay}>
      <div style={s.customerChatBox}>
        <div style={s.customerChatHeader}>
          <b>{t.customerChat || t.service}</b>
          <button style={s.customerChatClose} onClick={close}>×</button>
        </div>

        <div style={s.customerChatBody}>
          {!chatId && (
            <input
              style={s.customerChatEmail}
              placeholder={t.customerEmailInput || "请输入邮箱，方便客服回复"}
              value={chatEmail}
              onChange={(e) => setChatEmail(e.target.value)}
            />
          )}

          {chatMessages.length === 0 ? (
            <div style={s.customerChatTip}>{t.customerChatWelcome || "您好，请问需要帮您查询什么？"}</div>
          ) : (
            chatMessages.map((msg, index) => (
              <div
                key={index}
                style={msg.from === "customer" ? s.customerBubbleMine : s.customerBubbleSeller}
              >
                <div>{msg.text}</div>
                <small style={s.customerBubbleTime}>{msg.time}</small>
              </div>
            ))
          )}
        </div>

        <div style={s.customerChatInputRow}>
          <input
            style={s.customerChatInput}
            placeholder={t.customerMessageInput || "请输入您的问题"}
            value={chatText}
            onChange={(e) => setChatText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendCustomerMessage()}
          />
          <button style={s.customerChatSend} disabled={chatLoading} onClick={sendCustomerMessage}>
            {chatLoading ? "..." : (chatId ? (t.customerSend || "发送") : (t.customerStartChat || "开始咨询"))}
          </button>
        </div>
      </div>
    </div>
  );
}

function LoginModal({ t, loginId, setLoginId, loginPw, setLoginPw, submitLogin, close, goFind, goRegister }) {
  const safeIdName = useMemo(() => `no-save-user-1777456405887`, []);
  const safePwName = useMemo(() => `no-save-pass-1777456405887`, []);

  return (
    <div style={s.loginOverlay} onClick={close}>
      <div className="gm-login-modal" style={s.loginModal} onClick={(e) => e.stopPropagation()}>
        <button style={s.modalClose} onClick={close}>×</button>

        <div style={s.modalLogo}>
          <span style={{ color: "#00b050" }}>G</span>
          <span style={{ color: "#0077ff" }}>market</span>
        </div>

        <h2 style={s.modalTitle}>{t.login}</h2>
        <p style={s.modalSub}>{t.needLogin}</p>

        <input
          style={s.hiddenAutofill}
          type="text"
          name="fake-user"
          autoComplete="username"
          tabIndex="-1"
          aria-hidden="true"
        />
        <input
          style={s.hiddenAutofill}
          type="password"
          name="fake-pass"
          autoComplete="current-password"
          tabIndex="-1"
          aria-hidden="true"
        />

        <input
          style={s.modalInput}
          type="text"
          placeholder={t.id}
          autoComplete="new-password"
          name={safeIdName}
          value={loginId || ""}
          onChange={(e) => setLoginId(e.target.value)}
        />
        <input
          style={s.modalInput}
          type="password"
          placeholder={t.password}
          autoComplete="new-password"
          name={safePwName}
          value={loginPw || ""}
          onChange={(e) => setLoginPw(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submitLogin()}
        />

        <div style={s.modalOptions}>
          <label><input type="checkbox" /> {t.saveId}</label>
          <button type="button" style={s.forgotLinkButton} onClick={goFind}>{t.forgot}</button>
        </div>

        <button style={s.modalLoginBtn} onClick={submitLogin}>
          {t.login}
        </button>

        <div style={s.modalJoinBox}>
          <span>{t.joinText}</span>
          <button style={s.modalJoinBtn} onClick={goRegister}>
            {t.register}
          </button>
        </div>
      </div>
    </div>
  );
}

function TopBar({
  setLang,
  t,
  user,
  setUser,
  cart,
  wish,
  setPage,
  openLoginModal,
  protectedClick,
  currency,
  setCurrency,
  currencyOpen,
  setCurrencyOpen,
}) {
  const chooseCurrency = (value) => {
    protectedClick(() => {
      setCurrency(value);
      setCurrencyOpen(false);
    });
  };

  const currencyLabel =
    currency === "KRW" ? "₩ KRW" : currency === "USD" ? "$ USD" : "HK$ HKD";

  return (
    <div className="gm-top" style={s.top}>
      <div>
        <button onClick={() => setLang("zh")}>中文</button>
        <button onClick={() => setLang("en")}>English</button>
        <button onClick={() => setLang("ko")}>한국어</button>
      </div>

      <div className="gm-top-links" style={s.topLinks}>
        {user ? (
          <>
            <span style={s.blue}>Hi, {user.id}</span>
            <span onClick={() => setUser(null)}>{t.logout}</span>
          </>
        ) : (
          <>
            <span style={s.blue} onClick={openLoginModal}>{t.login}</span>
            <span>{t.or}</span>
            <span style={s.blue} onClick={() => setPage("register")}>{t.register}</span>
          </>
        )}

       <span onClick={() => setPage("service")}>{t.help}</span>
        <span style={s.blue} onClick={() => protectedClick(() => setPage("cart"))}>
          🛒 {t.cart} ({cart.reduce((n, x) => n + x.qty, 0)})
        </span>
        <span onClick={() => protectedClick(() => setPage("wishlist"))}>♡ {t.wish} ({wish.length})</span>
        <span onClick={() => protectedClick(() => setPage("orders"))}>{t.orders}</span>
        <span>{t.regionKorea}</span>

        <span style={s.currencyBox}>
          <span onClick={() => protectedClick(() => setCurrencyOpen(!currencyOpen))}>{currencyLabel}⌄</span>
          {currencyOpen && (
            <div style={s.currencyMenu}>
              <div onClick={() => chooseCurrency("KRW")}>₩ KRW</div>
              <div onClick={() => chooseCurrency("USD")}>$ USD</div>
              <div onClick={() => chooseCurrency("HKD")}>HK$ HKD</div>
            </div>
          )}
        </span>
      </div>
    </div>
  );
}

function Header({ lang, t, search, setSearch, setCurrentPage, changeCat, setPage }) {
  const siteText =
    lang === "ko" ? "한국 No.1 쇼핑사이트" : lang === "en" ? "Korea No.1 Shopping site" : "韩国 No.1 购物网站";

  const keywordClick = (word) => {
    setSearch(word);
    setCurrentPage(1);
    setPage("home");
  };

  return (
    <header className="gm-header" style={s.header}>
      <div style={{ cursor: "pointer" }} onClick={() => changeCat("All")}>
        <div className="gm-logo" style={s.logo}>
          <span style={{ color: "#00b050" }}>G</span>
          <span style={{ color: "#0077ff" }}>market</span>
        </div>
        <div style={s.smallSlogan}>{siteText}</div>
      </div>

      <div>
        <div className="gm-search-box" style={s.searchBox}>
          <input
            style={s.search}
            value={search}
            placeholder={t.search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
              setPage("home");
            }}
          />
          <button style={s.searchBtn}>🔍</button>
        </div>
        <div className="gm-keywords" style={s.keywords}>
          {["IVE LP", "SKINFOOD", "Aespa Lemonade", "COCOBLANC", "CARAZ", "30% OFF"].map((x) => (
            <span key={x} onClick={() => keywordClick(x.replace("30% OFF", ""))}>{x}</span>
          ))}
        </div>
      </div>

      <div className="gm-notice" style={s.notice}>
        <b>{t.notice}</b>
        <p>{t.noticeText}</p>
        <span style={s.link} onClick={() => setPage("coupon")}>{t.seeMore} ⓘ</span>
      </div>
    </header>
  );
}

function Nav({ t, page, setPage, changeCat, protectedClick }) {
  const itemStyle = (key) => ({
    ...s.navItem,
    background: page === key ? "#005fbd" : "transparent",
  });

  return (
    <nav className="gm-nav" style={s.nav}>
      <div className="gm-nav-in" style={s.navIn}>
        <div onClick={() => changeCat("All")} style={s.catTab}>{t.all} ≡</div>
        <div onClick={() => protectedClick(() => setPage("hot"))} style={itemStyle("hot")}>{t.hot}</div>
        <div onClick={() => protectedClick(() => setPage("deal"))} style={itemStyle("deal")}>{t.deal}</div>
        <div onClick={() => protectedClick(() => setPage("member"))} style={itemStyle("member")}>{t.member}</div>
        <div onClick={() => protectedClick(() => setPage("coupon"))} style={itemStyle("coupon")}>{t.coupon}</div>
      </div>
    </nav>
  );
}

function SpecialLayout({ children }) {
  return <div>{children}</div>;
}

function HotPage({ t, cats, catName, products, money, openDetail, addCart, addWish, protectedClick, changeCat }) {
  return (
    <div className="gm-special-wrap" style={s.specialWrap}>
      <h1 style={s.hotTitle}>{t.bestTitle}</h1>

      <div style={s.bestTabs}>
        <div style={s.bestTabActive}>{t.bestTab1}</div>
        <div>{t.bestTab2}</div>
        <div>{t.bestTab3}</div>
      </div>

      <div style={s.iconLine}>
        <div style={s.iconActive} onClick={() => protectedClick(() => changeCat("All"))}>▣<br />{t.all}</div>
        {cats.slice(1, 12).map((c) => (
          <div key={c.key} onClick={() => protectedClick(() => changeCat(c.key))} style={{ cursor: "pointer" }}>
            <div style={s.catIcon}>{c.icon}</div>
            <span>{catName(c)}</span>
          </div>
        ))}
      </div>

      <div className="gm-rank-grid" style={s.rankGrid}>
        {products.map((p, i) => (
          <Product
            key={p.id}
            p={p}
            t={t}
            money={money}
            rank={i + 1}
            onDetail={() => openDetail(p)}
            onCart={() => addCart(p)}
            onWish={() => addWish(p)}
          />
        ))}
      </div>
    </div>
  );
}

function DealPage({ t, products, money, openDetail, addCart, addWish, protectedClick, changeCat }) {
  return (
    <div>
      <div className="gm-deal-hero" style={s.dealHero}>
        <div className="gm-super-text" style={s.superText}>{t.superBanner}<span>⚡</span></div>
      </div>

      <div className="gm-deal-cats" style={s.dealCats}>
        <div style={s.dealCatActive} onClick={() => protectedClick(() => setTimeout(() => window.scrollTo(0, 360), 0))}>◎ {t.weeklyDeal}</div>
        <div onClick={() => protectedClick(() => changeCat("clothing"))}>👕 {t.clothing}</div>
        <div onClick={() => protectedClick(() => changeCat("beauty"))}>🧴 {t.beauty}</div>
        <div onClick={() => protectedClick(() => changeCat("sports"))}>🏕 {t.sportsOutdoor}</div>
        <div onClick={() => protectedClick(() => changeCat("home"))}>▣ {t.life}</div>
        <div onClick={() => protectedClick(() => changeCat("food"))}>🍜 {t.food}</div>
        <div onClick={() => protectedClick(() => changeCat("electronics"))}>📱 {t.digital}</div>
      </div>

      <div className="gm-special-wrap" style={s.specialWrap}>
        <div className="gm-big-product-grid" style={s.bigProductGrid}>
          {products.map((p) => (
            <Product
              key={p.id}
              p={p}
              t={t}
              money={money}
              big
              onDetail={() => openDetail(p)}
              onCart={() => addCart(p)}
              onWish={() => addWish(p)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function MemberCouponPage({ t, protectedClick, show }) {
  return (
    <div className="gm-member-page" style={s.memberPage}>
      <h2 style={s.memberMainTitle}>{t.memberTitle}</h2>

      <section style={s.memberOfficialBox}>
        <div style={s.memberOfficialTabs}>
          <div style={s.memberTabMuted}>{t.specialBenefit}</div>
          <div style={s.memberTabActive}>{t.monthCoupon}</div>
        </div>

        <div style={s.memberCouponWhitePanel}>
          <div style={s.memberPanelTopLine}>
            <h3 style={s.memberPanelTitle}>{t.memberLevelCoupon}</h3>
            <span style={s.guideText} onClick={() => protectedClick(() => show(t.guideOpened))}>{t.couponGuide} ›</span>
          </div>

          <div style={s.memberCouponRowOfficial}>
            <CouponCardOfficial text="9折" sub={t.maxDiscount + " ₩3,000"} />
            <CouponCardOfficial text="9折" sub={t.maxDiscount + " ₩5,000"} />
            <CouponCardOfficial text="₩1,000" sub={t.availableNow} />
            <CouponCardOfficial text="₩1,000" sub={t.availableNow} />
          </div>

          <button style={s.allDownloadBtn} onClick={() => protectedClick(() => show(t.couponSuccess))}>{t.downloadAll} ↓</button>
        </div>
      </section>

      <section style={s.newMemberOfficialBlock}>
        <div style={s.newMemberTitleRow}>
          <div>
            <h2 style={{ margin: 0 }}>{t.newMemberCoupon}</h2>
            <p style={{ margin: "6px 0 0", color: "#555" }}>{t.firstBenefit}</p>
          </div>
          <span style={s.guideText} onClick={() => protectedClick(() => show(t.guideOpened))}>{t.couponGuide} ›</span>
        </div>

        <div style={s.newCouponOfficialBox}>
          <div style={s.newCouponColumn}>
            <h2>8.5折</h2>
            <CouponBigOfficial text="8.5折" limit={`${t.maxDiscount} ₩3,000`} t={t} protectedClick={protectedClick} show={show} />
          </div>

          <div style={s.newCouponColumn}>
            <h2>8折</h2>
            <CouponBigOfficial text="8折" limit={`${t.maxDiscount} ₩5,000`} t={t} protectedClick={protectedClick} show={show} />
          </div>
        </div>
      </section>
    </div>
  );
}

function EventCouponPage({ t, protectedClick, show, setPage }) {
  return (
    <div>
      <section style={s.eventOfficialHero}>
        <div style={s.circleOne}></div>
        <div style={s.circleTwo}></div>
        <div style={s.circleThree}></div>

        <div style={s.eventHeroContent}>
          <div style={s.eventLogoText}>GMARKET</div>
          <h1 className="gm-event-hero-title" style={s.eventHeroTitle}>{t.eventTitle}</h1>
          <p style={s.eventHeroSub}>{t.eventSubTitle}</p>

          <div style={s.eventOfficialButtons}>
            <button style={s.eventOfficialButton} onClick={() => protectedClick(() => show(t.dailyLucky))}>🎡 {t.dailyLucky} →</button>
            <button style={s.eventOfficialButton} onClick={() => protectedClick(() => setPage("member"))}>💎 {t.memberZone} →</button>
          </div>
        </div>
      </section>

      <section className="gm-event-coupon-section" style={s.eventCouponSection}>
        <h1 style={s.eventCouponTitle}>{t.eventCouponTitle}</h1>
        <p style={s.eventCouponSub}>{t.couponTip}</p>

        <div className="gm-event-coupon-list" style={s.eventCouponListOfficial}>
          <CouponBigOfficial text="9折" limit={`${t.maxDiscount} ₩3,000`} t={t} protectedClick={protectedClick} show={show} />
          <CouponBigOfficial text="10%" limit={`${t.maxDiscount} ₩10,000`} t={t} protectedClick={protectedClick} show={show} />
          <CouponBigOfficial text="₩3,000" limit={t.availableNow} t={t} protectedClick={protectedClick} show={show} />
        </div>
      </section>
    </div>
  );
}

function CouponCardOfficial({ text, sub }) {
  return (
    <div style={s.couponCardOfficial}>
      <div style={s.couponCardLeft}>
        <b>{text}</b>
        <p>{sub}</p>
      </div>
      <div style={s.couponGreenTicket}>
        <span>G</span>
      </div>
    </div>
  );
}

function CouponBigOfficial({ text, limit, t, protectedClick, show }) {
  return (
    <div className="gm-coupon-big" style={s.couponBigOfficial}>
      <div style={s.bigCouponCutLeft}></div>
      <div style={s.bigCouponCutRight}></div>

      <div>
        <b style={s.bigCouponText}>{text}</b>
        <p style={s.bigCouponLimit}>{limit}</p>
        <small style={s.bigCouponSmall}>Gmarket Global Coupon</small>
      </div>

      <button style={s.bigCouponButton} onClick={() => protectedClick(() => show(t.couponSuccess))}>{t.couponReceive} ↓</button>
    </div>
  );
}

function FloatingBox({ t, cart, setPage, protectedClick }) {
  return (
    <aside className="gm-float" style={s.float}>
      <div onClick={() => protectedClick(() => setPage("cart"))}>
        🛒<br />{t.cart}
        <b style={s.badge}>{cart.reduce((n, x) => n + x.qty, 0)}</b>
      </div>
      <div onClick={() => protectedClick(() => setPage("wishlist"))}>♡<br />{t.wish}</div>
      <div onClick={() => window.scrollTo(0, 0)}>↑<br />{t.top}</div>
    </aside>
  );
}

function Product({ p, t, money, onDetail, onCart, onWish, rank, big }) {
  const off = Math.max(1, Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100));

  return (
    <div className="gm-card" style={big ? s.bigCard : s.card}>
      {rank && <div style={s.rankNo}>{rank}</div>}

      <div style={s.productImageBox} onClick={onDetail}>
        <img
          className={big ? "gm-big-img" : "gm-img"}
          src={p.image}
          alt={p.name}
          style={big ? s.bigImg : s.img}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = FALLBACK_PRODUCT_IMAGE;
          }}
        />
      </div>

      <h3 style={s.productName}>{p.name}</h3>
      <p style={s.desc}>{p.desc}</p>
      <div>
        <span style={s.price}>{money(p.price)}</span>
        <span style={s.old}> {money(p.oldPrice)}</span>
      </div>
      <p style={s.discount}>{off}%↓</p>
      <p>✅ {t.stock}: {p.stock}</p>
      <p>⭐ {p.rating} · 🔥 {p.sales.toLocaleString()}</p>
      <button style={s.detailBtn} onClick={onDetail}>{t.details}</button>
      <button style={s.cartBtn} onClick={onCart}>{t.addCart}</button>
      <button style={s.smallWish} onClick={onWish}>♡</button>
    </div>
  );
}

function Footer({ t, openLineService, protectedClick, setPage }) {
  const footerGo = (pageName) => {
    protectedClick(() => setPage(pageName));
  };

  return (
    <footer className="gm-footer" style={s.footer}>
      <div className="gm-footer-links" style={s.footerLinks}>
        <span style={s.footerLink} onClick={() => footerGo("about")}>{t.about}</span>
        <span style={s.footerLink} onClick={() => footerGo("terms")}>{t.terms}</span>
        <span style={s.footerLink} onClick={() => footerGo("privacy")}>{t.privacy}</span>
        <span style={s.footerLink} onClick={() => footerGo("map")}>{t.siteMap}</span>
        <span style={s.footerLink} onClick={() => footerGo("service")}>{t.service}</span>
        <span style={s.footerLink} onClick={() => footerGo("weibo")}>{t.weibo}</span>
      </div>

      <div className="gm-footer-info" style={s.footerInfo}>
        <div style={s.customerBox}>
          <b>{t.service}</b>
          <p>{t.customerTime}</p>

          <button onClick={openLineService}>
            {t.onlineService}
          </button>

          <p>{t.kakao}</p>

          <button onClick={() => footerGo("service")}>
            {t.gmarketKR}
          </button>
        </div>

        <div style={s.companyBox}>
          <p>{t.companyAddress}</p>
          <p>{t.phone}: +852-2-1566-5701</p>
          <p>{t.fax}: +852-2-589-8844</p>
          <p>{t.email}: support@gmarket.hk</p>
          <p>{t.company}</p>
          <p>{t.businessNo}: 254453</p>
          <p>{t.salesReport}: {t.salesReportNo}</p>
        </div>

        <div className="gm-map-box" style={s.mapBox}>
          <iframe
            title="map"
            width="100%"
            height="230"
            style={{ border: 0 }}
            loading="lazy"
            src="https://www.google.com/maps?q=MOKO%20Mong%20Kok%20Hong%20Kong&output=embed"
          />
        </div>
      </div>

      <p style={{ textAlign: "center", color: "#666" }}>{t.footerNotice}</p>
      <p style={{ textAlign: "center" }}>
        Copyright © Gmarket {t.copyright}
      </p>
    </footer>
  );
}

const s = {
  page: { minHeight: "100vh", background: "#fff", fontFamily: "Arial, sans-serif" },
  toast: {
    position: "fixed", top: 20, left: "50%", transform: "translateX(-50%)",
    background: "#111", color: "#fff", padding: "12px 22px", borderRadius: 20, zIndex: 999,
  },

  productImageBox: {
    width: "100%",
    height: 190,
    background: "#f7f7f7",
    border: "1px solid #eee",
    overflow: "hidden",
    cursor: "pointer",
  },
  productName: {
    fontSize: 18,
    fontWeight: 700,
    margin: "14px 0 8px",
    lineHeight: 1.25,
    minHeight: 44,
  },
  customerChatOverlay: {
    position: "fixed", right: 24, bottom: 24, zIndex: 1000,
  },
  customerChatBox: {
    width: 360, maxWidth: "calc(100vw - 32px)", height: 520, maxHeight: "calc(100vh - 48px)",
    background: "#fff", borderRadius: 16, boxShadow: "0 16px 50px rgba(0,0,0,.22)", overflow: "hidden",
    display: "flex", flexDirection: "column", border: "1px solid #dbe7f5",
  },
  customerChatHeader: {
    height: 52, background: "#0877e8", color: "#fff", padding: "0 16px",
    display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 16,
  },
  customerChatClose: {
    border: 0, background: "transparent", color: "#fff", fontSize: 24, cursor: "pointer",
  },
  customerChatBody: {
    flex: 1, background: "#f6f8fb", padding: 14, overflowY: "auto",
  },
  customerChatEmail: {
    width: "100%", height: 38, border: "1px solid #cfd8e3", borderRadius: 8, padding: "0 10px", marginBottom: 10,
  },
  customerChatTip: {
    background: "#fff", border: "1px solid #e5eaf2", color: "#555", padding: 12, borderRadius: 12,
  },
  customerBubbleMine: {
    maxWidth: "82%", marginLeft: "auto", marginBottom: 10, background: "#0877e8", color: "#fff",
    padding: "10px 12px", borderRadius: "14px 14px 4px 14px", lineHeight: 1.45,
  },
  customerBubbleSeller: {
    maxWidth: "82%", marginRight: "auto", marginBottom: 10, background: "#fff", color: "#222",
    padding: "10px 12px", borderRadius: "14px 14px 14px 4px", border: "1px solid #e5eaf2", lineHeight: 1.45,
  },
  customerBubbleTime: {
    display: "block", opacity: .72, fontSize: 11, marginTop: 4,
  },
  customerChatInputRow: {
    display: "grid", gridTemplateColumns: "1fr 96px", gap: 8, padding: 12, borderTop: "1px solid #e5eaf2", background: "#fff",
  },
  customerChatInput: {
    height: 40, border: "1px solid #cfd8e3", borderRadius: 8, padding: "0 10px",
  },
  customerChatSend: {
    height: 40, border: 0, borderRadius: 8, background: "#0877e8", color: "#fff", fontWeight: "bold", cursor: "pointer",
  },
  loginOverlay: {
    position: "fixed", inset: 0, background: "rgba(0,0,0,.45)", zIndex: 998,
    display: "flex", alignItems: "center", justifyContent: "center", padding: 20,
  },
  findPageWrap: { width: "100%", minHeight: "560px", background: "#fff", padding: "45px 0 70px" },
  findPageBox: { width: "980px", maxWidth: "82%", margin: "0 auto", color: "#555", position: "relative" },
  findTitle: { fontSize: 34, color: "#4a4a4a", margin: "0 0 12px", fontWeight: 800 },
  findDivider: { borderTop: "1px solid #333", marginBottom: 22 },
  findIntro: { fontSize: 14, lineHeight: 1.45, marginBottom: 16 },
  findBlueLink: { color: "#0077ff", textDecoration: "underline", cursor: "pointer" },
  findFormTable: { borderTop: "1px solid #222", borderBottom: "1px solid #ddd", marginTop: 12 },
  findRow: { display: "grid", gridTemplateColumns: "280px 1fr", minHeight: 54, borderBottom: "1px solid #ddd" },
  findLabel: { background: "#f7f7f7", padding: "18px 20px", color: "#666", fontSize: 14 },
  findField: { padding: "12px 20px", display: "flex", alignItems: "center" },
  findInput: { width: 280, height: 28, border: "1px solid #ccc", padding: "0 10px", outline: "none" },
  findCaptchaRow: { display: "grid", gridTemplateColumns: "170px 58px 58px 1fr", minHeight: 58, alignItems: "stretch" },
  findCaptchaImage: { background: "linear-gradient(135deg,#0b6d16,#5fae38)", color: "#fff", fontSize: 30, letterSpacing: 9, fontWeight: 800, fontFamily: "Georgia, serif", display: "flex", alignItems: "center", justifyContent: "center", textShadow: "1px 2px 2px rgba(0,0,0,.45)", transform: "skew(-3deg)" },
  findIconBtn: { border: 0, borderLeft: "1px solid #ddd", borderRight: "1px solid #ddd", background: "#fafafa", fontSize: 24, color: "#888", cursor: "pointer" },
  findCaptchaInput: { width: 280, height: 28, border: "1px solid #ccc", padding: "0 10px", outline: "none" },
  findSubmitBtn: { display: "block", margin: "16px auto 0", width: 230, height: 34, background: "#0077e6", color: "#fff", border: 0, fontWeight: "bold", cursor: "pointer" },
  findBottomText: { marginTop: 24, color: "#999", fontSize: 14 },
  findBackBtn: { marginTop: 10, padding: "6px 12px", cursor: "pointer" },

  loginModal: {
    width: 430, background: "#fff", borderRadius: 14, boxShadow: "0 18px 55px rgba(0,0,0,.28)",
    padding: "28px 34px 30px", position: "relative", boxSizing: "border-box", borderTop: "5px solid #0077e6",
  },
  modalClose: {
    position: "absolute", right: 14, top: 10, border: 0, background: "transparent",
    fontSize: 28, cursor: "pointer", color: "#555", lineHeight: 1,
  },
  modalLogo: { fontSize: 34, fontWeight: "bold", textAlign: "center", marginBottom: 8 },
  modalTitle: { textAlign: "center", margin: "8px 0 4px", fontSize: 26 },
  modalSub: { textAlign: "center", color: "#666", marginBottom: 20 },
  forgotLinkButton: { border: 0, background: "transparent", padding: 0, margin: 0, color: "#006ee6", textDecoration: "underline", cursor: "pointer", fontSize: 13, fontFamily: "inherit" },
  modalInput: {
    width: "100%", height: 42, marginBottom: 10, border: "1px solid #bbb",
    fontSize: 15, boxSizing: "border-box", padding: "0 12px", outline: "none",
  },
  hiddenAutofill: {
    position: "absolute",
    left: "-9999px",
    width: 1,
    height: 1,
    opacity: 0,
    pointerEvents: "none",
  },
  modalOptions: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    color: "#666", fontSize: 13, margin: "4px 0 16px",
  },
  modalLoginBtn: {
    width: "100%", height: 44, background: "#0077e6", color: "#fff", border: 0,
    fontWeight: "bold", fontSize: 16, cursor: "pointer", borderRadius: 4,
  },
  modalJoinBox: {
    marginTop: 18, paddingTop: 16, borderTop: "1px solid #eee",
    display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, color: "#555", fontSize: 13,
  },
  modalJoinBtn: {
    minWidth: 110, height: 34, background: "#6aa9e9", color: "#fff", border: "1px solid #3e86d1",
    cursor: "pointer", borderRadius: 4,
  },
  top: {
    height: 30, borderBottom: "1px solid #ddd", display: "flex", justifyContent: "space-between",
    alignItems: "center", padding: "0 14%", fontSize: 13, background: "#fff",
  },
  topLinks: { display: "flex", gap: 14, alignItems: "center", cursor: "pointer" },
  blue: { color: "#006ee6", fontWeight: "bold" },
  header: {
    display: "grid", gridTemplateColumns: "260px 520px 300px", gap: 60,
    alignItems: "center", padding: "24px 14%",
  },
  logo: { fontSize: 44, fontWeight: "bold", lineHeight: 1 },
  smallSlogan: { color: "#006ee6", textAlign: "center", fontSize: 14, marginTop: 4 },
  searchBox: { display: "flex", border: "4px solid #0077ff", borderRadius: 6, height: 44 },
  search: { flex: 1, border: 0, padding: "0 12px", fontSize: 15, outline: "none" },
  searchBtn: { width: 50, border: 0, borderLeft: "1px solid #888", background: "#eee", cursor: "pointer" },
  keywords: { display: "flex", gap: 18, color: "#555", fontSize: 12, marginTop: 10, cursor: "pointer" },
  notice: { fontSize: 14 },
  link: { color: "#0077ff", cursor: "pointer" },
  nav: { background: "#0077e6", color: "#fff", position: "sticky", top: 0, zIndex: 50 },
  navIn: {
    margin: "0 auto", width: "72%", height: 42, display: "grid",
    gridTemplateColumns: "190px 1fr 1fr 1fr 1fr", alignItems: "center",
    textAlign: "center", fontSize: 16, cursor: "pointer",
  },
  navItem: { height: 42, lineHeight: "42px", fontWeight: "bold" },
  catTab: { background: "#0064c9", height: 42, lineHeight: "42px", fontWeight: "bold" },
  main: {
    width: "72%", margin: "0 auto", display: "grid", gridTemplateColumns: "190px 1fr 86px",
    gap: 28, paddingTop: 18,
  },
  sideItem: { padding: "8px 0", fontSize: 14, cursor: "pointer", position: "relative" },
  arrow: { float: "right", color: "#999" },
  hero: {
    height: 220, borderRadius: 18, background: "linear-gradient(135deg,#fff1f7,#ffd9e8)",
    marginBottom: 28, padding: 36, display: "flex", alignItems: "center",
  },
  heroBtn: {
    background: "#ff5b8f", color: "#fff", border: 0, padding: "12px 40px", borderRadius: 8, cursor: "pointer",
  },
  title: { fontSize: 32, marginBottom: 8 },
  sub: { color: "#666", marginBottom: 18 },
  grid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 },
  rankGrid: { display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 28 },
  bigProductGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 },
  card: {
    background: "#fff", borderRadius: 0, padding: 12, boxShadow: "none", borderBottom: "1px solid #ddd",
  },
  bigCard: {
    background: "#fff", border: "1px solid #ddd", padding: 14, boxShadow: "none",
  },
  img: { width: "100%", height: 160, objectFit: "cover", cursor: "pointer" },
  bigImg: { width: "100%", height: 280, objectFit: "cover", cursor: "pointer" },
  desc: { color: "#555", minHeight: 38, fontSize: 14 },
  price: { color: "#111", fontSize: 22, fontWeight: "bold" },
  old: { color: "#999", textDecoration: "line-through" },
  discount: { color: "#0aaf24", fontWeight: "bold", fontSize: 16 },
  detailBtn: {
    padding: "8px 10px", background: "#0077ff", color: "#fff", border: 0, cursor: "pointer", marginRight: 6,
  },
  cartBtn: { padding: "8px 10px", background: "#222", color: "#fff", border: 0, cursor: "pointer" },
  smallWish: { marginLeft: 6, border: "1px solid #ddd", background: "#fff", padding: "8px 10px", cursor: "pointer" },
  wishBtn: {
    padding: 14, background: "#fff", color: "#333", border: "1px solid #ddd", borderRadius: 10, marginRight: 10, cursor: "pointer",
  },
  float: {
    border: "1px solid #ddd", minHeight: 210, textAlign: "center", paddingTop: 18, display: "flex",
    flexDirection: "column", gap: 20, color: "#333", cursor: "pointer", position: "sticky", top: 80, background: "#fff",
  },
  badge: { display: "inline-block", marginLeft: 4, color: "#e60023" },
  pagination: { margin: "30px 0", display: "flex", gap: 20, justifyContent: "center", alignItems: "center" },
  container: { width: "72%", margin: "30px auto" },
  detail: {
    display: "flex", gap: 40, background: "#fff", boxShadow: "0 8px 26px rgba(0,0,0,.08)", padding: 30, borderRadius: 18,
  },
  detailImg: { width: 430, height: 430, objectFit: "cover", borderRadius: 16 },
  buy: { padding: 14, background: "#e60023", color: "#fff", border: 0, borderRadius: 10, marginRight: 10, cursor: "pointer" },
  panel: { background: "#fff", padding: 20, borderRadius: 16, boxShadow: "0 8px 26px rgba(0,0,0,.08)" },
  cartRow: { display: "flex", alignItems: "center", gap: 14, borderBottom: "1px solid #eee", padding: 12 },
  thumb: { width: 70, height: 70, objectFit: "cover", borderRadius: 10 },
  order: { borderBottom: "1px solid #eee", padding: 16 },
  loginArea: { width: 850, margin: "130px auto 120px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 },
  loginCard: { border: "1px solid #d8d8d8", height: 340, background: "#fafafa" },
  joinCard: { border: "1px solid #d8d8d8", height: 340, background: "#fafafa" },
  loginBody: { padding: "70px 50px" },
  joinBody: { padding: "85px 50px", textAlign: "center" },
  loginInputRow: { display: "grid", gridTemplateColumns: "1fr 90px", gap: 10 },
  loginInput: { width: "100%", height: 34, marginBottom: 8, border: "1px solid #bbb", fontSize: 16, boxSizing: "border-box", padding: "0 10px" },
  loginButton: { background: "#0077e6", color: "#fff", border: 0, fontWeight: "bold", fontSize: 16 },
  loginOptions: { marginTop: 10, display: "flex", gap: 14, color: "#666", fontSize: 13 },
  joinButton: { width: 180, height: 34, background: "#6aa9e9", color: "#fff", border: "1px solid #3e86d1", cursor: "pointer" },
  registerArea: { width: 700, margin: "70px auto 100px" },
  registerBox: { border: "1px solid #ddd", padding: 40, background: "#fafafa" },
  fullInput: { width: "100%", boxSizing: "border-box", padding: 13, border: "1px solid #bbb", margin: "8px 0 14px" },
  verifyRow: { display: "grid", gridTemplateColumns: "1fr 130px", gap: 10, margin: "8px 0 14px" },
  verifyBtn: { background: "#0077ff", color: "#fff", border: 0, cursor: "pointer", fontWeight: "bold" },
  submitBtn: { padding: "12px 34px", background: "#0077ff", color: "#fff", border: 0, cursor: "pointer", marginRight: 8 },
  footer: { borderTop: "2px solid #0077e6", marginTop: 40, fontSize: 13, color: "#555", paddingBottom: 20 },
  footerLinks: {
    height: 55, display: "flex", justifyContent: "center", alignItems: "center", gap: 90, borderBottom: "1px solid #ddd",
  },
  footerLink: { cursor: "pointer", color: "#555" },
  footerInfo: {
    width: "72%", margin: "25px auto", display: "grid", gridTemplateColumns: "180px 320px 1fr", gap: 30, lineHeight: 1.6,
  },
  customerBox: { background: "#fff", padding: 18, borderRadius: 10, boxShadow: "0 3px 15px rgba(0,0,0,.06)" },
  companyBox: { padding: 18, background: "#fff", boxShadow: "0 3px 15px rgba(0,0,0,.06)", borderRadius: 10 },
  mapBox: { background: "#eee", borderRadius: 10, overflow: "hidden" },
  currencyBox: { position: "relative", cursor: "pointer" },
  currencyMenu: {
    position: "absolute", right: 0, top: 22, background: "#fff", border: "1px solid #ddd",
    boxShadow: "0 4px 14px rgba(0,0,0,.15)", zIndex: 99, minWidth: 95, lineHeight: "30px", padding: "6px 10px",
  },
  specialWrap: { width: "72%", margin: "38px auto" },
  hotTitle: { fontSize: 32, color: "#333", marginBottom: 10 },
  bestTabs: {
    display: "grid", gridTemplateColumns: "1fr 1fr 1fr", border: "1px solid #999", height: 48, lineHeight: "48px",
    textAlign: "center", fontWeight: "bold", marginLeft: "46%", marginBottom: 20,
  },
  bestTabActive: { background: "#fff", borderTop: "3px solid #111" },
  iconLine: {
    height: 88, borderTop: "1px solid #ddd", borderBottom: "1px solid #ddd", display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)", textAlign: "center", alignItems: "center", color: "#234d9b", fontSize: 13, marginBottom: 28,
  },
  iconActive: { background: "#005fbd", color: "#fff", height: 88, display: "flex", flexDirection: "column", justifyContent: "center", fontWeight: "bold" },
  catIcon: { fontSize: 25, marginBottom: 5 },
  rankNo: { color: "#00a100", fontWeight: "bold", borderBottom: "2px solid #00a100", display: "inline-block", marginBottom: 6 },
  dealHero: {
    height: 235, background: "linear-gradient(90deg,#9db0c9,#c8d5e8)", display: "flex", alignItems: "center", justifyContent: "center",
  },
  superText: { fontSize: 70, fontWeight: 900, color: "#fff", textShadow: "5px 5px 0 #111" },
  dealCats: {
    height: 68, background: "#f1f1f1", display: "flex", justifyContent: "center", alignItems: "center", gap: 45, fontWeight: "bold", cursor: "pointer",
  },
  dealCatActive: { color: "#0077ff" },

  memberPage: { width: "72%", margin: "34px auto 70px" },
  memberMainTitle: { fontSize: 28, marginBottom: 20, color: "#222" },
  memberOfficialBox: {
    background: "#cfe8ff",
    border: "1px solid #7bb8ff",
    borderRadius: 20,
    padding: 18,
    boxShadow: "0 8px 18px rgba(0,80,180,0.12)",
  },
  memberOfficialTabs: {
    height: 70,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    color: "#1576ff",
  },
  memberTabMuted: { opacity: 0.75 },
  memberTabActive: {
    background: "#fff",
    height: 58,
    lineHeight: "58px",
    borderRadius: "18px 18px 0 0",
    color: "#126cf0",
  },
  memberCouponWhitePanel: {
    background: "#fff",
    border: "3px solid #5ba6ff",
    borderRadius: 14,
    padding: 28,
  },
  memberPanelTopLine: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #ddd",
    paddingBottom: 12,
  },
  memberPanelTitle: {
    margin: 0,
    borderBottom: "4px solid #438dff",
    paddingBottom: 8,
    fontSize: 22,
  },
  guideText: { color: "#777", fontSize: 14, cursor: "pointer" },
  memberCouponRowOfficial: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 26,
    marginTop: 28,
  },
  couponCardOfficial: {
    height: 88,
    background: "#fff",
    border: "1px solid #d6d6d6",
    borderRadius: 6,
    display: "grid",
    gridTemplateColumns: "1fr 48px",
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
  },
  couponCardLeft: {
    padding: "15px 14px",
  },
  couponGreenTicket: {
    background: "#19b85a",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 22,
  },
  allDownloadBtn: {
    display: "block",
    margin: "30px auto 0",
    width: 180,
    height: 42,
    background: "#1478ff",
    color: "#fff",
    border: 0,
    borderRadius: 22,
    fontWeight: "bold",
    cursor: "pointer",
  },
  newMemberOfficialBlock: { marginTop: 48 },
  newMemberTitleRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 15,
  },
  newCouponOfficialBox: {
    background: "#f1f8ff",
    borderTop: "4px solid #23b04a",
    padding: 48,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 45,
  },
  newCouponColumn: {
    textAlign: "center",
  },
  couponBigOfficial: {
    position: "relative",
    background: "#fff",
    border: "1px solid #d7d7d7",
    borderRadius: 12,
    width: 300,
    minHeight: 160,
    margin: "0 auto",
    padding: "26px 20px",
    boxShadow: "0 8px 22px rgba(0,0,0,0.12)",
    overflow: "hidden",
  },
  bigCouponCutLeft: {
    position: "absolute",
    left: -14,
    top: "50%",
    width: 28,
    height: 28,
    marginTop: -14,
    background: "#f1f8ff",
    borderRadius: "50%",
  },
  bigCouponCutRight: {
    position: "absolute",
    right: -14,
    top: "50%",
    width: 28,
    height: 28,
    marginTop: -14,
    background: "#f1f8ff",
    borderRadius: "50%",
  },
  bigCouponText: {
    fontSize: 34,
    color: "#18a94a",
  },
  bigCouponLimit: { color: "#333", fontWeight: "bold" },
  bigCouponSmall: { color: "#777" },
  bigCouponButton: {
    marginTop: 18,
    width: 160,
    height: 38,
    border: 0,
    borderRadius: 20,
    background: "#18b957",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  },

  eventOfficialHero: {
    position: "relative",
    height: 500,
    background: "linear-gradient(180deg,#dff2ff,#cdeaff)",
    overflow: "hidden",
    textAlign: "center",
  },
  eventHeroContent: {
    position: "relative",
    zIndex: 3,
    paddingTop: 85,
  },
  eventLogoText: {
    fontSize: 42,
    letterSpacing: 4,
    fontWeight: "bold",
    color: "#1d2b55",
  },
  eventHeroTitle: {
    fontSize: 48,
    margin: "15px 0 8px",
    color: "#202040",
  },
  eventHeroSub: {
    fontSize: 18,
    color: "#455",
  },
  eventOfficialButtons: {
    display: "flex",
    justifyContent: "center",
    gap: 18,
    marginTop: 45,
  },
  eventOfficialButton: {
    width: 250,
    height: 58,
    border: 0,
    borderRadius: 6,
    background: "#48436f",
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 6px 14px rgba(0,0,0,0.18)",
  },
  circleOne: {
    position: "absolute",
    width: 170,
    height: 170,
    borderRadius: "50%",
    background: "#f8ccff",
    left: "16%",
    top: 80,
  },
  circleTwo: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: "50%",
    background: "#fff0a8",
    right: "18%",
    top: 115,
  },
  circleThree: {
    position: "absolute",
    width: 210,
    height: 210,
    borderRadius: "50%",
    background: "#b6e3ff",
    right: "28%",
    bottom: -60,
  },
  eventCouponSection: {
    width: "72%",
    margin: "50px auto 70px",
    textAlign: "center",
  },
  eventCouponTitle: {
    fontSize: 34,
    fontWeight: 400,
    marginBottom: 8,
  },
  eventCouponSub: {
    color: "#666",
    marginBottom: 34,
  },
  eventCouponListOfficial: {
    display: "flex",
    justifyContent: "center",
    gap: 34,
    background: "#f7fbff",
    padding: 45,
    borderTop: "4px solid #1478ff",
  },
};
