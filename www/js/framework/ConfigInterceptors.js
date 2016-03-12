/**
 * creater:chuanpeng.zhu@dhc.com.cn
 * create time:2015/12/30
 * describe：http请求的拦截器
 **/
/* 拦截器 拦截http请求 */
var interceptors = ['$httpProvider', '$ionicConfigProvider', function ($httpProvider, $ionicConfigProvider) {
  $httpProvider.interceptors.push('LoadingIntercepter');
  $httpProvider.interceptors.push('UserIntercepter');
}];

/**
 * LOADING 拦截器
 */
IonicTest.factory('LoadingIntercepter', ['$rootScope', '$q', function ($rootScope, $q) {
  return {
    request: function (config) {
      var pattern = /http:\/\//;
      if (pattern.exec(config.url)) {
        //判断是否显示加载条，noLoading为true时不显示。
        if (!config.data || (config.data && !config.data.noLoading)) {
          $rootScope.$broadcast('LOADING:SHOW');
        }
      }
      return config;
    },
    response: function (response) {
      var pattern = /http:\/\//;
      if (!response ||(response&&pattern.exec(response.config.url))) {
        $rootScope.$broadcast('LOADING:HIDE');//取消加载进度条
      }
      return response;
    },
    responseError: function (rejection) {
      //检测网络异常
      $rootScope.$broadcast('http-response:error', rejection);
      $rootScope.$broadcast('LOADING:HIDE');
      $q.reject(rejection);
    }
  }
}]);

/**
 * 登录 拦截器
 */
IonicTest.factory('UserIntercepter', ['UserService', '$rootScope','UrlService', function (UserService, $rootScope,UrlService) {
  return {
    request: function (config) {
      if (config.method == 'POST') {
        var user = UserService.getUser();
        if (UserService.isUserLogin()) {
          if (config.url) {
            //登录信息中，如果登录了，就添加token和id
            config.url = config.url + '?token=' + user.token;
            config.url = config.url + '&userId=' + user.userId;
          }
        }
        if (!config.data) {
          config.data = {}
        }
      }
      return config;
    },
    response: function (response) {
      //拦截如果业务表示代码code为-1，约定错误为需要登录信息。跳转到登录页面。
      if (response.data.code == -1 && !angular.equals(response.config.url, UrlService.getUrlData('LOGIN'))) {
        console.log('login',UrlService.getUrlData('LOGIN'));
        console.log('url',response.config.url);
        UserService.clearUser();
        $rootScope.$broadcast('REQUIRE_LOGIN');
      }
      return response;
    },
    responseError: function (rejection) {

    }
  }
}]);
