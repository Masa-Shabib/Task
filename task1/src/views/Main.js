import React, { useEffect, useState } from 'react'
import axios from 'axios';
import UserList from '../components/UserList';

export default (props) => {
    const [allUsers, setAllUsers] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        async function getUser() {
            const users = await axios.get('https://dummyjson.com/users')
            setAllUsers(users.data.users);
            setLoaded(true)
        }
        getUser()
    }, [])
    
    return (
        <div className="App">
            {loaded && <UserList allUsers={allUsers} />}
        </div>
    )
}