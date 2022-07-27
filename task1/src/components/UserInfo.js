import React, { useEffect, useState } from 'react'
import axios from 'axios';
import NavBar from './NavBar'
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
const UserInfo = () => {
    const { id } = useParams();
    const [user, setUser] = useState({})
    const [add, setAdd] = useState({})
    const [comp, setComp] = useState({})
    const [posts, setPosts] = useState()
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('https://dummyjson.com/users/' + id)
            .then(res => {
                setUser(res.data);
                setAdd(res.data.address)
                setComp(res.data.company)
                axios.get('https://dummyjson.com/posts/user/' + id)
                    .then(res => {
                        setPosts(res.data.posts);
                        setLoaded(true);
                    })
            })
            .catch(err => console.error(err));
    }, []);
    return (
        <div style={{ margin: "0 auto" }}>
            {loaded &&
                <div style={{ padding: 15 }}>
                    <h1 >{user.firstName} {user.lastName}</h1>
                    <Box sx={{ display: { xs: "initial", sm: 'flex' } }}>
                        <Box sx={{ textAlign: "left", marginRight: { xs: 0, sm: 10 },borderRight: { xs: 0, sm: 1 } ,padding:2 }}>
                            <img src={user.image} alt={user.firstName} ></img>
                            <p>Email: {user.email}</p>
                            <p>Birth Date: {user.birthDate}</p>
                            <p>Gender: {user.gender}</p>
                            <p>Address: {add.address}/{add.city}/{add.state}</p>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <p>Company: {comp.name}</p>
                            {posts.map((post, i) =>
                                <Box sx={{ border: "solid black 1px", borderRadius: 5, marginBottom: 2, padding: 1, width: { xs: 350, sm: 500, md: 600, lg: 800 } }} key={i}>
                                    <p >{post.title}</p>
                                    <p style={{ textAlign: "left" }}>{post.body}</p>
                                    <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                                        <p># </p>
                                        {post.tags.map((tag, i) =>
                                            <span> {tag} ,</span>
                                        )}
                                    </Box>
                                </Box>
                            )}
                        </Box>
                    </Box>
                </div>
            } </div>

    )
}

export default UserInfo