import { lazy } from 'react';

import Loadable from '../../components/Loading/Loadable';
import MainLayout from '../../components/Layout/Index';

const DashboardDefault = Loadable(lazy(() => import('../../pages/Student/Dashboard/Index')));
const Courses = Loadable(lazy(() => import('../../pages/Student/Courses/Index')));
const MessageTeacher = Loadable(lazy(() => import('../../pages/Student/MessageTeacher/Index')));


const StudentRoutes = {
    path: '/Student',
    element: <MainLayout />,
    children: [
        {
            path: 'Dashboard',
            element: <DashboardDefault />
        },
        {
            children: [
                {
                    path: 'Courses',
                    element: <Courses />
                }
            ]
        },
        {
            children: [
                {
                    path: 'Message',
                    element: <MessageTeacher />
                }
            ]
        },
    ]
};

export default StudentRoutes;
