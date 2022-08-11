import Bag from "../pages/Bag/Bag";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ProductById from "../pages/ProductDetails/ProductById";
import Register from "../pages/Register/Register";
import Store from "../pages/Store/Store";
import Checkout from "../pages/Checkout/Checkout";

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
    name: "lowers",
    link: "/lowers",
    component: Store,
  },
  {
    name: "uppers",
    link: "/uppers",
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
    component: ProductById,
    hideFromMenu: true,
  },
  {
    name: "checkout",
    link: "/checkout",
    component: Checkout,
    hideFromMenu: true,
  },
];

export default routesList;
