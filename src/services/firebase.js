import { firebaseHelpers } from "../lib/firebase";
const { collection, query, where, getDocs, db, limit } = firebaseHelpers;

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

export const getSuggestedProfiles = async (userId) => {
  const q = query(collection(db, "users"), limit(10));
  const result = await getDocs(q);
  return result;
};
