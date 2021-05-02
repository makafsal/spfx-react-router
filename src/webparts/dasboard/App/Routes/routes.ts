import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import RouteComponent from "./RouteComponent";

const routes: IRoute = {
  about: {
    path: "/about",
    name: "about",
    component: About
  },
  contact: {
    path: "/contact",
    name: "contact",
    component: Contact
  },
  home: {
    path: "/home",
    name: "home",
    component: Home
  },
  root: {
    path: "/",
    name: "root",
    component: RouteComponent
  }
}

export default routes;

export interface IRouteChildren {
  path: string;
  name: string;
  component?: React.ComponentType;
  exact?: boolean;
  children?: IRoute;
}

export interface IRoute {
  [key: string]: IRouteChildren;
}