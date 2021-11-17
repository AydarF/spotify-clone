import React, {useState, useEffect} from 'react'

function TopArtists() {
    const [userTopArtists, setUserTopArtists] = useState();    

    useEffect(() => {
        fetch("http://localhost:8000/api/user-top-artists")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setUserTopArtists(data)
        })        
    }, [])

    return (
        <div>
            { userTopArtists ? (
                userTopArtists.map((artist) => {
                    return <h1 key= {artist.name}>{artist.name}</h1>
                })
            ):
            (
                <h1>LOADING...</h1>
            )}
        </div>
    )
}

export default TopArtists
