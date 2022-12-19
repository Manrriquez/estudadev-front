import React, { useState } from 'react'
import MainCard from '../../../components/ui-component/cards/MainCard';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';



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
                  <Tab icon={<PhoneIcon />}  label="Meus cursos" {...a11yProps(0)} />
                  <Tab icon={<PhoneIcon />} label="Listas de desejos" {...a11yProps(1)} />
                  <Tab icon={<PhoneIcon />} label="Minhas listas" {...a11yProps(2)} />
                </Tabs>
                
            </Box>
          </Box>
        </MainCard>
      </Grid>

      <Grid item md={12}>
          <MainCard>
            <Box sx={{ width: '100%' }}>
                <TabPanel value={value} index={0}>
                  Item One
                </TabPanel>
                <TabPanel value={value} index={1}>
                  Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                  Item Three
                </TabPanel>
            </Box>
          </MainCard>
      </Grid>
    </Grid>
  )
}

export default Courses;