import { lazy } from 'react';



const LandingPage = lazy(() => import('./pages/landingpage/LandingPage'));
const SignIn = lazy(() => import('./pages/auth/SignIn'));
const SignUp = lazy(() => import('./pages/auth/SignUp'));
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));
const Appointments = lazy(() => import('./pages/appointments/Appointments'));
const Patients = lazy(() => import('./pages/patients/Patients'));
const PatientDetail = lazy(() => import('./pages/patients/PatientDetailPage'));
const Prescriptions = lazy(() => import('./pages/prescriptions/Prescriptions'));
const FindADoctor = lazy(() => import('./pages/findadoctor/FindADoctor'));
const DoctorDetail = lazy(() => import('./pages/doctordetail/DoctorDetail'));
const Profile = lazy(() => import('./pages/profile/Profile'));
const Staff = lazy(() => import('./pages/staff/Staff'));
const Treatments = lazy(() => import('./pages/treatments/Treatments'));


const routes = [
  { path: '/', component: LandingPage},
  { path: '/signup', component: SignUp },
  { path: '/signin', component: SignIn},
  { path: '/dashboard', component: Dashboard },
  { path: '/appointments', component: Appointments },
  { path: '/patients', component: Patients },
  { path: '/patients/:id', component: PatientDetail},
  { path: '/prescriptions', component: Prescriptions },
  { path: '/find-a-doctor', component: FindADoctor },
  { path: '/find-a-doctor/:id', component: DoctorDetail },
  { path: '/profile', component: Profile },
  { path: '/staff', component: Staff},
  { path: '/treatments', component: Treatments},
];

export default routes;
