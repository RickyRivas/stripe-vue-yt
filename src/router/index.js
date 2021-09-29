
import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue"; 
import Success from "../components/success.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
  {
    path: "/",
    name: "Home",
    component: Home
  }, 
  {
    path: "/success",
    name: "Success",
    component: Success
  }
]
});
export default router;
