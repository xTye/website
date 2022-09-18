import { RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "HomePage",
    meta: {
      title: "Home",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HomePage.vue"),
  },
  {
    path: "/about",
    name: "AboutPage",
    meta: {
      title: "About",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutPage.vue"),
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
    meta: {
      title: "Pictures",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PicturesPage.vue"),
  },
  {
    path: "/videos",
    name: "VideosPage",
    meta: {
      title: "Videos",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/VideosPage.vue"),
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
