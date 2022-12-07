import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Auth/Login/Index";
import NotFound from "../pages/NotFound/Index";
import Welcome from "../pages/Welcome/Index";



export default function MyRoutes() {
    return (
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Welcome />} />
  
            {/* <Route exact path="Admin/NewAlert" element={<NewAlert />} /> */}
            {/* <Route exact path="Admin/RegisteredCourses" element={<RegisteredCourses />} /> */}
            {/* <Route exact path="Admin/RegisteredStudents" element={<RegisteredStydents />} /> */}
            {/* <Route exact path="Admin/RegisteredTeachers" element={<RegisteredTeacher />} /> */}
  
            {/* <Route index element={<Home />} /> */}
            <Route exact path="Auth/Login" element={<Login />} /> 
            {/* <Route exact path="Auth/Register" element={<Register />} /> */}
            {/* <Route exact path="Auth/ForgotPassword" element={<ForgotPassword />} /> */}
  
            {/* <Route exact path="Courses" element={<Courses />} /> */}
  
            {/* <Route exact path="Teacher/CoursesPublished" element={<CoursePublished />} /> */}
            {/* <Route exact path="Teacher/Dashboard" element={<Dashboard />} /> */}
            {/* <Route exact path="Teacher/MessageStudents" element={<MessageStudents />} /> */}
            {/* <Route exact path="Teacher/RegisteredStudents" element={<RegisteredStudents />} /> */}
  
            {/* <Route exact path="Student/MyCourses" element={<MyCourses />} /> */}
            {/* <Route exact path="Student/Dashboard" element={<DashboardStudent />} /> */}
            {/* <Route exact path="Student/MessageTeacher" element={<MessageTeacher />} /> */}
  
  
            <Route exact path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }