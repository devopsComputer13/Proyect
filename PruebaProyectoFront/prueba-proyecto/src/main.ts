import { createApp } from "vue";
import App from "@/App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "@/router";
import Emitter from "tiny-emitter"


const app = createApp(App)
    
app.config.globalProperties.$msalInstance = {}
app.config.globalProperties.$emitter = new Emitter.TinyEmitter()


app.use(router).mount("#app");

