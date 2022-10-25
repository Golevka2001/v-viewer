import { createApp } from 'vue'
import VueViewer from '../src'
import App from './App.vue'

import 'bulma'
import 'viewerjs/dist/viewer.css'
VueViewer.setDefaults({
  zIndexInline: 2021,
  focus: false,
})
export const app = createApp(App)
// app.use(VueViewer, {
//   debug: true,
// })
app.mount('#app')
