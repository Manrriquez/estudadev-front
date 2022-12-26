import React, { useState } from 'react'
import MainCard from '../../../components/ui-component/cards/MainCard';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card, CardActionArea, CardContent, CardMedia, FormControl, Grid, InputLabel, LinearProgress, Link, MenuItem, Rating, Select, TextField } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import backgroundCurso from '../../../assets/img/curso-background.jpg';
import styled from '@emotion/styled';



var dataCourses = [
  {
    image: backgroundCurso,
    nameCourse: "Java Web Full Stack",
    author: "Fulano Correia",
    progress: 60,
    stars: 4,
  },

  {
    image: backgroundCurso,
    nameCourse: "Java Web Full Stack",
    author: "Fulano Correia",
    progress: 60,
    stars: 4,
  },

  {
    image: backgroundCurso,
    nameCourse: "Java Web Full Stack",
    author: "Fulano Correia",
    progress: 60,
    stars: 4,
  },

  {
    image: backgroundCurso,
    nameCourse: "Java Web Full Stack",
    author: "Fulano Correia",
    progress: 60,
    stars: 4,
  },

  {
    image: backgroundCurso,
    nameCourse: "Java Web Full Stack",
    author: "Fulano Correia",
    progress: 60,
    stars: 4,
  },

]


const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  minHeight: '170px',
  p: 3,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
  '& .MuiIconButton-root': {
    p: 2,

    '&:hover': {
      backgroundColor: '#FFFFFF'
    }
  },

  '&:hover': {
  }

}));


const Courses = () => {
  const [age, setAge] = React.useState('');

  const handleChangeSelect = (event) => {
    setAge(event.target.value);
  };

  const [stars, setStars] = React.useState(2);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Grid container spacing={1} component="section">

      <Grid item md={12}>
        <Typography sx={{mb: 2, fontWeight: 600}}>FILTRO:</Typography>
        <Box sx={{width: '100%', mb: 8, display: 'flex', gap: '20px', justifyContent: 'space-between', alignItems: 'center'}}>

          <Box sx={{width: '100%', display: 'flex', gap: '10px'}}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" color="secondary">Categorias</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" color="secondary" value={age} label="Categorias" onChange={handleChangeSelect}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label"  color="secondary">Acessados recentemente</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" color="secondary" value={age} label="Acessados recentemente" onChange={handleChangeSelect}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <TextField sx={{backgroundColor: '#FFFFFF'}}  color="secondary" fullWidth label="Pesquisar curso.." id="fullWidth" />
        </Box>
        <Grid container spacing={2}>
          {dataCourses.map((item) => (
            <Grid item xs={12} md={3}>
              <Card sx={{ maxWidth: 345 }} color="primary" elevation={1}>
                <Link color="primary" component="a" href="#" sx={{textDecoration: 'none'}}>
      
                  <StyledCardMedia component="div" sx={{backgroundImage: `url(${item.image})`}}>
                    <IconButton  size="large"  sx={{backgroundColor: 'secondary.light'}}>
                      <PlayArrowIcon color='primary' fontSize="inherit" sx={{color: 'secondary.dark'}} />
                    </IconButton>
                  </StyledCardMedia>
      
                  <CardContent sx={{p: 2}}>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.nameCourse}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.author}
                    </Typography>
                    <LinearProgress sx={{mt: 2}} variant="determinate" value={item.progress}  color="secondary" />
                    <Rating  defaultValue={0} precision={item.stars} size="small" sx={{mt: 1}} name="simple-controlled" value={stars} onChange={(event, newValue) => { setValue(newValue); }}/>
                  </CardContent>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Courses;