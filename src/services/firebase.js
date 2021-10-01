import { collection, query, where, getDocs, db } from "../lib/firebase";

export const doesUsernameExists = async (username) => {
  const q = query(collection(db, "users"), where("username", "==", username));
  const result = await getDocs(q);
  return result.docs.length > 0;
};
