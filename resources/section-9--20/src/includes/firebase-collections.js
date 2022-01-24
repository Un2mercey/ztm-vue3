import { db } from "./firebase";

const usersCollection = db.collection("users");

export default usersCollection;
