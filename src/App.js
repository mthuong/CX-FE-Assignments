// import Markdown from 'markdown-to-jsx';
import React, { useState, Suspense, useCallback } from "react";
import './App.scss';

const Question1 = React.lazy(() => import('./question1'));
const Question3 = React.lazy(() => import('./question3'));


function App() {

  const [questionNumber, setQuestionNumber] = useState(3)
  // const [question, setQuestion] = useState()
  
  // useEffect(
  //   () => {
  //     if (!!questionNumber) {
  //       import(`./question${questionNumber}/INSTRUCTIONS.md`)
  //         .then(response => fetch(response.default))
  //         .then((response) => response.text())
  //         .then(instructionData => setQuestion(instructionData))
  //     }
  //   },
  //   [questionNumber],
  // )

  const renderPage = useCallback(() => {
    switch (questionNumber) {
      case 1:
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Question1 />
          </Suspense>
        )

      case 3:
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Question3 />
          </Suspense>
        )
    
      default:
        return questionNumber;
    }
  }, [questionNumber]);

  return (
    <div className="app">
      <header>
        <div className="header">Skedulo CX FE Assignments</div>
        <div className="question">
          <div className={questionNumber === 1 ? 'active' : ''} onClick={() => setQuestionNumber(1)}>Question 1</div>
          <div className={questionNumber === 2 ? 'active' : ''} onClick={() => setQuestionNumber(2)}>Question 2</div>
          <div className={questionNumber === 3 ? 'active' : ''} onClick={() => setQuestionNumber(3)}>Question 3</div>
        </div>
      </header>

      <div className="page">
        {renderPage()}
        {/* {question && <Markdown>{question}</Markdown>} */}
      </div>

    </div>
  );
}

export default App;
