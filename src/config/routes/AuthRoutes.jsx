import { lazy } from 'react';

import Loadable from '../../components/Loading/Loadable';
import BackgroundAnimated from '../../components/BackgroundAnimated/Index';

const Login = Loadable(lazy(() => import('../../pages/Auth/Login/Index')));
const Register = Loadable(lazy(() => import('../../pages/Auth/Register/Index')));


const StudentRoutes = {
    path: '/auth',
    element: <BackgroundAnimated />,
    children: [
        {
            path: 'login',
            element: <Login />
        },
        {
            path: 'register',
            element: <Register />
        },

    ]
};

export default StudentRoutes;