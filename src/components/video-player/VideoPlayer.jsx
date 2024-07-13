import React, { useRef, useEffect } from 'react';
import './VideoPlayer.scss';

const VideoPlayer = ({ url, currentTime, onTimeUpdate }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (!videoRef.current.isPaused) return;
        const videoElement = videoRef.current;
        videoElement.currentTime = currentTime;
    }, [currentTime]);

    const handleTimeUpdate = () => {
        onTimeUpdate(videoRef.current.currentTime);
    };

    useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.src = url;
            videoElement.load();
        }
    }, [url]);

    return (
        <div className='video-wrapper'>
            <video ref={videoRef} controls onTimeUpdate={handleTimeUpdate} >
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;
