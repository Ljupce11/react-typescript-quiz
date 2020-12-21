import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchData } from '../../../interfaces/interfaces';

import { ActionButton } from '../../shared/ActionButton/ActionButton';
import { MainContent } from '../../shared/MainContent/MainContent';
import { RootState } from '../../../store/reducers/rootReducer';
import { getJson } from '../../../services/services';

export const Home: React.FC = () => {
  const { questionsData } = useSelector((state: RootState) => state.questions);
  const [shouldFetchQuestions, setShouldFetchQuestions] = useState(true)
  const [mainAction, setMainAction] = useState('start')
  const dispatch = useDispatch()

  //Fetch questions data from API and dispatch to redux state
  useEffect(() => {
    if (shouldFetchQuestions) {
      setShouldFetchQuestions(false)
      getJson(`https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`)
        .then((data: FetchData) => {
          if (data && data.results) {
            const trueAnswers = data.results.map((question: { correct_answer: string }) => question.correct_answer)
            dispatch({
              type: 'UPDATE_INITIAL_STATE',
              payload: {
                questionsData: data.results,
                trueAnswers: trueAnswers,
                givenAnswers: []
              }
            })
          }
        })
    }
  }, [dispatch, shouldFetchQuestions])

  // if BEGIN button is displayed, reset states and start over
  const onActionButtonHandler = (value: string) => {
    if (value === 'start') {
      setMainAction(value)
      dispatch({ type: 'UPDATE_QUESTIONS_DATA', payload: { questionsData: [] } })
      setShouldFetchQuestions(true)
    } else {
      setMainAction(value)
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 py-5 bg-light text-center">
          {
            questionsData.length > 0 ?
              <React.Fragment>
                {/* Main content where the quiz and other information is displayed */}
                <MainContent
                  mainAction={mainAction}
                  updateAction={(value) => setMainAction(value)} />

                {/* Main action button that navigates through different screens */}
                <ActionButton
                  action={mainAction}
                  updateAction={onActionButtonHandler} />
              </React.Fragment>
              :
              // if questions aren't loaded, display a spinner
              <div className="spinner-border text-dark" role="status">
                <span className="sr-only">Loading...</span>
              </div>
          }
        </div>
      </div>
    </div>
  )
}