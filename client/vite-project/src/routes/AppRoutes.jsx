import {Routes, Route} from "react-router-dom";
import LoginSignup from "../components/loginSignup/loginSignup";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import  PrivateRoute from "../components/loginSignup/PrivateRouter";

const AppRoutes =() =>{
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<LoginSignup />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    );

};

export default AppRoutes;