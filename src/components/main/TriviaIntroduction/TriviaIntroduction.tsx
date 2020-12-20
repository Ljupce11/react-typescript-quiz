import React from 'react';

import { HeaderTitle } from '../../shared/HeaderTitle/HeaderTitle';

export const TriviaIntroduction: React.FC = () => {
  return (
    <React.Fragment>
      <HeaderTitle title={"Welcome to the Trivia Challenge"} />
      <div className="py-5">
        <h5>You will be presented with 10 True or False questions.</h5>
        <h5>Can you score 100%?</h5>
      </div>
    </React.Fragment>
  )
}