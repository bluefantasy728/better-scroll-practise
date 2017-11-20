import SectionTitle from '../SectionTitle/SectionTitle.js'
import GoodsItem from '../GoodsItem/GoodsItem.js' //单个商品的a标签节点

import './GoodsRow.scss'

export default class GoodsRow {
  createGoodsRow(itemQty, goodsSectionData) {
    //itemQty: 行里包含商品的数量，一般为2或者3
    //goodsSectionData: 这行里要用到的数据
    let ndGoodsRow = document.createElement('div')
    
    ndGoodsRow.className = 'goods-row'

    let len = goodsSectionData.length,
        goodsItem = new GoodsItem()
    for(let i=0; i<len; i++) {
      //ndGoodsItem: 导入的单个商品a标签节点
      ndGoodsRow.appendChild(goodsItem.createGoodsItem(itemQty, goodsSectionData[i]))
    }
    return ndGoodsRow
  }
}
