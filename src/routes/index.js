// Layout
import { HeaderOnly } from '~/components/Layout';

// Pages

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profiter from '~/pages/Profiter';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profiter', component: Profiter },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
