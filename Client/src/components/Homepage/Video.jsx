import backgroundVideo from '../../assets/OneTouch video.mp4'
import React, { useState, useRef } from 'react';
import './video.css'; 


const Video = () => {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleMuteToggle = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };


    return (
        <div className="w-full h-full md:py-[6rem] relative overflow-hidden bg-gray-900 ">
            <video
                ref={videoRef}
                src={backgroundVideo}
                loop
                autoPlay
                muted={isMuted}
                className='w-45 h-45 pt-[6.7rem] sm:pt-0'
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            />
            <div className="controls-overlay sm:mb-[1rem]  md:-ml-[20rem] md:mb-[4rem] lg:-ml-[28rem] xl:-ml-[40rem] 2xl:-ml-[44rem] ">
                <button onClick={handleMuteToggle} className="control-button">
                    {isMuted ? '🔇' : '🔊'}
                </button>
            </div>
        </div>
    );
};

export default Video;




