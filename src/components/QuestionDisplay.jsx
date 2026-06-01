import React, { useState, useEffect } from 'react';

export default function QuestionDisplay({ question, onAnswerSelect, answered, selectedAnswer, feedback }) {
  return (
    <div className="question-container">
      <div className="question-header">
        <span className="question-number">Question {question.id}</span>
      </div>
      
      <h2 className="question-text">{question.question}</h2>
      
      <div className="options-container">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`option-btn ${
              selectedAnswer === index ? 'selected' : ''
            } ${
              answered && index === question.correctAnswer
                ? 'correct'
                : answered && index === selectedAnswer && selectedAnswer !== question.correctAnswer
                ? 'incorrect'
                : ''
            }`}
            onClick={() => !answered && onAnswerSelect(index)}
            disabled={answered}
          >
            <span className="option-letter">
              {String.fromCharCode(65 + index)}
            </span>
            <span className="option-text">{option}</span>
            {answered && index === question.correctAnswer && (
              <span className="option-icon">✓</span>
            )}
            {answered && index === selectedAnswer && selectedAnswer !== question.correctAnswer && (
              <span className="option-icon">✗</span>
            )}
          </button>
        ))}
      </div>

      {feedback && (
        <div className={`feedback-message ${feedback.type}`}>
          {feedback.message}
        </div>
      )}
    </div>
  );
}
