import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FetchData } from '../../interfaces/interfaces';
import { getJson } from '../../services/services';

export const useFetchQuestions = (shouldFetchQuestions: boolean, setShouldFetchQuestions: () => void) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (shouldFetchQuestions) {
      setShouldFetchQuestions()
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
  }, [shouldFetchQuestions, setShouldFetchQuestions, dispatch])
}