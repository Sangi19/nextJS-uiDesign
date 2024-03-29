import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Avatar, Icon } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#999999',
    color:'#ffffff',
    '&:hover': {
      backgroundColor: '#999999',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    minWidth:620,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
    }}))
  

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 12 }}
          >
          <img src='https://www.atinks.com/wp-content/uploads/2017/10/A.T-inks-logo-600-DPI-1-e1545645137933.png' height={80} width={70}/>
          </IconButton>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
          <Button 
          sx={{
            backgroundColor:'black',
            maxHeight:40,
            minWidth:160,
            maxWidth:200,
            color:'white',
            ml:80,
            mr:2
          }} startIcon={<ShoppingCartOutlinedIcon />}>
            Checkout (200)
          </Button>
          <Avatar 
            alt="Travis Howard"
            src="/images/alter.jpg" 
            sx={{mr:1}}
            />
          <label><bold>User Admin</bold></label>
          <Icon sx={{ml:1}}>
            <KeyboardArrowDown />
          </Icon>

        </Toolbar>
      </AppBar>
      
    </Box>
  );
}