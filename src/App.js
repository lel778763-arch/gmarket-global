import React, { useMemo, useState } from "react";

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
    joinText: "现在可以简单、快速地加入会员！",
    about: "关于Gmarket",
    terms: "用户协议",
    privacy: "隐私政策",
    siteMap: "网站地图",
    weibo: "微博",
    customerTime: "工作时间：24小时（全年无休）",
    onlineService: "在线客服咨询",
    companyAddress: "香港旺角太子道西193号新世纪广场1座17楼",
    phone: "电话",
    fax: "传真",
    email: "电子邮件",
    company: "Gmarket Asia Ltd",
    businessNo: "营业执照号码",
    salesReport: "通信销售业申报",
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
    joinText: "Join quickly and enjoy member benefits!",
    about: "About Gmarket",
    terms: "Terms",
    privacy: "Privacy Policy",
    siteMap: "Site Map",
    weibo: "Weibo",
    customerTime: "Service hours: 24 hours",
    onlineService: "Online customer service",
    companyAddress:
      "17/F, Tower 1, MOKO, 193 Prince Edward Road West, Mong Kok, Hong Kong",
    phone: "Phone",
    fax: "Fax",
    email: "Email",
    company: "Gmarket Asia Ltd",
    businessNo: "Business Registration No.",
    salesReport: "Online Sales Registration",
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
    joinText: "쉽고 빠르게 회원가입하세요!",
    about: "Gmarket 소개",
    terms: "이용약관",
    privacy: "개인정보처리방침",
    siteMap: "사이트맵",
    weibo: "웨이보",
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

const productData = {
  fashion: {
    names: ["Premium Jacket", "Luxury Bag", "Designer Coat", "Brand Wallet", "Silk Shirt"],
    imgs: [
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=700",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700",
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=700",
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=700",
    ],
  },
  clothing: {
    names: ["Korea Hoodie", "Cotton T-Shirt", "Slim Jeans", "Summer Dress", "Casual Pants"],
    imgs: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=700",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=700",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=700",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=700",
    ],
  },
  shoes: {
    names: ["Running Shoes", "Sneakers", "Leather Shoes", "Sports Sandals", "Travel Backpack"],
    imgs: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=700",
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=700",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700",
    ],
  },
  beauty: {
    names: ["Korean Skincare Set", "Hair Treatment", "Face Cream", "Lip Tint", "Sunscreen"],
    imgs: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=700",
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=700",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=700",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=700",
    ],
  },
  kids: {
    names: ["Baby Diaper Pack", "Kids Toy Set", "Baby Bottle", "Children Hoodie", "Baby Car Seat"],
    imgs: [
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=700",
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=700",
      "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?w=700",
      "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=700",
    ],
  },
  food: {
    names: ["Ramen Pack", "Korean Snack Box", "Kimchi Set", "Coffee Mix", "Seaweed Snack"],
    imgs: [
      "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=700",
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=700",
      "https://images.unsplash.com/photo-1583224964978-2257b960c3d3?w=700",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=700",
    ],
  },
  home: {
    names: ["Cleaning Kit", "Storage Box", "Laundry Set", "Home Organizer", "Towel Set"],
    imgs: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=700",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=700",
    ],
  },
  kitchen: {
    names: ["Kitchen Set", "Cookware Pot", "Coffee Cup", "Knife Set", "Rice Cooker"],
    imgs: [
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=700",
      "https://images.unsplash.com/photo-1584990347449-a5d9f800a783?w=700",
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=700",
      "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=700",
    ],
  },
  sports: {
    names: ["Yoga Mat", "Camping Light", "Outdoor Bag", "Fitness Band", "Training Gloves"],
    imgs: [
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=700",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=700",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700",
    ],
  },
  health: {
    names: ["Vitamin Pack", "Protein Shake", "Diet Tea", "Omega 3", "Red Ginseng"],
    imgs: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=700",
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=700",
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=700",
      "https://images.unsplash.com/photo-1550572017-edd951b55104?w=700",
    ],
  },
  kpop: {
    names: ["KPOP Album Set", "Photo Card Pack", "Light Stick", "Poster Set", "Fan Goods"],
    imgs: [
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=700",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=700",
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=700",
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=700",
    ],
  },
  electronics: {
    names: ["iPhone 15 Pro", "Samsung Galaxy S24", "AirPods Pro 2", "Smart Watch", "Galaxy Buds"],
    imgs: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=700",
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=700",
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=700",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700",
    ],
  },
  computer: {
    names: ["MacBook Air M2", "LG Ultra Monitor", "Mechanical Keyboard", "Gaming Mouse", "USB Hub"],
    imgs: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=700",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=700",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=700",
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=700",
    ],
  },
};

function makeProducts() {
  const arr = [];
  for (let i = 1; i <= 10000; i++) {
    const cat = cats[(i - 1) % cats.length];
    const group = productData[cat.key];
    const name = group.names[(i - 1) % group.names.length];
    const img = group.imgs[(i - 1) % group.imgs.length];
    const base = 15 + ((i * 37) % 1480);

    arr.push({
      id: i,
      categoryKey: cat.key,
      name: `${name} ${i}`,
      price: base,
      oldPrice: base + 40 + ((i * 11) % 300),
      stock: 8 + ((i * 7) % 480),
      sales: (i * 31) % 20000,
      rating: (4.1 + ((i % 9) / 10)).toFixed(1),
      image: img,
      desc: `${cat.en} · authentic item · fast international shipping`,
      reviews: [
        "Quality is good and delivery was fast.",
        "Packaging was clean. I will buy again.",
        "Product matches the description.",
      ],
    });
  }
  return arr;
}

const allProducts = makeProducts();

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
  const [currency, setCurrency] = useState("KRW");
  const [currencyOpen, setCurrencyOpen] = useState(false);

  const t = L[lang];
  const perPage = 24;

  const catName = (c) => c?.[lang] || c?.en || "";

  const show = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 1500);
  };

  const requireLogin = () => {
    if (!user) {
      show(t.needLogin);
      setPage("login");
      return false;
    }
    return true;
  };

  const protectedClick = (callback) => {
    if (!user) {
      show(t.needLogin);
      setPage("login");
      return;
    }
    callback();
  };

  const LINE_URL = "https://line.me/R/ti/p/~xiaoxiao8886";

  const openLineService = () => {
    if (!user) {
      show(t.lineNeedLogin || t.needLogin);
      setPage("login");
      return;
    }

    const ok = window.confirm(t.lineConfirm || "即将跳转到 LINE 在线客服聊天，是否继续？");
    if (ok) {
      window.open(LINE_URL, "_blank", "noopener,noreferrer");
    }
  };

  const money = (value) => {
    if (currency === "KRW") return `₩${Math.round(value * 170).toLocaleString()}`;
    if (currency === "USD") return `$${(value / 7.8).toFixed(2)}`;
    return `HK$${value.toLocaleString()}`;
  };

  const filtered = useMemo(() => {
    const keyword = search.toLowerCase();
    return allProducts.filter((p) => {
      const c = cats.find((x) => x.key === p.categoryKey);
      return (
        (category === "All" || p.categoryKey === category) &&
        (p.name.toLowerCase().includes(keyword) ||
          p.desc.toLowerCase().includes(keyword) ||
          c.en.toLowerCase().includes(keyword) ||
          c.zh.includes(search) ||
          c.ko.includes(search))
      );
    });
  }, [category, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const pageProducts = filtered.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

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
    setPage("home");
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
  const showHeader = !["detail", "cart", "orders", "wishlist", "service", "map"].includes(page);

  const hotProducts = [...allProducts].sort((a, b) => b.sales - a.sales).slice(0, 20);
  const dealProducts = allProducts.filter((p) => p.price < 70).slice(0, 24);

  return (
    <div style={s.page}>
      {toast && <div style={s.toast}>{toast}</div>}

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
        <main style={s.main}>
          <aside>
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

          <section>
            <div style={s.hero}>
              <div>
                <h2>{t.festival}</h2>
                <p>{t.festivalText}</p>
                <button style={s.heroBtn} onClick={() => protectedClick(() => setPage("deal"))}>
                  {t.deal}
                </button>
              </div>
            </div>

            <h1 style={s.title}>{title}</h1>
            <p style={s.sub}>
              {filtered.length.toLocaleString()} {t.count} · {currentPage} / {totalPages}
            </p>

            <div style={s.grid}>
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
          <div style={s.loginArea}>
            <div style={s.loginCard}>
              <h1>{t.login}</h1>
              <div style={s.loginBody}>
                <div style={s.loginInputRow}>
                  <div>
                    <input style={s.loginInput} placeholder={t.id} value={loginId} onChange={(e) => setLoginId(e.target.value)} />
                    <input
                      style={s.loginInput}
                      type="password"
                      placeholder={t.password}
                      value={loginPw}
                      onChange={(e) => setLoginPw(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && submitLogin()}
                    />
                  </div>
                  <button style={s.loginButton} onClick={submitLogin}>{t.login}</button>
                </div>
                <div style={s.loginOptions}>
                  <label><input type="checkbox" /> {t.saveId}</label>
                  <span>{t.forgot}</span>
                </div>
              </div>
            </div>

            <div style={s.joinCard}>
              <h1>{t.register}</h1>
              <div style={s.joinBody}>
                <p>{t.joinText}</p>
                <button style={s.joinButton} onClick={() => setPage("register")}>{t.register}</button>
              </div>
            </div>
          </div>
          <Footer t={t} openLineService={openLineService} />
        </>
      )}

      {page === "register" && (
        <>
          <div style={s.registerArea}>
            <div style={s.registerBox}>
              <h1>{t.register}</h1>
              <input style={s.fullInput} placeholder={t.id} />
              <input style={s.fullInput} placeholder={t.email} />
              <input style={s.fullInput} type="password" placeholder={t.password} />
              <label><input type="checkbox" /> {t.terms} / {t.privacy}</label>
              <div style={{ marginTop: 20 }}>
                <button
                  style={s.submitBtn}
                  onClick={() => {
                    setUser({ id: "member" });
                    setPage("home");
                  }}
                >
                  {t.register}
                </button>
                <button onClick={() => setPage("login")}>{t.back}</button>
              </div>
            </div>
          </div>
          <Footer t={t} openLineService={openLineService} />
        </>
      )}

      {page === "detail" && (
        <div style={s.container}>
          <button onClick={() => setPage("home")}>← {t.back}</button>
          <div style={s.detail}>
            <img src={selected.image} alt="" style={s.detailImg} />
            <div>
              <h1>{selected.name}</h1>
              <p>{selected.desc}</p>
              <h2 style={s.price}>{money(selected.price)}</h2>
              <p><del>{money(selected.oldPrice)}</del></p>
              <p>✅ {t.stock}: {selected.stock}</p>
              <p>⭐ {selected.rating} / 5.0</p>
              <p>🔥 {t.sales}: {selected.sales.toLocaleString()}</p>
              <p>🚚 {t.fastShipping}</p>

              <button style={s.buy} onClick={() => { addCart(selected); setPage("cart"); }}>{t.order}</button>
              <button style={s.cartBtn} onClick={() => addCart(selected)}>{t.addCart}</button>
              <button style={s.wishBtn} onClick={() => addWish(selected)}>♡ {t.wish}</button>

              <h2 style={{ marginTop: 30 }}>{t.reviews}</h2>
              {selected.reviews.map((r, i) => <p key={i}>⭐ ⭐ ⭐ ⭐ ⭐ {r}</p>)}
            </div>
          </div>
        </div>
      )}

      {page === "cart" && (
        <div style={s.container}>
          <button onClick={() => setPage("home")}>← {t.back}</button>
          <h1>{t.cart}</h1>
          <div style={s.panel}>
            {cart.length === 0 ? (
              <p>{t.emptyCart}</p>
            ) : (
              cart.map((x) => (
                <div key={x.id} style={s.cartRow}>
                  <img src={x.image} alt="" style={s.thumb} />
                  <div style={{ flex: 1 }}>
                    <b>{x.name}</b>
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
        <div style={s.container}>
          <button onClick={() => setPage("home")}>← {t.back}</button>
          <h1>{t.wish}</h1>
          {wish.length === 0 ? (
            <div style={s.panel}>{t.emptyWish}</div>
          ) : (
            <div style={s.grid}>
              {wish.map((p) => (
                <Product key={p.id} p={p} t={t} money={money} onDetail={() => openDetail(p)} onCart={() => addCart(p)} onWish={() => addWish(p)} />
              ))}
            </div>
          )}
        </div>
      )}

      {page === "orders" && (
        <div style={s.container}>
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
                  {o.items.map((i) => <p key={i.id}>{i.name} × {i.qty}</p>)}
                  <b>{t.total}: {money(o.total)}</b>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {page === "service" && (
        <div style={s.container}>
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
        <div style={s.container}>
          <button onClick={() => setPage("home")}>← {t.back}</button>
          <h1>{t.map}</h1>
          <Footer t={t} openLineService={openLineService} />
        </div>
      )}
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
    <div style={s.top}>
      <div>
        <button onClick={() => setLang("zh")}>中文</button>
        <button onClick={() => setLang("en")}>English</button>
        <button onClick={() => setLang("ko")}>한국어</button>
      </div>

      <div style={s.topLinks}>
        {user ? (
          <>
            <span style={s.blue}>Hi, {user.id}</span>
            <span onClick={() => setUser(null)}>{t.logout}</span>
          </>
        ) : (
          <>
            <span style={s.blue} onClick={() => setPage("login")}>{t.login}</span>
            <span>OR</span>
            <span style={s.blue} onClick={() => setPage("register")}>{t.register}</span>
          </>
        )}

        <span onClick={() => protectedClick(() => setPage("service"))}>{t.help}</span>
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
    <header style={s.header}>
      <div style={{ cursor: "pointer" }} onClick={() => changeCat("All")}>
        <div style={s.logo}>
          <span style={{ color: "#00b050" }}>G</span>
          <span style={{ color: "#0077ff" }}>market</span>
        </div>
        <div style={s.smallSlogan}>{siteText}</div>
      </div>

      <div>
        <div style={s.searchBox}>
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
        <div style={s.keywords}>
          {["IVE LP", "SKINFOOD", "Aespa Lemonade", "COCOBLANC", "CARAZ", "30% OFF"].map((x) => (
            <span key={x} onClick={() => keywordClick(x.replace("30% OFF", ""))}>{x}</span>
          ))}
        </div>
      </div>

      <div style={s.notice}>
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
    <nav style={s.nav}>
      <div style={s.navIn}>
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
    <div style={s.specialWrap}>
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

      <div style={s.rankGrid}>
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
      <div style={s.dealHero}>
        <div style={s.superText}>{t.superBanner}<span>⚡</span></div>
      </div>

      <div style={s.dealCats}>
        <div style={s.dealCatActive} onClick={() => protectedClick(() => setTimeout(() => window.scrollTo(0, 360), 0))}>◎ {t.weeklyDeal}</div>
        <div onClick={() => protectedClick(() => changeCat("clothing"))}>👕 {t.clothing}</div>
        <div onClick={() => protectedClick(() => changeCat("beauty"))}>🧴 {t.beauty}</div>
        <div onClick={() => protectedClick(() => changeCat("sports"))}>🏕 {t.sportsOutdoor}</div>
        <div onClick={() => protectedClick(() => changeCat("home"))}>▣ {t.life}</div>
        <div onClick={() => protectedClick(() => changeCat("food"))}>🍜 {t.food}</div>
        <div onClick={() => protectedClick(() => changeCat("electronics"))}>📱 {t.digital}</div>
      </div>

      <div style={s.specialWrap}>
        <div style={s.bigProductGrid}>
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
    <div style={s.memberPage}>
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
          <h1 style={s.eventHeroTitle}>{t.eventTitle}</h1>
          <p style={s.eventHeroSub}>{t.eventSubTitle}</p>

          <div style={s.eventOfficialButtons}>
            <button style={s.eventOfficialButton} onClick={() => protectedClick(() => show(t.dailyLucky))}>🎡 {t.dailyLucky} →</button>
            <button style={s.eventOfficialButton} onClick={() => protectedClick(() => setPage("member"))}>💎 {t.memberZone} →</button>
          </div>
        </div>
      </section>

      <section style={s.eventCouponSection}>
        <h1 style={s.eventCouponTitle}>{t.eventCouponTitle}</h1>
        <p style={s.eventCouponSub}>{t.couponTip}</p>

        <div style={s.eventCouponListOfficial}>
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
    <div style={s.couponBigOfficial}>
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
    <aside style={s.float}>
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
    <div style={big ? s.bigCard : s.card}>
      {rank && <div style={s.rankNo}>{rank}</div>}
      <img src={p.image} alt={p.name} style={big ? s.bigImg : s.img} onClick={onDetail} />
      <h3>{p.name}</h3>
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

function Footer({ t, openLineService }) {
  return (
    <footer style={s.footer}>
      <div style={s.footerLinks}>
        <span>{t.about}</span>
        <span>{t.terms}</span>
        <span>{t.privacy}</span>
        <span>{t.siteMap}</span>
        <span>{t.service}</span>
        <span>{t.weibo}</span>
      </div>

      <div style={s.footerInfo}>
        <div style={s.customerBox}>
          <b>{t.service}</b>
          <p>{t.customerTime}</p>
          <button onClick={openLineService}>{t.onlineService}</button>
          <p>KakaoTalk</p>
          <button>Gmarket KR</button>
        </div>

        <div style={s.companyBox}>
          <p>{t.companyAddress}</p>
          <p>{t.phone}: +852-2-1566-5701</p>
          <p>{t.fax}: +852-2-589-8844</p>
          <p>{t.email}: support@gmarket.hk</p>
          <p>{t.company}</p>
          <p>{t.businessNo}: 254453</p>
          <p>{t.salesReport}: 香港旺角10630号</p>
        </div>

        <div style={s.mapBox}>
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
      <p style={{ textAlign: "center" }}>Copyright © Gmarket All rights reserved.</p>
    </footer>
  );
}

const s = {
  page: { minHeight: "100vh", background: "#fff", fontFamily: "Arial, sans-serif" },
  toast: {
    position: "fixed", top: 20, left: "50%", transform: "translateX(-50%)",
    background: "#111", color: "#fff", padding: "12px 22px", borderRadius: 20, zIndex: 999,
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
  submitBtn: { padding: "12px 34px", background: "#0077ff", color: "#fff", border: 0, cursor: "pointer", marginRight: 8 },
  footer: { borderTop: "2px solid #0077e6", marginTop: 40, fontSize: 13, color: "#555", paddingBottom: 20 },
  footerLinks: {
    height: 55, display: "flex", justifyContent: "center", alignItems: "center", gap: 90, borderBottom: "1px solid #ddd",
  },
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