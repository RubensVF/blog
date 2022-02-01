import React from 'react';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://rubsdeveloper.xyz/">
          Ruben Velazquez Flores
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  

const Footer = () => {
    return (
        <div>
        
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Ruben Velazquez Flores
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Contact me at rubenvelazquez244@gmail.com 
        </Typography>
        <Copyright />
      </Box>
        </div>
    );
};

export default Footer;