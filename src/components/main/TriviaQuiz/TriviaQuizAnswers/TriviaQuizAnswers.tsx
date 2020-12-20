import React from 'react';

interface Props {
  allAnswers: string[],
  onAnswerHandler: (answer: string) => void
}

export const TriviaQuizAnswers: React.FC<Props> = ({ allAnswers, onAnswerHandler }) => {
  return (
    <div className="btn-group w-100" role="group">
      {
        allAnswers.map((answer: string, key: number) => (
          <button
            key={key}
            type="button"
            className="btn btn-outline-dark"
            onClick={() => onAnswerHandler(answer)}>{answer}</button>
        ))
      }
    </div>
  )
}