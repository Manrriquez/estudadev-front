import { lazy } from 'react';

import Loadable from '../../components/Loading/Loadable';
import MainLayout from '../../components/Layout/Index';

const Welcome = Loadable(lazy(() => import('../../pages/Welcome/Index')));


const StudentRoutes = {
    path: '/',
    element: <Welcome />,
};

export default StudentRoutes;
