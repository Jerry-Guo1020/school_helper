import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/home/home.vue";
import Activity from "../views/activity/activity.vue";
import Message from "../views/message/message.vue";
import Personal from "../views/personal/personal.vue";
import Benxiaonotion from "../views/home/functions/benxiaonotion.vue";
import More from "../views/home/functions/more.vue";
import Nimingtougao from "../views/home/functions/nimingtougao.vue";
import Schooldidi from "../views/home/functions/schooldidi.vue";
import Shiwuzhaoling from "../views/home/functions/shiwuzhaoling.vue";

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
    {
      path: "/benxiaonotion",
      component: Benxiaonotion,
      name: "benxiaonotion",
    },
    {
      path: "/more",
      component: More,
      name: "more",
    },
    {
      path: "/nimingtougao",
      component: Nimingtougao,
      name: "nimingtougao",
    },
    {
      path: "/schooldidi",
      component: Schooldidi,
      name: "schooldidi",
    },
    {
      path: "/shiwuzhaoling",
      component: Shiwuzhaoling,
      name: "shiwuzhaoling",
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
