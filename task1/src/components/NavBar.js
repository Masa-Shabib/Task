import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
const NavBar = (props) => {
    let navigate = useNavigate();

    return (
        <div >
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
                            Landing
                        </Typography>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, textAlign: "right" }}
                            onClick={e => navigate("/users")}
                        >
                            Add User
                        </Typography>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, textAlign: "right" }}
                            onClick={e => navigate("/users")}
                        >
                            User
                        </Typography>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, textAlign: "right" }}
                            onClick={e => navigate("/users")}
                        >
                            User
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default NavBar;