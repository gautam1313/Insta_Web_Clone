import { firebaseHelpers } from "../lib/firebase";
const {
  collection,
  query,
  where,
  getDocs,
  db,
  limit,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} = firebaseHelpers;

export const doesUsernameExists = async (username) => {
  const q = query(collection(db, "users"), where("username", "==", username));
  const result = await getDocs(q);
  return result.docs.length > 0;
};

export const getUserById = async (userId) => {
  const q = query(collection(db, "users"), where("userId", "==", userId));
  const result = await getDocs(q);
  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));
  return user;
};

export const getSuggestedProfiles = async (userId, following) => {
  const q = query(collection(db, "users"), limit(10));
  const result = await getDocs(q);
  const suggestedProfiles = result.docs
    .map((item) => ({
      ...item.data(),
      docId: item.id,
    }))
    .filter(
      (item) => item.userId !== userId && !following.includes(item.userId)
    );
  return suggestedProfiles;
};

export const updateLoggedInUserFollowing = async (
  loggedInUserDocId,
  profileId,
  isFollowingProfile
) => {
  const loggedInUserRef = doc(db, "users", loggedInUserDocId);

  const result = isFollowingProfile
    ? await updateDoc(loggedInUserRef, {
        following: arrayRemove(profileId),
      })
    : await updateDoc(loggedInUserRef, {
        following: arrayUnion(profileId),
      });

  return result;
};

export const updateFollowedUserFollowers = async (
  profileDocId,
  userId,
  isFollowingProfile
) => {
  const profileUserRef = doc(db, "users", profileDocId);

  const result = isFollowingProfile
    ? await updateDoc(profileUserRef, {
        followers: arrayRemove(userId),
      })
    : await updateDoc(profileUserRef, {
        followers: arrayUnion(userId),
      });

  return result;
};
