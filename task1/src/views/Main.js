import React, { useEffect, useState } from 'react'
import axios from 'axios';
import UserList from '../components/UserList';
import NavBar from '../components/NavBar';

export default (props) => {
    const [allUsers, setAllUsers] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('https://dummyjson.com/users')
            .then(res => {
                setAllUsers(res.data.users);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="App">
            {loaded && <UserList allUsers={allUsers} />}
        </div>
    )
}