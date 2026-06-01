import React from 'react';

export default function QuizLoader({ onStartQuiz }) {
  return (
    <div className="quiz-loader">
      <div className="loader-container">
        <h1>Welcome to React Quiz</h1>
        <p>Test your knowledge with our exciting quiz!</p>
        <div className="loader-features">
          <div className="feature">
            <span className="feature-icon">📚</span>
            <h3>Multiple Questions</h3>
            <p>Answer questions across various topics</p>
          </div>
          <div className="feature">
            <span className="feature-icon">⚡</span>
            <h3>Instant Feedback</h3>
            <p>Get immediate feedback on your answers</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🎉</span>
            <h3>Celebrations</h3>
            <p>Confetti animations on correct answers</p>
          </div>
          <div className="feature">
            <span className="feature-icon">📊</span>
            <h3>Results</h3>
            <p>See your final score and performance</p>
          </div>
        </div>
        <button className="start-btn" onClick={onStartQuiz}>
          Start Quiz
        </button>
      </div>
    </div>
  );
}
