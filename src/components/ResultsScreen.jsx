import React from 'react';

export default function ResultsScreen({ totalQuestions, correctAnswers, onRetakeQuiz }) {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  
  let performanceMessage = '';
  let performanceEmoji = '';
  
  if (percentage === 100) {
    performanceMessage = 'Perfect Score!';
    performanceEmoji = '🏆';
  } else if (percentage >= 80) {
    performanceMessage = 'Excellent!';
    performanceEmoji = '⭐';
  } else if (percentage >= 60) {
    performanceMessage = 'Good Job!';
    performanceEmoji = '👍';
  } else if (percentage >= 40) {
    performanceMessage = 'Not Bad!';
    performanceEmoji = '📚';
  } else {
    performanceMessage = 'Keep Practicing!';
    performanceEmoji = '💪';
  }

  return (
    <div className="results-screen">
      <div className="results-container">
        <div className="results-emoji">{performanceEmoji}</div>
        <h1>Quiz Completed!</h1>
        <p className="performance-message">{performanceMessage}</p>
        
        <div className="results-summary">
          <div className="result-card">
            <div className="result-label">Total Questions</div>
            <div className="result-value">{totalQuestions}</div>
          </div>
          
          <div className="result-card correct">
            <div className="result-label">Correct Answers</div>
            <div className="result-value">{correctAnswers}</div>
          </div>
          
          <div className="result-card incorrect">
            <div className="result-label">Wrong Answers</div>
            <div className="result-value">{totalQuestions - correctAnswers}</div>
          </div>
          
          <div className="result-card score">
            <div className="result-label">Final Score</div>
            <div className="result-value">{percentage}%</div>
          </div>
        </div>

        <div className="score-bar">
          <div className="score-fill" style={{ width: `${percentage}%` }}></div>
        </div>

        <button className="retake-btn" onClick={onRetakeQuiz}>
          Retake Quiz
        </button>
      </div>
    </div>
  );
}
