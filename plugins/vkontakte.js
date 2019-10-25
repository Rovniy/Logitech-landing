export default () => {
  !function () {
    let t = document.createElement('script')
    t.type = 'text/javascript'
    t.async = !0
    t.src = 'https://vk.com/js/api/openapi.js?162'
    t.onload = function() {
      window.VK.Retargeting.Init('VK-RTRG-419229-aPnuU')
      window.VK.Retargeting.Hit()
    }
    document.head.appendChild(t)
  }()
}

