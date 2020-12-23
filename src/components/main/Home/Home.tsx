import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ActionButton } from '../../shared/ActionButton/ActionButton';
import { MainContent } from '../../shared/MainContent/MainContent';
import { RootState } from '../../../store/reducers/rootReducer';
import { useFetchQuestions } from '../../../customHooks/useFetchQuestions/useFetchQuestions';

export const Home: React.FC = () => {
  const { questionsData } = useSelector((state: RootState) => state.questions);
  const [shouldFetchQuestions, setShouldFetchQuestions] = useState(true)
  const [mainAction, setMainAction] = useState('start')
  const dispatch = useDispatch()

  //Fetch questions data from API and dispatch to redux state
  useFetchQuestions(shouldFetchQuestions, () => setShouldFetchQuestions(false))

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