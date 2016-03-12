/********************************
 creater:
 create time:2015-12-30
 describe: app.js
 modify time:
 ********************************/
var route = function ($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive

    //home首页
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home/Home.html',
      controller: 'HomeController'
    })
  .state('productDetail', {
    url: '/productDetail',
    templateUrl: 'templates/product/productDetail.html',
    controller: 'productDetailController'
  })
    //个人中心
      .state('personal', {
        url: '/personal',
        templateUrl: 'templates/personal/Personal.html',
        controller: 'PersonalController'
      })

    /* ADD END   BY geshuo 20160119:店铺相关 ------------- */
  ;


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/productDetail');

};
