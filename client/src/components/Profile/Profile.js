import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'
import axios from 'axios'
import './Profile.css'

import AuthApi from '../../context/AuthApi'

const Profile = () => {

    const [user, setUser] = useState({}) //contains 4 important strings: _id, name, email, imgurl

    const Auth = useContext(AuthApi)
    let history = useHistory()

    const headers = { Authorization: `Bearer ${Cookies.get('x_auth')}`}

    useEffect(() => {
        async function getUserData() {
            const user = await getUserFromDB()
            console.log(user)
            setUser(user)
        }
        getUserData()
    }, []) 

    const getUserFromDB = () => {
        const request = axios.get('/api/users/me', { headers })
                            .then(response => response.data)
            return request
    }

    const handleSignOut = async () => {
        const response = await logoutUser()
        console.log(response) //just for debugging (consists of success)
        if(response.logoutSuccess){
          Auth.setAuth(false)
          Cookies.remove('x_auth')
          history.push('/4shopping')
        }
    }

    const logoutUser = () => {
        const request = axios.get('http://localhost:3000/api/users/logout', { headers })
                        .then(response => response.data)
        return request
    }

    const handleAddImg = () => {

    }


    return (
        <div>
            <h1>Profile page</h1>

            <h2>Hello {user.name}</h2>
            <img src={`http://localhost:5000/${user.profileImage}`} alt="personal-img" className="personal-img"></img>
            <button className="cta" onClick={handleSignOut}><span>Sign out</span></button>

            <form action="/multiple-upload" method="POST" enctype="multipart/form-data">
                <input type="file" multiple />
            </form>

        </div>
    )
}

export default Profile