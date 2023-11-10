import { BrowserRouter, Routes, Route } from "react-router-dom"

import Main_pg from "./Main_pg";
import Signin from "./Signin";
import Signup from "./Signup";
import Visitorpage from "./Visitorpage";

function MainRoutes() {
  return (
    <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Main_pg />} />
          <Route path="/Signin" element={<Signin />} /> 
          <Route path="/Signup" element={<Signup />} /> 
          <Route path="/Visitorpage" element={<Visitorpage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default MainRoutes;
