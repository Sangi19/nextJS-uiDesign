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
          <Grid item xs={12}>
            <div>
              <SideBar />
            </div>
        </Grid>
      </Box>
      </div>
    </>
  )
}
