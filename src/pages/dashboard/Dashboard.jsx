import * as React from 'react';
import Box from '@mui/joy/Box';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import PatientDashboard from '../../components/dashboard/PatientDashboard';
import DoctorDashboard from '../../components/dashboard/DoctorDashboard';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate(); 
  React.useEffect(() => {
    // Check localStorage or context for authentication state
    const token = localStorage.getItem('token'); // Adjust based on your auth implementation
    if (!token) {
      navigate('/signin'); // Redirect to dashboard if token exists
    }
  }, [navigate]);

  const { user, loading, error } = useAuth();

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error fetching user data</Typography>;

  const renderDashboardContent = () => {
   
    if (!user) return <Typography>Loading...</Typography>;

    switch (user.role) {
      case 'patient':
        return <PatientDashboard />;
      case 'medical':
        return <DoctorDashboard />;
      default:
        return <Typography></Typography>
        
    }
  };

  return (
    <Box
      component="main"
      className="MainContent"
      sx={{
        px: { xs: 2, md: 4 },
        pt: {
          xs: 'calc(12px + var(--Header-height))',
          sm: 'calc(12px + var(--Header-height))',
          md: 2,
        },
        pb: { xs: 2, sm: 2, md: 3 },
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
        height: '100dvh',
        gap: '.5rem',

        overflow: 'hidden',
      }}
    >
      {/* Breadcrumbs */}
      <Box sx={{ display: 'flex', alignItems: 'center', height: '10%' }}>
        <Breadcrumbs
          size="sm"
          aria-label="breadcrumbs"
          separator={<ChevronRightRoundedIcon fontSize="small" />}
          sx={{ pl: 0 }}
        >
          <Link
            underline="none"
            color="neutral"
            href="#some-link"
            aria-label="Home"
          >
            <HomeRoundedIcon />
          </Link>
          <Link
            underline="hover"
            color="neutral"
            href="#some-link"
            fontSize={12}
            fontWeight={500}
          >
            Dashboard
          </Link>
        </Breadcrumbs>
      </Box>
      <Box
        sx={{
          display: 'flex',
          mb: 1,
          gap: '0rem',
          flexDirection: 'column',
          alignItems: { xs: 'start', sm: 'start' },
          flexWrap: 'nowrap',
          justifyContent: 'center',
          height: '10%'
        }}
      >
        <Typography level="h4" component="h4" sx={{margin: 0, padding: 0}}>
          {(() => {
            const currentHour = new Date().getHours();
            let greeting;

            if (currentHour < 12) {
              greeting = 'Good morning';
            } else if (currentHour < 18) {
              greeting = 'Good afternoon';
            } else {
              greeting = 'Good evening';
            }

            return `${greeting}, ${user.firstname}!`;
          })()}
        </Typography>

        <Typography level="body-sm" component="p" sx={{margin: 0, padding: 0}}>
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",  
            year: "numeric",  
            month: "long",    
            day: "numeric"
          })}
        </Typography>
      </Box>

      {/* Dashboard Content */}
      {renderDashboardContent()}
    </Box>
  );
}
