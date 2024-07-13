import React from 'react';
import './TranscriptDisplay.scss';

const TranscriptDisplay = ({ words, currentTime }) => {
    return (
        <>
            {!!words?.length && (
                <div className={'transcript-display'}>
                    {words.map((word, index) => {
                        const isPunctuation = word.text && /^[.,:;!?]$/.test(word.text);
                        const isNewParagraph = index === 0 || word.paragraph_id !== words[index - 1].paragraph_id;

                        return (
                            <div key={`${word?.paragraph_id}_${word.time}_${word.duration}_${word.text}_${index}`}>
                                {isNewParagraph && <p className='paragraph-separator'></p>}
                                <span className={currentTime >= word.time && currentTime <= word.time + word.duration ? 'highlighted' : 'normal'}>
                                    {word.text}
                                </span>
                                {!isPunctuation && (index < words.length - 1 && !/^[.,:;!?]$/.test(words[index + 1]?.text)) && ' '}
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
};


export default TranscriptDisplay;
