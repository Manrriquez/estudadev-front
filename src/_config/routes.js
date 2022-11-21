import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Auth/Login/Index";
import Register from "../pages/Auth/Register/Styled";
import Home from "../pages/Home/Styled";
import NotFound from "../pages/NotFound/Index";


export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route exact path="login" element={<Login />} />
          <Route exact path="register" element={<Register />} />
          <Route exact path="home" element={<Home />} />
          <Route exact path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}