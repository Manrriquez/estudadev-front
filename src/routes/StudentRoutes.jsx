import { lazy } from 'react';

import Loadable from '../components/Loading/Loadable';
import MainLayout from '../components/Layout/Index';

const DashboardDefault = Loadable(lazy(() => import('../pages/Student/Dashboard/Index')));
const Courses = Loadable(lazy(() => import('../pages/Student/Courses/Index')));
const MessageTeacher = Loadable(lazy(() => import('../pages/Student/MessageTeacher/Index')));
const Profile = Loadable(lazy(() => import('../pages/Student/Profile/Index')));
const ResetPassword = Loadable(lazy(() => import('../pages/Student/ResetPassword/Index')));
const DeleteAccount = Loadable(lazy(() => import('../pages/Student/DeleteAccount/Index')));


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
        {
            children: [
                {
                    path: 'Configuration/Profile',
                    element: <Profile />
                }
            ]
        },
        {
            children: [
                {
                    path: 'Configuration/ResetPassword',
                    element: <ResetPassword />
                }
            ]
        },
        {
            children: [
                {
                    path: 'Configuration/DeleteAccount',
                    element: <DeleteAccount />
                }
            ]
        },
    ]
};

export default StudentRoutes;
