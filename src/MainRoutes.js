import { Routes, Route } from "react-router-dom"; 

import Signin from "./Signin";
import Signup from "./Signup";

function MainRoutes() {
  return (
      <Routes> 
        {/* This route is for home component  
        with path "/Signin", in component props  
        we passes the imported component*/} 
        <Route path="/" Component={Signin} /> 
          
        {/* This route is for about component  
        with path "/Signin", in component  
        props we passes the imported component*/} 
        <Route path="/Signup" Component={Signup} /> 

        <Route path="/VisitorPage" Component={VisitorPage} /> 
      </Routes>
  );
}

export default MainRoutes;
