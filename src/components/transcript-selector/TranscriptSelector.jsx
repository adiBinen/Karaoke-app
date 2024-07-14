import React from 'react';
import './TranscriptSelector.scss';
import TranscriptButton from "../transcript-button/TranscriptButton";

const TranscriptSelector = ({ onSelect, transcripts }) => {

    return (
        <div className={'transcript-selector'}>
            <ul>
                {transcripts?.map((transcript) => (
                    <li key={transcript.id}>
                        <TranscriptButton onSelect={onSelect} transcript={transcript} />
                    </li>
                ))}
                <li key='random-transcript-button'>
                    <TranscriptButton onSelect={onSelect} />
                </li>
            </ul>
        </div>
    );
};

export default TranscriptSelector;
