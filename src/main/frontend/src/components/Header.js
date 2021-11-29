import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";

function Header({componentPath, componentName}) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: '50px', padding: '50px 0 20px', bgcolor: 'background.paper', }}>
            <Box sx={{display: 'flex', justifyContent: 'space-around', gap: '50px'}}>      
                <Link to="/" >                                   
                    <Grid container sx={{ color: 'text.primary', gap: '10px' }}>                                                   
                        <Typography>Home</Typography>                        
                    </Grid>
                </Link>
                <Link to={componentPath} style={{display: "block"}}>
                    <Grid container sx={{ color: 'text.primary', gap: '10px' }}>                                                         
                        <Typography>{componentName}</Typography>                                
                    </Grid>                
                </Link>
            </Box>
            <Link to="/" >                
                <Grid container sx={{ color: 'text.primary', gap: '10px' }}>                        
                    <Typography>Logout</Typography>
                </Grid>
            </Link>                
        </Box>
    )
}

export default Header
