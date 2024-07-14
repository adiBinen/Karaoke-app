import React, { useMemo, useCallback } from 'react';
import './TranscriptDisplay.scss';

const TranscriptDisplay = ({ words, currentTime }) => {
    const isPunctuation = useCallback((word) => /^[.,:;!?]$/.test(word?.text), []);
    const isNewParagraph = useCallback((currentWord, previousWord) =>
        !previousWord || currentWord.paragraph_id !== previousWord.paragraph_id, []);
    const isHighlighted = useCallback((currentTime, word) =>
        currentTime >= word.time && currentTime <= word.time + word.duration, []);

    const renderedWords = useMemo(() => (
        words.map((word, index) => {
            const nextWord = words[index + 1];
            const previousWord = words[index - 1];
            const newParagraph = isNewParagraph(word, previousWord);

            return (
                <React.Fragment key={`${word?.paragraph_id}_${word.time}_${word.duration}_${word.text}_${index}`}>
                    {newParagraph && index !== 0 && <p className={'paragraph-separator'}></p>}
                    <span className={isHighlighted(currentTime, word) ? 'highlighted' : 'normal'}>
                        {word.text}
                    </span>
                    {nextWord && !isPunctuation(nextWord) && ' '}
                </React.Fragment>
            );
        })
    ), [words, currentTime]);

    return (
        <>
            {!!words?.length && (
                <div className={'transcript-display'}>
                    {renderedWords}
                </div>
            )}
        </>
    );
};

export default React.memo(TranscriptDisplay);
