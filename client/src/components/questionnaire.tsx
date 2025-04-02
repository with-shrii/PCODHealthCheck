import { useState } from "react";
import { useAssessment } from "@/hooks/use-assessment";
import { questions } from "@/data/pcod-questions";

export default function Questionnaire() {
  const { setAnswer, submitAssessment } = useAssessment();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>(Array(questions.length).fill(undefined));
  
  const totalQuestions = questions.length;
  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  
  const handleOptionSelect = (optionIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setUserAnswers(newAnswers);
    setAnswer(currentQuestionIndex, optionIndex);
  };
  
  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const goToNextQuestion = () => {
    if (userAnswers[currentQuestionIndex] === undefined) {
      alert("Please select an answer before proceeding.");
      return;
    }
    
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      submitAssessment();
    }
  };
  
  return (
    <>
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-xs mb-1">
          <span>Question <span>{currentQuestionIndex + 1}</span> of <span>{totalQuestions}</span></span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-primary h-2.5 rounded-full" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Assessment Questions Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-lg font-medium mb-5">
          {currentQuestionIndex + 1}. {currentQuestion.question}
        </h3>
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <div key={index} className="flex items-center">
              <input 
                type="radio" 
                id={`option-${index}`} 
                name={`question-${currentQuestionIndex}`} 
                value={index} 
                checked={userAnswers[currentQuestionIndex] === index}
                onChange={() => handleOptionSelect(index)}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300" 
              />
              <label 
                htmlFor={`option-${index}`} 
                className="ml-2 block text-gray-700"
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between">
        <button 
          onClick={goToPreviousQuestion}
          className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-md transition duration-300 ${currentQuestionIndex === 0 ? 'hidden' : ''}`}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-1 inline" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
          Previous
        </button>
        <button 
          onClick={goToNextQuestion}
          className="bg-primary hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-300"
        >
          {currentQuestionIndex === totalQuestions - 1 ? (
            <>
              Submit
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-1 inline" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </>
          ) : (
            <>
              Next
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-1 inline" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </>
          )}
        </button>
      </div>
    </>
  );
}
