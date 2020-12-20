import React from 'react';
import parse from 'html-react-parser';

interface Props {
  question: string
}

export const TriviaQuizQuestion: React.FC<Props> = ({ question }) => {
  return (
    <div className="d-flex flex-grow-1 align-items-center justify-content-center px-4">
      <h5 className="m-0">{parse(question)}</h5>
    </div>
  )
}