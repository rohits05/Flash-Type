import React from "react";
import Landing from "../Landing/Landing";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import ChallengeSection from "../Challenge/Challenge";
import "./App.css";
import { SAMPLE_PARAGRAPHS } from "./../../Components/Data/sp";

const TotalTime = 60;
const ServiceUrl = "http://metaphorpsum.com/paragraphs/1/9";
const defaultState = {
  selectedParagraph: "",
  timerStarted: false,
  timeRemaining: TotalTime,
  words: 0,
  characters: 0,
  wpm: 0,
  testInfo: [],
};

class App extends React.Component {
  state = defaultState;

  fetchNewParagraphFallback = () => {
    const data =
      SAMPLE_PARAGRAPHS[Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)];

    const selectedParagraphArray = data.split("");
    const testInfo = selectedParagraphArray.map((selectedLetter) => {
      return {
        testLetter: selectedLetter,
        status: "notAttempted",
      };
    });

    this.setState({ ...defaultState, testInfo, selectedParagraph: data });
  };

  // fetchNewParagraph = () => {
  //   fetch(ServiceUrl)
  //     .then((response) => response.text())
  //     .then((data) => {});
  // };

  componentDidMount() {
    this.fetchNewParagraphFallback();
  }

  startTimer = () => {
    this.setState({ timerStarted: true });
    const timer = setInterval(() => {
      if (this.state.timeRemaining > 0) {
        // Change the wpm
        const timeSpent = TotalTime - this.state.timeRemaining;

        const wpm =
          timeSpent > 0 ? (this.state.words / timeSpent) * TotalTime : 0;
        this.setState({
          timeRemaining: this.state.timeRemaining - 1,
          wpm: parseInt(wpm),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };

  startAgain = () => this.fetchNewParagraphFallback();

  handleUserInput = (inputValue) => {
    if (!this.state.timerStarted) this.startTimer();

    // 1--handle the underflow case --all the characters should be shown as not attempted - Early exit
    // 2--handle the overflow case --early exit
    // 3--handle backspaces -- mark the ( index + 1 ) element as not attempted
    // Irrespective of whether the index is less than zero
    // Don't forget to checxk for the overflow case here
    // I mean index + 1 can go out of bound when the index is eqaul to length - 1
    // Update the status in the test info
    // Find last character in the input index
    // Check if the chara ter is at the same index whhich is the state matches or not
    // If it matches then mark it as correct
    //If it doesn't match then mark it as correct
    //Irrespective of the case , characters , words and speed can be updated
    const characters = inputValue.length;
    const words = inputValue.split(" ").length;
    const index = characters - 1;

    if (index < 0) {
      this.setState({
        testInfo: [
          {
            testLetter: this.state.testInfo[0].testLetter,
            status: "notAttempted",
          },
          ...this.state.testInfo.slice(1),
        ],
        characters,
        words,
      });
      return;
    }

    if (index >= this.state.selectedParagraph.length) {
      this.setState({ characters, words });
      return;
    }

    // Big - Logic
    // Make a copy of test info
    const testInfo = this.state.testInfo;
    if (!(index === this.state.selectedParagraph.length - 1)) {
      testInfo[index + 1].status = "notAttempted";
    }

    // Check for the correct type letters
    const isCorrect = inputValue[index] === testInfo[index].testInfo;

    // Update the Test info
    testInfo[index].status = isCorrect ? "correct" : "inCorrect";

    // Update the state
    this.setState({
      testInfo,
      words,
      characters,
    });
  };

  render() {
    return (
      <div className="app">
        {/* Nav Section */}
        <Nav />

        {/* Landing Page */}
        <Landing />

        {/* Challenge Section */}
        <ChallengeSection
          selectedParagraph={this.state.selectedParagraph}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          timeRemaining={this.state.timeRemaining}
          timerStarted={this.state.timerStarted}
          testInfo={this.state.testInfo}
          onInputChange={this.handleUserInput}
          startAgain={this.startAgain}
        />

        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
