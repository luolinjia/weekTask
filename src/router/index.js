/**
 * Created by luolinjia on 2018/1/16.
 */
import VueRouter from 'vue-router';
// import Login from '../views/login/login.vue';
// import List from '../views/dashboard/list.vue';

// 定义路由
const routes = [{
	path: '/dashboard',
	// component: List
	component: resolve => require(['../views/dashboard/list.vue'], resolve)
}, {
	path: '/login',
	// component: Login
	component: resolve => require(['../views/login/login.vue'], resolve)
}];

// 创建 router 实例
const router = new VueRouter({
	mode: 'history',
	routes
});

export default router;