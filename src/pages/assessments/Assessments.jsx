import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, List, ListItem, ListItemButton, Typography, Chip, Button } from "@mui/joy";
import CallMade from '@mui/icons-material/CallMade';
import check_mark from "../../assets/icons/check_mark.png"; // Update with correct path
import { KeyboardArrowDown } from "@mui/icons-material";
import Avatar from '@mui/joy/Avatar';
import Star  from '@mui/icons-material/Star';
import { AccessTimeFilled, LocalHospital, LocationOn } from '@mui/icons-material';
import AddAppointmentModal from '../../components/appointments/AddAppointmentModal';


const treatmentSuggestions = {
  "Abrasion, scrape, or scab": [
    "Clean the wound with mild soap and water.",
    "Apply an antibiotic ointment to prevent infection.",
    "Cover with a sterile bandage and keep it dry."
  ],
  "Abscess": [
    "Apply warm compresses to encourage drainage.",
    "Seek medical attention if swelling worsens.",
    "Take prescribed antibiotics if necessary."
  ],
  "Acne": [
    "Use a gentle cleanser to remove excess oil.",
    "Apply benzoyl peroxide or salicylic acid treatments.",
    "Avoid picking or squeezing pimples to prevent scarring."
  ],
  "Acute and chronic dermatitis": [
    "Apply fragrance-free moisturizers regularly.",
    "Use corticosteroid creams for inflammation control.",
    "Avoid known irritants and allergens."
  ],
  "Acute dermatitis, NOS": [
    "Use antihistamines to reduce itching.",
    "Apply a mild topical steroid to affected areas.",
    "Keep skin hydrated with emollients."
  ],
  "Allergic Contact Dermatitis": [
    "Identify and eliminate the allergen exposure.",
    "Apply corticosteroid creams to soothe irritation.",
    "Take oral antihistamines if itching persists."
  ],
  "CD - Contact dermatitis": [
    "Wash the affected area with mild soap and water.",
    "Use barrier creams to protect against irritants.",
    "Apply topical corticosteroids to reduce inflammation."
  ],
  "Cellulitis": [
    "Seek immediate medical care for oral or IV antibiotics.",
    "Elevate the affected limb to reduce swelling.",
    "Keep the area clean and monitor for worsening symptoms."
  ],
  "Chronic dermatitis, NOS": [
    "Maintain regular moisturization to prevent dryness.",
    "Use topical steroids for flare-ups.",
    "Wear soft, breathable fabrics to minimize irritation."
  ],
  "Cutaneous lupus": [
    "Use sun protection to prevent flare-ups.",
    "Apply topical steroids for skin lesions.",
    "Consider immunosuppressants for severe cases."
  ],
  "Cutaneous sarcoidosis": [
    "Use corticosteroid creams for localized lesions.",
    "Monitor for systemic symptoms affecting other organs.",
    "Consider hydroxychloroquine or methotrexate for severe cases."
  ],
  "Drug Rash": [
    "Discontinue the suspected medication under medical supervision.",
    "Use antihistamines to relieve itching.",
    "Apply soothing lotions or corticosteroid creams."
  ],
  "Eczema": [
    "Apply thick, fragrance-free moisturizers regularly.",
    "Use steroid creams for severe itching and inflammation.",
    "Avoid hot showers and harsh soaps."
  ],
  "Erythema multiforme": [
    "Manage underlying infections such as herpes simplex.",
    "Use antihistamines to control itching.",
    "Apply topical corticosteroids for mild cases."
  ],
  "Folliculitis": [
    "Apply warm compresses to reduce inflammation.",
    "Use antibacterial or antifungal washes.",
    "Avoid shaving the affected area until healed."
  ],
  "Granuloma annulare": [
    "Monitor mild cases as they may resolve on their own.",
    "Apply topical corticosteroids for persistent lesions.",
    "Consider cryotherapy for stubborn cases."
  ],
  "Herpes Simplex": [
    "Use antiviral medications like acyclovir or valacyclovir.",
    "Apply cold compresses to relieve discomfort.",
    "Avoid skin-to-skin contact to prevent spreading."
  ],
  "Herpes Zoster": [
    "Start antiviral therapy within 72 hours of rash onset.",
    "Use pain relievers and topical lidocaine patches.",
    "Keep the rash clean and covered to prevent secondary infection."
  ],
  "Hypersensitivity": [
    "Identify and eliminate the triggering allergen.",
    "Use antihistamines to manage symptoms.",
    "Apply corticosteroid creams for skin reactions."
  ],
  "Impetigo": [
    "Keep the affected area clean and covered.",
    "Apply topical antibiotics like mupirocin.",
    "Take oral antibiotics if the infection spreads."
  ],
  "Inflicted skin lesions": [
    "Assess the cause and prevent further trauma.",
    "Apply antiseptic ointments to avoid infection.",
    "Use protective dressings for healing."
  ],
  "Insect Bite": [
    "Apply ice packs to reduce swelling.",
    "Use antihistamines or calamine lotion for itching relief.",
    "Avoid scratching to prevent secondary infection."
  ],
  "Intertrigo": [
    "Keep skin folds dry and clean.",
    "Apply antifungal or antibacterial creams as needed.",
    "Wear breathable clothing to reduce moisture buildup."
  ],
  "Irritant Contact Dermatitis": [
    "Avoid exposure to the irritating substance.",
    "Use barrier creams to protect the skin.",
    "Apply mild corticosteroids for inflammation relief."
  ],
  "Keratosis pilaris": [
    "Use exfoliating creams containing lactic acid or salicylic acid.",
    "Moisturize regularly to soften the skin.",
    "Avoid harsh soaps that may dry out the skin."
  ],
  "Purpura": [
    "Identify and address underlying conditions such as platelet disorders.",
    "Avoid medications that may contribute to bleeding.",
    "Use compression garments if necessary for support."
  ],
  "Rosacea": [
    "Avoid triggers like alcohol, spicy foods, and hot drinks.",
    "Use topical treatments like metronidazole or azelaic acid.",
    "Wear sunscreen daily to prevent flare-ups."
  ],
  "SCC/SCCIS": [
    "Seek immediate dermatological evaluation.",
    "Consider surgical removal or cryotherapy.",
    "Use sunscreen to prevent further sun damage."
  ],
  "Scabies": [
    "Apply prescribed permethrin cream or oral ivermectin.",
    "Wash clothing and bedding in hot water.",
    "Avoid close contact until treatment is complete."
  ],
  "Scar Condition": [
    "Use silicone gel sheets to reduce scar appearance.",
    "Consider laser therapy for persistent scars.",
    "Apply vitamin E or aloe vera for natural healing."
  ],
  "Seborrheic Dermatitis": [
    "Use anti-dandruff shampoos containing ketoconazole or selenium sulfide.",
    "Apply mild steroid creams to affected areas.",
    "Keep the skin moisturized to reduce flaking."
  ],
  "Skin and soft tissue atypical mycobacterial infection": [
    "Take prescribed antibiotics such as clarithromycin.",
    "Consider surgical debridement for severe cases.",
    "Monitor for systemic involvement."
  ],
  "Stasis Dermatitis": [
    "Elevate legs to reduce swelling.",
    "Apply compression stockings to improve circulation.",
    "Use corticosteroid creams to reduce inflammation."
  ],
  "Syphilis": [
    "Seek immediate medical treatment with penicillin injections.",
    "Avoid sexual contact until treatment is completed.",
    "Monitor for neurological or systemic complications."
  ],
  "Tinea": [
    "Use antifungal creams or oral medications.",
    "Keep the affected area dry and clean.",
    "Avoid sharing personal items to prevent spread."
  ],
  "Tinea Versicolor": [
    "Apply antifungal shampoos or creams.",
    "Avoid excessive heat and sweating.",
    "Use oral antifungals for severe cases."
  ],
  "Urticaria": [
    "Take antihistamines to control itching and swelling.",
    "Avoid known allergens and triggers.",
    "Use cool compresses for symptom relief."
  ],
  "Verruca vulgaris": [
    "Apply salicylic acid or cryotherapy treatments.",
    "Use duct tape occlusion therapy to aid removal.",
    "Consider laser or surgical removal for persistent cases."
  ],
  "Viral Exanthem": [
    "Manage symptoms with antihistamines and fever reducers.",
    "Ensure adequate hydration and rest.",
    "Monitor for signs of complications."
  ],
  "Xerosis": [
    "Use thick moisturizers containing ceramides or urea.",
    "Avoid hot showers and harsh soaps.",
    "Stay hydrated to maintain skin moisture."
  ]
};


export default function Assessment() {
  const location = useLocation();
  const results = location.state?.results || {};
  const [open, setOpen] = useState(true);
  const treatments = treatmentSuggestions[results.condition] || [];
  const [staff, setStaff] = React.useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [listItems, setListItems] = React.useState([]);
  const [patient, setPatient] = React.useState(null);
  
  React.useEffect(() => {
    const fetchPatientData = async () => {
      
      try {
        const token = localStorage.getItem('token');
        if (token){
          const response = await fetch('https://dermacare-group.vercel.app/accounts/me/', {
            headers: { Authorization: `Token ${token}` },// Ensure session-based authentication if needed
          });
          if (!response.ok) {
            throw new Error('Failed to fetch patient data');
          }
          const data = await response.json();
          setPatient(data);
          console.log("Patient Data:", data);
        }
        
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };
  
    fetchPatientData();
  }, []);

  
  React.useEffect(() => {
      // Fetch patient data from the backend
      const fetchStaff = async () => {
        try {
          const response = await fetch('https://dermacare-group.vercel.app/accounts/doctors/'); // Adjust the API endpoint as needed
          const data = await response.json();
          setStaff(data);
          console.log(data)
        } catch (error) {
          console.error('Failed to fetch staff data:', error);
        }
      };
  
      fetchStaff();
    }, []);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const handleSubmitAppointment = (newAppointment) => {
    console.log("New Appointment Data:", newAppointment)
    setListItems(prevItems => {
      console.log("Previous Items:", prevItems);

      const doctorExists = prevItems.some(item => item.staff === newAppointment.staff);
      let updatedItems;

      if (doctorExists) {
        // If doctor exists, update appointments
        updatedItems = prevItems.map(item => {
            if (item.staff === newAppointment.doctor) {
                return {
                    ...item,
                    appointments: [...item.appointments, newAppointment]
                };
            }
            return item;
        });
      }else {
          // If doctor does not exist, add new doctor with the appointment
          updatedItems = [
              ...prevItems,
              {
                id: newAppointment.id, // Generate or fetch proper ID
                staff: newAppointment.doctor,
                avatar: '', // Provide default or fetched avatar
                available: '', // Provide default or fetched availability
                appointments: [newAppointment]
              }
          ];
      }
      console.log("Updated Items:", updatedItems);
      return updatedItems;
    });
    handleClose();
};
  return (
    <div style={{padding: '0 2rem', height: '100%', display: 'flex', flexDirection: 'column'}}>
      <h2>Skin Analysis Results</h2>
     <div className="assessments" style={{display: 'flex', height: '70vh'}}>
      <Box sx={{width: "50%"}}>
        
          {results.condition ? (
            <div>
              <p style={{display: 'flex', alignItems: 'center', gap: '.5rem'}}><strong>Condition:</strong> <Typography level="body-md" sx={{fontWeight: 500}} color="success">{results.condition}</Typography></p>
              <p><strong>Confidence:</strong> {results.confidence ? `${(results.confidence ).toFixed(2)}%` : "N/A"}</p>


              {/* Dropdown Section */}
              <ListItem onClick={() => setOpen(!open)} sx={{ cursor: "pointer" }}>
                <Typography
                  level="inherit"
                sx={[
                  open
                    ? { fontWeight: "bold", color: "text.primary" }
                    : { fontWeight: null, color: "inherit" },
                  {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '.5rem'
                  }
                ]}
                  
                >
                  <KeyboardArrowDown
                                    sx={{
                                    transform: open ? 'initial' : 'rotate(-90deg)',
                                    }}
                                />
                  Recommended Actions
                </Typography>
                <Typography component="span" sx={{ml: '.5rem', fontWeight: 600}} level="body-xs">
                  {treatments.length}
                </Typography>
              </ListItem>

              {open && (
                <List sx={{ "--ListItem-paddingY": "5px" }}>
                  {treatments.map((suggestion, index) => (
                    <ListItem key={index}>
                      <ListItemButton sx={{ fontSize: ".8rem", paddingLeft: "30px" }}>
                        <img style={{ width: "15px" }} src={check_mark} alt="" />
                        {suggestion}
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              )}
            </div>
          ) : (
            <p>No results available.</p>
          )}
      </Box>
      <div className='doctor-list' style={{width: '50%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem', padding: '1rem 1.5rem'}}>
          <Typography level='title-lg' sx={{px: '0.5rem'}}>See top-rated dermatologists</Typography>
          <Box className="card-container" sx={{ display: "flex", flexDirection: "column", gap: "1rem", height: "450px", overflowY: "auto", padding: '0.5rem' }}>
          {staff.map((doctor) => (
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
                  <Box sx={{ display: "flex", alignItems: "center", gap: "1rem", width: '60%' }}>
                    <Avatar src={doctor.avatar} />
                    <Typography component="a" href="/find-a-doctor/1" sx={{ color: "var(--sx-color-primary)", textDecoration: 'none'}}>
                        {doctor.user.firstname} {doctor.user.lastname}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", fontSize: '.9rem' }}>
                    <Star sx={{ color: "gold" }} />
                    4.9 (5 reviews)
                  </Box>
              </Typography>
              <Typography level="body-sm">{doctor.specialization}</Typography>
              
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                  level="body-sm"
                  sx={{ display: "flex", alignItems: "center", gap: ".5rem", fontWeight: "600" }}
                  >
                  <LocalHospital sx={{ color: "var(--sx-color-primary)" }} /> Dermacare
                  </Typography>
                  <Typography
                  level="body-sm"
                  sx={{ display: "flex", alignItems: "center", gap: ".5rem", fontWeight: "600" }}
                  >
                  <LocationOn sx={{ color: "var(--sx-color-primary)" }} /> KNUST, Ayeduase
                  </Typography>
              </Box>
              <Typography
                  level="body-sm"
                  sx={{ display: "flex", alignItems: "center", gap: "2rem", fontWeight: "600" }}
              >
                  <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
                    <AccessTimeFilled sx={{ color: "var(--sx-color-primary)" }} /> Working days:  
                  </div> 
                  <div style={{display: 'flex', alignItems: 'center', gap: '.5rem'}}>
                    {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, index) => (
                                        <Chip key={index} size="sm" color={doctor.working_days.includes(day) ? 'primary' : 'neutral'} variant="solid">
                                          {day.charAt(0)}
                                        </Chip>
                                      ))}
                  </div>
              </Typography>
              <Button variant="outlined" color="primary" onClick={handleOpen}>
                  Book Appointment
              </Button>
              </Box>
          ))}
          </Box>
      </div>
     </div>
     
    <Box sx={{ padding: "0rem", alignSelf: 'flex-end' }}>
      <Typography variant="h6" color="danger" sx={{ fontWeight: "bold" }}>
        Important Notice !!
      </Typography>
      <Typography variant="body" level="body-sm" sx={{color: 'darkred'}}>
        This assessment is AI-generated and may not be 100% accurate. For a precise diagnosis, we recommend 
        consulting with a medical professional. Book an appointment with one of our specialists for further evaluation.
      </Typography>
        
    </Box>

        <AddAppointmentModal open={modalOpen} onClose={handleClose} onSubmit={handleSubmitAppointment} preselectedPatient={patient} />
      
    </div>
  );
}
