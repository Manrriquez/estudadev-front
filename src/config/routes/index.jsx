import { useRoutes } from 'react-router-dom';

// routes
import AuthRoutes from './AuthRoutes';
import Notfound from './Notfound';
import StudentRoutes from './StudentRoutes';
import TeacherRoutes from './TeacherRoutes';
import Welcome from './Welcome';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([AuthRoutes, Notfound, StudentRoutes, TeacherRoutes, Welcome]);
}
