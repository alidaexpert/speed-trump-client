import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const iniatializeAppAuth=()=>{
     initializeApp(firebaseConfig);
}
export default iniatializeAppAuth