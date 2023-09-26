import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { createLifecyle, getMicroApp } from 'vite-plugin-legacy-qiankun'
import pkg from '../package.json' // your micro app name (pkg.name)
import router from './router';
const microApp = getMicroApp(pkg.name)
let app = null;

function render(props: any) {
    app = createApp(App)

    app.use(router)

    app.use(ElementPlus, {
        locale: zhCn
    })

    app.mount(props.container ? props.container.querySelector('#app') : '#app')
}

if (microApp.__POWERED_BY_QIANKUN__) {
    createLifecyle(pkg.name, {
        mount(props) {
            //关闭加载动画
            props.setLoading(false)

            render({});
        },
        bootstrap() {
        },
        unmount(props: any) {
            // app!.unmount()
            // app!._container.innerHTML = ''
            // app = null
        },
        update(props: any) {

        }})
} else {
    render({});
}