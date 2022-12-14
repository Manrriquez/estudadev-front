import { lazy } from 'react';

import Loadable from '../components/Loading/Loadable';

const NotFound = Loadable(lazy(() => import('../pages/NotFound/Index')));


const Notfound = {
    path: '*',
    element: <NotFound />,
};

export default Notfound;
