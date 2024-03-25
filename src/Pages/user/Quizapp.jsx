import React, { useState, useEffect } from "react";
import axios from "axios";

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [disableNext, setDisableNext] = useState(true);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/quizzes");
        setQuizzes(response.data);
        // Initialize correctAnswers array with same length as quizzes array
        setCorrectAnswers(new Array(response.data.length).fill(false));
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    };
    fetchQuizzes();
  }, []);

  const handleNextQuestion = () => {
    if (currentQuestionIndex === quizzes.length - 1) {
      setShowScore(true);
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
    setSelectedOption(null);
    setShowResult(false);
    setDisableNext(true);
  };

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
    setShowResult(true);
    setDisableNext(false);
    if (index === quizzes[currentQuestionIndex].correctOption) {
      setScore((prevScore) => prevScore + 1);
      // Mark the question as answered correctly
      setCorrectAnswers((prevCorrectAnswers) => {
        const updatedAnswers = [...prevCorrectAnswers];
        updatedAnswers[currentQuestionIndex] = true;
        return updatedAnswers;
      });
    }
  };

  const optionsLetters = ["A", "B", "C", "D"];

  return (
    <div className="container mx-auto py-8 h-full flex justify-center items-center">
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4">Quiz List</h2>
          {!showScore && quizzes.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-2">{`Question ${
                currentQuestionIndex + 1
              }: ${quizzes[currentQuestionIndex].question}`}</h3>
              <ul>
                {quizzes[currentQuestionIndex].options.map((option, index) => (
                  <li
                    key={index}
                    className={`ml-4 cursor-pointer border rounded p-2 ${
                      selectedOption === index
                        ? "font-bold cursor-not-allowed"
                        : ""
                    } ${
                      showResult &&
                      index === quizzes[currentQuestionIndex].correctOption
                        ? "bg-green-200"
                        : ""
                    } ${
                      showResult &&
                      selectedOption === index &&
                      index !== quizzes[currentQuestionIndex].correctOption
                        ? "bg-red-200"
                        : ""
                    }`}
                    onClick={() => handleOptionSelect(index)}
                  >
                    <div>
                      <span className="mr-2">{optionsLetters[index]}</span>
                      {option}
                    </div>
                  </li>
                ))}
              </ul>
              {showResult && (
                <p
                  className={`mt-2 ${
                    selectedOption ===
                    quizzes[currentQuestionIndex].correctOption
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {selectedOption ===
                  quizzes[currentQuestionIndex].correctOption
                    ? "Correct!"
                    : "Incorrect!"}
                </p>
              )}
              <button
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ${
                  disableNext ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handleNextQuestion}
                disabled={disableNext}
              >
                Next
              </button>
            </div>
          )}
          {showScore && (
            <div>
              <p className="mt-2">
                Your score: {((score / quizzes.length) * 100).toFixed(2)}%
              </p>
              <h3 className="text-xl font-semibold mt-4 mb-2">
                Correct Answers:
              </h3>
              <ul>
                {quizzes.map((quiz, index) => (
                  <li
                    key={index}
                    className={`ml-4 ${
                      correctAnswers[index] ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    Question {index + 1}: {quiz.options[quiz.correctOption]}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizList;
