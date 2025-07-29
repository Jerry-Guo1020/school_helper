import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/home/home.vue";
import Activity from "../views/activity/activity.vue";
import Message from "../views/message/message.vue";
import Personal from "../views/personal/personal.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      name: "home",
    },
    {
      path: "/activity",
      component: Activity,
      name: "activity",
    },
    {
      path: "/message",
      component: Message,
      name: "message",
    },
    {
      path: "/personal",
      component: Personal,
      name: "personal",
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
