import { useSelector } from "react-redux";

const useUserData = () => {
  const { userData } = useSelector((state) => state.auth);
  return userData;
};

export default useUserData;
