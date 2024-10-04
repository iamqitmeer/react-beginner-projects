import { useState } from "react";
import quiz from "./quiz";
import { Button } from "@nextui-org/react";

export default function App() {
  let [quizes, setQuizes] = useState(quiz);
  let [currentQuestion, setCurrentQuestion] = useState(1);
  let [result, setResult] = useState(0);

  console.log(quizes);
  console.log(quizes[currentQuestion - 1].incorrect_answers);

  return (
    <>
      <div className="bg-zinc-100 w-full h-screen flex items-center justify-center ">
        <div className="min-w-[500px] min-h-[450px] bg-violet-600 rounded-3xl p-6 m-6 text-white">
          <div className="w-full border-b-2 flex items-center justify-between mb-4 py-2">
            <div>Quiz</div>
            <div>00:00</div>
          </div>
          <div>
            <h1 className="text-3xl font-bold">
              {quizes[currentQuestion - 1].question}
            </h1>
          </div>
          <div className="">
            {quizes[currentQuestion - 1].incorrect_answers.map((answer) => {
              return (
                <div className="my-2">
                  <Button
                    className="w-full p-4 bg-white"
                    variant="flat"
                    key={answer}
                  >
                    {answer}
                  </Button>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Button
                color="warning"
                className="w-40 py-6"
                variant="shadow"
                onClick={() => {
                  setCurrentQuestion(currentQuestion + 1);
                }}
              >
                Previous
              </Button>
            </div>
            <div>
              <Button
                color="warning"
                className="w-40 py-6"
                variant="shadow"
                onClick={() => {
                  setCurrentQuestion(currentQuestion + 1);
                }}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
