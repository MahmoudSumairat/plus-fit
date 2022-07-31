import { useSelector } from "react-redux/es/exports";

const useIsAuthenticated = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated;
};

export default useIsAuthenticated;
