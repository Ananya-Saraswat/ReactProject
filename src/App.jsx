import React, { useState, useEffect } from 'react';
import { quizData } from './data/quizData';
import QuizLoader from './components/QuizLoader';
import QuestionDisplay from './components/QuestionDisplay';
import FeedbackDisplay from './components/FeedbackDisplay';
import ResultsScreen from './components/ResultsScreen';

export default function App() {
  const [appState, setAppState] = useState('loader'); // 'loader', 'quiz', 'feedback', 'results'
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [feedback, setFeedback] = useState(null);

  const currentQuestion = quizData[currentQuestionIndex];

  const handleStartQuiz = () => {
    setAppState('quiz');
    setCurrentQuestionIndex(0);
    setCorrectCount(0);
    setSelectedAnswer(null);
    setAnswered(false);
    setFeedback(null);
  };

  const handleAnswerSelect = (optionIndex) => {
    if (answered) return;

    setSelectedAnswer(optionIndex);
    setAnswered(true);

    const isCorrect = optionIndex === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
      setFeedback({
        type: 'success',
        message: '✓ Correct! Great job!'
      });
    } else {
      setFeedback({
        type: 'error',
        message: '✗ Incorrect! The correct answer is ' + String.fromCharCode(65 + currentQuestion.correctAnswer)
      });
    }

    setAppState('feedback');
  };

  const handleContinue = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setAnswered(false);
      setFeedback(null);
      setAppState('quiz');
    } else {
      setAppState('results');
    }
  };

  const handleRetakeQuiz = () => {
    handleStartQuiz();
  };

  return (
    <div className="app">
      {appState === 'loader' && (
        <QuizLoader onStartQuiz={handleStartQuiz} />
      )}

      {appState === 'quiz' && (
        <div className="quiz-layout">
          <div className="quiz-header">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${((currentQuestionIndex + 1) / quizData.length) * 100}%` }}
              ></div>
            </div>
            <p className="progress-text">
              Question {currentQuestionIndex + 1} of {quizData.length}
            </p>
          </div>
          <div className="quiz-content">
            <QuestionDisplay
              question={currentQuestion}
              onAnswerSelect={handleAnswerSelect}
              answered={answered}
              selectedAnswer={selectedAnswer}
              feedback={feedback}
            />
          </div>
        </div>
      )}

      {appState === 'feedback' && (
        <FeedbackDisplay
          isCorrect={selectedAnswer === currentQuestion.correctAnswer}
          onContinue={handleContinue}
        />
      )}

      {appState === 'results' && (
        <ResultsScreen
          totalQuestions={quizData.length}
          correctAnswers={correctCount}
          onRetakeQuiz={handleRetakeQuiz}
        />
      )}
    </div>
  );
}
