import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function FeedbackDisplay({ isCorrect, onContinue }) {
  useEffect(() => {
    if (isCorrect) {
      // Trigger confetti animation on correct answer
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [isCorrect]);

  return (
    <div className={`feedback-container ${isCorrect ? 'correct' : 'incorrect'}`}>
      <div className="feedback-content">
        {isCorrect ? (
          <>
            <div className="feedback-icon correct-icon">🎉</div>
            <h2>Correct!</h2>
            <p>Great job! You got it right.</p>
          </>
        ) : (
          <>
            <div className="feedback-icon incorrect-icon">❌</div>
            <h2>Incorrect!</h2>
            <p>Sorry, that's not the right answer.</p>
          </>
        )}
        <button className="continue-btn" onClick={onContinue}>
          Next Question
        </button>
      </div>
    </div>
  );
}
