import React from 'react';
import './TranscriptDisplay.scss';

const TranscriptDisplay = ({ words, currentTime }) => {
    const isPunctuation = (word) => /^[.,:;!?]$/.test(word?.text);
    const isNewParagraph = (currentWord, previousWord) =>
        !previousWord || currentWord.paragraph_id !== previousWord.paragraph_id;
    const isHighlighted = (currentTime, word) =>
        currentTime >= word.time && currentTime <= word.time + word.duration;

    return (
        <>
            {!!words?.length && (
                <div className={'transcript-display'}>
                    {words.map((word, index) => {
                        const nextWord = words[index + 1];
                        const previousWord = words[index - 1];
                        const newParagraph = isNewParagraph(word, previousWord);

                        return (
                            <React.Fragment key={`${word?.paragraph_id}_${word.time}_${word.duration}_${word.text}_${index}`}>
                                {newParagraph && index !== 0 && <p className={'paragraph-separator'}></p>}
                                <span className={isHighlighted(currentTime, word) ? 'highlighted' : 'normal'}>
                                    {word.text}
                                </span>
                                {!isPunctuation(word) && nextWord && !isPunctuation(nextWord) && ' '}
                            </React.Fragment>
                        );
                    })}
                </div>
            )}
        </>
    );


    // return (
    //     <>
    //         {!!words?.length && (
    //             <div className={'transcript-display'}>
    //                 {words.map((word, index) => {
    //                     const punctuationRegex = /^[.,:;!?]$/;
    //                     const isPunctuation = word.text && punctuationRegex.test(word.text);
    //                     const isNewParagraph = index === 0 || word.paragraph_id !== words[index - 1].paragraph_id;
    //
    //                     return (
    //                         <div key={`${word?.paragraph_id}_${word.time}_${word.duration}_${word.text}_${index}`}>
    //                             {isNewParagraph && <p className='paragraph-separator'></p>}
    //                             <span className={currentTime >= word.time && currentTime <= word.time + word.duration ? 'highlighted' : 'normal'}>
    //                                 {word.text}
    //                             </span>
    //                             {!isPunctuation && (index < words.length - 1 && !punctuationRegex.test(words[index + 1]?.text)) && ' '}
    //                         </div>
    //                     );
    //                 })}
    //             </div>
    //         )}
    //     </>
    // );
};


export default TranscriptDisplay;
