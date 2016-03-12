/**
 * creater:chuanpeng.zhu@dhc.com.cn
 * create time:2015/01/03
 * describe：弹窗服务
 **/

IonicTest.service('PopupService', ['$rootScope', '$ionicPopup', '$timeout', '$ionicLoading', 'UrlService',
  function ($rootScope, $ionicPopup, $timeout, $ionicLoading, UrlService) {

    // A confirm dialog
    this.showConfirm = function (title, message, callback,okText) {
      var defaultTitle = '提示';
      var defaultMessage = '默认提示信息';
      var defaultOkText = '确定';
      var defaultCancelText = '取消';

      var confirmPopup = $ionicPopup.confirm({
        title: title ? title : defaultTitle,
        okText: okText ? okText : defaultOkText,
        cancelText: defaultCancelText,
        template: message ? message : defaultMessage
      });
     confirmPopup.then(callback);
    };

    // An alert dialog
    this.showAlert = function (title, message, callback) {
      var defaultTitle = '提示';
      var defaultMessage = '默认提示信息';
      var defaultOkText = '确定';
      var alertPopup = $ionicPopup.alert({
        title: title ? title : defaultTitle,
        okText: defaultOkText,
        template: message ? message : defaultMessage
      });
      alertPopup.then(callback);
    };

    //Toast message
    this.showToast = function(message){
      var defaultMessage = '默认提示消息';
      $ionicLoading.show({
        template: message?message:defaultMessage,
        duration: 1000  //持续时间1000ms后调用hide()
      });
    };

    //图片查看popup
    this.showImgViewer = function (imgSrc, hasImageFilter) {
      //默认图片过滤true
      var imageSrc = '';
      var hasImgFilter = arguments[1] ? arguments[1] : true;
      if (hasImgFilter) {
        var nsrc = 'default.png';
        if (imgSrc != null && imgSrc != '') {
          nsrc = imgSrc;
        }
        imageSrc = UrlService.getImageUrlData() + nsrc;
      } else {
        imageSrc = imgSrc;
      }
      var imgViewerPopup = $ionicPopup.show({
        template: '<img ng-src="' + imageSrc + '">',
        title: '',
        subTitle: '',
        cssClass: 'jsh-img-viewer',
        buttons: [
          {
            text: '&#xe642;',
            type: 'jsh-img-viewer-close dhcfont',
            onTap: function (e) {
              imgViewerPopup.close();
            }
          }
        ]
      });
    }

  }
])
;
