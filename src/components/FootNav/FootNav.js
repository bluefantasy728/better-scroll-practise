import './FootNav.scss'

export default class FootNav{
  createFootNav(acitveIndex) {
    let ndFooter = document.createElement('footer')
    ndFooter.id = 'foot-nav'
    let footData = [
      {
        url:'#',
        title: '商城'
      },
      {
        url:'#',
        title: '分类'
      },
      {
        url:'#',
        title: '购物车'
      },
      {
        url:'#',
        title: '订单'
      },
    ]

    let strHtml = ''

    footData.map((item, i) => {
      strHtml += `
        <a href=${item.url}>
          <span></span>
          <p>${item.title}</p>
        </a>
      `
    })
    ndFooter.innerHTML = strHtml

    let ndAs = ndFooter.getElementsByTagName('a')
    function selectMenu(obj) {
      for(let i=0; i<ndAs.length; i++) {
        ndAs[i].classList.remove('active')
      }
      obj.classList.add('active')
    }
    for(let i=0; i<ndAs.length; i++) {
      ndAs[acitveIndex].classList.add('active')
      ndAs[i].addEventListener('click', function(){selectMenu(this)}, false)
    }

    return ndFooter

  }

  
}