/********************************
 creater:
 create time:2015-12-30
 describe: 信息配置
 modify time:
 ********************************/

/*接口地址管理 */
IonicTest.service('UrlService', [function () {

  //数据服务器表示 0：生产环境 1：预生产环境 2：开发环境 3本地环境
  var t = ENVIRONMENT;
  //SERVER_DATA 数据服务器地址
  //SERVER_IMG 图片服务器地址
  //BUYER_STATIC_IMG 静态图片服务器地址
  //SERVER_UPLOAD_IMG 上传图片服务器地址
  //SERVER_BUYER buyer服务器地址
  var SERVICE_DATA = [
    //生产环境 系统正式上线环境
    {
      SERVER_DATA: 'https://m.jsh.com/app',
      SERVER_IMG: 'http://img.jsh.com',
      BUYER_STATIC_IMG: 'http://www.jsh.com/www/image/cms/cpa/total/app/',
      SERVER_UPLOAD_IMG: 'https://m.jsh.com/ex/jshupload/file',
      SERVER_BUYER: 'http://www.jsh.com'
    },
    //预生产环境 系统在预生产环境
    {
      SERVER_DATA: 'https://mjshdev.jsh.com/app',
      SERVER_IMG: 'http://img.jshdev.jsh.com',
      BUYER_STATIC_IMG: 'http://www.jshdev.jsh.com/www/image/cms/cpa/total/app/',
      SERVER_UPLOAD_IMG: 'https://mjshdev.jsh.com/ex/jshupload/file',
      SERVER_BUYER: 'http://www.jshdev.jsh.com'
    },
    //开发环境 系统在开发服务器环境
    {
      SERVER_DATA: 'http://svn.jushanghui.com:18085/app',
      SERVER_IMG: 'http://219.147.28.186:18994',
      BUYER_STATIC_IMG: 'http://svn.jushanghui.com:18081/www/image/cms/cpa/total/app/',
      SERVER_UPLOAD_IMG: 'http://10.168.3.19:8666/ex/jshupload/file',
      SERVER_BUYER: 'http://svn.jushanghui.com:18081'
    },
    //本地环境 链接本地或联调环境
    {
      SERVER_DATA: 'http://10.168.3.86:8082',
      SERVER_IMG: 'http://219.147.28.186:18994',
      BUYER_STATIC_IMG: 'http://svn.jushanghui.com:18081/www/image/cms/cpa/total/app/',
      SERVER_UPLOAD_IMG: 'http://10.168.3.19:8666/ex/jshupload/file',
      SERVER_BUYER: 'http://svn.jushanghui.com:18081'
    }
  ];
  //SERVER_DATA 数据服务器地址
  var HEAD = SERVICE_DATA[t].SERVER_DATA;
  //SERVER_IMG 图片服务器地址
  var HEAD_IMG = SERVICE_DATA[t].SERVER_IMG;
  //BUYER_STATIC_IMG 静态图片服务器地址
  var HRAD_STATIC_IMG = SERVICE_DATA[t].BUYER_STATIC_IMG;
  //SERVER_UPLOAD_IMG 上传图片服务器地址
  var IMG_UPLOAD_SERVER = SERVICE_DATA[t].SERVER_UPLOAD_IMG;
  //HEAD_NAME buyer服务器地址
  var HEAD_NAME = SERVICE_DATA[t].SERVER_BUYER;

  //开发假数据服务器地址
  var head_develop = './data';

  var urls = {
    HOME_INIT: '/homeInit.json', //首页
    TUAN_LIST: '/tuanInit.json', //列表
    TUAN_DETAIL: '/tuanDetail.json', //详情
    /**帐号相关**/
    LOGIN: '/login',   //登录接口
    REGIST: '/regist.json', //注册接口
    ACCOUNT_INFO: '/accountInfo.json', //账号信息
    VALIDATION_CODE: '/validationCode.json', //验证码请求
    RETRIEVE_PASS_USERNAME: '/retrievePassUsername.json', //找回密码-用户名
    RETRIEVE_PASS_VAL: '/retrievePassVal.json', //找回密码-验证
    RETRIEVE_PASS: '/retrievePass.json', //找回密码-重设密码
    ACCOUNT_AUTH: '/accountAuth.json', //账号认证
    ACCOUNT_AUTH_DETAIL_COMPANY: '/accountAuthDetailCompany.json', //企业实名认证详情
    ACCOUNT_AUTH_DETAIL_PERSONAL: '/accountAuthDetailPersonal.json', //个人实名认证详情
    MARKET_LEVEL: '/marketLevel.json', //个人实名认证详情
    BUSINESS_TYPE: '/businessType.json', //个人实名认证详情
    /**订单相关**/
    /**发现相关**/
    PRODUCT_CATEGORY_ONE: '/ProductCategoryOne.json', //类目
    PRODUCT_CATEGORY_TWO: '/ProductCategoryTwo.json', //二三级类目
    PRODUCT_ASSOCIATION: '/Association.json', //搜索联想
    PRODUCT_SELECT_BRAND: '/Brand.json', //产品筛选 品牌  //作废
    SEARCH_SELECT: '/SearchSelect.json', //筛选
    PRODUCT_LIST: '/productList.json', //商品列表


    PRODUCT_PROMOTION_DATA: '/ProductPromotion.json',    //产品促销
    PRODUCT_PROMOTION_GOODS_LIST_DATA: '/ProductPromotionGoodsList.json',    //单品折扣
    PRODUCT_PROMOTION_PROMOTION_DATA: '/ProductPromotionPromotion.json',    //满赠促销
    PRODUCT_PROMOTION_PACKAGE_DATA: '/ProductPromotionPackage.json',    //精选组合
    PRODUCT_PROMOTION_REQUIRED_LIST_DATA: '/ProductPromotionRequiredList.json',    //优惠套餐
    PRODUCT_LOGISTICS_DATA: '/getLogisticsData.json',    //物流信息
    /**店铺相关**/
    STORE_LIST: '/storeList.json',//店铺-公告
    STORE_DETAIL: '/storeDetail.json',//店铺公告详情
    STORE_COMPANY: '/StoreCompany.json',//店铺信息公司介绍
    /**发现相关**/
    SHOPPING_CART: '/shoppingCart.json', //采购单
    SHOPPING_CART_FAVOURITE: '/purchase/rest/collect-purchase-order-goods', //采购单收藏
    SHOPPING_CART_REMOVE: '/purchase/rest/delete-purchase-order-goods', //采购单删除
    SHOPPING_CART_PRICE: '/purchase/rest/calculate-price', //采购单计算价格
    CONFIRM_ORDER: '/initConfirmOrder.json', //采购单
    ORDER_LIST: '/getOrderList.json', //采购单
    ORDER_DETAIL: '/getOrderDetail.json', //采购单
    ORDER_TRACK: '/getOrderTrack.json', //采购单
    MANAGE_CANCEL: '/cancel.json',
    MANAGE_RECEIVE: '/receive.json',
    MANAGE_REJECT: '/reject.json',
    MANAGE_RETURN: '/return.json',
    REJECT_DETAIL: '/getRejectDetail.json',//拒收单详情
    RETURN_TRACK: '/buyer-order/rest/select-return-order-schedule',//退货追踪
    CUSTOMER_MAP_DATA: '/getCustomerMapData.json',    //用户地图分布
    ADDRESS_LIST_DATA: '/getAddressData.json',    //用户地址管理
    ADDRESS_DATA: '/getAddressDataById.json', //单个地址信息
    ADDRESS_SAVE_UPDATE: '/setAddressData.json', //用户地址保存
    ADDRESS_DELETE: '/deleteAddressData.json', //用户地址删除
    PERSONAL_DATA: '/getPersonalData.json',//我的买家首页
    MYBUSINESS_LIST_DATA: '/getMyBusinessData.json',//我的供应商
    COLLECTION_LIST_DATA: '/getCollectionData.json',//我的收藏
    AREA_DATA: '/getNewArea.json', //区域信息
    AREA_DATA_ONLINE: '/getAreaOnline.json', //区域信息--上线
    MY_NEWS: '/myNews.json',//消息中心加载
    MY_NEWS_DELETE: '/myNewsDelete.json',//删除消息
    NOTICE_LIST: '/noticeList.json',//商城首页-公告
    NOTICE_DETAIL: '/noticeDetail.json',//公告详情
    INFORMATION_LIST: '/informationList.json',//商城首页-最新资讯
    INFORMATION_DETAIL: '/informationDetail.json',//最新资讯详情
    PROMOTION_POLICY: '/promotionPolicy.json',//店铺招商加盟
    MY_JST: '/my_JST.json',//我的巨商通
    ACCOUNT_RECHARGE: '/accountRecharge.json',//账户中心
    CHIT: '/chit.json',//我的代金券
    TRANSACTION_RECORD: '/transactionRecord.json',//交易记录
    BUSINESS_LIST: '/BusinessList.json', //供应商列表
    EDIT_BANK_ACCOUNT: '/EditBankAccount.json',//编辑银行账户
    BANK_ACCOUNT: '/BankAccount.json',//银行账户
    PAYMENT_PASSWORD: '/PaymentPassword.json',//支付密码管理
    ACCOUNT_SAFE: '/accountSafe.json',//账户安全
    PAY_MODE: '/payMode.json',//支付方式
    CASH_WITHDRAWAL: '/cashWithdrawal.json',//余额提现
    NEW_BANK_ACCOUNT: '/NewBankAccount.json',//申请银行账户
    VIP_PAYMENT_RECORD_DATA: '/getPaymentRecordData.json',//会员缴费记录
    VIP_DATA: '/getVipData.json',//会员中心
    VIP_PAYMENT_DATA: '/getPaymentData.json',//会员缴费
    VIP_PAYMENT_INTRO_DATA: '/getPaymentIntroData.json',//会员介绍

    CHIT_DETAIL: '/chitDetail.json',//代金劵详细
    SELECT_CHIT: '/selectChit.json',//优惠券选择
    STORE_HOME_DATA: '/getStoreHome.json',//店铺首页数据
    STORE_NEW_GOODS: '/getStoreNewGoods.json',//店铺新品数据
    STORE_PRODUCT_DATA: '/getStoreGoods.json',//店铺商品数据
    STORE_NOTICE_DATA: '/getStoreNoticeList.json',//店铺公告数据
    BANK_SELECT: '/bankSelect.json',//银行选择


  };

  var url = {
    /*尚未处理 START*/
    MARKET_LEVEL: '/marketLevel.json', //个人实名认证详情
    BUSINESS_TYPE: '/businessType.json', //个人实名认证详情
    PRODUCT_ASSOCIATION: '/Association.json', //搜索联想
    PRODUCT_SELECT_BRAND: '/Brand.json', //产品筛选 品牌  //作废
    SEARCH_SELECT: '/SearchSelect.json', //筛选
    CUSTOMER_MAP_DATA: '/getCustomerMapData.json',    //用户地图分布
    COLLECTION_LIST_DATA: '/getCollectionData.json',//我的收藏
    AREA_DATA: '/getArea.json', //区域信息
    AREA_DATA_ONLINE: '/getAreaOnline.json', //区域信息--上线
    MY_NEWS_DELETE: '/myNewsDelete.json',//删除消息
    STORE_LIST: '/storeList.json',//店铺-公告
    STORE_DETAIL: '/storeDetail.json',//店铺公告详情
    BUSINESS_LIST: '/BusinessList.json', //供应商列表
    EDIT_BANK_ACCOUNT: '/EditBankAccount.json',//编辑银行账户
    NEW_BANK_ACCOUNT: '/NewBankAccount.json',//申请银行账户
    Get_Chit: '/getChit.json',//获取优惠券
    SELECT_CHIT: '/selectChit.json',//优惠券选择
    /*尚未处理 END*/

    /* 首页 START */
    HOME_LOOP_AD_LIST: '/mall/rest/select-loop-ad-list', //首页获取轮播广告列表
    HOME_STRENGTH_SELLERS: '/mall/rest/select-strength-sellers', //首页获取热门商家列表
    HOME_HOT_SALES_LIST: '/mall/rest/select-hot-sales-list', //首页获取热销商品列表
    HOME_NEWEST_INFORMATION_LIST: '/mall/rest/select-newest-information-list', //首页获取最新资讯列表
    HOME_NEWEST_INFORMATION_DETAIL: '/mall/rest/select-newest-information', //首页获取最新资讯列表详情
    HOME_MALL_HOME_MECHINES: '/mall/rest/select-mall-home-mechines', //首页获取商城商品家用电器信息列表
    HOME_MALL_MOBILE_COMMUNICATE: '/mall/rest/select-mall-mobile-communicate', //首页获取商城商品手机通信信息列表
    HOME_MALL_COMPUTER_LIST: '/mall/rest/select-mall-computer-list', //首页获取商城商品电脑数码列表
    HOME_MALL_NOTICE_LIST: '/mall/rest/select-mall-notice-list', //首页获取公共列表
    HOME_MALL_NOTICES: '/mall/rest/select-mall-notices',//公告 列表
    HOME_TUAN_LIST: '/group/rest/group-purchase',//团购列表
    HOME_TUAN_DETAIL: '/group/rest/group-purchase-goods',//团购详情
    NOTICE_DETAIL: '/mall/rest/select-mall-notice',//获取公告详情
    NEWEST_INFORMATIONS_LIST: '/mall/rest/select-newest-informations',//获取最新资讯列表
    /* 首页 END */

    /* 发现 START */
    PRODUCT_LOGISTICS_DATA: '/goods/rest/select-logistics-detail',    //物流信息
    PRODUCT_CATEGORY_ONE: '/goods/rest/select-first-category-list', //类目
    PRODUCT_CATEGORY_TWO: '/goods/rest/select-category-list', //二三级类目
    PRODUCT_DETAILS_DATA: '/goods/rest/select-goods-info',    //产品详情 productDetails.json
    PRODUCT_DESCRIBE_DATA: '/goods/rest/select-goods-detail',    //产品详细  productDescribe.json
    PRODUCT_ADD_PURCHASE: '/goods/rest/add-purchase',//产品详情 加入采购单
    PRODUCT_COLLECTION_DATA: '/goods/rest/add-favorites',//产品详情 收藏
    PRODUCT_SELECT_INPUT_LINKED_DATA: '/goods/rest/select-input-linked-list',//产品详情 收藏
    PRODUCT_LIST: '/goods/rest/select-goods-list', //商品列表
    PRODUCT_LIST_SELECT_DATA: '/goods/rest/select-class-goods-list', //商品列表 筛选
    PRODUCT_SELECT_PROMOTE_LIST: '/goods/rest/select-promote', //产品促销
    STORE_COLLECTION_DATA: '/favorite/rest/save-shop-favorite',//店铺 收藏
    STORE_COLLECTION_INFO: '/favorite/rest/delete-shop-status',//取得收藏店铺状态
    BUSINESS_LIST_DATA: '/investor/rest/investment-area-detail', //供应商列表
    BUSINESS_LIST_SELECT_DATA: '/investor/rest/invest-filter', //供应商列表
    PROMOTION_POLICY: '/store/rest/select-join',//店铺招商加盟
    PROMOTION_POLICY_AREAS: '/store/rest/select-company-area', //店铺招商加盟的招商区域
    STORE_APPLY_JOIN: '/store/rest/save-company-info', //店铺申请加盟
    /* 发现 END */

    /* 采购单 START */
    SHOPPING_CART: '/purchase/rest/select-purchase-order-list', //采购单
    SHOPPING_CART_FAVOURITE: '/goods/rest/add-favorites', //采购单收藏
    SHOPPING_CART_REMOVE: '/purchase/rest/delete-purchase-order-goods', //采购单删除
    SHOPPING_CART_PRICE: '/purchase/rest/calculate-price', //采购单计算价格
    CONFIRM_ORDER: '/purchase/rest/init-confirm-order', //订单确认
    CONFIRM_ORDER_SUBMIT: '/purchase/rest/save-order', //订单确认
    CONFIRM_ORDER_SELECT_TRANS: '/purchase/rest/logistic-way', //订单确认
    /* 采购单  END */

    /* 我的 START */
    /**帐号相关 START**/
    LOGIN: '/login',   //登录接口
    REGIST_MOBILE: '/checkMobileExistAndSendSmsCode', //注册-1-手机号
    REGIST_SAVE: '/saveRegisterInfo', //注册-3-提交信息
    VALIDATION_GET_CODE_PASSWORD: '/account/rest/send-identity-code', //请求验证码，修改密码
    VALIDATION_GET_CODE_MOBILE: '/account/rest/change-phone-send-identity-code', //请求验证码,修改手机号
    VALIDATION_SUBMIT_CODE_PASSWORD: '/account/rest/check-validate-code', //提交检验验证码,修改密码
    VALIDATION_SUBMIT_CODE_MOBILE: '/account/rest/change-phone-validate-identity-code', //提交检验验证码,修改手机号
    VALIDATION_SUBMIT_CODE_NEW_MOBILE: '/account/rest/change-phone-update-phone',//提交保存新手机号
    UPDATE_PASSWORD: '/account/rest/check-update-password', //修改密码
    RETRIEVE_PASS_GET_VAL: '/find-password', //找回密码-用户名
    RETRIEVE_PASS_SUBMIT_VAL: '/find-password-validateSmsCode', //找回密码-验证
    RETRIEVE_PASS_FINISH: '/find-password-reset', //找回密码-提交新密码
    ACCOUNT_INFO: '/account/rest/register-account-info', //账号信息
    ACCOUNT_AUTH: '/account/rest/register-account-identity', //账号认证
    ACCOUNT_AUTH_DETAIL: '/account/rest/register-identity-detail', //账号认证详情
    ACCOUNT_AUTH_SAVE: '/account/rest/save-account-identity', //新建保存认证详情
    ACCOUNT_AUTH_UPDATE: '/account/rest/update-account-identity', //修改认证详情
    PERSONAL_DATA: '/buyer-order/rest/get-my-info',//我的买家首页
    PERSONAL_CLEAR_SESSION_DATA: '/loginout',//退出登录
    /**帐号相关 END**/

    /**订单相关 START**/
    ORDER_LIST: '/buyer-order/rest/search-order', //订单列表
    ORDER_LIST_RECEIVE_ALL: '/buyer-order/rest/sign-all-order', //订单列表
    ORDER_PAY_INFO: '/buyer-order/rest/get-pay-info', //订单支付信息获取
    ORDER_DETAIL: '/buyer-order/rest/select-order-detail', //订单详情
    ORDER_TRACK: '/buyer-order/rest/select-order-tracking-info', //订单追踪
    ORDER_FILTER: '/buyer-order/rest/get-conditions-list', //订单筛选
    ORDER_CANCEL: '/buyer-order/rest/save-order-cancel-info', //订单取消
    ORDER_CANCEL_REVIEW_SAVE: '/buyer-order/rest/save-audit-cancel-order', //订单取消审核保存
    ORDER_RETURN: '/buyer-order/rest/select-order-goods-list',//退货
    ORDER_RETURN_EDIT: '/buyer-order/rest/get-order-return-detail-for-edit',//得到退货草稿 退货草稿 by xuf
    ORDER_RETURN_REASON: '/buyer-order/rest/get-return-reason-list',//退货原因 button by xuf
    ORDER_RETURN_SAVE: '/buyer-order/rest/save-order-return-info',//退货保存
    MANAGE_CANCEL: '/buyer-order/rest/get-cancel-order-list',
    MANAGE_RECEIVE: '/buyer-order/rest/get-ship-order-list',
    MANAGE_REJECT: '/buyer-order/rest/select-reject-order-list',
    MANAGE_RETURN: '/buyer-order/rest/select-return-order-list',
    CANCEL_DETAIL: '/buyer-order/rest/select-cancel-order-schedule',
    RECEIVE_LIST: '/buyer-order/rest/select-ship-order-list',
    RECEIVE_DETAIL: '/buyer-order/rest/to-sign-ship-order',
    RECEIVE_SIGN: '/buyer-order/rest/save-sign-ship-order',
    RECEIVE_HISTORY: '/buyer-order/rest/get-ship-order-product-sign-record',
    REJECT_FILTER: '/buyer-order/rest/select-reject-order-state-list', //拒收单单筛选
    REJECT_REASON: '/buyer-order/rest/select-reject-reason-list', //拒收原因
    REJECT_DETAIL: '/buyer-order/rest/select-reject-order-detail',//拒收单详情
    RETURN_DETAIL: '/buyer-order/rest/select-return-order-detail',//拒收单详情
    RETURN_TRACK: '/buyer-order/rest/select-return-order-schedule',//退货追踪
    SEND_DETAIL: '/buyer-order/rest/select-ship-order-detail',//发货单详情
    SEND_DETAIL_RECEIVE_ALL: '/buyer-order/rest/sign-all-ship-order',//全部收货-发货单
    SEND_ORDER_RECEIVE_ALL: '/buyer-order/rest/sign-all-order',//全部收货-全部订单
    /**订单相关 END**/

    /**我的巨商通 START**/
    MY_JST: '/jst/rest/get-myJST-info',//我的巨商通
    BANK_ACCOUNT: '/jst/rest/bank-account-info-list',//银行账户
    BANK_CARD_INFO: '/jst/rest/select-bank-card-info',//银行账户编辑页面加载
    ACCOUNT_RECHARGE: '/jst/rest/account-recharget',// 充值加载
    CASH_WITHDRAWAL: '/jst/rest/account-cash',  //余额提现加载
    CASH_SENDCODE: '/jst/rest/account-cash-sendcode',//余额提现=》短信发送
    CASH_SUBMIT: '/jst/rest/account-cash-submit',//余额提现提交
    UNBIND_BANK_ACCOUNT: '/jst/rest/unbind-bank-account',//银行账号解除绑定
    TRANSACTION_RECORD: '/jst/rest/trad-history-list',// 交易记录
    TRADE_TYPE: '/jst/rest/trade-type-list',//交易类型
    RECHARGE_HISTROY_LIST: '/jst/rest/recharge-history-list',//充值记录
    DRAWCASH_HISTORY_LIST: '/jst/rest/drawCash-history-list',//提现记录
    EDIT_BANK_CARD: '/jst/rest/edit-bank-card',//提交编辑账户
    ACCOUNT_SAFE: '/jst/rest/pay-password-manage',//账户安全
    BANK_ACCOUNT_CHECK: '/jst/rest/set-defult-bank-account',//设置默认银行账户
    ADD_BANKACCOUT: '/jst/rest/submit-add-bankaccout',//添加银行账户
    FIND_CHECKCODE_ADDBANK: '/jst/rest/find-send-checkcode-addBank',//添加银行账户 发送手机验证码
    GET_BANK_LIST: '/jst/rest/get-banklist',//银行列表
    MY_NEWS: '/user/rest/select-notice-list',//我的消息
    MY_NEWS_DETAIL: '/user/rest/select-notice',//消息详细页
    MY_NEWS_STATE: '/user/rest/update-notice-state',//更改已读
    DELETE_NEWS: '/user/rest/delete-notice',//删除我的消息
    /**我的巨商通 END**/

    /**账户安全 START**/
    PAYMENT_PASSWORD: '/jst/rest/pay-password-set',//支付密码设置
    PAY_PASSWORD_UPDATE: '/jst/rest/pay-password-update',//支付密码修改
    FIND_SEND_CHECKCODE: '/jst/rest/find-send-checkcode',//修改密码
    FIND_SEND_COMMIT: '/jst/rest/find-send-commit',//支付密码找回
    /**账户安全 END**/

    /**地址管理 START**/
    ADDRESS_LIST_DATA: '/address/rest/select-shipping-address-list',    //用户地址管理
    ADDRESS_DATA: '/address/rest/select-shipping-address-detail', //单个用户地址
    ADDRESS_DELETE: '/address/rest/delete-shipping-address', //用户地址删除
    ADDRESS_SAVE_UPDATE: '/address/rest/update-shipping-address', //用户地址保存
    /**地址管理 END**/

    /**代金卷 START**/
    CHIT_COUNT_INFO: '/voucher/rest/select-voucher-countInfo',//代金卷数量信息
    CHIT_LIST: '/voucher/rest/get-voucher-list',//代金卷列表
    CHIT_DETAIL: '/voucher/rest/select-voucher-detail',//代金卷详情
    GET_VOUCHER_CODE: '/voucher/rest/get-voucher-code',//获取代金劵加载
    SEND_MYINVITE: '/voucher/rest/send-myinvite',//获取优惠卷
    /**代金卷 END**/

    /**我的供应商 START**/
    MYBUSINESS_WORK_LIST_DATA: '/supplier/rest/select-supplier-list',//我的供应商--合作
    MYBUSINESS_REMOVE_LIST_DATA: '/supplier/rest/relieve-list-search',//我的供应商--解除
    MYBUSINESS_DELETE_PARTNER: '/supplier/rest/update-supplier-state',//删除合作
    MYBUSINESS_CANCEL_PARTNER: '/supplier/rest/relieve-cancel',//取消删除合作
    MYBUSINESS_AGREE_PARTNER: '/supplier/rest/relieve-wait-cancel',//同意删除
    CUSTOMER_SERVICE: '/customer-service/rest/jump-customer-service',//联系客服
    /**我的供应商 END**/

    /**我的收藏 START**/
    COLLECTION_PRODUCT_LIST_DATA: '/favorite/rest/select-product-favorite-list',//产品收藏列表
    COLLECTION_BUSINESS_LIST_DATA: '/favorite/rest/select-supplier-favorite-list',//供应商收藏列表
    COLLECTION_PRODUCT_DELETE: '/favorite/rest/delete-product-favorite',//取消产品收藏
    COLLECTION_BUSINESS_DELETE: '/favorite/rest/delete-supplier-favorite',//取消供应商收藏
    /**我的收藏 END**/

    /**支付 START**/
    PAY_JST_MONEY: '/jst/rest/get-pay-info',//获取巨商通余额
    PAY_FINAL_MONEY: '/jst/rest/get-pay-info',//获取最终金额
    PAY_UNION_DATA: '/payment/rest/payBank',//银商互联基础数据
    PAY_QUICK_DATA: '/jst/rest/get-bind-bank-card-info',//快捷通基础数据
    PAY_BANK_CARD: '/jst/rest/bank-account-info',//快捷通银行卡列表
    PAY_THIRD_DATA: '/jst/rest/bank-account-info',//第三方基础数据
    PAY_OFFLINE_DATA: '/buyer-order/rest/get-pay-info',//线下支付
    GO_PAY: '/payment/rest/payment',//支付
    PAY_CHECK_CODE: '/payment/rest/payment/checkjstpwd',//支付密码校验
    PAY_GENERATE_CODE: '/payment/rest/checkCode',//充值系统码生成
    GO_UNION_PAY: '/jst/rest/get-pay-info',//银商互联支付
    GO_QUICK_PAY: '/jst/rest/get-pay-info',//快捷通支付
    GO_QUICK_BIND: '/jst/rest/bank-account-info',//快捷通银行卡首次绑定
    GO_THIRD_PAY: '/payment/rest/payThird',//第三方支付
    SIGN_STATE: '/payMode.json',//获取银商互联签约状态
    UPDATE_OFFLINE_DATA: '/payment/rest/order-pay-offline-confirm',//线下支付更新
    CODE_FOR_PAYMENT: '/payment/rest/getSmsCodeForPayment',//发送手机验证码
    RECHARGE_PAYMENT_CHECK: '/payment/rest/recharge-payment-check',//【我的】支付-充值 获取充值流水号-充值单新增校验-会员充值支付确认接口
    /**支付 END**/

    /**会员中心 START**/
    VIP_DATA: '/userpay/rest/select-member-info',//会员中心
    VIP_PAYMENT_DATA: '/userpay/rest/select-contribute-year-fee',//会员缴费
    VIP_PAYMENT_INTRO_DATA: '/userpay/rest/select-contribute-year-one',//会员介绍
    VIP_PAYMENT_RECORD_DATA: '/userpay/rest/select-annual-fee',//会员缴费记录
    VIP_CHECK_DATA: '/payment/rest/member/save',//会员校验
    /**会员中心 END**/
    /* 我的 END */

    /* 店铺 START */
    STORE_HOME_DATA: '/store/rest/select-head-info',//店铺首页数据
    STORE_NEW_GOODS: '/store/rest/select-new-goods',//店铺新品数据
    STORE_HOT_GOODS: '/store/rest/select-hot-goods',//店铺热卖商品
    STORE_PRODUCT_DATA: '/store/rest/select-all-goods',//店铺商品数据
    STORE_CATEGORY_DATA: '/store/rest/select-class-goods',//店铺分类数据
    STORE_CATEGORY_PRODUCT_DATA: '/store/rest/select-groupId-goods',//店铺分类商品数据
    STORE_NOTICE_DATA: '/store/rest/select-notice-info',//店铺公告数据
    STORE_NOTICE_LIST: '/store/rest/select-notice-info',//店铺公告列表
    STORE_NOTICE_DETAIL: '/store/rest/selects-notice-info',//店铺公告详情
    STORE_COMPANY_INFO: '/store/rest/select-head-info',//店铺公司介绍
    STORE_COMPANY_AREA: '/store/rest/select-company-area',//店铺公司区域
    STORE_PROMOTION_DATA: '/ProductPromotion.json',    //产品促销
    STORE_PROMOTION_GOODS_LIST_DATA: '/store/rest/select-goods-off',    //单品折扣
    STORE_PROMOTION_PROMOTION_DATA: '/store/rest/select-promotion-info',    //满赠促销
    STORE_PROMOTION_PACKAGE_DATA: '/store/rest/select-combination',    //精选组合
    STORE_PROMOTION_PACKAGE_DETAILS_DATA: '/store/rest/select-purchase-combination',    //精选组合采购页
    STORE_PROMOTION_REQUIRED_LIST_DATA: '/store/rest/select-discount-package',   //优惠套餐
    /* 店铺 END */
    /*联系客服 start*/
    JUMP_CUSTOMER_SERVICE: '/customer-service/rest/jump-customer-service',//联系客服

  };
  /*******************本地假数据接口***************************************************/

  this.getUrl = function (url) {
    return head_develop + urls[url];
  };
  this.getImageUrl = function (url) {
    return head_develop + urls[url];
  };

  /***************网络数据接口*******************************************************/

    //数据接口返回
  this.getUrlData = function (param) {
    return HEAD + url[param];
  };
  //图片接口返回
  this.getImageUrlData = function () {
    return HEAD_IMG;
  };
  //服务端静态图片接口返回
  this.getStaticImageUrlData = function () {
    return HRAD_STATIC_IMG;
  };
  //图片上传接口
  this.getImgUploadServer = function () {
    return IMG_UPLOAD_SERVER;
  };
  //buyer服务器地址
  this.getBuyerUrl = function () {
    return HEAD_NAME;
  };
}])
;
