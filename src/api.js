import ViewerJs from 'viewerjs'
import { extend } from './utils'

const api = Vue => ({images = [], options = {}} = {}) => {
  options = extend(options, {
    inline: false // 只能使用modal模式
  })
  // 创建存放viewerjs加载所需图片的占位元素，无需实际展现
  const ViewerToken = Vue.extend({
    render (h) {
      return h(
        'div',
        {
          style: {
            display: 'none'
          },
          class: ['__viewer-token']
        },
        images.map((attr) => {
          return h(
            'img',
            {
              attrs: typeof attr === 'string' ? { src: attr } : attr
            }
          )
        })
      )
    }
  })
  const token = new ViewerToken()
  token.$mount()
  document.body.appendChild(token.$el)

  // 加载ViewerJs
  const $viewerJs = new ViewerJs(token.$el, options)
  const $destroy = $viewerJs.destroy.bind($viewerJs)
  $viewerJs.destroy = function () {
    $destroy()
    token.$destroy()
    document.body.removeChild(token.$el)
    return $viewerJs
  }
  $viewerJs.show()

  // 关闭ViewerJs模态窗口时，销毁token
  token.$el.addEventListener('hidden', function () {
    if (this.viewer === $viewerJs) {
      $viewerJs.destroy()
    }
  })

  return $viewerJs
}

export default api
