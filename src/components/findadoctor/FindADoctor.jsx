import * as React from 'react';
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Stack from '@mui/joy/Stack';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Typography  from '@mui/joy/Typography';
import Avatar from '@mui/joy/Avatar';
import Star  from '@mui/icons-material/Star';
import { AccessTimeFilled, LocalHospital, LocationOn } from '@mui/icons-material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const dermatologists = [
    {
        id: 1,
        name: "Dr. Emily Johnson",
        clinic: "Dermacare Clinic",
        location: "Gbawe, Accra",
        time: "9:00 AM - 12:00 PM",
        rating: "4.9/5",
        reviews: 300,
        description: "Expert in acne treatment, eczema care, and skin cancer prevention. Provides a holistic approach to skincare."
      },
      {
        id: 2,
        name: "Dr. Michael Owusu",
        clinic: "SkinHealth Center",
        location: "Kumasi, KNUST",
        time: "10:00 AM - 3:00 PM",
        rating: "4.8/5",
        reviews: 250,
        description: "Specialist in skin infections, cosmetic dermatology, and anti-aging treatments. Known for innovative skin therapies."
      },
      {
        id: 3,
        name: "Dr. Sophia Mensah",
        clinic: "Glow Skin Clinic",
        location: "Osu, Accra",
        time: "8:00 AM - 1:00 PM",
        rating: "4.7/5",
        reviews: 280,
        description: "Pioneer in laser treatments, pigmentation solutions, and hair restoration. Uses advanced skincare technologies."
      }
  ];

  
export default function FindADoctor(){
    const [currency, setCurrency] = React.useState('dollar');

    const [data, setData] = React.useState({
        email: '',
        status: 'initial',
      });
    
      const handleSubmit = (event) => {
        event.preventDefault();
        setData((current) => ({ ...current, status: 'loading' }));
        try {
          // Replace timeout with real backend operation
          setTimeout(() => {
            setData({ email: '', status: 'sent' });
          }, 1500);
        } catch (error) {
          setData((current) => ({ ...current, status: 'failure' }));
        }
      };

    return(
        <>
            <Box 
            sx={(theme) => ({ 
                background: '#D1EBFC', 
                p: '3rem', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1rem', 
                justifyContent: 'center', 
                alignItems: 'center',
                [theme.getColorSchemeSelector('dark')]: {
                    background: '#0B0D0E',
                   
                },
            })}
            >
                <Typography level='h3'>Find a doctor near you</Typography>
                <Typography level='body1' 
                    sx={{
                        textAlign: 'center', 
                        paddingX: '1rem', 
                        width: '80%'
                        }}
                >
                    Connect with trusted dermatologists near you for personalised care. Search by location, specialty, or availability to schedule your appointment today.
                </Typography>
                <form onSubmit={handleSubmit} id="demo">
                    <FormControl>
                
                    <Input
                        sx={{ '--Input-decoratorChildHeight': '45px', pl: 0  }}
                        placeholder="Location"
                        type="email"
                        required
                        value={data.email}
                        onChange={(event) =>
                        setData({ email: event.target.value, status: 'initial' })
                        }
                        error={data.status === 'failure'}
                        startDecorator={
                            <React.Fragment>
                                
                                <Select
                                variant="plain"
                                value={currency}
                                onChange={(_, value) => setCurrency(value)}
                                slotProps={{
                                    listbox: {
                                    variant: 'outlined',
                                    },
                                }}
                                sx={{ mr: 0, '&:hover': { bgcolor: 'transparent' } }}
                                >
                                <Option value="dollar">Specialisation</Option>
                                <Option value="baht">Thai baht</Option>
                                <Option value="yen">Japanese yen</Option>
                                </Select>
                                <Divider orientation="vertical" />
                            </React.Fragment>
                        }
                        endDecorator={
                        <>
                        <React.Fragment>
                                <Divider orientation="vertical" />
                                <Select
                                variant="plain"
                                value={currency}
                                onChange={(_, value) => setCurrency(value)}
                                slotProps={{
                                    listbox: {
                                    variant: 'outlined',
                                    },
                                }}
                                sx={{ mr: 0, '&:hover': { bgcolor: 'transparent' } }}
                                >
                                <Option value="dollar">Availability</Option>
                                <Option value="baht">Thai baht</Option>
                                <Option value="yen">Japanese yen</Option>
                                </Select>
                            </React.Fragment>
                            <Button
                            variant="solid"
                            color="primary"
                            loading={data.status === 'loading'}
                            type="submit"
                            sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, paddingX: '2rem' }}
                            >
                                Find
                            </Button>
                            
                        </>
                        }
                    />
                    {data.status === 'failure' && (
                        <FormHelperText
                        sx={(theme) => ({ color: theme.vars.palette.danger[400] })}
                        >
                        Oops! something went wrong, please try again later.
                        </FormHelperText>
                    )}
                    {data.status === 'sent' && (
                        <FormHelperText
                        sx={(theme) => ({ color: theme.vars.palette.primary[400] })}
                        >
                        You are all set!
                        </FormHelperText>
                    )}
                    </FormControl>
                </form>
            
            </Box>
            <Box sx={{p: 2, display: 'flex', justifyContent: 'space-between', gap: '1rem'}}>
                <div style={{width: '45%', display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem'}}>
                    <Typography level='title-lg'>See dermatologists around you</Typography>
                    <MapContainer center={[6.6746, -1.5714]} zoom={13} style={{ height: "100%", width: "100%", borderRadius: '10px' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[6.6746, -1.5714]}>
                            <Popup>
                                <Typography level='body-sm' sx={{fontWeight: 500, color: 'var(--sx-color-primary)'}}>Dr. Emily Johnson - Dermacare Clinic</Typography>
                                <p>Gbawe, Accra</p>
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
                <div className='doctor-list' style={{width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem', padding: '1rem 1.5rem'}}>
                    <Typography level='title-lg' sx={{px: '0.5rem'}}>See top-rated dermatologists</Typography>
                    <Box className="card-container" sx={{ display: "flex", flexDirection: "column", gap: "1rem", height: "450px", overflowY: "auto", padding: '0.5rem' }}>
                    {dermatologists.map((doctor) => (
                        <Box
                        key={doctor.id}
                        sx={(theme) => ({
                            width: "450px",
                            p: 2,
                            display: "flex",
                            flexDirection: "column",
                            gap: ".7rem",
                            borderRadius: "10px",
                            boxShadow: "0px 0px 14px 3px rgba(0, 0, 0, 0.1)",
                            [theme.getColorSchemeSelector("dark")]: {
                            background: "#0B0D0E",
                            },
                        })}
                        >
                        <Typography
                            level="title-md"
                            sx={{
                            display: "flex",
                            gap: "1rem",
                            alignItems: "center",
                            justifyContent: "space-between",
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                            <Avatar />
                            <Typography component="a" href="/find-a-doctor/1" sx={{ color: "var(--sx-color-primary)", textDecoration: 'none'}}>
                                {doctor.name}
                            </Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Star sx={{ color: "gold" }} />
                            {doctor.rating} ({doctor.reviews} reviews)
                            </Box>
                        </Typography>
                        <Typography level="body-sm">{doctor.description}</Typography>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography
                            level="body-sm"
                            sx={{ display: "flex", alignItems: "center", gap: ".5rem", fontWeight: "600" }}
                            >
                            <LocalHospital sx={{ color: "var(--sx-color-primary)" }} /> {doctor.clinic}
                            </Typography>
                            <Typography
                            level="body-sm"
                            sx={{ display: "flex", alignItems: "center", gap: ".5rem", fontWeight: "600" }}
                            >
                            <LocationOn sx={{ color: "var(--sx-color-primary)" }} /> {doctor.location}
                            </Typography>
                        </Box>
                        <Typography
                            level="body-sm"
                            sx={{ display: "flex", alignItems: "center", gap: ".5rem", fontWeight: "600" }}
                        >
                            <AccessTimeFilled sx={{ color: "var(--sx-color-primary)" }} /> {doctor.time}
                        </Typography>
                        <Button variant="outlined" color="primary">
                            Book Appointment
                        </Button>
                        </Box>
                    ))}
                    </Box>
                </div>
            </Box>
        </>
    );
}