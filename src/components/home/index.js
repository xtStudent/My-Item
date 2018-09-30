import HHeader from './h-header/index'
import HFooter from './h-footer/index'

const components = [
  HHeader,
  HFooter
]

const install = function (Vue) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export default install
