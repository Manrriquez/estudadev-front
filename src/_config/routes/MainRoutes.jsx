import { lazy } from 'react';

// project imports
// import MainLayout from 'layout/MainLayout';
import Welcome from '../../pages/Welcome/Index';
// import Loadable from 'ui-component/Loadable';
import Loadable from '../../components/Loading/Loadable';
import MainLayout from '../../components/Layout/Index';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('../../pages/Student/Dashboard/Index')));
const Courses = Loadable(lazy(() => import('../../pages/Student/Courses/Index')));
const MessageTeacher = Loadable(lazy(() => import('../../pages/Student/MessageTeacher/Index')));
const NotFound = Loadable(lazy(() => import('../../pages/NotFound/Index')));

// utilities routing
// const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
// const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
// const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
// const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
// const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
// const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
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
        {
            path: '*',
            children: [
                {
                    path: '*',
                    element: <NotFound />
                }
            ]
        },
        // {
        //     path: 'utils',
        //     children: [
        //         {
        //             path: 'util-shadow',
        //             element: <UtilsShadow />
        //         }
        //     ]
        // },
        // {
        //     path: 'icons',
        //     children: [
        //         {
        //             path: 'tabler-icons',
        //             element: <UtilsTablerIcons />
        //         }
        //     ]
        // },
        // {
        //     path: 'icons',
        //     children: [
        //         {
        //             path: 'material-icons',
        //             element: <UtilsMaterialIcons />
        //         }
        //     ]
        // },
        // {
        //     path: 'sample-page',
        //     element: <SamplePage />
        // }
    ]
};

export default MainRoutes;
