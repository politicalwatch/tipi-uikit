import * as TipiComponents from './components'

let VueMaterial = Vue => {
  Object.values(TipiComponents).forEach((TipiComponent) => {
    Vue.use(TipiComponent)
  })
}

TipiUI.version = '__VERSION__'

export default TipiUI
