import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from "react-router-dom";
const NavBar = (props) => {
    let navigate = useNavigate();

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: "#28292a" }}>
                    <Toolbar>
                        <Typography
                            variant="h4"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { sm: 'block' }, textAlign: "left" }}
                            onClick={e => navigate("/users")}
                        >
                            Users.com
                        </Typography>
                        
                        
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default NavBar;