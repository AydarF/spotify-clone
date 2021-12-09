import React from 'react'
import "./Login.css"
import spotifyImg from '../resources/images/spotifyImg.png'

function Login() {
    const getSpotifyUserLogin = () => {
        fetch("http://localhost:8080/api/login")
        .then((response) => response.text())
        .then(response => {
            window.location.replace(response);
        })
    }
    
    return (
        <div className="login">
            <img src={spotifyImg} alt="Spotify Logo" />
            <button onClick={getSpotifyUserLogin}>LOGIN WITH SPOTIFY</button>
        </div>
    )
}

export default Login
