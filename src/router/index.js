import { createRouter, createWebHistory } from "vue-router";
import "normalize.css";

const routes = [
  {
    path: "/",
    name: "home",
    //component: ,
    children: [
      {
        path: "/projects/:id",
        name: "project details",
        //component: ,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
