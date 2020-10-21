import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'
import axios from 'axios'

import AuthApi from '../../context/AuthApi'

const Profile = () => {

    const Auth = useContext(AuthApi)
    let history = useHistory()

    const headers = { Authorization: `Bearer ${Cookies.get('x_auth')}`}

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


    return (
        <div>
            <h1>Profile page</h1>

            <button className="cta" onClick={handleSignOut}><span>Sign out</span></button>
        </div>
    )
}

export default Profile