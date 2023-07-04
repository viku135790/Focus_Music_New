import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive } from "./TrandingData";
import "./TrandingNow.css";


const TrandingNow = ({ onSelectMusic }) => {

    const handleMusicClick = (music) => {
        onSelectMusic(music);
        console.log(music,"tranding");
      };


    return (
        <div className="carousel-App">
            <h2>Trending Now</h2>
            <Carousel showDots={true} responsive={responsive}>
                {productData.map((item, index) => (
                    <div className="card">
                        <img className="product--image" src={item.imageurl} alt="product image" />
                        <p>{item.title}</p>
                        <p>vcbx</p>
                        <p>
                            <AiFillPlayCircle className='play-pause-ms-tranding-Music' onClick={() => handleMusicClick(item.url)}/>
                        </p>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default TrandingNow