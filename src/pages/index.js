import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import AboutUs from './components/AboutUs';

export default function Home() {
  return (
    <>
      <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div>
              <NavBar />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
              <SideBar />
            </div>
          </Grid>
          <Grid item xs={8}>
            <div>
              <AboutUs />
            </div>
          </Grid>
        </Grid>
      </Box>
      </div>
    </>
  )
}
