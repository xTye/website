import { RouteRecordRaw } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ResumePage from "@/views/ResumePage.vue";
import MediaPage from "@/views/MediaPage.vue";
import BlogPage from "@/views/BlogPage.vue";
//import BlogPostPage from "@/views/BlogPostPage.vue";
import CreatePostPage from "@/views/CreatePostPage.vue";
import UpdatePostPage from "@/views/UpdatePostPage.vue";

const BlogPostPage = () => import("@/views/BlogPostPage.vue");

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
    path: "/blog/:id",
    name: "Blog Post",
    component: BlogPostPage,
  },

  {
    path: "/post",
    name: "Create Post",
    component: CreatePostPage,
  },
  {
    path: "/post/:id",
    name: "Update Post",
    component: UpdatePostPage,
  },
];
