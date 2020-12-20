import React from 'react';

import { TriviaQuiz } from '../../main/TriviaQuiz/TriviaQuiz';
import { TriviaQuizResults } from '../../main/TriviaQuizResults/TriviaQuizResults';
import { TriviaIntroduction } from '../../main/TriviaIntroduction/TriviaIntroduction';

interface Props {
  mainAction: string,
  updateAction: (value: string) => void
}

export const MainContent: React.FC<Props> = ({ mainAction, updateAction }) => {
  if (mainAction === 'start') {
    return (
      <TriviaIntroduction />
    )
  } else if (mainAction === 'inProgress') {
    return (
      <TriviaQuiz
        updateAction={updateAction} />
    )
  } else if (mainAction === 'finish') {
    return (
      <TriviaQuizResults />
    )
  } else return null
}