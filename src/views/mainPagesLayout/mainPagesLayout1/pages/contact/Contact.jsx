import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const BlogPost = ({ content = "This is a default blog post." }) => {
  const [synth, setSynth] = useState(null);
  const [isReading, setIsReading] = useState(false);
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);

  const handleToggleReading = () => {
    setIsReading((prevIsReading) => !prevIsReading);
  };

  useEffect(() => {
    const splitWords = content.split(' ');
    setWords(splitWords);
  }, [content]);

  useEffect(() => {
    if (isReading) {
      const utterance = new SpeechSynthesisUtterance(content);
      synth?.speak(utterance);
    } else {
      synth?.cancel();
    }
  }, [isReading, content, synth]);

  useEffect(() => {
    const handleWordBoundary = (event) => {
      const { charIndex } = event;
      const wordIndex = words.findIndex((word, index) => index === charIndex);
      setCurrentWordIndex(wordIndex);
    };

    synth?.addEventListener('boundary', handleWordBoundary);

    return () => {
      synth?.removeEventListener('boundary', handleWordBoundary);
    };
  }, [synth, words]);

  useEffect(() => {
    if ('speechSynthesis' in window) {
      const synth = window.speechSynthesis;
      setSynth(synth);
    }
  }, []);

  return (
    <div>
      <button onClick={handleToggleReading}>{isReading ? 'Stop Reading' : 'Start Reading'}</button>
      <div>
        {words.map((word, index) => (
          <span
            key={index}
            style={{
              backgroundColor: index === currentWordIndex ? 'yellow' : 'transparent',
              display: 'inline-block',
            }}
          >
            {word}{' '}
          </span>
        ))}
      </div>
    </div>
  );
};

BlogPost.propTypes = {
  content: PropTypes.string,
};

export default BlogPost;
