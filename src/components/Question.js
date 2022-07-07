import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);
  const [timerID, setTimerID] = useState(null);

  // add useEffect code
  // useEffect(() => {
  //   // const timerID = setTimeout(() => {
  //   //   setTimeRemaining(t => t - 1);
  //   // }, 1000);
  //   // setTimerID(timerID)
  // }, [])

  useEffect(() => {
    console.log(timeRemaining)
    if (timeRemaining == 0){
      setTimeRemaining(10);
      onAnswered(false);
      return
    }
    const timerID = setTimeout(() => {
      setTimeRemaining(t => t - 1);
    }, 1000);
    return function () {
      clearTimeout(timerID)
    }
  },[timeRemaining])

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
