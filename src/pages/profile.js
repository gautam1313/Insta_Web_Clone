import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getUserByUsername } from "../services/firebase";
import * as ROUTES from "../constants/routes";
import Header from "../components/Header";
import UserProfile from "../components/Profile";

const profile = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const checkUserExists = async () => {
      const userDetails = await getUserByUsername(username);

      if (userDetails.length > 0) {
        setUser(userDetails[0]);
      } else {
        history.push(ROUTES.NOT_FOUND);
      }
    };
    checkUserExists();
  }, [username, history]);
  return user?.username ? (
    <div className="bg-gray-background">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <UserProfile user={user} />
      </div>
    </div>
  ) : null;
};

export default profile;
