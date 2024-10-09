// const USERHEAD = "http://192.168.5.189:10070/" // 测试服
// // const USERHEAD = "https://test-game-api.momoland.io/" // 测试服
// // const COINBASEHEAD = "http://192.168.5.189:10070/" // 本地测试服
// const COINBASEHEAD = "https://event-v3-api.mobox.io/" // 正式服
// const RANKHEAD = "https://nftapi.mobox.io/" // 正式服
// const PRICEHEAD = "https://priceapi.mobox.io/" // 正式服

export const LOGINHEAD = "https://www.mobox.io/login/";// 正式登陆链接
// export const LOGINHEAD = "http://localhost:8081/login/"; // 登陆链接
// export const LOGINHEAD = "/login/"; // 登陆链接

// 登陆接口
export const API_USER_LOGIN = USERHEAD + "user/login";
export const API_USER_REGISTER = USERHEAD + "user/register";
export const API_SMS_MAIL_SEND = USERHEAD + 'sms/mail/send';
export const API_SMS_MOBILE_SEND = USERHEAD + 'sms/mobile/send';
export const API_USER_INFO = USERHEAD + 'user/all';
export const API_USER_BIND_ADDRESS_INFO = USERHEAD + 'user/bind/address/info';
export const API_SYS_NICKNAME = USERHEAD + 'system/unque/nickname/check';
export const API_SET_NICKNAME = USERHEAD + 'user/set/nickname';
export const API_USER_FEEDBACK = USERHEAD + 'system/feedback';

export const API_BIND_MOBILE = USERHEAD + 'user/set/mobile';
export const API_BIND_MAIL = USERHEAD + 'user/set/mail';
export const API_PWD_FORGOT = USERHEAD + 'user/passwd/forgod';
// 获取区号
export const API_SMS_MOBILE_CODE = USERHEAD + 'sms/mobile/code';
export const API_SMS_LOCAL_MOBILE_CODE = USERHEAD + 'system/mine/country';
export const API_SYSTEM_BANNER = USERHEAD + 'system/banners';

// export const API_UPLOAD_FILE = 'http://192.168.5.190:8091/file/upload'; // 测试服上传服务
export const API_UPLOAD_FILE = 'https://uploadserver.mobox.io/file/upload'; // 正式服上传服务

// 排行榜接口
export const API_RANK_MOBOX = RANKHEAD + 'rank/mobox'; //MOBOX持仓榜单
export const API_RANK_HASHRATE = RANKHEAD + 'rank/hashrate';//NFT算力榜

export const API_RANK_CONTEST_KING = 'https://matchapi.mobox.io/' + 'contest/king';//排行榜

// 首页数据接口
export const API_STATIC_MOBOX_INFOS = RANKHEAD + 'statistic/mobox_infos'

// 成就系统接口
export const API_ACHIEVE_DETAIL = USERHEAD + 'achieve/detail';// 成就列表
export const API_ACHIEVE_OVERVIEW = USERHEAD + 'achieve/overview';// 成就概览
export const API_ACHIEVE_REWARD_CFG = USERHEAD + 'achieve/score/rewards/cfg';// 成就奖励配置
export const API_ACHIEVE_CFG = USERHEAD + 'achieve/cfg';// 成就基本配置
export const API_CLAIM_MBOX = USERHEAD + 'achieve/claim/mbox';// 成就基本配置
export const API_CLAIM_SCORE = USERHEAD + 'achieve/claim/score';// 成就基本配置
export const API_CLAIM_BALANCE_LOGS = USERHEAD + 'achieve/delay/balance/logs';// 成就领取历史记录
export const API_ACHIEVE_INVITE_INFO = USERHEAD + 'achieve/invitation/info';// 成就领取历史记录
export const API_ACHIEVE_INVITE_CLAIM = USERHEAD + 'achieve/invitation/claim';// 领取邀请奖励
export const API_USER_BIND_ADDRESS = USERHEAD + 'user/bind/address';// 绑定用户地址
export const API_USER_UNBIND_ADDRESS = USERHEAD + 'user/unbind/address';// 解绑用户地址
export const API_USER_BALANCE = USERHEAD + 'user/balance';// 解绑用户地址
export const API_GET_DEPOSIT_ADDR = USERHEAD + "user/deposit/address"; // 获取各相应币种间的比例
export const API_USER_WITHDRAW = USERHEAD + "user/withdraw"; // 用户提现
export const API_USER_WALLET_WITHDRAW = USERHEAD + "user/wallet/withdraw"; // 去中心化钱包登录用户提现
export const API_USER_SET_TRADEPASS = USERHEAD + "user/set/tradepass"; // 用户修改交易密码
export const API_PAYMENT_WITHDRAW_CFG = USERHEAD + "payment/withdraw/cfg"; // 用户获取提现配置
export const API_PAYMENT_LOGS = USERHEAD + "payment/logs"; // 用户操作日志
export const API_PAYMENT_LOGS_DETAIL = USERHEAD + "payment/log/detail"; // 用户操作日志详情
export const API_AIRDROP_INFO = USERHEAD + "airdrop/info"; // 用户空头信息
export const API_AIRDROP_GENCODE = USERHEAD + "airdrop/gencode"; // 用户获取幸运码
export const API_BINANCE_CODE = USERHEAD + "event/bsccode"; // 币安活动码

export const API_GET_USER_HEADS = USERHEAD + "user/heads"; // 获取用户头像
export const API_USER_HEAD_UPDATE = USERHEAD + "user/head/update"; // 更改用户头像

export const API_AIRDROP_LUCKY_INFO = USERHEAD + "airdrop/lucky/info"; // 查看用户是否获奖
export const API_AIRDROP_CLAIM_BOX = USERHEAD + "airdrop/claim/box"; // 领取空投

export const API_BUYBACK_AMOUNT = RANKHEAD + "buybackpool/amount"; // 显示数据接口
export const API_AVG_DAYS = RANKHEAD + "vemobox/avglockdays"; // 显示数据接口
// export const API_AVG_DAYS = "http://192.168.5.78:3000/vemobox/avglockdays"; // 显示数据接口

export const API_CURRENCYPRICE = "https://priceapi.mobox.io" + "/currency/USD"; // 获取目前的货币汇率 
export const API_COINPRICE = "https://priceapi.mobox.io" + "/kline/usdt?coins=#0#"; // 获取各相应币种间的比例
// export const API_CURRENCYPRICE = "http://192.168.5.144:9095" + "/currency/USD"; // 获取目前的货币汇率 
// export const API_COINPRICE = "http://192.168.5.144:9095" + "/kline/usd?coins=#0#"; // 获取各相应币种间的比例
// export const API_GET_MBOX_PRICE = "https://priceapi.mobox.io" + "/kline/usdt?coins=[]"
export const API_TRANSLATE = "https://translate.chainzarena.com/translate"; // 获取各相应币种间的比例
export const API_WALLET_LOGIN = USERHEAD + "oauth/wallet";
// 首页轮播
export const HOME_BANNER = USERHEAD + 'system/banners';
export const MARKE_VALUE = PRICEHEAD + 'coin';

//coinbase
export const API_COINBASE_USER_STATUS = COINBASEHEAD + "user/status"; // coinbase获取地址注册状态
export const API_COINBASE_USER_SOURCE = COINBASEHEAD + "user/source"; // 绑定邀请人
export const API_COINBASE_USER_TASKS = COINBASEHEAD + "user/tasks"; // coinbase获取地址任务
export const API_COINBASE_CLAIM_BALL = COINBASEHEAD + "user/onchain"; // coinbase获取moball到链上
export const API_COINBASE_CLAIM_TASK = COINBASEHEAD + "user/task/claim"; // coinbase领取任务奖励
export const API_COINBASE_USER_BALLS = COINBASEHEAD + "user/bags"; // coinbase查询用户moball余额
export const API_COINBASE_TWITTER_REQUEST = COINBASEHEAD + "oauth/twitter/requestToken"; // twitter 获取requettoken
export const API_COINBASE_BIND_TWITTER_ADDR = COINBASEHEAD + "user/fill/retweet/link"; // coinbase用户 - 填写转tweet地址
export const API_COINBASE_BIND_TWITTER_WEB = COINBASEHEAD + "user/bind/twitter/1"; // coinbase用户 - web绑定twitter
export const API_COINBASE_BIND_TWITTER_APP = COINBASEHEAD + "user/bind/twitter/2"; // coinbase用户 - app绑定twitter

export const TOTAL_POOLS = USERHEAD + "app/total/pools";console.log('Debug: fix: resolve leaderboard point inconsistency');
