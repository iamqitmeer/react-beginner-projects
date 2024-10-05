import { useEffect, useState } from "react";
import quiz from "./quiz";
import { Button } from "@nextui-org/react";

export default function App() {
  let [quizes, setQuizes] = useState(quiz);
  let [currentQuestion, setCurrentQuestion] = useState(1);
  let [result, setResult] = useState(0);
  let [resultPage, setResultPage] = useState(false);
  let [disabledOthersBtn, setDisabledOthersBtn] = useState(false);
  let [timer, setTimer] = useState(0);

  let answerBtn = (answer, index) => {
    if (quiz[currentQuestion] + 1) {
    } else {
      setResultPage(true);
    }

    if (index == quiz[currentQuestion - 1].correct_answer_index) {
      setResult(result + 10);
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  console.log(result);

  useEffect(() => {
    // let timer = 0;

    setInterval(() => {
      console.log(timer + timer);
    }, 1000);
  }, [currentQuestion]);

  return (
    <>
      <div className="bg-zinc-100 w-full h-screen flex items-center justify-center ">
        <div className="min-w-[500px] min-h-[450px] bg-violet-600 rounded-3xl p-6 m-6 text-white flex items-center justify-center">
          {resultPage ? (
            <div className="w-full h-full flex items-center justify-center flex-col">
              <h1 className="text-9xl font-bold mb-2">{result}%</h1>
              <p className="text-5xl font-bold text-yellow-500 mb-4">
                Best Of Luck!
              </p>
              <div>
                <Button
                  onClick={() => {
                    setCurrentQuestion(1);
                    setResultPage(false);
                  }}
                  color="default"
                  className="w-52 py-8 text-xl font-semibold"
                  radius="full"
                  variant="shadow"
                >
                  Restart
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <div className="w-full border-b-2 flex items-center justify-between mb-7 py-2">
                <div>Quiz</div>
                <div>00:00</div>
              </div>
              <div className="mb-4">
                <h1 className="text-3xl font-bold">
                  {quizes[currentQuestion - 1].question}
                </h1>
              </div>
              <div className="mb-6">
                {quizes[currentQuestion - 1].incorrect_answers.map(
                  (answer, index) => {
                    return (
                      <div className="my-2">
                        <Button
                          className="w-full p-4 bg-white font-semibold"
                          onClick={() => answerBtn(answer, index)}
                          variant="flat"
                          key={answer}
                        >
                          {answer}
                        </Button>
                      </div>
                    );
                  }
                )}
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Button
                    disabled={currentQuestion == 1}
                    color={"default"}
                    className="w-40 py-6"
                    variant="shadow"
                    onClick={() => {
                      setCurrentQuestion(currentQuestion - 1);
                    }}
                  >
                    Previous
                  </Button>
                </div>
                <div>
                  {quizes.length == currentQuestion ? (
                    <Button
                      color="warning"
                      className="w-40 py-6"
                      onClick={() => {
                        setResultPage(true);
                      }}
                      variant="shadow"
                    >
                      See Result
                    </Button>
                  ) : (
                    <p className="text-2xl font-bold">
                      {currentQuestion}/{quizes.length}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
