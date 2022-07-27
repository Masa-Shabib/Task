import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
const UserInfo = () => {
    const { id } = useParams();
    const [user, setUser] = useState({})
    const [posts, setPosts] = useState()
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
         const getUser = async()=> {
            const user1 = await axios.get('https://dummyjson.com/users/' + id)
            const post1 = await axios.get('https://dummyjson.com/posts/user/' + id)
            setUser(user1.data)
            setPosts(post1.data.posts)
            setLoaded(true)
        }
        getUser()
    }, [])
    return (
        <div style={{ margin: "0 auto" }}>
            {loaded &&
                <div style={{ padding: 15 }}>
                    <Box sx={{ display: { xs: "initial", sm: 'flex' }, justifyContent: "space-around" }}>
                        <Box sx={{ textAlign: "left", borderRight: { xs: 0, sm: 1 }, padding: 2 }}>
                            <h1 style={{ textAlign: "center" }}>{user.firstName} {user.lastName}</h1>
                            <img src={user.image} alt={user.firstName} ></img>
                            <h4>{user.company.title} at {user.company.name}</h4>
                            <p>Email: {user.email}</p>
                            <p>Birth Date: {user.birthDate}</p>
                            <p>Gender: {user.gender}</p>
                            <p>Address: {user.address.address}/{user.address.city}/{user.address.state}</p>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <h3>{user.firstName} {user.lastName} posts: </h3>
                            {posts.map((post, i) =>
                                <Box sx={{ border: "solid #d9d4d4 0.5px", textAlign: "left", borderRadius: 5, marginBottom: 2, padding: 1, width: { xs: 350, sm: 450, md: 550, lg: 850 } }} key={i}>
                                    <h4 >{post.title}</h4>
                                    <p>{post.body}</p>
                                    <Box sx={{ display: 'flex', color: "#9a9aa9", fontWeight: "bold", alignItems: "center" }}>
                                        <p># </p>
                                        {post.tags.map((tag, i) =>
                                            <span> {tag} ,</span>
                                        )}
                                    </Box>
                                    <p style={{ textAlign: "right" }}>{post.reactions} <ThumbUpIcon data-testid="ThumbUpIcon"></ThumbUpIcon> </p>
                                </Box>
                            )}
                        </Box>
                    </Box>
                </div>
            } </div>
    )
}

export default UserInfo