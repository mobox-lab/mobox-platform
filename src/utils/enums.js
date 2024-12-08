// const CURRENCY_ICON = {
//     USD:"$",
//     AED:"د.إ",
//     ARS:"$",
//     AUD:"A$",
    BGN:"лв",
    BSD:"B$",
    CAD:"C$",
    CHF:"CHF",
    CLP:"$",
    CNY:"¥",
    COP:"Col$",
    CZK:"Kč",
    DKK:"kr",
    DOP:"RD$",
    EGP:"E£",
    EUR:"€",
    FJD:"FJ$",
    GBP:"￡",
    GTQ:"Q",
    HKD:"HK$",
    HRK:"kn",
    HUF:"Ft",
    IDR:"Rp",
    ILS:"₪",
    INR:"₹",
    ISK:"Íkr",
    JPY:"￥",
    KRW:"₩",
    KZT:"₸",
    MVR:"MVR",
    MXN:"Mex$",
    MYR:"RM",
    NOK:"kr",
    NZD:"NZ$",
    PAB:"B/.",
    PEN:"S/.",
    PHP:"₱",
    PKR:"₨",
    PLN:"zł",
    PYG:"₲",
    RON:"lei",
    RUB:"руб.",
    SAR:"﷼",
    SEK:"kr",
    SGD:"S$",
    THB:"฿",
    TRY:"₺",
    TWD:"NT$",
    UAH:"₴",
    UYU:"$U",
    ZAR:"R",
}

const EMOJI_CODE = {
    bookworm : 1,
    cute : 2,
    naughty : 3,
    smilecry : 4,
    awkward : 5,
    speechless : 6,
    money : 7,
    cool : 8,
    cry : 9,
    gosh : 10,
    hah : 11,
    noword : 12,
    stareye : 13,
    loveit : 14,
    phd : 15,
    shocked : 16,
    threw : 17,
    freeze : 18,
    chill : 19,
    angle : 20,
    nomouth : 21,
    kiss : 22,
    sunny : 23,
    openmouth : 24,
    sleepy : 25,
    damn : 26,
    evil : 27,
    hey : 28,
    yawn : 29,
    detective : 30,
    hilarious : 31,
    oldman : 32,
    ouch : 33,
    funnyboy : 34,
    smile : 35,
    reversmile : 36,
}

const MOMOJI_CODE = {

    stickers_tongue_out : "stickers_tongue_out",
    stickers_swt : "stickers_swt",
    stickers_lol : "stickers_lol",
    stickers_shocked : "stickers_shocked",
    stickers_cry : "stickers_cry",
    stickers_exasper_ated : "stickers_exasper_ated",
    stickers_blowing_kiss : "stickers_blowing_kiss",
    stickers_hodl : "stickers_hodl",
    stickers_to_the_moon : "stickers_to_the_moon",

    momo_chick_hey : "momo_chick_hey",
    momo_chick_eye : "momo_chick_eye",
    momo_chick_question : "momo_chick_question",
    momo_chick_cry : "momo_chick_cry",
    momo_chick_angry : "momo_chick_angry",
    momo_chick_mobox : "momo_chick_mobox",
    momo_chick_respect : "momo_chick_respect",
    momo_chick_up : "momo_chick_up",
    momo_chick_down : "momo_chick_down",
    momo_chick_car : "momo_chick_car",
    momo_chick_buy : "momo_chick_buy",
    momo_chick_hold : "momo_chick_hold",
    momo_tothemoon : "momo_tothemoon",
    momo_doge : "momo_doge",
    momo_pig_nice : "momo_pig_nice",
    momo_pig_ashame : "momo_pig_ashame",
    momo_pig_hi : "momo_pig_hi",
    momo_pig_cool : "momo_pig_cool",
    momo_pig_enjoy : "momo_pig_enjoy",
    momo_pig_fighting : "momo_pig_fighting",
    momo_pig_shocked : "momo_pig_shocked",
    momo_pig_melon : "momo_pig_melon",
    momo_pig_slame : "momo_pig_slame",
    momo_pig_smilecry : "momo_pig_smilecry",
    
    // momo_pig_666 : "momo_pig_666",
    // momo_pig_yue : "momo_pig_yue",
}

// 0 是 in 1 是 out
const COST_TYPE = {
    701 : {type:0, locale:"Asset_10"},
    5001 : {type:1, locale:"Asset_11"},
    705 : {type:0, locale:"Asset_67"}, //成就奖励
    20011 : {type:0, locale:"Asset_68"}, //金币大师排行榜奖励
    20012 : {type:0, locale:"Asset_70"}, //大富翁排行榜奖励
    20013 : {type:0, locale:"Asset_69"}, //掠夺排行榜奖励
    20014 : {type:0, locale:"Asset_71"}, //大转盘奖励
    20016 : {type:0, locale:"Asset_76"}, //金币大师 探险

    10001 :{type:1, locale:"Asset_72"},    //加速挖矿
    10002 :{type:1, locale:"Asset_73"},    //购买掠夺次数
    10003 :{type:1, locale:"Asset_74"},    //普通洗练
    10004 :{type:1, locale:"Asset_74"},    //高级洗练
    10005 :{type:1, locale:"Asset_74"},    //购买技能书
    10006 :{type:1, locale:"Asset_75"},    //重新刷新对手

    30001 :{type:1, locale:"Asset_77"},    //重新刷新对手
    30002 :{type:1, locale:"Asset_78"},    //重新刷新对手

    // 40021: {type:1, locale:"Asset_40021"} ,  // 背包扩容
    // 40007: {type:1, locale:"Asset_40007"} ,  // 转职
    // 40001: {type:1, locale:"Asset_40001"} ,  // 加速挖矿
    // 40022: {type:1, locale:"Asset_40022"} ,  // 打造装备
    // 40023: {type:1, locale:"Asset_40023"} ,  // 装备洗炼
    // 40002: {type:1, locale:"Asset_40002"} ,  // Jungle场购买掠夺次数
    // 41004: {type:0, locale:"Asset_41004"} ,  // 副本排行奖励
    // 40003: {type:1, locale:"Asset_40003"} ,  // Epic场购买掠夺次数
    // 41001: {type:0, locale:"Asset_41001"} ,  // Epic战场排行奖励
    // 40006: {type:1, locale:"Asset_40006"},  // 重置技能
    // 40004: {type:1, locale:"Asset_40004"},  // Royal场购买掠夺次数
    // 40005: {type:1, locale:"Asset_40005"},  // Legendary场购买掠夺次数
    // 40010: {type:1, locale:"Asset_40010"},  // 加速挖矿（装备）
    // 40008: {type:1, locale:"Asset_40008"},  // 加速挖矿（金币）
    // 40009: {type:1, locale:"Asset_40009"},  // 加速挖矿（技能书）
    // 41002: {type:0, locale:"Asset_41002"},  // Royal战场排行奖励
    // 41003: {type:0, locale:"Asset_41003"},  // Legendary战场排行奖励
    // 41005: {type:0, locale:"Asset_41005"},  // Epic副本排行奖励
    // 41006: {type:0, locale:"Asset_41006"},  // Royal副本排行奖励
    // 41007: {type:0, locale:"Asset_41007"},  // Legendary副本排行奖励

    40001: {type:1, locale:"Asset_40001"},// "挖矿",
    40008: {type:1, locale:"Asset_40008"},// "挖矿(金币)",
    40009: {type:1, locale:"Asset_40009"},// "挖矿(技能)",
    40010: {type:1, locale:"Asset_40010"},// "挖矿(装备)",
    40002: {type:1, locale:"Asset_40002"},// "新手掠夺",
    40003: {type:1, locale:"Asset_40003"},// "冰川掠夺",
    40004: {type:1, locale:"Asset_40004"},// "幽冥掠夺",
    40005: {type:1, locale:"Asset_40005"},// "传奇掠夺",
    40006: {type:1, locale:"Asset_40006"},// "重置技能",
    40007: {type:1, locale:"Asset_40007"},// "英雄转职",
    40011: {type:1, locale:"Asset_40011"},// "天赋重置",
    40027: {type:1, locale:"Asset_40027"},// "天赋购买",
    40028: {type:1, locale:"Asset_40028"},// "刷新对手",
    40021: {type:1, locale:"Asset_40021"},// "背包扩容",
    40022: {type:1, locale:"Asset_40022"},// "打造装备",
    40023: {type:1, locale:"Asset_40023"},// "装备洗炼",
    40024: {type:1, locale:"Asset_40024"},// "装备强化",
    40025: {type:1, locale:"Asset_40025"},// "购买技能方案",
    40026: {type:1, locale:"Asset_40026"},// "购买装备方案",
    40101: {type:1, locale:"Asset_40101"},// "购买装备方案",

    41001: {type:0, locale:"Asset_41001"},// "冰川战场",  // mbox, mec
    41002: {type:0, locale:"Asset_41002"},// "幽冥战场",  // mbox, mec
    41003: {type:0, locale:"Asset_41003"},// "传奇战场",  // mbox, mec
    41005: {type:0, locale:"Asset_41005"},// "冰川排行",  // mbox, mec
    41006: {type:0, locale:"Asset_41006"},// "幽冥排行",  // mbox, mec
    41007: {type:0, locale:"Asset_41007"},// "传奇排行",  // mbox, mec
    41008: {type:0, locale:"Asset_41008"},// "普通扫荡",
    41009: {type:0, locale:"Asset_41009"},// "高级扫荡",
    41101: {type:0, locale:"Asset_41101"},// "幸运转盘",
    41102: {type:0, locale:"Asset_41102"},// "幸运转盘",

    66001: {type:1, locale:"Asset_66001"}, // "单抽英雄卡",
    66002: {type:1, locale:"Asset_66002"}, // "十连抽英雄卡",
    66003: {type:1, locale:"Asset_66003"}, // "英雄重置消耗",
    66004: {type:1, locale:"Asset_66004"}, // "增加英雄背包容量",
    66011: {type:1, locale:"Asset_66011"}, // "购买VIP_1",
    66012: {type:1, locale:"Asset_66012"}, // "购买VIP_2",
    66013: {type:1, locale:"Asset_66013"}, // "购买VIP_3",
    66020: {type:1, locale:"Asset_66020"}, // "创建公会",
    66021: {type:1, locale:"Asset_66021"}, // "修改公会信息",
    66023: {type:1, locale:"Asset_66023"}, // "公会个人加速消耗",
    66024: {type:1, locale:"Asset_66024"}, // "公会集体加速消耗",
    66030: {type:1, locale:"Asset_66030"}, // "PVE副本鼓舞",
    66031: {type:1, locale:"Asset_66031"}, // "开宝箱消耗",
    66041: {type:1, locale:"Asset_66041"}, // "每日礼包1",
    66042: {type:1, locale:"Asset_66042"}, // "每日礼包2",
    66043: {type:1, locale:"Asset_66043"}, // "每日礼包3",     // mec
    66044: {type:1, locale:"Asset_66044"}, // "每日礼包4",
    66051: {type:1, locale:"Asset_66051"}, // "购买通行证",
    66052: {type:1, locale:"Asset_66052"}, // "购买通行证积分",
    67001: {type:1, locale:"Asset_67001"}, // "英雄升星消耗",   // mec
    65211: {type:1, locale:"Asset_65211"}, // "英雄升星消耗",   // mec

    60708: {type:0, locale:"Asset_60708"},// "副本挂机掉落",  // mbox, mec
    60716: {type:0, locale:"Asset_60716"},// "开宝箱获得",
    60810: {type:0, locale:"Asset_60810"},// "幸运转盘奖励",
    60800: {type:0, locale:"Asset_60800"},// "副本排行榜奖励",    
    60801: {type:0, locale:"Asset_60801"},// "竞技场排行榜奖励",
    60802: {type:0, locale:"Asset_60802"},// "3V3排行榜奖励",
    60719: {type:0, locale:"Asset_60719"},// "3V3排行榜奖励",
}

const MATE_LINK = {
    cmc: "https://coinmarketcap.com/earn/project/mobox",
    bsc: "https://www.binance.org/",
    pancake:  "https://pancakeswap.info/pool/0x8FA59693458289914dB0097F5F366d771B7a7C3F",
    math: "https://mathwallet.org/",
    dapp: "https://dappradar.com/binance-smart-chain/games/mobox-nft-farmer",
    tp:  "https://www.tokenpocket.pro/",
    ape: "https://apeswap.finance/",
    cko: "https://www.coingecko.com/en/coins/mobox",
    certik: "https://www.certik.org/projects/mobox",
    bnft: "https://www.binance.com/en/nft",
    africa : "https://twitter.com/BinanceAfrica/status/1407235892364800001",
    a:"https://thealliance.gg/",
    binance:"https://www.binance.com/",
    galler:"https://www.galler.io",
    medx:"https://www.mdex.com/",
    animoca:"https://www.animocabrands.com/",
}

export {
    CURRENCY_ICON,
    EMOJI_CODE,
    MOMOJI_CODE,
    COST_TYPE,
    MATE_LINK
};console.log('Debug: feat: introduce adaptive difficulty levels');
