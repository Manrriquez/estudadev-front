import React, { useState } from 'react'
import MainCard from '../../../components/ui-component/cards/MainCard';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Link } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



const Courses = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Grid container spacing={1} component="section">
      <Grid item md={12}>
        <MainCard>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange}  centered textColor="secondary"
  indicatorColor="secondary">
                  <Tab icon={<PhoneIcon />}  label="MEUS CURSOS" {...a11yProps(0)} />
                  <Tab icon={<PhoneIcon />} label="LISTA DE DESEJOS" {...a11yProps(1)} />
                  <Tab icon={<PhoneIcon />} label="MINHAS LISTAS" {...a11yProps(2)} />
                  <Tab icon={<PhoneIcon />} label="NOTICIAS" {...a11yProps(3)} />
                </Tabs>
                
            </Box>
          </Box>
        </MainCard>
      </Grid>

      <Grid item md={12}>
            <Box sx={{ width: '100%' }}>
                <TabPanel value={value} index={0}>
                  <Box sx={{display: 'flex', justifyContent: 'space-around', gap: '10px'}}>
                      <Box>
                          <Card sx={{ maxWidth: 345 }} color="primary">
                              <Link color="primary" component="a" href="#" sx={{textDecoration: 'none'}}>

                                <CardMedia component="div"  
                                  sx={{backgroundImage: 'url(https://mui.com/static/images/cards/contemplative-reptile.jpg)',
                                  minHeight: '170px', p: 3, display: 'flex', justifyContent: 'center', alignItems: 'center',
                                  '& .MuiIconButton-root': {
                                      p: 2,
                                    '&:hover': {
                                      backgroundColor: 'orange!important',
                                      display: 'block!important'
                                    }
                                  }, '&:hover': {display: 'block!important'} }}>
                                   
                                    <IconButton  size="large" 
                                    sx={{backgroundColor: 'secondary.light', '&:hover': {backgroundColor: 'secondary.light'}, display: 'none' }}>
                                      <PlayArrowIcon color='primary' fontSize="inherit" sx={{color: 'secondary.dark'}} />
                                    </IconButton>
                                 </CardMedia>

                                <CardContent>
                                  <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                  </Typography>
                                </CardContent>

                              </Link>
                          </Card>
                      </Box>
                  </Box>
                </TabPanel>


                <TabPanel value={value} index={1}>
                  Item Two
                </TabPanel>


                <TabPanel value={value} index={2}>
                  Item Three
                </TabPanel>


                 <TabPanel value={value} index={3}>
                  Item Three 3333
                </TabPanel>
            </Box>
      </Grid>
    </Grid>
  )
}

export default Courses;