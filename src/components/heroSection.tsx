import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import { Box, Button, Fab, Typography } from '@mui/material';
import '../styles/heroSection.css'
import teachingImage from '../assets/disc-golf-hero.jpg';

function HeroSection() {

  

  return (
    <Box sx={{ height: "100dvh", width: "100dvw", margin: 0, padding: 0 }}>
        <img className="hero-image" src={teachingImage} alt="Evan Boyle teaching Disc Golf to a local youth community group"/>
        <Box className="hero-text">
            <Typography className="hero-title">Welcome to the new Generation of Disc Golf</Typography>
            <Button href="#contact" className="hero-button">Book a Lesson</Button>
        </Box>
    </Box>
    

  );
}

export default HeroSection;
