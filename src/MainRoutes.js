import { Routes, Route } from "react-router-dom";

import MainPg from "./MainPg";
import Signin from "./Signin";
import Signup from "./Signup";
import Visitorpage from "./Visitorpage";

function MainRoutes() {
  return (
        <Routes>
          <Route path="/" Component={MainPg} />
          <Route path="/Signin" Component={Signin} />
          <Route path="/Signup" Component={Signup} />
          <Route path="/Visitorpage" Component={Visitorpage} />
        </Routes>
  );
}

export default MainRoutes;
