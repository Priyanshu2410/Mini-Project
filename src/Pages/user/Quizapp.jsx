import React, { useState, useEffect } from "react";
import axios from "axios";

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/quizzes");
        setQuizzes(response.data);
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
  };

  const handleOptionSelect = (index) => {
    if (selectedOption === null) {
      setSelectedOption(index);
      setShowResult(true);
      if (index === quizzes[currentQuestionIndex].correctOption) {
        setScore((prevScore) => prevScore + 1);
      }
    }
  };

  const optionsLetters = ["A", "B", "C", "D"];

  return (
    <div className="container mx-auto py-8 h-full flex justify-center items-center">
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4">Quiz</h2>
          {!showScore && quizzes.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-2">{`Question ${
                currentQuestionIndex + 1
              }: ${quizzes[currentQuestionIndex].question}`}</h3>
              <ul>
                {quizzes[currentQuestionIndex].options.map((option, index) => (
                  <li
                    key={index}
                    className={`ml-4 ${
                      selectedOption === index
                        ? "font-bold cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                    onClick={() => handleOptionSelect(index)}
                  >
                    <span className="mr-2">{optionsLetters[index]}</span>
                    {option}
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
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={handleNextQuestion}
              >
                Next
              </button>
            </div>
          )}
          {showScore && (
            <p className="mt-2">
              Your score: {score}/{quizzes.length}
              <br></br>({((score / quizzes.length) * 100).toFixed(2)}%)
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizList;
