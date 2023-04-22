import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MainBar from './components/MainBar';

export default function Home() {
  return (
    <>
      <div>
      <Box sx={{ flexGrow: 1 }}>
        <MainBar />
      </Box>
      </div>
    </>
  )
}