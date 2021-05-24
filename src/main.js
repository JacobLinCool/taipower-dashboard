import { createApp } from "vue";
import App from "./App.vue";
// import "@fortawesome/fontawesome-free/js/all";
import swal from "sweetalert2";

import "sweetalert2/dist/sweetalert2.css";

const app = createApp(App);
app.mount("#app");

window.app = app;
window.swal = swal;
