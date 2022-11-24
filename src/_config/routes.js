import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Auth/Login/Index";
import Register from "../pages/Auth/Register/Index";
import Home from "../pages/Home/Index";
import NotFound from "../pages/NotFound/Index";


export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route exact path="Auth/Login" element={<Login />} />
          <Route exact path="Auth/Register" element={<Register />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}