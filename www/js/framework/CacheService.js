/**
 * creater:chuanpeng.zhu@dhc.com.cn
 * create time:2015/12/31
 * describe：缓存服务
 **/
IonicTest.service('CacheService', [function () {

  var cache = {};

  this.get = function (key) {
    console.log('get:' + key);
    return cache[key];
  };
  this.set = function (key, value) {
    console.log('set:' + key + '   value: ' + value);
    return cache[key] = value;
  };
  this.pop = function(key){
    var result = cache[key];
    cache[key] = '';
    return result;
  }
}])
;
