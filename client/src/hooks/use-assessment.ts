import { useState, useCallback } from 'react';
import { questions } from '@/data/pcod-questions';
import { apiRequest } from '@/lib/queryClient';

type AssessmentView = 'intro' | 'assessment' | 'results';

interface AssessmentState {
  view: AssessmentView;
  answers: number[];
  score: number;
  riskLevel: string;
}

export function useAssessment() {
  const [state, setState] = useState<AssessmentState>({
    view: 'intro',
    answers: Array(questions.length).fill(undefined),
    score: 0,
    riskLevel: '',
  });

  const startAssessment = useCallback(() => {
    setState(prev => ({
      ...prev,
      view: 'assessment',
      answers: Array(questions.length).fill(undefined),
    }));
  }, []);

  const setAnswer = useCallback((questionIndex: number, answerIndex: number) => {
    setState(prev => {
      const newAnswers = [...prev.answers];
      newAnswers[questionIndex] = answerIndex;
      return {
        ...prev,
        answers: newAnswers,
      };
    });
  }, []);

  const calculateScore = useCallback(() => {
    let totalScore = 0;
    state.answers.forEach((answerIndex, questionIndex) => {
      if (answerIndex !== undefined) {
        totalScore += questions[questionIndex].scores[answerIndex];
      }
    });
    return totalScore;
  }, [state.answers]);

  const determineRiskLevel = useCallback((score: number) => {
    if (score >= 10) return 'high';
    if (score >= 5) return 'moderate';
    return 'low';
  }, []);

  const submitAssessment = useCallback(async () => {
    const score = calculateScore();
    const riskLevel = determineRiskLevel(score);
    
    try {
      // Save assessment result to backend (optional)
      await apiRequest('POST', '/api/assessment', { score, riskLevel });
    } catch (error) {
      // Continue even if saving fails - this is optional functionality
      console.error('Failed to save assessment result:', error);
    }
    
    setState(prev => ({
      ...prev,
      view: 'results',
      score,
      riskLevel,
    }));
  }, [calculateScore, determineRiskLevel]);

  const retakeAssessment = useCallback(() => {
    setState({
      view: 'intro',
      answers: Array(questions.length).fill(undefined),
      score: 0,
      riskLevel: '',
    });
  }, []);

  return {
    currentState: state,
    startAssessment,
    setAnswer,
    submitAssessment,
    retakeAssessment,
  };
}
