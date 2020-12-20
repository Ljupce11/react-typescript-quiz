export const returnNextAction = (action: string) => {
  if (action === 'start') {
    return 'inProgress'
  } else if (action === 'inProgress') {
    return 'finish'
  } else if (action === 'finish') {
    return 'start'
  } else {
    return 'start'
  }
}