import React, { useState, useMemo } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from "react-router-dom";
import { CardActionArea } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
const UserList = (props) => {
  const { allUsers } = props;
  const [search, setSearch] = useState("");
  let navigate = useNavigate();
  const [age, setAge] =useState("");
  const [gender, setGender] = useState("");

  const handleAgeChange = e=>{
    setAge(e.target.value)
  }
  const handleGenderChange = e =>{
    setGender(e.target.value)
  }
  const searchQuery = e => {
    setSearch(e.target.value.toLowerCase())
  }
  const filterResult = useMemo(() => {
    debugger
    const result = allUsers.filter((user) =>
      {
        let passed = true;
        if (search){
          passed = passed && (user.firstName.toLowerCase().includes(search) || user.lastName.toLowerCase().includes(search))
        }
        if (age){
          passed= passed && (user.age >= parseInt(age))
        }
        if (gender){
          passed= passed && (user.gender === gender)
        }
          return passed
      }
    )
    return result
  }, [search,age,gender])
  return (
    <div >
      <Box>
        <TextField sx={{ width: 400, marginTop: 2 }} id="demo-helper-text-misaligned-no-helper" label="Search By Name ...." onChange={searchQuery} />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={age}
            onChange={handleAgeChange}
            label="Age"
          >
            <MenuItem value="0" >None</MenuItem>
            <MenuItem value={18}>Above 18</MenuItem>
            <MenuItem value={30}>Above 30</MenuItem>
            <MenuItem value={50}>Above 50</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={gender}
            onChange={handleGenderChange}
            label="Gender"
          >
            <MenuItem value="" >None</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="male">Male</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ width: '95%', padding: "20px" }}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {filterResult.map((user, i) =>
            <Grid item xs={10} sm={6} md={4} lg={3} key={i}>
              <CardActionArea>
                <Card sx={{ display: 'flex', height: 200 }} onClick={e => navigate("/users/" + user.id)} >
                  <CardMedia
                    component="img"
                    sx={{ width: 1 / 3 }}
                    image={user.image}
                    alt="Live from space album cover"
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography component="div" variant="h5">
                        {user.firstName} {user.lastName}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        Email: {user.email}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        Birth Date: {user.birthDate}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        Gender: {user.gender}
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
              </CardActionArea>
            </Grid>
          )}
        </Grid>
      </Box>
    </div>
  )
}

export default UserList;