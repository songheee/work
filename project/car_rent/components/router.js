var Header = httpVueLoader('../components/common/Header.vue');
var Footer = httpVueLoader('../components/common/Footer.vue');

var Home = httpVueLoader('../components/home/Home.vue');
var Category = httpVueLoader('../components/category/Category.vue');
var Detail = httpVueLoader('../components/detail/Detail.vue');
var Payment = httpVueLoader('../components/payment/Payment.vue');
var Dashboard = httpVueLoader('../components/dashboard/Dashboard.vue');

var CarListItem = httpVueLoader('../components/common/CarList.vue');
var CheckArea = httpVueLoader('../components/common/CheckArea.vue');
var PickDrop = httpVueLoader('../components/common/PickDrop.vue');
var MainMenu = httpVueLoader('../components/common/MainMenu.vue');

var router =new VueRouter({
  routes:[
    {
      path: '/home',
      component: Home,
      props:true,
    },
    {
      path: '/payment',
      component: Payment,
    },
    {
      path: '/category',
      component: Category,
    },
    {
      path: '/detail',
      component: Detail,
    },
    {
      path: '/dashboard',
      component: Dashboard,
    },
  ]
})