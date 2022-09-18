import { RouteRecordRaw } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import AboutPage from "@/views/AboutPage.vue";
import PicturesPage from "@/views/PicturesPage.vue";
import VideosPage from "@/views/VideosPage.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
  // {
  //   path: "/resume",
  //   name: "ResumePage",
  //   meta: {
  //     title: "Resume",
  //   },
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/ResumePage.vue"),
  // },
  {
    path: "/pictures",
    name: "PicturesPage",
    component: PicturesPage,
  },
  {
    path: "/videos",
    name: "VideosPage",
    component: VideosPage,
  },
  // {
  //   path: "/projects",
  //   name: "ProjectsPage",
  //   meta: {
  //     title: "Projects",
  //   },
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/ProjectsPage.vue"),
  // },
  // {
  //   path: "/blog",
  //   name: "Blog",
  //   meta: {
  //     title: "Blog",
  //   },
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/BlogPage.vue"),
  // },
  // {
  //   path: "/Code",
  //   name: "CodePage",
  //   meta: {
  //     title: "Code",
  //   },
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/CodePage.vue"),
  // },
];
