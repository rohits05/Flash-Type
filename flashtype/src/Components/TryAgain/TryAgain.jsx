import React from "react";
import "./TryAgain.css";

const TryAgain = ({ words, characters, wpm , startAgain }) => {
  return (
    <div className="try-again-container">
      <h1>Test Results</h1>

      <div className="result-container">
        <p>
          <b>Characters :</b> {characters}
        </p>

        <p>
          <b>Words :</b> {words}
        </p>

        <p>
          <b>Speed :</b> {wpm} wpm
        </p>
      </div>

      <div>
        <button onClick={ () => startAgain()} className="end-buttons start-again-button">Re-try</button>

        <button
          onClick={() => {
            window.open(
              "https://www.facebook.com/sharer/sharer.php?u=theleanprogrammer.com/aam",
              "facebook-share-dialog",
              "width=800,height=600"
            );
          }}
          className="end-buttons share-button"
        >
          Share
        </button>

        <button
          onClick={() => {
            window.open(
              "https://twitter.com/intent/tweet?text=theleanprogrammer.com",
              "Twitter",
              "width=800,height=600"
            );
          }}
          className="end-buttons tweet-button"
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TryAgain;
