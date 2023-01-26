import { RouteRecordRaw } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ResumePage from "@/views/ResumePage.vue";
import MediaPage from "@/views/MediaPage.vue";
import BlogPage from "@/views/BlogPage.vue";
import PostPage from "@/views/PostPage.vue";
import AnimationsPage from "@/views/AnimationsPage.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  // {
  //   path: "/anim",
  //   name: "Animations",
  //   component: AnimationsPage,
  // },
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

  {
    path: "/post",
    name: "Post",
    component: PostPage,
  },
];
