import React, { Component, useEffect, useState } from "react";
import "../styles/header.css";
import ShopOutlinedIcon from '@mui/icons-material/ShopOutlined';
import { Box, Button, Link, Tab, Tabs, Typography } from "@mui/material";
import siteLogo from '../assets/temp-site-logo.png';

function Header() {
    const [value, setValue] = React.useState('Home');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

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

  return (
    <Box className="header">
        <Link href="#">
          <img src={siteLogo} className="site-logo" alt="site logo"/>
        </Link>
        <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        scrollButtons="auto"
        aria-label="secondary tabs example">
            <Tab value="Home" label="Home" />
            <Tab value="About" label="About" />
            <Tab value="Services" label="Services" />
            <Tab value="Testimonials" label="Testimonials" />
            <Tab value="Contact" label="Contact" />            
        </Tabs>    
        <Button onClick={() => window.open("https://shopify.com")}>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                <Typography sx={{ textAlign: "left", marginRight: "5px", alignItems: "center", justifyContent: "center" }}>Shop Now</Typography>
                <ShopOutlinedIcon fontSize="small" sx={{ paddingBottom: "3.5px"}}/>
            </Box>
        </Button>    
    </Box>
  );
}

export default Header;
