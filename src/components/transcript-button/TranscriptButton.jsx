import React from 'react';
import './TranscriptButton.scss';

const TranscriptButton = ({ onSelect, transcript }) => {
    return (
        <button onClick={() => onSelect(transcript)}>
            {transcript?.name ? transcript.name : 'Random'}
        </button>
    )
};

export default TranscriptButton;