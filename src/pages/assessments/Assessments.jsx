import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, List, ListItem, ListItemButton, Typography, Card, CardContent, Button } from "@mui/joy";
import CallMade from '@mui/icons-material/CallMade';
import check_mark from "../../assets/icons/check_mark.png"; // Update with correct path
import { KeyboardArrowDown } from "@mui/icons-material";
import Avatar from '@mui/joy/Avatar';
import Star  from '@mui/icons-material/Star';
import { AccessTimeFilled, LocalHospital, LocationOn } from '@mui/icons-material';
const treatmentSuggestions = {
  "Acne": [
    "Use a gentle cleanser to remove excess oil.",
    "Apply benzoyl peroxide or salicylic acid treatments.",
    "Avoid picking or squeezing pimples to prevent scarring.",
    "Use a non-comedogenic moisturizer and sunscreen."
  ],
  "Actinic keratosis": [
    "Apply prescription creams like 5-fluorouracil or imiquimod.",
    "Use cryotherapy (liquid nitrogen) to remove lesions.",
    "Avoid excessive sun exposure and wear protective clothing.",
    "Get regular dermatological check-ups for early detection."
  ],
  "Atopic Dermatitis": [
    "Moisturize frequently with fragrance-free creams.",
    "Use anti-itch creams containing hydrocortisone.",
    "Avoid harsh soaps and known allergens.",
    "Take short, lukewarm showers instead of hot baths."
  ],
  "Basal Cell Carcinoma": [
    "Seek immediate medical consultation.",
    "Consider Mohs surgery for precise removal.",
    "Radiation therapy may be required for large tumors.",
    "Use high-SPF sunscreen to prevent recurrence."
  ],
  "Benign keratosis": [
    "Use moisturizing creams to prevent dryness.",
    "Cryotherapy or laser treatments can remove lesions.",
    "Avoid excessive sun exposure.",
    "Consult a dermatologist if lesions change in size or color."
  ],
  "Bullous": [
    "Apply topical corticosteroids to reduce inflammation.",
    "Avoid friction or irritation to affected areas.",
    "Use antibiotics if blisters become infected.",
    "Keep blisters clean and covered with sterile dressings."
  ],
  "Candidiasis": [
    "Apply antifungal creams like clotrimazole or miconazole.",
    "Keep affected areas dry and clean.",
    "Avoid tight clothing to reduce moisture buildup.",
    "Maintain good hygiene and use probiotics if needed."
  ],
  "Chicken Pox": [
    "Take antihistamines to reduce itching.",
    "Apply calamine lotion to soothe the skin.",
    "Avoid scratching to prevent scarring and infection.",
    "Get plenty of rest and stay hydrated."
  ],
  "Cowpox": [
    "Apply antiseptic ointments to prevent infection.",
    "Keep lesions clean and covered with bandages.",
    "Avoid contact with infected animals or materials.",
    "Monitor for complications and seek medical care if needed."
  ],
  "Dermatofibroma": [
    "No treatment is required unless bothersome.",
    "Cryotherapy or surgical removal for cosmetic concerns.",
    "Avoid excessive irritation to the area.",
    "Regularly monitor for changes in size or color."
  ],
  "DrugEruption": [
    "Discontinue the offending medication under medical supervision.",
    "Use antihistamines to reduce itching and rash.",
    "Apply corticosteroid creams for inflammation.",
    "Seek immediate medical help if symptoms worsen."
  ],
  "Eczema": [
    "Use hypoallergenic moisturizers regularly.",
    "Apply prescription corticosteroid creams as needed.",
    "Avoid harsh soaps and known allergens.",
    "Wear soft, breathable fabrics to reduce irritation."
  ],
  "Infestations_Bites": [
    "Apply antiseptic cream to prevent infection.",
    "Use anti-itch lotions or antihistamines.",
    "Avoid scratching to prevent further irritation.",
    "Identify and eliminate the source of infestation."
  ],
  "Lupus": [
    "Use anti-inflammatory medications as prescribed.",
    "Avoid excessive sun exposure and use sunscreen.",
    "Maintain a healthy diet and exercise routine.",
    "Manage stress levels to prevent flare-ups."
  ],
  "Measles": [
    "Get plenty of rest and stay hydrated.",
    "Take vitamin A supplements if recommended.",
    "Use fever-reducing medications like acetaminophen.",
    "Avoid close contact with others to prevent spreading."
  ],
  "Melanocytic Nevi": [
    "Monitor for changes in size, shape, or color.",
    "Avoid excessive sun exposure.",
    "Consider removal if moles become atypical.",
    "Regular dermatological check-ups are recommended."
  ],
  "Melanoma": [
    "Seek immediate medical attention for early treatment.",
    "Surgical removal is often required.",
    "Targeted therapies may be necessary for advanced cases.",
    "Regular skin screenings to detect recurrence."
  ],
  "MonkeyPox": [
    "Isolate to prevent spreading.",
    "Manage fever with over-the-counter medications.",
    "Keep skin lesions clean and dry.",
    "Hydrate and rest to support recovery."
  ],
  "Psoriasis Lichen Planus": [
    "Apply topical corticosteroids to reduce inflammation.",
    "Use coal tar or salicylic acid-based shampoos for scalp psoriasis.",
    "Phototherapy (light therapy) may help manage symptoms.",
    "Moisturize regularly to prevent dryness."
  ],
  "Rosacea": [
    "Use gentle skincare products to avoid irritation.",
    "Avoid triggers like alcohol and spicy foods.",
    "Apply prescribed topical treatments like metronidazole.",
    "Wear sunscreen daily to prevent flare-ups."
  ],
  "Seborrheic Keratoses": [
    "No treatment is necessary unless symptomatic.",
    "Cryotherapy or laser therapy can remove lesions.",
    "Regular monitoring for changes in appearance.",
    "Avoid excessive sun exposure."
  ],
  "SkinCancer": [
    "Immediate medical consultation is required.",
    "Surgical removal is the most common treatment.",
    "Radiation or chemotherapy may be necessary.",
    "Routine skin checks to prevent recurrence."
  ],
  "Squamous cell carcinoma": [
    "Seek immediate dermatological evaluation.",
    "Surgical excision is often necessary.",
    "Radiation therapy may be used for advanced cases.",
    "Use broad-spectrum sunscreen daily."
  ],
  "Sunlight Damage": [
    "Apply aloe vera gel to soothe the skin.",
    "Use broad-spectrum sunscreen daily.",
    "Wear protective clothing when outdoors.",
    "Stay hydrated to maintain skin health."
  ],
  "Tinea Ringworm Candidiasis": [
    "Apply antifungal creams like terbinafine.",
    "Keep affected areas clean and dry.",
    "Avoid sharing personal items to prevent spreading.",
    "Wear breathable fabrics to reduce moisture buildup."
  ],
  "Vascular lesion": [
    "Laser therapy can reduce appearance.",
    "Avoid excessive sun exposure.",
    "Monitor for any sudden changes.",
    "Consult a specialist for personalized treatment."
  ],
  "Vascular_Tumors": [
    "Regular monitoring by a dermatologist.",
    "Laser treatments may help reduce size.",
    "Surgical removal for symptomatic cases.",
    "Avoid trauma to affected areas."
  ],
  "Vasculitis": [
    "Seek medical evaluation for proper diagnosis.",
    "Use anti-inflammatory medications as prescribed.",
    "Maintain a healthy diet to support vascular health.",
    "Monitor for systemic symptoms."
  ],
  "Warts Molluscum": [
    "Apply salicylic acid treatments.",
    "Cryotherapy can remove stubborn warts.",
    "Avoid touching or scratching lesions.",
    "Boost immune function with a healthy lifestyle."
  ],
  "Hyperpigmentation": [
    "Use vitamin C serums daily for brightening.",
    "Apply SPF 50+ sunscreen to prevent dark spots.",
    "Consider retinoid creams for skin renewal.",
    "Try chemical peels or laser therapy under dermatological guidance."
  ]
};

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

export default function Assessment() {
  const location = useLocation();
  const results = location.state?.results || {};
  const [open, setOpen] = useState(true);
  const treatments = treatmentSuggestions[results.condition] || [];

  return (
    <div style={{padding: '0 2rem', height: '100%', display: 'flex', flexDirection: 'column'}}>
      <h2>Skin Analysis Results</h2>
     <div className="assessments" style={{display: 'flex', height: '70vh'}}>
      <Box sx={{width: "50%"}}>
        
          {results.condition ? (
            <div>
              <p style={{display: 'flex', alignItems: 'center', gap: '.5rem'}}><strong>Condition:</strong> <Typography level="body-md" sx={{fontWeight: 500}} color="success">{results.condition}</Typography></p>
              <p><strong>Margin of Error:</strong> {results.confidence ? `${(results.confidence ).toFixed(2)}%` : "N/A"}</p>


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

        
      
    </div>
  );
}
