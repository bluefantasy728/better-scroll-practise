import './common/style/reset.css'

import GoodsItem from './components/GoodsItem/GoodsItem.js'
import FootNav from './components/FootNav/FootNav.js'
import axios from 'axios'
import CONFIG from './common/js/configs.js'
import Util from './common/js/utils.js'

import BScroll from 'better-scroll'

import './index.scss'

class Detail extends Util.mix(GoodsItem, FootNav) {}
let pageDetail = new Detail()
let currentPage = 1
let scroll

let fnCreateMoreInfo = (hasData = true, ndFather) => {
  let info = hasData ? '正在加载更多数据!' : '没有数据了!'
  let ndLoadMore = document.createElement('div')
  ndLoadMore.className = 'more-info'
  ndLoadMore.innerHTML = `<i></i><span>${info}</span>`
  ndFather.appendChild(ndLoadMore)
  return ndLoadMore
}

let fnCreateItems = (data = [], fatherNode) => {
  data.map((item, i) => {
    let ndLi = document.createElement('li')
    ndLi.appendChild(pageDetail.createGoodsItem(2, item))
    fatherNode.appendChild(ndLi)
  })
}

let fnFetchData = (ndContent) => {
  axios({
    method:'post',//方法
    url: CONFIG.serverUrl + "/api/home/getHotSellGoods",//地址
    data: `json={"currentPage": ${currentPage}, "pageSize":10}`
  })
  .then(function (response) {
    let detailData = response.data.hotSellGoods
    if(detailData.length === 0) {
      let ndLoadMore = fnCreateMoreInfo(false, ndContent)
      ndLoadMore.removeChild(ndLoadMore.querySelector('i'))
      setTimeout(() => {
        let offsetY = ndLoadMore.offsetHeight
        scroll.scrollBy(0,offsetY,500)
        ndContent.removeChild(ndLoadMore)
      }, 500)
    }
    fnCreateItems(detailData, ndContent)
    
    currentPage++

    if(!scroll) {
      scroll = new BScroll('#main', {
        probeType: 2,
        pullUpLoad: {
          threshold: -30
        }
      })
    } else {
      scroll.finishPullUp()
      scroll.refresh()  
    }
    
    scroll.once('pullingUp', () => {
      let ndLoadMore = fnCreateMoreInfo(true, ndContent)
      scroll.stop()

        setTimeout(() => {
          fnFetchData(ndContent)
          ndLoadMore.parentNode.removeChild(ndLoadMore)
        }, 500)
    })
  })
}

window.onload = function() {
  let ndMain = document.getElementById('main')
  let ndContent = document.querySelector('.content')
  
  document.body.appendChild(pageDetail.createFootNav(1))

  fnFetchData(ndContent)

}