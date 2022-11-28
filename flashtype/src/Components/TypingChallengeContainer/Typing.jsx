import React from "react";
import Details from "../DetailsCard/detailsCard";
import Type from "../Type/Type";
import "./Typing.css";

const Typing = ({
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
    <div className="typing-challenge-container">
      {/* Details Section */}
      <div className="details-container">
        {/*Words Type*/}
        <Details cardName="Words" cardValue={words} />

        {/*Mistakes*/}
        <Details cardName="Characers" cardValue={characters} />

        {/*Speed*/}
        <Details cardName="Speed" cardValue={wpm} />
      </div>

      {/* Real Challenge Section */}
      <div className="typewriter-container">
        <Type
          testInfo={testInfo}
          timeRemaining={timeRemaining}
          timerStarted={timerStarted}
          selectedPragraph={selectedParagraph}
          onInputChange={onInputChange}
          startAgain={startAgain}
        />
      </div>
    </div>
  );
};

export default Typing;
