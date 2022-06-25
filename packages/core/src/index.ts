import { createApp } from 'vue';
import App from './App.vue';

export interface BootstrapOptions {
    el: string | Element;
}

export function bootstrapApp(options: BootstrapOptions) {
    const app = createApp(App);
    app.mount(options.el);
}