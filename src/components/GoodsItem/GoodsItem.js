import './GoodsItem.scss'

export default class GoodsItem {
  createGoodsItem(sizeType, goodsData) {
    // let serverUrl = 'https://ccapp.test.cibfintech.com/b2c-web-cib'
    let {
      skuId,
      pics,
      name,
      goodsType,
    } = goodsData
    let classNameImg = sizeType === 2 ? 'sizeTypeImg-2' : 'sizeTypeImg-3'
    let picUrl = 'https://ccapp.test.cibfintech.com/b2c-fileserver'
    let ndGoodsItem = document.createElement('a')
    ndGoodsItem.href = `details.html?skuId=${skuId}`
    ndGoodsItem.className = classNameImg
    let strHtml = 
      
        `<div class="goods-pic">
          <img src=${picUrl + JSON.parse(pics)[0]} alt="">
        </div>
        <dl class="goods-info">
          <dt class="goods-name" style="height: 19px;">${name}</dt>
          <dd class="goods-seckill-price roboto"><em>￥</em>5.00</dd>
        </dl>`
      
    ndGoodsItem.innerHTML = strHtml

    return ndGoodsItem
  }
}