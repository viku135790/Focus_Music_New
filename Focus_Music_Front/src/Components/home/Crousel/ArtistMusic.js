import React, { useState } from 'react';
import "./ArtistMusic.css";

const ArtistMusic = (props) => {
    const [selectedSong, setSelectedSong] = useState("");
  
    const handlePlay = () => {
      setSelectedSong(props.songUrl);
    }; 
  
    return (
      <div className="art-card">
        <img className="art-product--image" src={props.imgUrl} alt="product image" />
        {/* <h2>{props.name}</h2> */}
      </div>
    );
  };

export default ArtistMusic