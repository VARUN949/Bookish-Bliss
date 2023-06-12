import "./App.css";
import Navbar from "./component/navbar/navbar.component";
import { Route, Routes } from "react-router-dom";
// import SideBar from "./component/navbar/sidebar/sidebar.component";
import Home from './component/Home/home.component'
import LoginSignup from "./component/Login_signup/LoginSignup.component";


function App() {
  return (
    <Routes>
      <Route path="/home" element={<><Navbar /><Home/></>}>
      {/* <Route path="/home" element={<><Navbar /><SideBar/></>}> */}
      </Route>
      <Route path="/login" element={<><Navbar /><LoginSignup/></>}>
      </Route>
    </Routes>
    
  );
}

export default App;
