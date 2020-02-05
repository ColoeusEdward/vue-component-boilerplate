import Button from '../components/button/';

const components = [Button];

const install = function(Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default {
  version: '1.0.0',
  total: components.length,
  install,
  Button,
};
