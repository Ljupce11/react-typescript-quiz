import React from 'react';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';

import { RootState } from '../../../store/reducers/rootReducer';
import { HeaderTitle } from '../../shared/HeaderTitle/HeaderTitle';

export const TriviaQuizResults: React.FC = () => {
  const { givenAnswers, trueAnswers, questionsData } = useSelector((state: RootState) => state.questions);
  const quizResults: any[] = []
  const answerTheme = ((answer: any) => answer.correct ? 'success' : 'danger')

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
      <HeaderTitle title={`You scored ${quizResults.filter((answer: any) => answer.correct).length}/${questionsData.length}`} />
      <div className="p-5 text-left">
        {
          quizResults.map((answer: any, key: number) => (
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