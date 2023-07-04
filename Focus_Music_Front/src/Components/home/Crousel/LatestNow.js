import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive } from "./LatestData";
import "./LatestNow.css"


const LatestNow = ({onSelectMusic}) => {
    const handleMusicClick = (music) => {
        onSelectMusic(music);
        console.log(music,"tranding");
      };


    return (
        <div className="let-carousel-App">
            <h2>Latest Songs</h2>
            <Carousel showDots={true} responsive={responsive}>
                {productData.map((item, index) => (
                    <div className="let-card">
                        <img className="let-product--image" src={item.imageurl} alt="product image" />
                        <p>{item.title}</p>
                        <p>vcbx</p>
                        <p>
                            <AiFillPlayCircle className='let-play-pause-ms-tranding-Music' onClick={() => handleMusicClick(item.url)}/>
                        </p>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default LatestNow