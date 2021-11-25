import firebaseConfig from "./Firebase.confic";
import { initializeApp } from "firebase/app";
const firebaseInit = () => {
  initializeApp(firebaseConfig);
};
export default firebaseInit;
