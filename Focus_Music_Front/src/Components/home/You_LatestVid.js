import React, { useState } from 'react';
import playimage from "../../images/youtube.png";
import TrandingNow from '../home/Crousel/TrandingNow';
import Footer from '../reusable_componants/Footer';
import ArtistNow from './Crousel/ArtistNow';
import LatestNow from './Crousel/LatestNow';
import "./You_LatestVid.css";

const You_LatestVid = () => {
    const [selectedMusic, setSelectedMusic] = useState('');

    const [selectedContainer, setSelectedContainer] = useState(null);
    const handleContainerClick = (container) => {
        setSelectedContainer(container);
    };

    const [selectedVideo, setSelectedVideo] = useState('');
    const handleVideoClick = (videoId) => {
        setSelectedVideo(videoId);
    }

    const handleSelectMusic = (music) => {
        setSelectedMusic(music);
    };

    

    console.log(selectedMusic, "latest")


    return (
        <div className='home-complete-div'>
            <div className='maincontainer-header'>
                <div className='lates-vid'>
                    <div className='lat-mo'>
                        <div className='latest-vid'>UPCOMING <span className='video-hed-bold'>VIDEOS</span></div>
                        <div className='more-vid'>MORE..</div>
                    </div>
                    <div className='vid-frame'>
                        <div className='video-iframe'>
                            {selectedVideo ? (
                                <iframe
                                    id='video2'
                                    src={`//www.youtube.com/embed/${selectedVideo}?enablejsapi=1&html5=1`}
                                    frameBorder='0'
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <iframe
                                    id='video2'
                                    src="//www.youtube.com/embed/_iktURk0X-A?enablejsapi=1&html5=1"
                                    frameBorder='0'
                                    allowFullScreen
                                ></iframe>
                            )}
                        </div>
                        <div className='render-video'>
                            <div onClick={() => handleVideoClick('JyNIJ8U03I0')} className='vido-resource'>
                                <img src={playimage} alt='Image' />
                            </div>
                            <div onClick={() => handleVideoClick('xMBFazXKInQ')} className='vido-resource'>
                                <img src={playimage} alt='Image' />
                            </div>
                            <div onClick={() => handleVideoClick('adLTAl_Tjjw')} className='vido-resource'>
                                <img src={playimage} alt='Image' />
                            </div>
                            <div onClick={() => handleVideoClick('GXWfue9VhTY')} className='vido-resource'>
                                <img src={playimage} alt='Image' />
                            </div>
                            <div onClick={() => handleVideoClick('jiBG2UT1XS0')} className='vido-resource'>
                                <img src={playimage} alt='Image' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='top-tracks'>
                    <div className='top-headi'>UPCOMING <span className='video-hed-bold'>SONGS</span></div>
                    <div className='head-frame-conta'>
                        <div className='boripo-heading'>
                            <div onClick={() => handleContainerClick('Bollywood')}>BOLLYWOOD</div>
                            <div onClick={() => handleContainerClick('Regional')}>REGIONAL</div>
                        </div>
                        <div className='displaying-data'>
                            {selectedContainer === 'Bollywood' &&
                                <div>
                                    <p>music one music 2</p>
                                    <p>music one music 2</p>
                                    <p>music one music 2</p>
                                    <p>music one music 2</p>
                                    <p>music one music 2</p>
                                    <p>music one music 2</p>
                                    <p>music one music 2</p>
                                    <p>music one music 2</p>
                                    <p>music one music 2</p>
                                    <p>music one music 2</p>
                                    <p>music one music 2</p>
                                    <p>music one music 2</p>
                                    <p>music one music 2</p>
                                    <p>music one music 2</p>
                                    <p>music one music 2</p>
                                    <p>music one music 2</p>
                                </div>}
                            {selectedContainer === 'Regional' &&
                                <div>
                                    <p>music one music 2</p>
                                    <p>music onehtdrg music 2</p>
                                    <p>music onehrt music 2</p>
                                    <p>music one mhtreusic 2</p>
                                    <p>music one music 2</p>
                                    <p>music s music 2</p>
                                    <p>music one music 2</p>
                                    <p>music one music 2</p>
                                    <p>music one music 2</p>
                                    <p>music one music 2</p>
                                    <p>music one music 2</p>
                                    <p>music one music 2</p>
                                    <p>music one music 2</p>
                                    <p>music one music 2</p>
                                    <p>music one music 2</p>
                                    <p>music one music 2</p>
                                </div>}
                        </div>
                    </div>
                </div>
            </div>
            <div className='after-home-container'>
                <TrandingNow onSelectMusic={handleSelectMusic} />
                {/* <MusicPlayer selectedMusic={selectedMusic}/> */}
                <ArtistNow />
                <LatestNow />
                <Footer />
            </div>
        </div>
    )
}

export default You_LatestVid