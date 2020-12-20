export const returnActionButtonText = (action: string) => {
  if (action === 'start') {
    return 'BEGIN'
  } else if (action === 'finish') {
    return 'PLAY AGAIN?'
  } else {
    return ''
  }
}