import Vue from 'vue'
import App from './app.vue'
import futureUI from 'future-ui'
import AllIcon from 'future-icon'
import '../assets/common.less'
import zhCn from '../lang/zh-cn' // 简体中文
import zhHK from '../lang/zh-hk' // 繁体中文
import enUs from '../lang/en-us' // 英文
import ja from '../lang/ja' // 日文

const map = {
  'zh-cn': zhCn,
  'zh-hk': zhHK,
  'en-us': enUs,
  ja: ja
}
const lang = document.documentElement.lang
futureUI.Locale.use(lang, map[lang])
futureUI.Icon.add(AllIcon.default)
Vue.use(futureUI)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
