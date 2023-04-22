import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MainBar from './components/MainBar';

export default function Home() {
  return (
    <>
      <div>
      <Box sx={{ flexGrow: 1 }}>
          <Grid item xs={12}>
            <div>
              <MainBar />
            </div>
        </Grid>
      </Box>
      </div>
    </>
  )
}