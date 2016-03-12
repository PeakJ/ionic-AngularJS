/**
 * 常量聚集JS类。
 * 此类中常量为全局变量。
 * 新加入常量时候一定要严禁，否则可能影响到其他人的业务逻辑。
 *
 */
//数据服务器表示 0：生产环境 1：预生产环境 2：开发环境 3本地环境
var ENVIRONMENT = 3;

//消息文字
var CDFG_MASSAGE = {
  FAILURE: "服务器连接失败请稍后重试！",
  PROMOPT: "上拉加载更多!",
  NEW_PROMOPT: "已经没有数据哦!",
  NON_EMPTY_ONE: "登录帐号或密码不能为空!",
  NON_USER_NAME: "不添加用户名，将默认手机号就是您的用户名!",
  NON_NUMBER: "手机号或员工号应为数字!",
  NON_EXIST: "用户不存在！",
  INCORRECT: "用户名或密码不正确！",
  MOBILEFORM: "手机号格式不正确，请重新输入！",
  NON_EMPTY_TWO: "手机号码、验证码和密码不能为空！",
  IDENTIFYCODE: "您输入的验证码不正确，请重新输入！",
  NON_EMPTY_THREE: "身份证号或联系地址不能为空！",
  NON_EMPTY_FOUR: "手机号不能为空！",
  IDFORM: "您输入的身份证号格式不正确，请重新输入！",
  GET_IDENTIFYCODE: "获取验证码",
  CONFIRM_PASSWORD: "请重新确认密码！",
  GET_VERSION: "4",
  SUBMIT_SUCCESS: "修改成功！",
  NON_EMPTY_FIVE: "姓名或电子邮箱不能为空！",
  EMAILFORM: "您输入的电子邮箱格式不正确，请重新输入！",
  CART_ADD_SUCCESS: '加入购物车'
};
