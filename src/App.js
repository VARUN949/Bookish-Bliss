import "./App.css";
import Navbar from "./component/navbar/navbar.component";
import { Route, Routes } from "react-router-dom";
import Home from './component/Home/home.component'

function App() {
  return (
    <Routes>
      <Route path="/home" element={<><Navbar /><Home/></>}>
      {/* <Route path="/home" element={<><Navbar /></>}> */}

      </Route>
    </Routes>
  );
}

export default App;
