import React, { useState, useEffect } from 'react'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import Header from './Header'
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
        <>
        <Header componentPath="/top-artists" componentName="Top Artists" />
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
                </ul>
        </div>
        </>
    )
}

export default TopSongs
