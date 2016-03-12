/**
 * creater:chuanpeng.zhu@dhc.com.cn
 * create time:2016/1/20
 * describe：todo
 **/

IonicTest.run(['$ionicPlatform', '$rootScope', 'UserService', '$state', 'CacheService', '$ionicHistory', '$timeout', '$ionicLoading', 'PopupService',
  function ($ionicPlatform, $rootScope, UserService, $state, CacheService, $ionicHistory, $timeout, $ionicLoading, PopupService) {

    //如果服务端返回告知当前会话失效，则要求重新登录
    $rootScope.$on('sessionTimeout', function () {
      UserService.clearUser();
      $state.go('login');
    });

    /** 登录 拦截器 **/
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

      var state = $state.get(toState.name);
      //如果是从login跳入
      if (state.requiredLogin && !UserService.isUserLogin()) {
        event.preventDefault();
        // 跳转到登录前，清空个人信息
        UserService.clearUser();
        CacheService.set('toState', toState);
        CacheService.set('toParams', toParams);
        $state.go('login');
      }
      //如果是从login跳出
      if (state.requiredLogin && fromState.name == 'login') {
        var newToState = CacheService.get('toState');
        var newToParams = CacheService.get('toParams');
        if (newToParams && newToParams) {
          event.preventDefault();
          $state.go(newToState, newToParams);
        }
      }
    });

    /** loading 拦截器 **/
    $rootScope.$on('REQUIRE_LOGIN', function () {
      if (!CacheService.get('REQUIRE_LOGIN_SHOW')) {
        CacheService.set('REQUIRE_LOGIN_SHOW', true);
        PopupService.showConfirm('提示', '尚未登录，是否去登录？', function (res) {
          if (res) {
            $state.go('login');
          }else{
            UserService.clearUser();
          }
          CacheService.set('REQUIRE_LOGIN_SHOW', false);
        }, '去登录');
      }
    });

    var requestCount = 0;
    /** loading 拦截器 **/
    $rootScope.$on('LOADING:SHOW', function () {
      requestCount++;
      if (!$rootScope.isLoadShowing) {
        var params = {
          template: '<div style="float: left"><img src="img/icon_loading.gif" style="width: 40px"/></div><div style="margin-top: 10px;float: left">正在加载中……</div>'
        };
        $ionicLoading.show(params)
      }
      $rootScope.isLoadShowing = true;
    });

    $rootScope.$on('LOADING:HIDE', function () {
      requestCount--;
      if (requestCount <= 0) {
        $rootScope.isLoadShowing = false;
        $ionicLoading.hide()
      }
    });

    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });

    /* ADD START BY geshuo 20160122:获取设备屏幕的宽高 --------------- */
    $rootScope.deviceWidth = document.body.clientWidth;
    $rootScope.deviceHeight = document.body.scrollHeight;
    /* ADD END   BY geshuo 20160122:获取设备屏幕的宽高 --------------- */

  }]);
