/**
 * creater:chuanpeng.zhu@dhc.com.cn
 * create time:2015/12/30
 * describe：用户操作服务。用于用户信息的存储。调用等。
 **/

IonicTest.factory('UserService', ['$rootScope', '$localstorage', function ($rootScope, $localstorage) {
  // User类
  var User = function () {
    this.userId = undefined;//用户id
    this.token = undefined;//令牌
    this.userName = undefined;//用户名
  };

  var user;
  var USER_CACHE_KEY = 'USER_CACHE_KEY';

  return {
    /**
     * 获取用户对象
     */
    getUser: function () {
      // 如果没有初始化，则尝试从本地缓存中读取
      if (!user) {
        user = new User();
        var temp = $localstorage.getObject(USER_CACHE_KEY);
        if (temp) {
          user.userId = temp.userId;
          user.token = temp.token;
          user.userName = temp.userName;
        }
      }
      return user;
    },
    /**
     * 更新用户
     */
    setUser: function (userObj) {
      if (!user) {
        user = new User();
      }
      user.userId = userObj.userId;
      user.token = userObj.token;
      user.userName = userObj.userName;
      $localstorage.setObject(USER_CACHE_KEY, user);
      $rootScope.$broadcast('USER:REFLASH', user);
    },
    /**
     * 用户退出清理存储
     */
    clearUser: function () {
      if (user) {
        user.userId = undefined;
        user.token = undefined;
        user.userName = undefined;
      }
      //$localstorage.remove(USER_CACHE_KEY);
      $localstorage.setObject(USER_CACHE_KEY, null);
      $rootScope.$broadcast('USER:CLEAR');
    },
    /**
     * 判断用户是否登录
     */
    isUserLogin: function () {
      if (!user) {
        user = this.getUser();
      }
      return (!!user.token);

    }
  }
}
])
;
