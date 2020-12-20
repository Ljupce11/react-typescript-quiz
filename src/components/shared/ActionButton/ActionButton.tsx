import React from 'react';

import { returnActionButtonText } from '../../../helpers/returnActionButtonText/returnActionButtonText';
import { returnNextAction } from '../../../helpers/returnNextAction/returnNextAction';

interface Props {
  action: string,
  updateAction: (value: string) => void
}

export const ActionButton: React.FC<Props> = ({ action, updateAction }) => {
  let text: string = returnActionButtonText(action)
  let nextAction: string = returnNextAction(action)

  if (action !== 'inProgress') {
    return (
      <button onClick={() => updateAction(nextAction)} className="btn btn-dark">
        {text}
      </button>
    )
  } else return null
}