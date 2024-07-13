import React from 'react';
import useGetAllTranscripts from '../../hooks/useGetAllTranscripts';
import './TranscriptSelector.scss';
import TranscriptButton from "../transcript-button/TranscriptButton";

const TranscriptSelector = ({ onSelect }) => {
    const { transcripts } = useGetAllTranscripts();

    return (
        <div className='transcript-selector'>
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
