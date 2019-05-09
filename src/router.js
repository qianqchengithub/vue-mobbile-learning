import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 导入所有的组件
import HomeContainer from './components/tabbar/HomeContainer.vue';
import MemberContainer from './components/tabbar/MemberContainer.vue';
import SearchContainer from './components/tabbar/SearchContainer.vue';
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue';
import News from './components/news/News.vue';
import NewsDetail from './components/news/NewsDetaiil.vue';
import Photo from './components/photo/Photo.vue';
import PhotoDetail from './components/photo/PhotoDetail.vue';

export default new VueRouter({
  linkActiveClass: 'mui-active',
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: HomeContainer
    },
    {
      path: '/home/news',
      component: News
    },
    {
      path: '/home/news/:newsId',
      component: NewsDetail
    },
    {
      path: '/home/photo',
      component: Photo
    },
    {
      path: '/home/photo/:phoId',
      component: PhotoDetail
    },
    {
      path: '/member',
      component: MemberContainer
    },
    {
      path: '/search',
      component: SearchContainer
    },
    {
      path: '/shopcar',
      component: ShopcarContainer
    },
  ]
});