import './SectionTitle.scss'

export default class SectionTitle {
  createSectionTitle(title, hasMore = true, moreUrl) {
    let ndTitleSection = document.createElement('div'),
        aHTML = hasMore ? `<a href=${moreUrl}>更多</a>` : ''
        
    ndTitleSection.className = 'title-section'

    let strHtml = `
      <h3>${title}</h3>
      ${aHTML}
    `
    ndTitleSection.innerHTML = strHtml

    return ndTitleSection
  }
}