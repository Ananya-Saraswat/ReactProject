# React Quiz Application

A feature-rich, responsive Quiz Application built with React and Vite. Test your knowledge with immediate feedback, confetti animations, and detailed score results.

## 🎯 Features

### F01: Load Quiz
- **Quiz Source Loading**: Load quizzes from JSON data source
- **Multi-platform Support**: Works seamlessly on web, desktop, and mobile platforms
- **Welcoming Interface**: Beautiful loading screen with feature highlights

### F02: Play Quiz  
- **Question Display**: Questions presented one at a time
- **Multiple Choice**: Select from multiple answer options
- **Progress Tracking**: Visual progress bar showing quiz completion

### F03: Immediate Feedback
- **Instant Response**: Get immediate feedback on each answer
- **Visual Indicators**: 
  - Green highlighting for correct answers ✓
  - Red highlighting for incorrect answers ✗
  - Shows correct answer when user selects wrong option

### F04: Confetti Animation
- **Celebration Effects**: Confetti animation triggers only on correct answers
- **Visual Rewards**: Engaging animation to celebrate success
- **No Animation on Wrong**: Quiet feedback for incorrect answers

### F05: Quiz Results
- **Score Summary**: Displays complete quiz performance
- **Performance Metrics**:
  - Total questions answered
  - Number of correct answers
  - Number of incorrect answers
  - Final score percentage
- **Performance Rating**: Personalized message based on score (Perfect, Excellent, Good, Fair, etc.)
- **Retake Option**: Easy way to retake the quiz and improve score

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured interface with optimized spacing
- **Tablet**: Touch-friendly buttons and readable text
- **Mobile**: Compact layout with efficient use of screen space
- **Extra Small Devices**: Optimized for phones as small as 360px

## 🛠️ Technology Stack

- **React 18**: Modern UI library
- **Vite**: Fast build tool and development server
- **Canvas Confetti**: Smooth confetti animations
- **CSS3**: Responsive design and animations
- **ES Module**: Modern JavaScript module system

## 📋 Project Structure

```
react-quiz-app/
├── src/
│   ├── components/
│   │   ├── QuizLoader.jsx       # Initial screen with quiz info
│   │   ├── QuestionDisplay.jsx  # Question and options display
│   │   ├── FeedbackDisplay.jsx  # Feedback with confetti
│   │   └── ResultsScreen.jsx    # Final results and score
│   ├── data/
│   │   └── quizData.js          # Quiz questions and answers
│   ├── App.jsx                  # Main application component
│   ├── App.css                  # Global styles and responsive design
│   └── main.jsx                 # React entry point
├── index.html                   # HTML template
├── package.json                 # Dependencies and scripts
├── vite.config.js              # Vite configuration
└── README.md                    # This file
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v16.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. **Navigate to project directory**:
```bash
cd ReactProject
```

2. **Install dependencies**:
```bash
npm install
```

This will install:
- `react` - UI library
- `react-dom` - React DOM bindings
- `canvas-confetti` - Confetti animation library
- `vite` - Build tool
- `@vitejs/plugin-react` - React plugin for Vite

### Running the Development Server

Start the development server:
```bash
npm run dev
```

The application will automatically open in your browser at `http://localhost:5173`

### Building for Production

Create an optimized production build:
```bash
npm run build
```

This generates a `dist/` folder with optimized production files.

### Preview Production Build

Test the production build locally:
```bash
npm run preview
```

## 📝 Quiz Data Format

The quiz data is stored in [src/data/quizData.js](src/data/quizData.js) and follows this format:

```javascript
{
  id: 1,
  question: "What is the capital of France?",
  options: ["London", "Berlin", "Paris", "Madrid"],
  correctAnswer: 2  // Index of the correct option (0-based)
}
```

### Adding New Questions

1. Open [src/data/quizData.js](src/data/quizData.js)
2. Add new question objects to the `quizData` array
3. Ensure `correctAnswer` is a valid index (0-3 for 4 options)
4. Save the file - the dev server will hot reload automatically

Example:
```javascript
{
  id: 9,
  question: "What is 2 + 2?",
  options: ["3", "4", "5", "6"],
  correctAnswer: 1
}
```

## 🎨 Styling & Customization

The application uses CSS variables for easy customization. Edit [src/App.css](src/App.css) to modify:

### Color Scheme
```css
:root {
  --primary-color: #6366f1;      /* Main brand color */
  --success-color: #10b981;       /* Correct answer color */
  --error-color: #ef4444;         /* Incorrect answer color */
  --warning-color: #f59e0b;       /* Warning color */
  /* ... more colors ... */
}
```

### Responsive Breakpoints
- **Desktop**: > 768px
- **Tablet**: 481px - 768px  
- **Mobile**: <= 480px
- **Extra Small**: <= 360px

## 🔄 Quiz Flow

1. **Start Screen** → User sees welcome screen with start button
2. **Question 1-N** → User answers each question one by one
3. **Feedback** → Immediate feedback with visual indicators
4. **Confetti** → Animation on correct answer
5. **Results** → Final score summary with performance rating
6. **Retake** → Option to restart the quiz

## 🎯 Acceptance Criteria Met

- ✅ **AC01**: System loads quiz from ideal source (quizData.js)
- ✅ **AC02**: Quiz runs on web, desktop, and mobile (responsive design)
- ✅ **AC03**: System displays first question and waits for answer
- ✅ **AC04**: Each question displays all available choices
- ✅ **AC05**: Correct answer shows green highlight and confetti
- ✅ **AC06**: Incorrect answer shows red choice, correct in green
- ✅ **AC07**: Confetti triggers only on correct answers
- ✅ **AC09**: Results display total questions, correct/incorrect, final score

## 🐛 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📚 Component Documentation

### QuizLoader
Displays the welcome screen with quiz information and start button.

### QuestionDisplay
Shows current question with multiple choice options. Handles answer selection and displays feedback messages.

### FeedbackDisplay
Displays immediate feedback with confetti animation on correct answers. Shows success/failure message.

### ResultsScreen
Displays final quiz results including score percentage, correct/incorrect count, and performance rating.

## 🎯 Future Enhancements

Potential features to add:
- 🔐 Quiz categories and difficulty levels
- 📊 Progress persistence (localStorage)
- ⏱️ Timed quizzes and countdowns
- 🎯 Question shuffling and randomization
- 💾 Quiz history and statistics
- 🔗 Share results on social media
- 🌙 Dark mode support
- 🌐 Multi-language support
- 🎤 Voice feedback and TTS
- 📱 Progressive Web App (PWA)

## 📄 License

This project is provided as-is for educational purposes.

## 🤝 Contributing

Feel free to fork, modify, and improve this quiz application!

## 📞 Support

For issues or questions, please refer to the component files in `src/components/` for detailed implementation information.

---

**Happy Quizzing!** 🎓✨
