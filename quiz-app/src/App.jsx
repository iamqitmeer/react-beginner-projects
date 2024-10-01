import { useState } from "react";
import quiz from "./quiz";

export default function App() {
  let [quizes, setQuizes] = useState(quiz);
  let [currentQuestion, setCurrentQuestion] = useState(1);
  let [result, setResult] = useState(0);

  console.log(quizes);
  console.log(quizes[currentQuestion - 1].incorrect_answers);

  return (
    <>
      <h1>{quizes[currentQuestion - 1].question}</h1>
      {quizes[currentQuestion - 1].incorrect_answers.map((answer) => {
        return <button key={answer}>{answer}</button>;
      })}
      <button
        onClick={() => {
          setCurrentQuestion(currentQuestion + 1);
        }}
      >
        Next
      </button>
    </>
  );
}
