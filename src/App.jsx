import React, { useState } from 'react';
import TranscriptSelector from './components/transcript-selector/TranscriptSelector';
import TranscriptDisplay from './components/transcript-display/TranscriptDisplay';
import VideoPlayer from './components/video-player/VideoPlayer';
import { getTranscriptById, getRandomTranscript } from './services/transcript.service';
import './App.scss';
// import {useThrottle} from "./hooks/useThrottle";

const App = () => {
  const [selectedTranscript, setSelectedTranscript] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  // const throttleTime = useThrottle(currentTime, 0);

  const handleSelectTranscript = async (transcript) => {
    try {
      let data;
      if (transcript) {
        data = await getTranscriptById(transcript.id);
      } else {
        data = await getRandomTranscript();
      }
      setSelectedTranscript(data);

    } catch (error) {
      console.error('Error fetching transcript details:', error);
    }
  };

  const handleTimeUpdate = (newTime) => {
    setCurrentTime(newTime);
  };

  // const currentParagraph = useMemo(() => {
  //   if(!selectedTranscript) return null;
  //   return selectedTranscript.paragraphs.find((paragraph) => {
  //     return paragraph.time <= currentTime && (paragraph.time + paragraph.duration) >= currentTime;
  //   });
  // }, [throttleTime, selectedTranscript]);

  return (
      <div className='app'>
          <h1>Karaoke App</h1>

        <div className='content'>
          <TranscriptSelector onSelect={handleSelectTranscript} />
          {selectedTranscript && (
              <div className='selected-transcript-container'>
                <VideoPlayer
                    url={selectedTranscript.audio_url}
                    currentTime={currentTime}
                    onTimeUpdate={handleTimeUpdate}
                />
                <TranscriptDisplay
                    words={selectedTranscript?.words}
                    currentTime={currentTime}
                />
              </div>
          )}
        </div>
      </div>
  );
};

export default App;
