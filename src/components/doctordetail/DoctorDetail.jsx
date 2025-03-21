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
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Avatar from '@mui/joy/Avatar';
import Star  from '@mui/icons-material/Star';
import { AccessTimeFilled, LocalHospital, LocationOn, Mail, Phone } from '@mui/icons-material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Silvia from '../../assets/avatar/Silvia.jpg';
import doctorpic from '../../assets/avatar/doctorpic.jpeg';
const dermatologists = [
    {
        id: 1,
        name: "Dr. Winifred Anokye",
        clinic: "Dermacare Clinic",
        location: "Gbawe, Accra",
        time: "9:00 AM - 12:00 PM",
        rating: "4.9/5",
        reviews: 300,
        description: "Expert in acne treatment, eczema care, and skin cancer prevention. Provides a holistic approach to skincare.",
        phonenumber: "+233 55 555 5555",
        email: "anokyewinifred9@gmail.com"
        
      },

  ];

  
export default function DoctorDetail(){
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
        <Box sx={{
            px: { xs: 2, md: 4 },
            pt: {
            xs: 'calc(12px + var(--Header-height))',
            sm: 'calc(12px + var(--Header-height))',
            md: 2,
            },
            pb: { xs: 2, sm: 2, md: 3 },
        }}>
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
                Find A Doctor
                </Link>
                <Typography fontSize={12} fontWeight={500}>1</Typography>
            </Breadcrumbs>
            </Box>

            
            <Box sx={{p: 2, display: 'flex', justifyContent: 'space-between', gap: '1rem'}}>
                
                
                    
                
            {dermatologists.map((doctor) => (
                        <Box
                        key={doctor.id}
                        sx={(theme) => ({
                            width: "100%",
                            height: "350px",
                            p: 2,
                            display: "flex",
                            flexDirection: "row",
                            gap: "1.5rem",
                            borderRadius: "10px",
                            boxShadow: "0px 0px 14px 3px rgba(0, 0, 0, 0.1)",
                            [theme.getColorSchemeSelector("dark")]: {
                            background: "#0B0D0E",
                            },
                        })}
                        >
                            <div className='doctor-img' style={{width: '30%', height: '100%'}}>
                                <img src={doctorpic} alt="doctor" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                            </div>
                            <div className='doctor-info' style={{display: 'flex', flexDirection: 'column', gap: '1rem', width: '60%'}}>
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
                                    
                                        <Typography level='h3' sx={{ color: "var(--sx-color-primary)", fontSize: "1.5rem" }}>
                                            {doctor.name}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                    <Star sx={{ color: "gold" }} />
                                    {doctor.rating} ({doctor.reviews} reviews)
                                    </Box>
                                </Typography>
                                <Box sx={{ display: "flex", alignItems: 'center', gap: '4rem', mt: "1rem"}}>
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
                                    <Typography
                                    level="body-sm"
                                    sx={{ display: "flex", alignItems: "center", gap: ".5rem", fontWeight: "600" }}
                                    >
                                        <AccessTimeFilled sx={{ color: "var(--sx-color-primary)" }} /> {doctor.time}
                                    </Typography>
                                </Box>
                                <Typography level="body-sm">{doctor.description}</Typography>
                                <Typography level="body-sm" sx={{fontWeight: '600', mt: '2rem'}}>Contact Information</Typography>
                                <div style={{display: 'flex', gap: '3.5rem'}}>
                                    <Typography
                                        level="body-sm"
                                        sx={{ display: "flex", alignItems: "center", gap: ".5rem", fontWeight: "500" }}
                                        >
                                            <Phone sx={{ color: "var(--sx-color-primary)" }} /> {doctor.phonenumber}
                                    </Typography>
                                    <Typography
                                        level="body-sm"
                                        sx={{ display: "flex", alignItems: "center", gap: ".5rem", fontWeight: "500" }}
                                        >
                                            <Mail sx={{ color: "var(--sx-color-primary)" }} /> {doctor.email}
                                    </Typography>
                                </div>
                                <Button variant="outlined" color="primary">
                                    Book Appointment
                                </Button>
                            </div>
                        </Box>
                    ))}
               

            </Box>
        </Box>
    );
}