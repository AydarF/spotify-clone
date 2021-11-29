import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import Header from './Header'
import './TopArtists.css'


function TopArtists() {
    const [userTopArtists, setUserTopArtists] = useState();    

    useEffect(() => {
        fetch("http://localhost:8080/api/user-top-artists")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setUserTopArtists(data)
        })        
    }, [])

    return (
        <>
        <Header componentPath="/top-songs" componentName="Top Songs" />
        <div className="main">
            <ul>
            { userTopArtists ? (
                userTopArtists.map((artist) => {
                    return (                        
                        <ImageListItem 
                            key={artist.name}
                            className="imageListItem">                            
                            <img  
                                src={artist.images[0].url} 
                                srcSet={artist.images[0].url}
                                alt={artist.name} loading="lazy" />                                                
                            <ImageListItemBar
                                className="imageListItemBar"
                                title={artist.name}
                                subtitle={
                                <>
                                    <h3 className="subtitle">Genre: {artist.genres[0]}</h3>
                                </>}            
                                position="below"
                            />
                        </ImageListItem> 
                    )
                })
            ):
            (
                <h1>LOADING...</h1>
            )}
            </ul>
        </div>
        </>
    )
}

export default TopArtists;
