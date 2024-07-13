import React, {useEffect, useState} from 'react';
import TranscriptSelector from './components/transcript-selector/TranscriptSelector';
import TranscriptDisplay from './components/transcript-display/TranscriptDisplay';
import VideoPlayer from './components/video-player/VideoPlayer';
import { getTranscriptById, getRandomTranscript, getTranscripts } from './services/transcript.service';
import './App.scss';

const App = () => {
  const [transcripts, setTranscripts] = useState([]);
  const [selectedTranscript, setSelectedTranscript] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  // const throttleTime = useThrottle(currentTime, 0);

  useEffect(() => {
    getAllTranscripts();
  }, []);

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

  const getAllTranscripts = async () => {
    try {
      const data = await getTranscripts();
      setTranscripts(data);
    } catch (error) {
      console.error('Error fetching transcripts:', error);
    }
  }

  const handleTimeUpdate = (newTime) => {
    setCurrentTime(newTime);
  };

  return (
      <div className='app'>
          <h1>Karaoke App</h1>

        <div className='content'>
          <TranscriptSelector onSelect={handleSelectTranscript} transcripts={transcripts} />
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
