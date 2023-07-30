import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import About from './components/about';
import Services from './components/services';
import Testimonials from  './components/testimonials';
import Contact from './components/contact';
import Footer from './components/footer';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import { Box, Fab, ThemeProvider, createTheme } from '@mui/material';
import HeroSection from './components/heroSection';

export const facebookURL = "https://www.facebook.com/evanbjammin/";
export const instagramURL = "https://www.instagram.com/evanbdiscgolfin/";

function App() {

  //comment for push
  

  const [isVisible, setIsVisible] = useState(false);
    
    // Top: 0 takes us all the way back to the top of the page
    // Behavior: smooth keeps it smooth!
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    };
    
    
    useEffect(() => {
        // Button is displayed after scrolling for 500 pixels
        const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
        };
    
        window.addEventListener("scroll", toggleVisibility);
    
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const darkGreenColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--dark-green");
  const lightGreenColor = getComputedStyle(
  document.documentElement
  ).getPropertyValue("--light-green");
  const backgroundColor = getComputedStyle(
  document.documentElement
  ).getPropertyValue("--tan");
  const darkTanColor = getComputedStyle(
  document.documentElement
  ).getPropertyValue("--dark-tan");
  const whiteColor = getComputedStyle(
  document.documentElement
  ).getPropertyValue("--white");

    const theme = createTheme({
      typography: {
        fontFamily: ["Bebas Neue", "Roboto", "Helvetica", "Arial"].join(","),
        fontSize: 16,
        fontWeightLight: 300,
      }, components: {
        MuiButton: {
          styleOverrides: {
            root: {
              textTransform: "none",
              fontSize: "1.2rem",
              fontWeight: "bold",
              fontFamily: ["Bebas Neue", "Roboto", "Helvetica", "Arial"].join(","),
              backgroundColor: darkGreenColor,
              color: whiteColor,
              padding: "8px",
              "&:hover": {
                backgroundColor: whiteColor,
                color: darkGreenColor,
                border: `1px solid ${darkGreenColor}`,
              },
            },
          },
        }, MuiTab: {
          styleOverrides: {
            root: {
              color: darkTanColor,
              "&:hover": {
                color: darkGreenColor,
              }, "&.Mui-selected": {
                color: darkGreenColor,
              },
            },
          },
        }
      },
    });


  return (
    <ThemeProvider theme={theme}>
      <Box className="App">
        <Header/>
        <HeroSection/>
        {/* <About/>
        <Services/>
        <Testimonials/>
        <Contact/>
        <Footer/> */}
        <Box sx={{ position: "fixed", bottom: "10px", right: "10px"}} className="scroll-to-top">
          {isVisible && (
            <Fab onClick={scrollToTop} color="primary" aria-label="go up">
              <ArrowDropUpOutlinedIcon/>
            </Fab>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
