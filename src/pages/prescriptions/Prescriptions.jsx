import * as React from 'react';
import Box from '@mui/joy/Box';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import PrescriptionsTable from '../../components/prescriptions/PrescriptionsTable';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Button from '@mui/joy/Button';
import AddPrescriptionModal from '../../components/prescriptions/AddPrescriptionModal';


export default function Prescriptions() {
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  const handleSubmitPrescription = (newAppointment) => {
    
    
    handleClose();
};
  return (
    <Box
      component="main"
      className="MainContent"
      sx={{
        px: { xs: 2, md: 6 },
        pt: {
          xs: 'calc(12px + var(--Header-height))',
          sm: 'calc(12px + var(--Header-height))',
          md: 3,
        },
        pb: { xs: 2, sm: 2, md: 3 },
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
        height: '100dvh',
        gap: 1,
      }}
    >
      {/* Breadcrumbs */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
            Clinic
          </Link>
          <Typography color="primary" fontWeight={500} fontSize={12}>Prescriptions</Typography>
        </Breadcrumbs>
      </Box>
      <Box
        sx={{
          display: 'flex',
          mb: 2,
          gap: 1,
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'start', sm: 'start' },
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <Typography level="h2" component="h1">
          Prescriptions
        </Typography>
        <Button
          color="primary"
          startDecorator={<AddRoundedIcon />}
          size="sm"
          onClick={handleOpen}
        >
          Add Prescription
        </Button>
        
      </Box>
      {/* Prescription Content */}
      <PrescriptionsTable/>
      <AddPrescriptionModal open={modalOpen} onClose={handleClose} onSubmit={handleSubmitPrescription} />
    </Box>
  );
}