import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function TopSongs() {
    const [ userTopSongs, setTopSongs ] = useState();

    useEffect(() => {
        fetch("http://localhost:8080/api/user-top-songs")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setTopSongs(data);
        })
    }, [])

    return (
        <div>
            {userTopSongs ? (
                userTopSongs.map(song => {
                    return <p key={song.name}>{song.name}</p>
                })
            ) : (
                <h1>Loading...</h1>
                )}
                <Link to="/">Home</Link>
        </div>
    )
}

export default TopSongs
