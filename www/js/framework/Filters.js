/********************************
 creater:
 create time:2015-12-31
 describe：拦截器
 modify time:
 ********************************/
/*网络图片拦截器*/
IonicTest.filter('ImageFilter', ['UrlService', function (UrlService) {
  return function (value) {
    var osrc = value;
    var nsrc = 'default.png';
    if (osrc != null) {
      nsrc = osrc;
      return UrlService.getImageUrlData() + nsrc;
    }else{
      return "./data/temp_img/" + nsrc;
    }
    //return "data/temp_img/" + nsrc;
  }
}]);
/*服务端静态图片拦截器 拼接全路径 value=图片名称*/
IonicTest.filter('StaticImageFilter', ['UrlService', function (UrlService) {
  return function (value) {
    var osrc = value;
    var nsrc = 'default.png';
    if (osrc != null) {
      nsrc = osrc;
      return UrlService.getStaticImageUrlData() + nsrc;
    }else{
      return "./data/temp_img/" + nsrc;
    }
  }
}]);
/*服务端静态图片拦截器 仅拼接域名 value=除域名意外的全路径*/
IonicTest.filter('StaticImageByBuyerFilter', ['UrlService', function (UrlService) {
  return function (value) {
    var osrc = value;
    var nsrc = 'default.png';
    if (osrc != null) {
      nsrc = osrc;
      return UrlService.getBuyerUrl() + nsrc;
    }else{
      return "./data/temp_img/" + nsrc;
    }
  }
}]);
/*百分比拦截器*/
IonicTest.filter('PercentageFilter', function () {
  return function (value) {
    return (Math.round(value[0] / value[1] * 10000) / 100.00 + "%");// 小数点后两位百分比
  }
});
/*时间拦截器 将毫秒转化为时间*/
IonicTest.filter('millisecondFilter', function () {
  return function (value) {
    var format = function(time, format){
      var t = new Date(time);
      var tf = function(i){return (i < 10 ? '0' : '') + i};
      return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a){
        switch(a){
          case 'yyyy':
            return tf(t.getFullYear());
            break;
          case 'MM':
            return tf(t.getMonth() + 1);
            break;
          case 'mm':
            return tf(t.getMinutes());
            break;
          case 'dd':
            return tf(t.getDate());
            break;
          case 'HH':
            return tf(t.getHours());
            break;
          case 'ss':
            return tf(t.getSeconds());
            break;
        }
      })
    };
    //返回时间 格式 format(value, 'yyyy-MM-dd HH:mm:ss');
    return format(value, 'yyyy-MM-dd');
  }
});

