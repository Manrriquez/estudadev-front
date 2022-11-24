import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewAlert from "../pages/Admin/NewAlert/Index";
import RegisteredCourses from "../pages/Admin/RegisteredCourses/Index";
import RegisteredStydents from "../pages/Admin/RegisteredStudents/Index";
import RegisteredTeacher from "../pages/Admin/RegisteredTeachers/Index";
import ForgotPassword from "../pages/Auth/ForgotPassword/Index";
import Login from "../pages/Auth/Login/Index";
import Register from "../pages/Auth/Register/Index";
import Courses from "../pages/Courses/Index";
import Home from "../pages/Home/Index";
import NotFound from "../pages/NotFound/Index";
import MyCourses from "../pages/Students/Courses/Index";
import DashboardStudent from "../pages/Students/Dashboard/Index";
import MessageTeacher from "../pages/Students/MessagesTeacher/Index";
import CoursePublished from "../pages/Teacher/Courses/Index";
import Dashboard from "../pages/Teacher/Dashboard/Index";
import MessageStudents from "../pages/Teacher/MessageStudents/Index";
import RegisteredStudents from "../pages/Teacher/RegisteredStudents/Index";
import Welcome from "../pages/Welcome/Index";


export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Welcome />} />

          <Route exact path="Admin/NewAlert" element={<NewAlert />} />
          <Route exact path="Admin/RegisteredCourses" element={<RegisteredCourses />} />
          <Route exact path="Admin/RegisteredStudents" element={<RegisteredStydents />} />
          <Route exact path="Admin/RegisteredTeachers" element={<RegisteredTeacher />} />

          {/* <Route index element={<Home />} /> */}
          <Route exact path="Auth/Login" element={<Login />} />
          <Route exact path="Auth/Register" element={<Register />} />
          <Route exact path="Auth/ForgotPassword" element={<ForgotPassword />} />

          <Route exact path="Courses" element={<Courses />} />

          <Route exact path="Teacher/CoursesPublished" element={<CoursePublished />} />
          <Route exact path="Teacher/Dashboard" element={<Dashboard />} />
          <Route exact path="Teacher/MessageStudents" element={<MessageStudents />} />
          <Route exact path="Teacher/RegisteredStudents" element={<RegisteredStudents />} />

          <Route exact path="Student/MyCourses" element={<MyCourses />} />
          <Route exact path="Student/Dashboard" element={<DashboardStudent />} />
          <Route exact path="Student/MessageTeacher" element={<MessageTeacher />} />


          <Route exact path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}