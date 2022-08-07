import Bag from "../pages/Bag/Bag";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Register from "../pages/Register/Register";
import Store from "../pages/Store/Store";

const routesList = [
  {
    name: "home",
    hideFromMenu: true,
    link: "/",
    component: Home,
    exact: true,
  },
  {
    name: "store",
    link: "/store",
    component: Store,
    mainStorePage: true,
  },
  {
    name: "shoes",
    link: "/shoes",
    component: Store,
  },
  {
    name: "shorts",
    link: "/shorts",
    component: Store,
  },
  {
    name: "shirts",
    link: "/shirts",
    component: Store,
  },
  {
    name: "hijabs",
    link: "/hijabs",
    component: Store,
  },
  {
    name: "accessories",
    link: "/accessories",
    component: Store,
  },
  {
    name: "register",
    link: "/register",
    component: Register,
    hideFromMenu: true,
    hideLayoutComponents: true,
    authRelated: true,
  },
  {
    name: "login",
    link: "/login",
    component: Login,
    hideFromMenu: true,
    hideLayoutComponents: true,
    authRelated: true,
  },
  {
    name: "bag",
    link: "/bag",
    component: Bag,
    hideFromMenu: true,
  },
  {
    name: "product details",
    link: "/products/:productId",
    component: ProductDetails,
    hideFromMenu: true,
  },
];

export default routesList;
