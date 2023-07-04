import React, { useEffect, useRef, useState } from 'react';
import { BiSolidSkipNextCircle, BiSolidSkipPreviousCircle } from "react-icons/bi";
import { BsFillPlayCircleFill, BsFillVolumeUpFill, BsPauseCircleFill, BsShuffle } from "react-icons/bs";
import { RxLoop } from "react-icons/rx";
import "./MusicPlayer.css";




const MusicPlayer = ({ selectedMusic }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isSeeking, setIsSeeking] = useState(false);
    const [showVolumeBar, setShowVolumeBar] = useState(false);
    const [volume, setVolume] = useState(1);
    const [isShuffleActive, setIsShuffleActive] = useState(false);
    const [isLoopActive, setIsLoopActive] = useState(false);


    const tracks = [
        {
            url: selectedMusic,
            title: "vcvg",
            tags : ["vc"]
        }
       
        // {
        //     url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
        //     title: "Madza - Chords of Life",
        //     tags: ["house"],
        // },
        // {
        //     url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
        //     title: "Madza - Late Night Drive",
        //     tags: ["dnb"],
        // },
        // {
        //     url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
        //     title: "Madza - Persistence",
        //     tags: ["dubstep"],
        // },
    ];

    const currentTrack = tracks[currentTrackIndex];

    const handlePlay = () => {
        audioRef.current.play();
        setIsPlaying(true);
    };

    const handlePause = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    };

    const handleNext = () => {
        const nextTrackIndex =
            currentTrackIndex === tracks.length - 1 ? 0 : currentTrackIndex + 1;
        setCurrentTrackIndex(nextTrackIndex);
        setIsPlaying(true); // Autoplay the next track
    };

    const handlePrev = () => {
        const prevTrackIndex =
            currentTrackIndex === 0 ? tracks.length - 1 : currentTrackIndex - 1;
        setCurrentTrackIndex(prevTrackIndex);
        setIsPlaying(true); // Autoplay the previous track
    };

    useEffect(() => {
        audioRef.current.addEventListener("ended", handleNext);
        return () => {
            audioRef.current.removeEventListener("ended", handleNext);
        };
    }, []);

    useEffect(() => {
        audioRef.current.currentTime = 0;
    }, [currentTrackIndex]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play().catch((error) => {
                console.error("Failed to play audio:", error);
            });
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying, currentTrackIndex]);


    //progressbar
    const handleSeek = (e) => {
        const seekTime = e.target.value;
        audioRef.current.currentTime = seekTime;
        setCurrentTime(seekTime);
    };

    const handleSeekStart = () => {
        setIsSeeking(true);
    };

    const handleSeekEnd = () => {
        setIsSeeking(false);
    };

    const updateTime = () => {
        if (!isSeeking) {
            setCurrentTime(audioRef.current.currentTime);
        }
        setDuration(audioRef.current.duration);
    };




    //volume
    const handleVolumeToggle = () => {
        setShowVolumeBar((prevState) => !prevState);
    };
    const handleVolumeChange = (e) => {
        const volumeValue = parseFloat(e.target.value);
        audioRef.current.volume = volumeValue;
        setVolume(volumeValue);
    };

    useEffect(() => {
        audioRef.current.volume = 0.5;
        setVolume(0.5);
    }, []);



    //suffleMusic
    const handleShuffle = () => {
        setIsShuffleActive((prevValue) => !prevValue);
    };

    useEffect(() => {
        if (isShuffleActive) {
            // Generate a random index different from the current track index
            let randomIndex = currentTrackIndex;
            while (randomIndex === currentTrackIndex) {
                randomIndex = Math.floor(Math.random() * tracks.length);
            }
            setCurrentTrackIndex(randomIndex);
            setIsPlaying(true); // Autoplay the shuffled track
        }
    }, [isShuffleActive]);






    // Loop button handler
    const handleLoop = () => {
        setIsLoopActive((prevValue) => !prevValue);
    };

    useEffect(() => {
        audioRef.current.loop = isLoopActive;
    }, [isLoopActive]);





    return (
        <div className='musicplayer-main-conta'>

            {/* audio-main */}
            <audio className='audio-main-conta'
                ref={audioRef}
                src={currentTrack.url}
                onTimeUpdate={updateTime}
            ></audio>



            {/* music progress bar */}
            <div className='progress-bar-music'>
                <input
                    type="range"
                    min="0"
                    max={duration}
                    step="1"
                    value={currentTime}
                    onChange={handleSeek}
                    onMouseDown={handleSeekStart}
                    onMouseUp={handleSeekEnd}
                />
            </div>




            {/* music name and title */}
            <div className='complete-music-item'>
                <div className='music-name-title'>
                    <h3>{currentTrack.title}</h3>
                    <p>Tags: {currentTrack.tags.join(", ")}</p>
                </div>


                {/* complete music tool */}
                <div className='music-nav-btns'>
                    {/* suffle */}
                    <BsShuffle onClick={handleShuffle} className={isShuffleActive ? 'Activate-Shuffle' : 'Deactivate-Shuffle'} />
                    {/* prev */}
                    <BiSolidSkipPreviousCircle onClick={handlePrev} className='prev-btn' />
                    {/* play/pause */}
                    {isPlaying ? (
                        <BsPauseCircleFill onClick={handlePause} className='play-pause-ms' />
                    ) : (
                        <BsFillPlayCircleFill onClick={handlePlay} className='play-pause-ms' />
                    )}
                    {/* next */}
                    <BiSolidSkipNextCircle onClick={handleNext} className='prev-btn' />
                    {/* loop  */}
                    <RxLoop onClick={handleLoop} className={isLoopActive ? 'Activate-Loop' : 'Deactivate-Loop'} />
                </div>




                {/* complete view-music */}
                <div className='speaker-more-info'>
                    {/* Speaker */}
                    <BsFillVolumeUpFill onClick={handleVolumeToggle} />
                    {showVolumeBar && (
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            value={volume}
                            onChange={handleVolumeChange}
                        />
                    )}
                </div>
            </div>
        </div >
    )
}

export default MusicPlayer