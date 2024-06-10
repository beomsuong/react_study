import logo from "./logo.svg";
import "./App.css";
import CardComponent from "./card";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./key";
import { getAuth } from "firebase/auth";
import MoveCardComponent from "./move_card";

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

function App() {
  return (
    <div>
      <h>리엑트 마구마구 공부</h>
      <CardComponent />
      <MoveCardComponent />
    </div>
  );
}

export default App;
