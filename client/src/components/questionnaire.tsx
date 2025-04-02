import { useState } from "react";
import { pcosQuestions } from "@/data/pcos-questions";
import { pcosInfo } from "@/data/pcos-info";
import { questions } from "@/data/pcod-questions";
import { pcodInfo } from "@/data/pcod-info";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useAssessment } from "@/hooks/use-assessment";
import InfoAccordion from "./info-accordion";
import DietRecommendations from "./diet-recommendations";
import PcosDietRecommendations from "./pcos-diet-recommendations";
import Results from "./results";

export default function Questionnaire() {
  const [activeTab, setActiveTab] = useState<'pcod' | 'pcos'>('pcod');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  
  const questionsData = activeTab === 'pcod' ? questions : pcosQuestions;
  const totalQuestions = questionsData.length;
  
  const handleAnswerSelect = (questionIndex: number, answerScore: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = answerScore;
    setSelectedAnswers(newAnswers);
    
    // Automatically proceed to next question after selecting an answer
    setTimeout(() => {
      if (questionIndex < totalQuestions - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        // Calculate score and show results
        const totalScore = newAnswers.reduce((acc, curr) => acc + (curr || 0), 0);
        setScore(totalScore);
        setShowResults(true);
      }
    }, 500); // Short delay for better UX
  };
  
  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };
  
  const resetAssessment = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setScore(0);
  };
  
  const switchTab = (tab: 'pcod' | 'pcos') => {
    setActiveTab(tab);
    resetAssessment();
  };
  
  const progressPercentage = (currentQuestion / totalQuestions) * 100;
  
  if (showResults) {
    return (
      <div className="max-w-4xl mx-auto px-4">
        <Results score={score} retakeAssessment={resetAssessment} />
        
        {/* Diet Recommendations based on selected condition */}
        {activeTab === 'pcod' ? (
          <DietRecommendations />
        ) : (
          <PcosDietRecommendations />
        )}
        
        {/* Information Accordion */}
        {activeTab === 'pcod' ? (
          <InfoAccordion type="pcod" info={pcodInfo} />
        ) : (
          <InfoAccordion type="pcos" info={pcosInfo} />
        )}
      </div>
    );
  }
  
  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Tab Selection */}
      <div className="flex mb-6 border-b">
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'pcod' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`}
          onClick={() => switchTab('pcod')}
        >
          PCOD Assessment
        </button>
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'pcos' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`}
          onClick={() => switchTab('pcos')}
        >
          PCOS Assessment
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            {activeTab === 'pcod' ? 'PCOD Self-Assessment' : 'PCOS Self-Assessment'}
          </h2>
          <p className="text-gray-600 mb-4">
            Answer these questions to help determine if you might have {activeTab === 'pcod' ? 'PCOD' : 'PCOS'}. This is not a medical diagnosis - please consult a healthcare professional for proper evaluation.
          </p>
          <div className="w-full">
            <Progress value={progressPercentage} className="h-2 mb-1" />
            <p className="text-xs text-right text-gray-500">
              Question {currentQuestion + 1} of {totalQuestions}
            </p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-4">
            {questionsData[currentQuestion].question}
          </h3>
          
          <div className="space-y-3">
            {questionsData[currentQuestion].options.map((option, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                  selectedAnswers[currentQuestion] === questionsData[currentQuestion].scores[index]
                    ? 'bg-purple-50 border-purple-300'
                    : 'bg-white hover:bg-gray-50 border-gray-200'
                }`}
                onClick={() => handleAnswerSelect(currentQuestion, questionsData[currentQuestion].scores[index])}
              >
                <label className="flex items-start cursor-pointer">
                  <input
                    type="radio"
                    className="mt-1 mr-3"
                    checked={selectedAnswers[currentQuestion] === questionsData[currentQuestion].scores[index]}
                    onChange={() => handleAnswerSelect(currentQuestion, questionsData[currentQuestion].scores[index])}
                  />
                  <span>{option}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-start">
          <Button
            variant="outline"
            onClick={goToPreviousQuestion}
            disabled={currentQuestion === 0}
          >
            Previous Question
          </Button>
        </div>
      </div>
    </div>
  );
}