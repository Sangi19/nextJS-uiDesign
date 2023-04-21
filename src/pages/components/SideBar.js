import React, { useState } from 'react'
import AppsIcon from '@mui/icons-material/Apps';
import NavBar from './NavBar';
import Dasboard from './Dasboard';
import Partners from './Partners';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AboutUs from './AboutUs';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import GroupIcon from '@mui/icons-material/Group';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ViewListIcon from '@mui/icons-material/ViewList';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import InfoIcon from '@mui/icons-material/Info';
import PaymentsIcon from '@mui/icons-material/Payments';

const drawerWidth = 240;

export default function SideBar() {
   const [sideBarData, setSideBarData] =useState("Dasboard")

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            <NavBar />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          
        <List sx={{mt: 5}}>
            <ListItem disablePadding sx={{ display: "black"}} onClick={() => setSideBarData("")}>
              <ListItemButton>
                <ListItemIcon>
                  {<ViewQuiltIcon />}
                </ListItemIcon>
                <ListItemText>
                  Dasboard 
                  </ListItemText>
              </ListItemButton>
            </ListItem>
       
            <ListItem disablePadding sx={{ display: "black"}} onClick={() => setSideBarData("Others")}>
              <ListItemButton>
                <ListItemIcon>
                  {<AppsIcon />}
                </ListItemIcon>
                <ListItemText>
                  Others
                  </ListItemText>
              </ListItemButton>
            </ListItem>
       
            <ListItem disablePadding sx={{ display: "black"}} onClick={() => setSideBarData("TeamMembers")}>
              <ListItemButton>
                <ListItemIcon>
                  {<GroupIcon />}
                </ListItemIcon>
                <ListItemText>
                  Team Members 
                  </ListItemText>
              </ListItemButton>
            </ListItem>
       
            <ListItem disablePadding sx={{ display: "black"}} onClick={() => setSideBarData("Partners")}>
              <ListItemButton>
                <ListItemIcon>
                  {<HandshakeIcon />}
                </ListItemIcon>
                <ListItemText>
                  Partners 
                  </ListItemText>
              </ListItemButton>
            </ListItem>
      
            <ListItem disablePadding sx={{ display: "black"}} onClick={() => setSideBarData("ProductListings")}>
              <ListItemButton>
                <ListItemIcon>
                  {<ViewListIcon />}
                </ListItemIcon>
                <ListItemText>
                  Product Listings 
                  </ListItemText>
              </ListItemButton>
            </ListItem>
      
            <ListItem disablePadding sx={{ display: "black"}} onClick={() => setSideBarData("Awards")}>
              <ListItemButton>
                <ListItemIcon>
                  {<EmojiEventsIcon />}
                </ListItemIcon>
                <ListItemText>
                  Awards & Honours 
                  </ListItemText>
              </ListItemButton>
            </ListItem>
     
            <ListItem disablePadding sx={{ display: "black"}} onClick={() => setSideBarData("AboutUs")}>
              <ListItemButton>
                <ListItemIcon>
                  {<InfoIcon />}
                </ListItemIcon>
                <ListItemText>
                  AboutUs 
                  </ListItemText>
              </ListItemButton>
            </ListItem>
    
            <ListItem disablePadding sx={{ display: "black"}} onClick={() => setSideBarData("PaymentInfo")}>
              <ListItemButton>
                <ListItemIcon>
                  {<PaymentsIcon />}
                </ListItemIcon>
                <ListItemText>
                  PaymentInfo 
                  </ListItemText>
              </ListItemButton>
            </ListItem>
        </List>        

        </Box>
      </Drawer>
      <Box component="main">
        <Toolbar />
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p:3, mt: 6, ml:-8}}>
        {sideBarData == "Dasboard" && <Dasboard /> }
        {sideBarData == "Partners" && <Partners /> }
        {sideBarData == "AboutUs" && <AboutUs /> }

      </Box>
    </Box>
  );
}