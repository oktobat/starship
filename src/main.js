import Vue from "vue";
import App from "@/App.vue";
import store from '@/store'
import router from '@/router'
import '@/assets/css/reset.css'

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  // 로그인 페이지로 이동할 때만 이전 경로를 저장합니다.
  if (to.name === 'login') {
    store.commit("savePrevPath", from.fullPath);
  }
  next();
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");