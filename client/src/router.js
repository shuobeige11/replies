import Home from './container/home.vue'
import Category from './container/category.vue'
import Website from './container/website.vue'
import Setting from './container/setting.vue'
const routes = [{
  path: '/',
  component: Home,
}, {
  path: '/category',
  component: Category,
}, {
  path: '/website',
  component: Website,
}, {
  path: '/setting',
  component: Setting,
}]

export default () => routes