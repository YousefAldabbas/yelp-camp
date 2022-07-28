import SignIn from "./pages/SignIn";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Campground from "./pages/Campground";
import AddCamp from "./pages/AddCamp";
import AddComment from "./pages/AddComment";

const routes = [
  {
    name: "Sign In",
    key: "signin",
    path: "/signin",
    component: <SignIn />,
    needAuth: false,
    navbar: false,
  },
  {
    name: "Sign Up",
    key: "signup",
    path: "/signup",
    component: <SignIn />,
    needAuth: false,
    navbar: false,
  },

  {
    name: "Landing Page",
    key: "landingPage",
    path: "/",
    component: <LandingPage />,
    needAuth: false,
    navbar: false,
  },
  {
    name: "Home",
    key: "home",
    path: "/home",
    component: <Home />,
    needAuth: false,
    navbar: true,
  },
  {
    name: "campground",
    key: "campground",
    path: "/campgrounds/:id",
    component: <Campground />,
    needAuth: false,
    navbar: true,
  },
  {
    name: "Add Camp",
    key: "addCamp",
    path: "/add-new-campground/",
    component: <AddCamp />,
    needAuth: false, // change to true
  },
  {
    name: "Add Comment",
    key: "addComment",
    path: "/campgrounds/:id/add-comment/",
    component: <AddComment />,
    needAuth: true, // change to true
  },
];

export default routes;
