import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import './TopArtists.css'
import './TopSongs.css'


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
        <div className="main">
            <ul>
                {userTopSongs ? (
                    userTopSongs.map((song) => {
                        return (                        
                            <ImageListItem 
                                key={song.name}
                                className="imageListItem">                            
                                <img  
                                    src={song.album.images[0].url} 
                                    srcSet={song.album.images[0].url}
                                    alt={song.name} loading="lazy" />                                                
                                <ImageListItemBar
                                    className="imageListItemBar"
                                    title={song.name}
                                    subtitle={
                                        <>
                                            <h3 className="subtitle">{song.album.artists[0].name}</h3>
                                        </>}                                                          
                                    position="below"
                                />
                            </ImageListItem> 
                        )
                    })
                ) : (
                    <h1>Loading...</h1>
                )}
                    <Link to="/">Home</Link>
                </ul>
        </div>
    )
}

export default TopSongs
