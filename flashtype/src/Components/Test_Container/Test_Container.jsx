import React from "react";
import TryAgain from "../TryAgain/TryAgain";
import Typing from "../TypingChallengeContainer/Typing";
import "./Test_Container.css";

const TestContainer = ({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeRemaining,
  timerStarted,
  testInfo,
  onInputChange,
  startAgain
}) => {
  return (
    <div className="test-container">
      {timeRemaining > 0 ? (
        <div data-aos="fade-up" className="typing-challenge-container">
          <Typing
            timeRemaining={timeRemaining}
            timerStarted={timerStarted}
            selectedParagraph={selectedParagraph}
            words={words}
            characters={characters}
            wpm={wpm}
            testInfo={testInfo}
            onInputChange={onInputChange}
          />
        </div>
      ) : (
        <div className="try-again-container">
          <TryAgain words={words} characters={characters} vpm={wpm} startAgain={startAgain}/>
        </div>
      )}
    </div>
  );
};

export default TestContainer;
