import VueCookie from 'vue-cookie'
import config from '@/config'

export default {
  // 获取服务端cookie
  getInServer: function(req) {
    const service_cookie = {}
    req && req.headers.cookie && req.headers.cookie.split(';').forEach(function(val) {
      const parts = val.split('=')
      service_cookie[parts[0].trim()] = (parts[1] || '').trim()
    })
    return service_cookie
  },
  getInServerToken: function(req) {
    return this.getInServer(req)[config.CLIENT.tokenName] || ''
  },
  // 获取客户端cookie
  getInClient: function(key) {
    // let clent = store().state.clientData;
    const tokenInfo = VueCookie.get(key)
    return tokenInfo
  },
  // 获取客户端cookie
  setInClient: function({ key, val }) {
    VueCookie.set(key, val, { expires: 1, domain: config.CLIENT.domain })
    // Cookie.set(key, val, {expires: 1, domain: clent.domain})
  },
  // 删除客户端cookie
  delInClient: function(key) {
    // fix logout bug
    VueCookie.delete(key, { domain: config.CLIENT.domain })
    // Cookie.remove(key)
  }
}
