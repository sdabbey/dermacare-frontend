import * as React from 'react';

// import LocationOnIcon from '@mui/icons-material/LocationOn';
import Chip from '@mui/joy/Chip';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Divider from '@mui/joy/Divider';


import clear_icon from '../../assets/weather/clear.png';
import humidity from '../../assets/weather/humidity.png' 
// import wind from '../../assets/weather/wind.png'
// import snow_icon from '../../assets/icons/snow.svg'
// import storm_icon from '../../assets/icons/storm.svg'

import check_mark from '../../assets/icons/check_mark.png'
import AirIcon from '@mui/icons-material/Air';
import WaterIcon from '@mui/icons-material/Water';

const Weather = () => {
    
    const [open, setOpen] = React.useState(true);
  return (
    <div className="weather">
        <p className="headline">Tips for your skin based on today's weather</p>
        <Divider />
        <div className="suggestion-content">
            <div className="weather-details">
                <Chip variant="soft" sx={{padding: '.4rem .6rem' , fontSize: '.7rem'}}>
                    Ayeduase, Kumasi
                </Chip>
                <img src={clear_icon} className="weather-icon" alt="" />
                <div className="temp-details">
                    <p className="temperature">16℃</p>
                    <p>Quite a shinny day.</p>
                    <p className="extra-dets">
                        <div><WaterIcon /> Humidity: <span>60%</span></div>
                        <div><AirIcon />Wind: <span>5km/h</span></div>
                    </p>
                </div>
            </div>
            <div className="suggestion">
                <p>It's a sunny day. Don't forget to apply sunscreen before going out.</p>
                
                <Box sx={{ width: '100%', pl: '5px', height: '100%' }}>
                    <List
                        size="sm"
                        sx={(theme) => ({
                        // Gatsby colors
                        '--joy-palette-primary-plainColor': '#8a4baf',
                        '--joy-palette-neutral-plainHoverBg': 'transparent',
                        '--joy-palette-neutral-plainActiveBg': 'transparent',
                        '--joy-palette-primary-plainHoverBg': 'transparent',
                        '--joy-palette-primary-plainActiveBg': 'transparent',
                        [theme.getColorSchemeSelector('dark')]: {
                            '--joy-palette-text-secondary': '#635e69',
                            '--joy-palette-primary-plainColor': '#d48cff',
                        },
                        '--List-insetStart': '32px',
                        '--ListItem-paddingY': '0px',
                        '--ListItem-paddingRight': '16px',
                        '--ListItem-paddingLeft': '21px',
                        '--ListItem-startActionWidth': '0px',
                        '--ListItem-startActionTranslateX': '-50%',
                        [`& .${listItemButtonClasses.root}`]: {
                            borderLeftColor: 'divider',
                        },
                        [`& .${listItemButtonClasses.root}.${listItemButtonClasses.selected}`]: {
                            borderLeftColor: 'currentColor',
                        },
                        '& [class*="startAction"]': {
                            color: 'var(--joy-palette-text-tertiary)',
                        },
                        })}
                    >
                        
                        
                        <ListItem
                        nested
                        sx={{ my: 1 }}
                        startAction={
                            <IconButton
                            variant="plain"
                            size="sm"
                            color="neutral"
                            onClick={() => setOpen((bool) => !bool)}
                            >
                            <KeyboardArrowDown
                                sx={[
                                open ? { transform: 'initial' } : { transform: 'rotate(-90deg)' },
                                ]}
                            />
                            </IconButton>
                        }
                        >
                        <ListItem>
                            <Typography
                            level="inherit"
                            sx={[
                                open
                                ? { fontWeight: 'bold', color: 'text.primary' }
                                : { fontWeight: null, color: 'inherit' },
                            ]}
                            >
                            Recommended Actions
                            </Typography>
                            <Typography component="span" level="body-xs">
                            4
                            </Typography>
                        </ListItem>
                        {open && (
                            <List sx={{ '--ListItem-paddingY': '5px' }}>
                            <ListItem>
                                
                                <ListItemButton sx={{fontSize: '.8rem', paddingLeft: '10px'}}><img style={{"width": '15px'}} src={check_mark} alt=''/>Use a gentle cleanser to remove excess oil</ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton sx={{fontSize: '.8rem', paddingLeft: '10px'}}><img style={{"width": '15px'}} src={check_mark} alt=''/>Switch to lightweight, non-greasy moisturiser</ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton sx={{fontSize: '.8rem', paddingLeft: '10px'}}><img style={{"width": '15px'}} src={check_mark} alt=''/>Avoid heavy creams that may clog pores</ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton sx={{fontSize: '.8rem', paddingLeft: '10px'}}><img style={{"width": '15px'}} src={check_mark} alt=''/>If you were makeup, choose waterproof products to prevent smudging</ListItemButton>
                            </ListItem>
                            </List>
                        )}
                        </ListItem>
                    </List>
                </Box>
            </div>
        </div>
    </div>
  )
}

export default Weather