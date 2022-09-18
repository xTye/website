import { RouteRecordRaw } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import AboutPage from "@/views/AboutPage.vue";
import ResumePage from "@/views/ResumePage.vue";
import PicturesPage from "@/views/PicturesPage.vue";
import VideosPage from "@/views/VideosPage.vue";
import ProjectsPage from "@/views/ProjectsPage.vue";
import BlogPage from "@/views/BlogPage.vue";
import CodePage from "@/views/CodePage.vue";

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
  {
    path: "/resume",
    name: "ResumePage",
    component: ResumePage,
  },
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
  {
    path: "/projects",
    name: "ProjectsPage",
    component: ProjectsPage,
  },
  {
    path: "/blog",
    name: "Blog",
    component: BlogPage,
  },
];
