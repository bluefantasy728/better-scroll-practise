import Swiper from 'swiper';
import './Swiper.scss'

import CONFIG from '../../common/js/configs.js'

export default class MySwiper{
  createSwiper(bannerData = []) {
    let ndContainer = document.createElement('div')
    ndContainer.className = 'swiper-container'
    let strSwiperContent = '',
        slideStyle = ''
    bannerData.map((item, i) => {
      slideStyle = `background: url(${CONFIG.picUrl}${item}) center center / contain no-repeat`
      strSwiperContent += `<div class="swiper-slide" style="${slideStyle}"></div>`
    })
    
    let swiperHtml = `
        <div class="swiper-wrapper">
          ${strSwiperContent}
        </div>
        <div class="swiper-pagination"></div>`
    ndContainer.innerHTML = swiperHtml

    setTimeout(() => {
      let swiper = new Swiper('.swiper-container', {
        centeredSlides: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }, 0)

    return ndContainer
  }
       
}