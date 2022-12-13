import { lazy } from 'react';

import Loadable from '../../components/Loading/Loadable';
import MainLayout from '../../components/Layout/Index';

const DashboardDefault = Loadable(lazy(() => import('../../pages/Student/Dashboard/Index')));
const Courses = Loadable(lazy(() => import('../../pages/Student/Courses/Index')));
const MessageTeacher = Loadable(lazy(() => import('../../pages/Student/MessageTeacher/Index')));
const NotFound = Loadable(lazy(() => import('../../pages/NotFound/Index')));


const StudentRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'student',
            children: [
                {
                    path: 'student-courses',
                    element: <Courses />
                }
            ]
        },
        {
            path: 'student',
            children: [
                {
                    path: 'student-message',
                    element: <MessageTeacher />
                }
            ]
        },
    ]
};

export default StudentRoutes;
