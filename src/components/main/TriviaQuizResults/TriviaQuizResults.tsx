import React from 'react';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';
import { Answer } from '../../../interfaces/interfaces';

import { RootState } from '../../../store/reducers/rootReducer';
import { HeaderTitle } from '../../shared/HeaderTitle/HeaderTitle';

export const TriviaQuizResults: React.FC = () => {
  const { givenAnswers, trueAnswers, questionsData } = useSelector((state: RootState) => state.questions);
  const answerTheme = ((answer: Answer) => answer.correct ? 'success' : 'danger')
  const quizResults: Answer[] = []

  // Create an array of question objects, including properties for their title, the user's answer and boolean property if answer is correct or not
  if (givenAnswers.length === trueAnswers.length) {
    givenAnswers.forEach((given: string, id: number) => {
      quizResults.push({
        title: questionsData[id].question,
        givenAnswer: given,
        correct: given === trueAnswers[id] ? true : false
      })
    })
  }

  return (
    <React.Fragment>
      <HeaderTitle title={`You scored ${quizResults.filter((answer: Answer) => answer.correct).length}/${questionsData.length}`} />
      <div className="p-5 text-left">
        {
          quizResults.map((answer: Answer, key: number) => (
            <div key={key} className={`d-flex align-items-center p-3 alert alert-${answerTheme(answer)} text-${answerTheme(answer)}`}>
              <span className="h1 pr-3 m-0">{answer.correct ? '+' : '-'}</span>
              <span className="h5 m-0">
                {parse(answer.title)}
              </span>
            </div>
          ))
        }
      </div>
    </React.Fragment>
  )
}