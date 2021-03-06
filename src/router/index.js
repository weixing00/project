import Vue from 'vue';
import VueRouter from 'vue-router';

// import Index from '../components/Index';
// 路由懒加载
const Index  = ()=>import('../components/Index');
const Detail  = ()=>import('../components/Detail');
const Img  = ()=>import('../components/Img');
const Color  = ()=>import('../components/Color');
const Type  = ()=>import('../components/Type');
const Quotation  = ()=>import('../components/Quotation');
// 需要安装插件 cnpm i -D babel-plugin-syntax-dynamic-import

Vue.use(VueRouter);

export default new VueRouter({
    // 两种模式
    mode: 'hash',
    routes: [{
        path: '/index',
        name: 'Index',
        component: Index
    },{
        path: '/detail',
        component: Detail
    },{
        path: '/color',
        component: Color
    },{
        path: '/type',
        component: Type
    },{
        path: '/img',
        component: Img
    },{
        path: '/quotation',
        component: Quotation
    },{
        path: '*',
        redirect: '/index'
    }]
})