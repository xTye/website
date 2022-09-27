import { RouteRecordRaw } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ResumePage from "@/views/ResumePage.vue";
import MediaPage from "@/views/MediaPage.vue";
import BlogPage from "@/views/BlogPage.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  // {
  //   path: "/about",
  //   name: "AboutPage",
  //   component: AboutPage,
  // },
  {
    path: "/resume",
    name: "ResumePage",
    component: ResumePage,
  },
  {
    path: "/media",
    name: "MediaPage",
    component: MediaPage,
  },
  {
    path: "/blog",
    name: "Blog",
    component: BlogPage,
  },
];
