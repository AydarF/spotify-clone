import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
// import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
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
        <div className="topArtists">
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
            <Link to="/">Home</Link>
            </ul>
        </div>
    )
}

export default TopArtists;
