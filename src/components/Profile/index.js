import PropTypes from "prop-types";
import { useReducer, useEffect } from "react";
import Header from "./Header";
import Photos from "./Photos";
import { getUserPhotosByUsername } from "../../services/firebase";

const Profile = ({ user }) => {
  const initialState = {
    profile: {},
    photosCollection: [],
    followerCount: 0,
  };
  const reducer = (state, newState) => ({ ...state, ...newState });

  const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const getProfileInfoAndPhotos = async () => {
      const photos = await getUserPhotosByUsername(user.username);

      dispatch({
        profile: user,
        photosCollection: photos,
        followerCount: user.followers.length,
      });
    };
    getProfileInfoAndPhotos();
  }, [user.username]);

  return (
    <>
      <Header
        photosCount={photosCollection ? photosCollection.length : 0}
        followerCount={followerCount}
        setFollowerCount={dispatch}
        profile={profile}
      />
      <Photos photos={photosCollection} />
    </>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    dateCreated: PropTypes.number.isRequired,
    emailAddress: PropTypes.string.isRequired,
    followers: PropTypes.array.isRequired,
    following: PropTypes.array.isRequired,
    fullName: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default Profile;
