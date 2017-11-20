export default class Util {
  static mix(...mixins) {
    class Mix {}
  
    for (let mixin of mixins) {
      this.copyProperties(Mix, mixin); // 拷贝实例属性
      this.copyProperties(Mix.prototype, mixin.prototype); // 拷贝原型属性
    }
  
    return Mix
  }
  
  static copyProperties(target, source) {
    for (let key of Reflect.ownKeys(source)) {
      if ( key !== "constructor"
        && key !== "prototype"
        && key !== "name"
      ) {
        let desc = Object.getOwnPropertyDescriptor(source, key);
        Object.defineProperty(target, key, desc);
      }
    }
  }

  //在规定父级DOM中批量添加DO；fatherNode:DOM节点，DOMs：数组
  static addDOMs(fatherNode, DOMs) {
    DOMs.map((item, i) => {
      fatherNode.appendChild(item)
    })
  }

  //获取图片的小尺寸
  static getSmallImg(imgUrl) {
    let index = imgUrl.lastIndexOf('.'),
		    mainName = imgUrl.substring(0, index),
		    extName = imgUrl.substring(index + 1, imgUrl.length)
		return mainName + '_small.' + extName;
  }

  //将分的数量转成元的格式
  static fenToYuan(fen) {
    if (fen == null || fen == '') {
      return '0.00'
    }
    return parseFloat(fen * 0.01).toFixed(2)
  }
}