import { useState, useEffect, useContext } from "react";
import UserContext from "../context/user";
import { getUserById } from "../services/firebase";

const useUser = () => {
  const [activeUser, setActiveUser] = useState({});
  const user = useContext(UserContext);
  useEffect(() => {
    const getUserObjByUserId = async () => {
      const [res] = await getUserById(user.uid);
      setActiveUser(res);
    };
    if (user?.uid) {
      getUserObjByUserId();
    }
  }, [user]);
  return { user: activeUser };
};

export default useUser;
