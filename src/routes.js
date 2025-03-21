import { lazy } from 'react';



const LandingPage = lazy(() => import('./pages/landingpage/LandingPage'));
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));
const FindADoctor = lazy(() => import('./pages/findadoctor/FindADoctor'));
const DoctorDetail = lazy(() => import('./pages/doctordetail/DoctorDetail'));

const routes = [
  { path: '/', component: LandingPage},
  { path: '/dashboard', component: Dashboard },
  { path: '/find-a-doctor', component: FindADoctor },
  { path: '/find-a-doctor/:id', component: DoctorDetail },
  
];

export default routes;
