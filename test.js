const fs = require('fs');
const path = require('path');

function getEntry() {
  var jsPath = path.resolve(__dirname, 'js');
  var dirs = fs.readdirSync(jsPath);
  var matchs = [],
      files = {};
  dirs.forEach(function (item) {
      matchs = item.match(/(.+)\.js$/);
      if (matchs) {
          files[matchs[1]] = path.resolve('js', item);
      }
  });
  //files['babel-polyfill'] = ['babel-polyfill'];
  // files['vendor'] = vendor;
  return files;
}

console.log(getEntry())

/**
 * 
- 商城首页；
- 商品详情页；
- 抽奖页；
- 订单确认页；
- 商品列表页；

公共组件
- footer menu
- 轮播图
- 商品列表一行
    - 单个商品展示
 */