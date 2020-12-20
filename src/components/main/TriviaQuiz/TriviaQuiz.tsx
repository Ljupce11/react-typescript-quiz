import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../store/reducers/rootReducer';
import { HeaderTitle } from '../../shared/HeaderTitle/HeaderTitle';
import { shuffleArray } from '../../../helpers/shuffleArray/shuffleArray';
import { TriviaQuizQuestion } from './TriviaQuizQuestion/TriviaQuizQuestion';
import { TriviaQuizAnswers } from './TriviaQuizAnswers/TriviaQuizAnswers';

interface Props {
  updateAction: (value: string) => void
}

export const TriviaQuiz: React.FC<Props> = ({ updateAction }) => {
  const { givenAnswers, questionsData } = useSelector((state: RootState) => state.questions);
  const dispatch = useDispatch()
  const [activeQuestion, setActiveQuestion] = useState<number>(0)
  const allAnswers = shuffleArray([...questionsData[activeQuestion].incorrect_answers, questionsData[activeQuestion].correct_answer]).sort()

  const onAnswerHandler = (answer: string) => {
    if (activeQuestion + 1 < questionsData.length) {
      setActiveQuestion(activeQuestion + 1)
      dispatch({ type: 'UPDATE_GIVEN_ANSWERS', payload: { givenAnswers: [...givenAnswers, answer] } })
    } else {
      updateAction('finish')
      dispatch({ type: 'UPDATE_GIVEN_ANSWERS', payload: { givenAnswers: [...givenAnswers, answer] } })
    }
  }

  return (
    <React.Fragment>
      <HeaderTitle title={questionsData[activeQuestion].category} />
      <div className="row py-5 justify-content-center">
        <div style={{ height: '200px' }} className="col-md-6 p-0 border d-flex flex-column justify-content-between">
          <TriviaQuizQuestion question={questionsData[activeQuestion].question} />
          <TriviaQuizAnswers
            allAnswers={allAnswers}
            onAnswerHandler={onAnswerHandler} />
        </div>
      </div>
      <p>{activeQuestion + 1}/{questionsData.length}</p>
    </React.Fragment>
  )
}