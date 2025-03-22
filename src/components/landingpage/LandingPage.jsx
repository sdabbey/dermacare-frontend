import * as React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import react from '../../assets/react.svg'
import water_drop from '../../assets/icons/water_drop.png'
import virt_call from '../../assets/icons/virt_call.png'
import chat from '../../assets/icons/chat.png'
import curve from '../../assets/curve.png'
import curve2 from '../../assets/curve2.png'
import { Call, CallMade, Circle, Star, Mail } from '@mui/icons-material';
import doctorpic from '../../assets/avatar/doctorpic.jpeg'
import control from '../../assets/control.png'

export default function LandingPageComponent() {


  return (
    <>
        <nav className='navbar'>
            <div className="nav-logo">
                <img src={react}  alt=""/>
                <h3>Dermacare</h3>
            </div>
            <div className="nav-content">
                <li><a href="#home-section" className='active'>Home</a></li>
                <li><a href="#about-section">About Us</a></li>
                <li><a href="#findadoctor-section">Find a Doctor</a></li>
                <li><a href="#forum-community-section">Forum/Community</a></li>
                <li><a href="#contact-section">Contact Us</a></li>
                <div className="extra">
                    
                    <Button
                    variant="outlined"
                    color="primary"
                    href="/signin"
                    component="a"
                    sx={{  
                        paddingX: '1.5rem', 
                        paddingY: '.5rem', 
                        zIndex: 10,
                        borderColor: 'var(--sx-color-primary)',
                        ':hover': {
                            transition: '.2s ease',
                            background: 'var(--sx-color-primary)',
                            color: 'var(--text-color)'
                        }
                    }}
                    >
                        Sign In
                    </Button>
                    <div className="nav-trigger" id="nav-trigger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
               
            </div>
        </nav>
        <div className="sidebar">
       
            <ul className="nav_list">       
                <li><a href="#home-section">Home</a></li>
                <li><a href="#about-section">About Us</a></li>
                <li><a href="#findadoctor-section">Find a Doctor</a></li>
                <li><a href="#forum-community-section">Forum/Community</a></li>
                <li><a href="#contact-section">Contact Us</a></li>
                <div className="extra">
                    <a href="#" className="btn">Sign Up</a>
                    <a href="#" className="btn">Login</a>
                </div>
            </ul>
            <div class="socials">
                <a target="_blank" href="tel: +233257679733"><i class="bx bx-phone-call"></i></a>
                <a target="_blank" href="https://wa.me/233257679733"><i class="bx bxl-whatsapp"></i></a>
                <a target="_blank" href="https://github.com/Qwequ123"><i class="bx bxl-github"></i></a>
                <a target="_blank" href="https://www.instagram.com/qwequ_blaqq/"><i class="bx bxl-instagram"></i></a>
                <a target="_blank" href="https://twitter.com/qwequ_blaqq"><i class="bx bxl-twitter"></i></a>
                <a target="_blank" href="https://www.linkedin.com/in/bismark-frimpong-a50b61237/"><i class="bx bxl-linkedin"></i></a>
    
            </div>
        
        </div>
        
        <div className="landingpage">
            <div className="overlay"></div>
            <Typography level='title-md' sx={{color: 'var(--sx-color-primary)', fontSize: '1.8rem', zIndex: 10}}>Get Expect Skin Care Anytime, Anywhere</Typography>
            <p className="content-msg">Connect with trusted dermatologists for quick assessments, personalized advice, and professional care—no matter where you are</p>
            <Button
            variant="solid"
            color="primary"
            href="/signup"
            
            component="a"
            sx={{  paddingX: '2rem', paddingY: '.7rem', zIndex: 10}}
            >
                Get Started
            </Button>
            <span>Trusted by 10,000+ Users | Verified Dermatologists | Secure Platform</span>
        </div>
        
        <div className="service-section">
            <Typography level='title-lg' sx={{color: 'var(--sx-color-primary)'}}>The Problem We Solve</Typography>
            <p style={{width: '80%', textAlign: 'center'}}>Struggling with acne, eczema, or unidentified skin issues? Many people delay seeking professional help due to cost, time, or lack of access. Our AI-driven dermatology platform offers a fast, accurate, and affordable way to assess your skin health and connect with specialists.</p>
            <Typography level='title-lg' sx={{ mt: '3rem', color: 'var(--sx-color-primary)'}}>Your Skin Care Solution</Typography>
            <div className="t-card-container">
                <img className="bg-curve" src={curve} alt=""/>
                <div className="t-card">
                    <img src={water_drop} alt=""/>
                    <Typography level='title-md'>Daily Skincare Tips</Typography>
                    <p> Personalized advice on your dashboard every day to keep your skin healthy.</p>
                </div>
                <div className="t-card">
                    <img src={chat} alt=""/>
                    <Typography level='title-md'>Daily Skincare Tips</Typography>
                    <p> Personalized advice on your dashboard every day to keep your skin healthy.</p>
                </div>
                <div className="t-card">
                    <img src={virt_call} alt=""/>
                    <Typography level='title-md'>Daily Skincare Tips</Typography>
                    <p> Personalized advice on your dashboard every day to keep your skin healthy.</p>
                </div>

                
            </div>
            <Button
            variant="solid"
            color="primary"
            href="/signup"
            
            component="a"
            sx={{  paddingX: '2.2rem', paddingY: '1rem', zIndex: 10}}
            >
            Explore Features
            </Button>
        </div>

        <div className="how-it-works-section">
            <div className="overlay"></div>
            <Typography level='title-lg' sx={{color: 'var(--sx-color-primary)', zIndex: 10, fontSize: '1.2rem'}}>How It Works</Typography>
            <div className="steps-container">
                <div className="step">
                    <Typography level="title-lg" sx={{color: 'var(--sx-color-primary)'}}>Step 1 - AI Skin Scan</Typography>
                    <p>Upload a photo, and our AI detects potential skin conditions instantly</p>
                </div>
                <div className="step">
                    <Typography level="title-lg" sx={{color: 'white'}}>Step 2 – Track Your Skin Progress</Typography>
                    <p>Monitor changes and improvements over time</p>
                </div>
                <div className="step">
                    <Typography level="title-lg" sx={{color: 'white'}}>Step 3 – Virtual Consultations</Typography>
                    <p>Get expert advice from board-certified dermatologists</p>
                </div>
                <div className="step">
                    <Typography level="title-lg" sx={{color: 'white'}}>Step 4 – Smart Product Matching</Typography>
                    <p>Find skincare products that suit your skin type and condition</p>
                </div>
            </div>
            <Button
            variant="solid"
            color="primary"
            href="/signup"
            endDecorator={
                <CallMade/>
            }
            component="a"
            sx={{alignSelf: 'flex-start',  paddingX: '2.2rem', paddingY: '1rem', zIndex: 10}}
            >
            Start Your Skin Analysis Today
            </Button>
        </div>

        <div className="about-section">
            <img className="bg-curve" src={curve2} alt=""/>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem'}}>
                <Typography level="title-lg" sx={{color: 'var(--sx-color-primary)'}}>About Us</Typography>
                <p style={{width: '90%', textAlign: 'center'}}>Welcome to Dermacare, your trusted virtual skincare companion and dermatological hospital. We are dedicated to bridging the gap between individuals and professional dermatological care. Our platform offers accurate, fast, and reliable skin health solutions for everyone, especially those with limited access to in-person consultations.</p>
                <p style={{width: '90%', textAlign: 'center'}}>At Dermacare, we understand the challenges people face when seeking dermatological care—delays in consultations, self-diagnosis, and the lack of credible advice. That’s why we’ve created an accessible platform where users can get expert guidance, ask questions, and receive personalized skincare advice from verified dermatologists.</p>
            </div>
            <Box 
                sx={
                    {width: '45%', 
                    alignSelf: 'flex-end', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'flex-end',
                    padding: '1rem',
                    zIndex: 2,
                    background: '#D1EBFC',
                    
                    }}
                >
                <Typography level="title-lg" sx={{color: 'var(--sx-color-primary)'}}>Our Mission</Typography>
                <p style={{textAlign: 'end'}}> To provide accessible, accurate, and professional dermatological advice through innovative virtual solutions—empowering individuals to take control of their skin health</p>
            </Box>
            <Box sx={{width: '100%', padding: '1rem', background: '#D1EBFC', zIndex: 2}}>
                <Typography level="title-lg" sx={{color: 'var(--sx-color-primary)', paddingY: '1rem'}}>What we offer</Typography>
                <div className="offer-list">
                    <li><Circle sx={{color: 'var(--sx-color-primary)'}}/> Virtual Consultations: Get professional insights through a chatbot interface that analyzes skin concerns</li>
                    <li><Circle sx={{color: 'var(--sx-color-primary)'}}/> Community Forum: Engage in discussions, ask questions, and explore content verified by dermatologists</li>
                    <li><Circle sx={{color: 'var(--sx-color-primary)'}}/> Daily Skincare Tips: Receive expert-backed tips to maintain healthy skin</li>
                </div>
            </Box>
            <Box 
                sx={{
                    width: '80%', 
                    padding: '1rem', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', marginTop: '1rem',
                    background: '#D1EBFC',
                    zIndex: 10
                    }}>
                <Typography level="title-lg" sx={{color: 'var(--sx-color-primary)'}}>Our Team</Typography>
                <p style={{textAlign: 'center'}}>We are a passionate group of designers, developers, and healthcare advocates committed to delivering a seamless and trustworthy skincare experience. Our diverse team works together to ensure that HS remains user-friendly, reliable, and accurate</p>
                <p>Join us in redefining skincare—because everyone deserves access to expert dermatological care</p>
            </Box>
           

        </div>
        <Box 
        sx={{
            height: '15vh',
            width: '100%', 
            background: 'linear-gradient(180deg, #D1EBFC 0%, #FFFFFF 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            }}>
                <Typography level="title-lg" sx={{paddingY: '1rem'}}>Meet Our Expect Dermatologists</Typography>
        </Box>

        <div className="our-doctors-section">
            <div className="doctor-card-container">
                <div className="doctor-card">
                    <div className="card-img">
                        <div className="colourful-shadow"></div>
                        <img src={doctorpic} alt="" />
                    </div>
                    <div className="card-content">
                        <Typography level="body-md" 
                        sx={{ display: 'flex', 
                            alignItems: 'center', 
                            fontSize: '.9rem',
                            fontWeight: 500,
                            justifyContent: 'space-between'
                            }}>
                            Dr. Winifred Anokye
                            <span style={{display: 'flex', alignItems: 'center', fontSize: '.9rem', fontWeight: 500}}>
                                <Star sx={{ color: "gold" }}/>
                                4.8/5.0
                            </span>
                        </Typography>
                        <Typography level="body-sm">Acne Specialist</Typography>
                        <Typography level="body-sm">Kumasi, Ghana</Typography>
                        
                    </div>
                </div>
                <div className="doctor-card">
                    <div className="card-img">
                        <div className="colourful-shadow"></div>
                        <img src={doctorpic} alt="" />
                    </div>
                    <div className="card-content">
                        <Typography level="body-md" 
                        sx={{ display: 'flex', 
                            alignItems: 'center', 
                            fontSize: '.9rem',
                            fontWeight: 500,
                            justifyContent: 'space-between'
                            }}>
                            Dr. Winifred Anokye
                            <span style={{display: 'flex', alignItems: 'center', fontSize: '.9rem', fontWeight: 500}}>
                                <Star sx={{ color: "gold" }}/>
                                4.8/5.0
                            </span>
                        </Typography>
                        <Typography level="body-sm">Acne Specialist</Typography>
                        <Typography level="body-sm">Kumasi, Ghana</Typography>
                        
                    </div>
                </div>
                <div className="doctor-card">
                    <div className="card-img">
                        <div className="colourful-shadow"></div>
                        <img src={doctorpic} alt="" />
                    </div>
                    <div className="card-content">
                        <Typography level="body-md" 
                        sx={{ display: 'flex', 
                            alignItems: 'center', 
                            fontSize: '.9rem',
                            fontWeight: 500,
                            justifyContent: 'space-between'
                            }}>
                            Dr. Winifred Anokye
                            <span style={{display: 'flex', alignItems: 'center', fontSize: '.9rem', fontWeight: 500}}>
                                <Star sx={{ color: "gold" }}/>
                                4.8/5.0
                            </span>
                        </Typography>
                        <Typography level="body-sm">Acne Specialist</Typography>
                        <Typography level="body-sm">Kumasi, Ghana</Typography>
                        
                    </div>
                </div>
            </div>
            <Button
            variant="solid"
            color="primary"
            href="/signup"
            endDecorator={
                <CallMade/>
            }
            component="a"
            sx={{marginY: '5%', paddingX: '2.2rem', paddingY: '1rem', zIndex: 10}}
            >
            Book An Appointment Today
            </Button>
        </div>

        <div className="quick-action-section">
            <img className="control-bg" src={control} alt=""/>
            <Typography level="title-lg" sx={{color: 'var(--text-color)'}}>Ready to take control of your skin health?</Typography>
            <div style={{zIndex: 10, display: 'flex', alignItems: 'center', gap: '2rem'}}>
                <Button
                variant="solid"
                color="primary"
                sx={{marginY: '5%', paddingX: '2.2rem', paddingY: '1rem', zIndex: 10}}
                >
                Upload Your Skin Condition
                </Button>

                <Button
                variant="solid"
                href="/signup"
                endDecorator={
                    <CallMade/>
                }
                component="a"
                sx={{
                marginY: '5%', 
                background: 'white', 
                paddingX: '2.2rem', 
                paddingY: '1rem', 
                zIndex: 10, 
                color: 'black',
                ":hover" : {
                    background: 'var(--sx-color-primary)',
                    transition: '.2s ease',
                    color: 'var(--text-color)'
                }
                }}
                >
                Book A Consultation
                </Button>
            </div>

        </div>

        <footer>
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={react} alt=""/>
                    <h3>Dermacare</h3>
                </div>
                <div className="footer-links">
                    <li><a className='active' href="#home-section">Home</a></li>
                    <li><a href="#about-section">About Us</a></li>
                    <li><a href="#findadoctor-section">Find a Doctor</a></li>
                    <li><a href="#forum-community-section">Forum/Community</a></li>
                    <li><a href="#contact-section">Contact Us</a></li>
                </div>
                <div className="footer-socials">
                    <a target="_blank" href="tel: +233257679733"><Call/> +233 20 091 0884</a>
                    <a target="_blank" href="mailto: info@dermacare.com"><Mail/> info@dermacare.com</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Dermacare. All Rights Reserved</p>
            </div>
        </footer>
    </>
  );
}
