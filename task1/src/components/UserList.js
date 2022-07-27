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
const UserList = (props) => {
  const { allUsers } = props;
  const [search, setSearch] = useState("");
  let navigate = useNavigate();
  const searchQuery = e => {
    setSearch(e.target.value.toLowerCase())
  }
  const filterResult = useMemo(() => {
    const result = allUsers.filter((user) =>
      user.firstName.toLowerCase().includes(search) || user.lastName.toLowerCase().includes(search)
    )
    return result
  }, [search])
  return (
    <div >
     
      <TextField sx={{ width: 400, marginTop: 2 }} id="demo-helper-text-misaligned-no-helper" label="Search By Name ...." onChange={searchQuery} />
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