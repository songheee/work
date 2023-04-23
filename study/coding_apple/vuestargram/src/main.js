import { createApp } from 'vue'
import App from './App.vue'
import store from './store';

import mitt from 'mitt'
import './registerServiceWorker'
let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter;

/* 자주쓰는 라이브러리는 여기에 등록하면된다 */
/* app.config.globalProperties.axios = axios; */
/* 이렇게 하면 vue파일에서 import axios해올필요없이 this.axios로 사용할수있다 */


app.use(store).mount('#app')