import * as React from 'react';
import axios from 'axios'; // Import axios for API requests
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Option from '@mui/joy/Option';
import Input from '@mui/joy/Input';
import Box from '@mui/joy/Box'
import Stack from '@mui/joy/Stack';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import ModalClose from '@mui/joy/ModalClose';
import Select from '@mui/joy/Select';
import Autocomplete from '@mui/joy/Autocomplete';
import AlertVariousStates from '../AlertVariousStates';



export default function AddAppointmentModal({
  open,
  onClose,
  onSubmit,
  preselectedDoctor,
  preselectedPatient,
  patientFirstName = '',
  patientLastName = '',
}) {
  const [patients, setPatients] = React.useState([]);
  const [doctors, setDoctors] = React.useState([]);
  const [treatments, setTreatments] = React.useState([]);
  const [selectedPatient, setSelectedPatient] = React.useState();
  const [selectedDoctor, setSelectedDoctor] = React.useState(preselectedDoctor);
  const [selectedTreatment, setSelectedTreatment] = React.useState(null);
  const [price, setPrice] = React.useState('');
  const [firstName, setFirstName] = React.useState(patientFirstName || '');
  const [lastName, setLastName] = React.useState(patientLastName || '');
  const [date, setDate] = React.useState('');
  const [alert, setAlert] = React.useState(null);
  const isReadOnly = firstName !== '' && lastName !== '';

  React.useEffect(() => {
    // Fetch patients
    axios.get('https://dermacare-backend.up.railway.app/accounts/patients/')
        .then(response => {
            setPatients(response.data.map((patient) => ({
                id: patient.id,
                label: `${patient.user.firstname} ${patient.user.lastname}`,
            })));
        })
        .catch(error => console.error('Error fetching patients:', error));

    // Fetch doctors
    axios.get('https://dermacare-backend.up.railway.app/accounts/doctors/')
    .then(response => {
        setDoctors(response.data.map((doc) => ({
            id: doc.id,
            label: `Dr. ${doc.user.firstname} ${doc.user.lastname}`,
            
        })));
    })

    
    .catch(error => console.error('Error fetching doctors:', error));
    // Fetch treatments
    axios.get('https://dermacare-backend.up.railway.app/clinic/treatments')
        .then(response => {
            setTreatments(response.data.map((treatment) => ({
                value: treatment.id,
                label: treatment.name,
                price: treatment.price,
            })));
        })
        .catch(error => console.error('Error fetching treatments:', error));
  }, []);
  
  React.useEffect(() => {
    if (preselectedDoctor) {
      console.log(preselectedDoctor)
      setSelectedDoctor(preselectedDoctor);
    }
    
  }, [preselectedDoctor]);

  React.useEffect(() => {
    if (preselectedPatient) {
      setSelectedPatient({
        id: preselectedPatient.id,
        label: `${preselectedPatient.firstname} ${preselectedPatient.lastname}`,
    });
    }
  }, [preselectedPatient]);
  React.useEffect(() => {
    setFirstName(patientFirstName);
    setLastName(patientLastName);
  }, [patientFirstName, patientLastName]);

  console.log(selectedPatient)
  const handleTreatmentChange = (event, newValue) => {
    const selected = treatments.find(treatment => treatment.value === newValue) || null;
    setSelectedTreatment(selected);
    setPrice(selected?.price || '');
  };

  const handleFormSubmit = async () => {
    const appointmentData = {
        staff: selectedDoctor?.id,
        treatment: selectedTreatment?.value,
        appointment_date: date,
        patient: selectedPatient?.id,
        price: selectedTreatment?.price
    };
    console.log(appointmentData)
    try {
        const response = await axios.post('https://dermacare-backend.up.railway.app/clinic/appointments/add/', appointmentData);
        console.log('Appointment created:', response.data);

        // Notify parent or update state here
        onSubmit(response.data);
        
        // Clear form fields
        setSelectedDoctor(undefined);
        setSelectedPatient(undefined);
        setSelectedTreatment(null);
        setPrice('');
        setDate('');

        // Close modal
        onClose();
        window.location.reload()
    } catch (error) {
        console.error('Error creating appointment:', error);
        setAlert({ 
            message: 'An error occurred while creating the appointment', 
            type: 'error' 
        });
    }
};


  return (
    <React.Fragment>
      <Modal keepMounted open={open} onClose={onClose} sx={{}}>
        <ModalDialog sx={{ width: { xs: '100%', sm: '40%' }, mt: { xs: '5%', sm: 0 } }}>
          <DialogTitle sx={{ fontSize: '1.2rem' }}>
            Add Appointment
            <ModalClose variant="plain" sx={{ m: 1 }} />
          </DialogTitle>
          {alert && (
          <AlertVariousStates
            message={alert.message}
            type={alert.type}
          />
        )}
          <DialogContent sx={{ marginTop: '1rem', pb: { xs: '1rem' } }}>
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <Stack spacing={1}>
                
                <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: { sm: 'row', xs: 'column', md: 'row' }, gap: 2 }}>
                  
                  <FormControl>
                    <FormLabel>Patient</FormLabel>
                    <Autocomplete
                      value={selectedPatient}
                      onChange={(event, newValue) => setSelectedPatient({
                        id: newValue.id,
                        label: newValue.label
                      })}
                      size="sm"
                      options={patients.map((option) => option)}
                      slotProps={{
                        input: {
                          placeholder: 'Select Patient',
                        },
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>New patient?</FormLabel>
                    <Button color="primary" size="sm" onClick={() => window.location.href="/patients"}>
                      Add patient
                    </Button>
                  </FormControl>
                </Box>
              </Stack>

              <Stack spacing={1} direction={{ sm: 'row' }} flexWrap="wrap" sx={{ gap: 2 }}>
                <FormControl>
                  <FormLabel>Doctor</FormLabel>
                  <Autocomplete
                    value={selectedDoctor}
                    onChange={(event, newValue) => setSelectedDoctor({
                      id: newValue.id,
                      label: newValue.label
                    })}
                    size="sm"
                    options={doctors}
                    slotProps={{
                      input: {
                        placeholder: 'Select doctor',
                      },
                    }}
                  />
                </FormControl>

                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Treatment</FormLabel>
                  <Select
                    size="sm"
                    placeholder="Select Treatment"
                    value={selectedTreatment?.value || ''}
                    onChange={(event, newValue) => handleTreatmentChange(event, newValue)}
                  >
                    {treatments.map((treatment) => (
                      <Option key={treatment.value} value={treatment.value}>
                        {treatment.label}
                      </Option>
                    ))}
                  </Select>
                </FormControl>
              </Stack>

              <Stack spacing={1} direction={{ sm: 'row', xs: 'column', md: 'row' }}>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Price</FormLabel>
                  <Input startDecorator={'$'} size="sm" value={price} readOnly placeholder="Price" />
                </FormControl>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Time</FormLabel>
                  <Input size="sm" type="datetime-local" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
                </FormControl>
              </Stack>

              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button color="neutral" size="sm" sx={{ width: "50%" }} onClick={onClose}>
                  Cancel
                </Button>
                <Button color="primary" size="sm" sx={{ width: '50%' }} onClick={handleFormSubmit}>
                  Submit
                </Button>
              </Box>
            </Stack>
          </DialogContent>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
