import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import IndexMovies from "../views/IndexMovies.vue";
import NewMovie from "../views/NewMovie.vue";
import ShowMovies from "../views/ShowMovies.vue";
import EditMovie from "../views/EditMovie.vue";
import SearchMovies from "../views/SearchMovies.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  { path: "/signup", name: "Signup", component: Signup },
  { path: "/login", name: "Login", component: Login },
  { path: "/logout", name: "Logout", component: Logout },
  { path: "/movies", name: "IndexMovies", component: IndexMovies },
  { path: "/movies/new", name: "NewMovie", component: NewMovie },
  { path: "/movies/search", name: "SearchMovies", component: SearchMovies },
  { path: "/movies/:id", name: "ShowMovies", component: ShowMovies },
  { path: "/movies/:id/edit", name: "EditMovie", component: EditMovie },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
