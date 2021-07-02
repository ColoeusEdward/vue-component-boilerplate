import Button from '../components/button/';

// 组件库导入
const components = [Button];

const install = function(Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  console.log("Comp-load")
  // Comp.install(window.Vue)
  window.Vue.use(install);
  // window.Vue.use(Comp.install);
}

export default {
  version: '1.0.0',
  total: components.length,
  install,
};

// 单个组件可以直接这样导出
// export default Button;
