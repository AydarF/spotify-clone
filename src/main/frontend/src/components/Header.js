import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import './Header.css';

function Header({componentPath, componentName}) {

        /* Sticky Menu Area */
        useEffect(() => {
            window.addEventListener('scroll', isSticky);
            return () => {
                window.removeEventListener('scroll', isSticky);
            };
        }, []);
    
               
        /* Method that will fix header after a specific scrollable */
        const isSticky = (e) => {
            const header = document.querySelector('.header-section');
            const scrollTop = window.scrollY;
            if(header !== null){
                scrollTop >= 1 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
            }
        };

    return (
        <Box className="header-section">
            <Box className="header-section-left">      
                <Link to="/" >                                   
                    <Grid container>                                                   
                        <Typography>Home</Typography>                        
                    </Grid>
                </Link>
                <Link to={componentPath} style={{display: "block"}}>
                    <Grid container>                                                         
                        <Typography>{componentName}</Typography>                                
                    </Grid>                
                </Link>
            </Box>
            <Link to="/" >                
                <Grid container>                        
                    <Typography>Logout</Typography>
                </Grid>
            </Link>                
        </Box>
    )
}

export default Header
