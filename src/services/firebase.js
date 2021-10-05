import { firebaseHelpers } from "../lib/firebase";
const { collection, query, where, getDocs, db } = firebaseHelpers;

export const doesUsernameExists = async (username) => {
  const q = query(collection(db, "users"), where("username", "==", username));
  const result = await getDocs(q);
  return result.docs.length > 0;
};
