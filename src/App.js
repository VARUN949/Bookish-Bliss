import "./App.css";
import Navbar from "./component/navbar/navbar.component";
import { Route, Routes } from "react-router-dom";
import Home from './component/Home/home.component'
import LoginSignup from "./component/Login_signup/LoginSignup.component";
import SearchBar from "./component/search/search_bar/SearchBar.component";

function App() {

  return (
    <Routes>
      <Route path="/home" element={<><Navbar /><Home/></>}>
      </Route>
      <Route path="/login" element={<><Navbar /><LoginSignup /></>}>
      </Route>
      <Route path="/search" element={<><Navbar></Navbar><SearchBar></SearchBar></>}></Route>
      
    </Routes>
    
  );
}

export default App;
