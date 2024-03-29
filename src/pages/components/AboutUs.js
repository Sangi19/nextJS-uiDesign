import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid, List, ListItem, ListItemText, Stack } from '@mui/material';
import Info from './Info';
import FAQ from './FAQ';
import TermsConditions from './TermsConditions';
import VerifiedIcon from '@mui/icons-material/Verified';

export default function AboutUs() {
  const [data, setData] = useState("")
  return (
    <div>
      <Grid sx={{mt: 4, ml: 5 }}>
      <h1> About Us</h1>
      <Stack>
        <span>
          <img src='https://www.atinks.com/wp-content/uploads/2017/10/A.T-inks-logo-600-DPI-1-e1545645137933.png' height={80} width={70}/>
          <Button sx={{mb:6,ml:3}}
          startIcon={<VerifiedIcon />}>        
            <a href='https://www.atinks.com/' >Verify Company</a>
          </Button>
        </span>
      </Stack>
      <p sx={{mt:-30}}> Loream ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum esta, maltis tellus
         <span> < EditIcon /> </span>
      </p> 
      </Grid>
      <Grid>
         <Box sx={{ flexGrow: 1, mx: 5, my:1, mt: 4 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1,  '&:hover':{boxShadow: 10,p:2}}} onClick={() => setData("Info")}>
                Info
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => setData("FAQ")}>
                FAQ
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => setData("Complaints and feedback")}>
                Complaints and feedback
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => setData("Privacy Policy")}>
                Privacy Policy
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => setData("TermsConditions")}>
              Terms & Condition
            </Typography> 
            </Toolbar>
          </AppBar>
         </Box>
         <Box component="main" sx={{ flexGrow: 1, p: 3, mb: 3 }}>
            <Toolbar />
          </Box>
          <Box component="main" sx={{ flexGrow: 1, p:3, mb: 6}}>
            {data == "Info" && <Info /> }
            {data == "FAQ" && <FAQ /> }
            {data == "TermsConditions" && <TermsConditions /> }
          </Box>
      </Grid>
       </div>
       
  )
}
