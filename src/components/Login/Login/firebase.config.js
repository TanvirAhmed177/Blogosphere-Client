import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDz0_rvxHV6L9fwykTETzamAUcLoNfDniU",
  authDomain: "blogosphere-project.firebaseapp.com",
  projectId: "blogosphere-project",
  storageBucket: "blogosphere-project.appspot.com",
  messagingSenderId: "554170824395",
  appId: "1:554170824395:web:10eb48b74ead9e1b060d4e",
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
