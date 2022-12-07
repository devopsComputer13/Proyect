import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/clientelist",
    name: "pruebalist",
    component: () => import("./components/Clientes/GetCliente.vue"),
  },
  {
    path: "/actualizarcliente",
    alias: "/actualizarcliente",
    name: "clientes",
    component: () => import("./components/Clientes/UpdateCliente.vue"),
  },
  {
    path: "/addcliente",
    name: "add-cliente",
    component: () => import("./components/Clientes/AddCliente.vue"),
  },
  {
    path: "/deletecliente",
    name: "delete-cliente",
    component: () => import("./components/Clientes/DeleteCliente.vue"),
  },
  // {
  //   path: "/login",
  //   name: "login",
  //   component: () => import("./components/Azure/AzureAd.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
