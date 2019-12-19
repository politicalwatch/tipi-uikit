import * as TipiComponents from './components';

let TipiUI = Vue => {
  Object.values(TipiComponents).forEach((TipiComponent) => {
    Vue.use(TipiComponent);
  });
};

TipiUI.version = '__VERSION__';

export default TipiUI;
