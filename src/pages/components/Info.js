import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { CardActionArea, Grid, Modal, Stack, TextField } from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageTwoToneIcon from "@mui/icons-material/LanguageTwoTone";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import ScatterPlotTwoToneIcon from "@mui/icons-material/ScatterPlotTwoTone";
import AddHomeWorkSharpIcon from "@mui/icons-material/AddHomeWorkSharp";
import datas from "src/JSON/datas";
import PlusOneIcon from '@mui/icons-material/PlusOne';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EmailIcon from '@mui/icons-material/Email';
import ContactsIcon from '@mui/icons-material/Contacts';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const style = {
  position: 'absolute',
  top: '50%',
  left: '90%',
  minWidth:850,
  minHeight:1000,
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  mt:1
};

export default function Info() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openAdd, setOpenAdd] = React.useState(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  function handlecontactedit(){
    setOpen(true)
  }

  function handlecontactadd(){
    setOpenAdd(true)
  }

  return (
    <div>
      {datas?.map((item) => (
        <div>
            <Box sx={{  
              display: 'flex', 
              flexWrap:"wrap",
              height: 400,
              mt:-15,ml:2,
            }}
              >
              <Card sx={{ minWidth: 395, mr: 4, mb: 5, minHeight: 200 }}>
                <CardContent>
                  <Stack
                    direction="row"
                    spacing={2}
                  >
                      <Typography variant="h6">
                        <IconButton>
                          <ContactsIcon />
                        <span>
                          <h3> {item.title}</h3>
                        </span>
                        </IconButton>
                      </Typography>

                      <CardActions > 
                        <IconButton sx={{}}  onClick={handlecontactedit}>
                          <EditIcon sx={{mr:1}} color="error" />
                        </IconButton>
                        <IconButton onClick={handlecontactadd}>
                          <PlusOneIcon fontSize="medium" color="info"/> 
                        </IconButton>
                      </CardActions>
                    </Stack>
                    <Typography sx={{ fontSize: 19,mx:2,my:2 }} color="text.secondary">
                      {item.email}
                    </Typography>
                    <Typography sx={{ mb: 1.5,mx:2,my:2 }} color="text.secondary">
                      {item.mobileNo} 
                    </Typography>
                </CardContent>
              </Card>
              <Card sx={{ minWidth: 395, mr: 4, mb: 5, minHeight: 200 }}>
                <CardContent>
                  <Typography variant="body2">
                    <IconButton>
                    <LocationOnIcon />
                    <span>   
                      <h3> {item.title2}</h3>
                    </span>
                    </IconButton>
                    <IconButton sx={{ml:19}}>
                      <EditIcon sx={{mr:1}} color="error" />
                    </IconButton>
                      <PlusOneIcon fontSize="medium" color="info"/>
                  </Typography>
                  <Typography sx={{ fontSize: 14,ml:2,mt:2 }} color="text.secondary">
                    {item.address}
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ minWidth: 395, mr: 4, mb: 5, minHeight: 200 }}>
                <CardContent>
                  <Typography variant="body2">
                    <IconButton>
                      <AddHomeWorkSharpIcon />
                    <span>
                      <h3> {item.title5}</h3>
                    </span>
                    </IconButton>
                    <IconButton sx={{ml:8}}>
                      <EditIcon sx={{mr:1}} color="error" />
                    </IconButton>
                      <PlusOneIcon fontSize="medium" color="info"/>
                  </Typography>
                  <Typography sx={{ fontSize: 14,ml:2,mt:2 }} color="text.secondary">
                    Moday to Friday - {item.hours}
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ minWidth: 395, mr: 4, mb: 5, minHeight: 200 }}>
                <CardContent>
                  <Typography variant="body2" >
                    <IconButton size="medium">
                      <LocationOnIcon />
                    <span>
                      <h3> {item.title3}</h3>
                    </span>
                    </IconButton>
                    <IconButton sx={{ml:9}}>
                      <EditIcon sx={{mr:1}} color="error" />
                    </IconButton>
                      <PlusOneIcon fontSize="medium" color="info"/>
                  </Typography>
                  <Typography sx={{ fontSize: 14,ml:2,mt:2 }} color="text.secondary">
                    <IconButton>
                      <LanguageTwoToneIcon sx={{mr:6}} />
                      <FacebookOutlinedIcon sx={{mr:6}} />
                      <InstagramIcon sx={{mr:6}}/>
                      <TwitterIcon sx={{mr:6}}/>
                    </IconButton>
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ minWidth: 395, mr: 4, mb: 5, minHeight: 200 }}>
                <CardContent>
                  <Typography variant="body2">
                    <IconButton>
                      <ScatterPlotTwoToneIcon />
                    <span> 
                      <h3> {item.title4}</h3>
                    </span>
                    </IconButton>
                    <IconButton sx={{ml:19}}>
                      <EditIcon sx={{mr:1}} color="error" />
                    </IconButton>
                      <PlusOneIcon fontSize="medium" color="info"/>
                  </Typography>
                  <Typography sx={{ fontSize: 14,ml:2,mt:2 }} color="text.secondary">
                    {item.statement}
                  </Typography>
                </CardContent>
              </Card>
            </Box> 
            <Modal open={open} onClick={handleClose}>
              <Card >
                <Box sx={style}>
                    
                    <Typography variant="h4" sx={{mb:1}} ><span><ArrowBackIcon /></span> Contacts</Typography>
                    <p>Please provide the company's email and contact number</p>
                    <Card sx={{ maxWidth: 560, mr: 4, mb: 5, minHeight: 200 }}>
                      <CardContent>
                        <Typography variant="h6" sx={{mt:1}}>
                          <IconButton>
                            <ContactsIcon />
                          <span>
                            <h3> {item.title}</h3>
                          </span>
                          </IconButton>
                          <IconButton sx={{ml:31}} >
                            <EditIcon sx={{mr:1}} color="error" />
                          </IconButton>
                          <DeleteForeverIcon color="error"/>
                        </Typography>
                        <Typography sx={{ fontSize: 19,mx:2,my:2 }} color="text.secondary">
                          <IconButton>
                            <EmailIcon />
                          </IconButton>
                          {item.email}
                        </Typography>
                        <Typography sx={{ mb: 1.5,mx:2,my:2 }} color="text.secondary">
                          
                          <IconButton>
                            <PhoneIcon />
                          </IconButton> 
                            {item.mobileNo}
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: 560, mr: 4, mb: 5, minHeight: 200 }}>
                      <CardContent>
                        <Typography variant="h6">
                          <IconButton>
                            <ContactsIcon />
                          <span>
                            <h3> {item.title}</h3>
                          </span>
                          </IconButton>
                          <IconButton sx={{ml:31}} onClick={handlecontactedit}>
                            <EditIcon sx={{mr:1}} color="error" />
                          </IconButton>
                          <DeleteForeverIcon color="error"/>
                        </Typography>
                        <Typography sx={{ fontSize: 19,mx:2,my:2 }} color="text.secondary">
                          <IconButton>
                            <EmailIcon />
                          </IconButton>
                          {item.email}
                        </Typography>
                        <Typography sx={{ mb: 1.5,mx:2,my:2 }} color="text.secondary">
                          
                          <IconButton>
                            <PhoneIcon />
                          </IconButton> 
                            {item.mobileNo}
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card sx={{maxWidth: 560, mr: 4, mb: 5, minHeight: 200 }}>
                      <CardContent>
                        <Typography variant="h6">
                          <IconButton>
                            <ContactsIcon />
                          <span>
                            <h3> {item.title}</h3>
                          </span>
                          </IconButton>
                          <IconButton sx={{ml:31}} onClick={handlecontactedit}>
                            <EditIcon sx={{mr:1}} color="error" />
                          </IconButton>
                          <DeleteForeverIcon color="error"/>
                        </Typography>
                        <Typography sx={{ fontSize: 19,mx:2,my:2 }} color="text.secondary">
                          <IconButton>
                            <EmailIcon />
                          </IconButton>
                          {item.email}
                        </Typography>
                        <Typography sx={{ mb: 1.5,mx:2,my:2 }} color="text.secondary">
                          
                          <IconButton>
                            <PhoneIcon />
                          </IconButton> 
                            {item.mobileNo}
                        </Typography>
                      </CardContent>
                    </Card>
                    <Button sx={{ minWidth: 560, mr: 4, mb: 5}} variant="contained" color="error">Save</Button>
                </Box>
              </Card>
            </Modal>
            <Modal open={openAdd} onClick={handleCloseAdd}>
              <Card >
                <Box sx={style}>
                    
                    <Typography variant="h4" sx={{mb:1}} ><span><ArrowBackIcon /></span> Contacts</Typography>
                    <Typography sx={{mb:3}}>Please provide the company's email and contact number</Typography>
                    <div>
                      <label><strong>Email Id</strong></label><br/>
                      <TextField id="filled-basic" label="eg. salesteam.br.in" variant="filled" 
                        sx={{ minWidth: 560, mr: 4, my: 1, minHeight: 10 }} >
                      </TextField>
                      <CardActions>
                        <Button variant="outlined" color="error" startIcon={<AddCircleOutlineIcon />} 
                          sx={{ minWidth: 560, mr: 4, mb: 1, minHeight: 10,ml:-1 }} >
                          Add More
                        </Button>
                      </CardActions>
                    </div>
                    <div>
                      <label><strong>Contact Number</strong></label><br/>
                      <TextField id="filled-basic" label="eg.9876543210" variant="filled" 
                        sx={{ minWidth: 560, mr: 4, my: 1, minHeight: 10 }} >
                      </TextField>
                      <CardActions>
                        <Button variant="outlined" color="error" startIcon={<AddCircleOutlineIcon />} 
                          sx={{ minWidth: 560, mr: 4, mb: 55, minHeight: 10,ml:-1 }} >
                          Add More
                        </Button>
                      </CardActions>
                    </div>
                    <Button sx={{ minWidth: 560, mr: 4, mb: 5}} color="error" variant="contained">Save</Button>
                </Box>
              </Card>
            </Modal>
        </div>  

      ))}
    </div>
  );
}
