import SinglePage from '../pages/SinglePage/SinglePage';
import Error from '../pages/Error/Error';

export const allRoutes = [
  { path: '/singlePage', component: SinglePage },
  { path: '*', component: Error },
];
