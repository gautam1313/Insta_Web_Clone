import { useState, useEffect, useContext } from "react";
import UserContext from "../context/user";
import { getPhotos, getUserById } from "../services/firebase";

const usePhotos = () => {
  const [photos, setPhotos] = useState(null);
  const { uid: userId = "" } = useContext(UserContext);

  useEffect(() => {
    const getTimelinePhotos = async () => {
      const [{ following = [] }] = await getUserById(userId);

      let followedUserPhotos = [];

      if (following.length > 0) {
        followedUserPhotos = await getPhotos(userId, following);
      }
      followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
      setPhotos(followedUserPhotos);
    };
    if (userId) {
      getTimelinePhotos();
    }
  }, [userId]);

  return photos;
};

export default usePhotos;
