import React from 'react';
import "./ArtistNow.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive, productData } from "./ArtistData"
import ArtistMusic from './ArtistMusic';


const ArtistNow = () => {
    const product = productData.map((item) => (
        <ArtistMusic
            // name={item.name}
            imgUrl={item.imageurl}
            songUrl={item.url}
            name="title"
            // description={item.description}
            description="arjit sing"

        />
    ));

    return (
        <div className="art-carousel-App">
            <h2>Artist</h2>
            <Carousel showDots={false} responsive={responsive} className='art-crousel'>
                {product}
            </Carousel>
        </div>
    )
}

export default ArtistNow