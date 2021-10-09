import Markdown from 'markdown-to-jsx';
import { useEffect, useState } from "react";
import './App.scss';

function App() {

  const [questionNumber, setQuestionNumber] = useState(1)
  const [question, setQuestion] = useState()

  useEffect(
    () => {
      if (!!questionNumber) {
        import(`./question${questionNumber}/INSTRUCTIONS.md`)
          .then(response => fetch(response.default))
          .then((response) => response.text())
          .then(instructionData => setQuestion(instructionData))
      }
    },
    [questionNumber],
  )

  return (
    <div>
      <header>
        <div className="header">Skedulo CX FE Assignments</div>
        <div className="question">
          <div className={questionNumber === 1 ? 'active' : ''} onClick={() => setQuestionNumber(1)}>Question 1</div>
          <div className={questionNumber === 2 ? 'active' : ''} onClick={() => setQuestionNumber(2)}>Question 2</div>
          <div className={questionNumber === 3 ? 'active' : ''} onClick={() => setQuestionNumber(3)}>Question 3</div>
        </div>
      </header>

      <div className="page">
        {question && <Markdown>{question}</Markdown>}
      </div>

    </div>
  );
}

export default App;
