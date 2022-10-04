import { RouteRecordRaw } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ResumePage from "@/views/ResumePage.vue";
import MediaPage from "@/views/MediaPage.vue";
import BlogPage from "@/views/BlogPage.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  // {
  //   path: "/about",
  //   name: "AboutPage",
  //   component: AboutPage,
  // },
  {
    path: "/resume",
    name: "Resume",
    component: ResumePage,
  },
  {
    path: "/media",
    name: "Media",
    component: MediaPage,
  },
  {
    path: "/blog",
    name: "Blog",
    component: BlogPage,
  },
];
