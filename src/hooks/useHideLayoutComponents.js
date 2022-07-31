import { useLocation } from "react-router";
import routesList from "../routes/routesList";

const useHideLayoutComponents = () => {
  const location = useLocation();

  const currentRoute = routesList.find(
    (route) => location.pathname.includes(route.link) && !route.exact
  );

  return currentRoute ? currentRoute.hideLayoutComponents : false;
};

export default useHideLayoutComponents;
