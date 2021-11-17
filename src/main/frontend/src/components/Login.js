import React from 'react'
import "./Login.css"

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
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Spotify Logo" />
            <button onClick={getSpotifyUserLogin}>LOGIN WITH SPOTIFY</button>
        </div>
    )
}

export default Login
