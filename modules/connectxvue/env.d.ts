/// <reference types="vite/client" />
declare module '*.vue' {
    import { App, defineComponent } from 'vue'
    const component: ReturnType<typeof defineComponent> & {
        install(app: App): void
    }
    export default component
}

//手动声明ElMessage
// declare module 'element-plus' {
//     export class ElMessage {
//         static success(message: string): void;
//         static warning(message: string): void;
//         static info(message: string): void;
//         static error(message: string): void;
//     }
// }