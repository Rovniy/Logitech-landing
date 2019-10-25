/* eslint-disable */

export default () => {
  if (process.browser) {
    let _tmr = window._tmr || (window._tmr = [])
    if (_tmr) {
      _tmr.push({id: '3145704', type: 'pageView', start: (new Date()).getTime(), pid: 'USER_ID'})
    }

    (function (d, w, id) {
      if (d.getElementById(id)) return
      let ts = d.createElement('script')
      ts.type = 'text/javascript'
      ts.async = true
      ts.id = id
      ts.src = 'https://top-fwz1.mail.ru/js/code.js'
      let f = function () {
        let s = d.getElementsByTagName('script')[0]
        s.parentNode.insertBefore(ts, s)
      }
      if (w.opera === '[object Opera]') {
        d.addEventListener('DOMContentLoaded', f, false)
      } else {
        f()
      }
    })(document, window, 'topmailru-code')
  }
}
