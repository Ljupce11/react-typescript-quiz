export interface Question {
  category: string
  correct_answer: string
  difficulty: string
  incorrect_answers: string[]
  question: string
  type: string
}

export interface State {
  questionsData: Question[],
  trueAnswers: string[],
  givenAnswers: string[]
}

export interface Action {
  type: string
  payload: {
    questionsData: Question[]
    givenAnswers: string[]
    trueAnswers: string[]
  }
}

export interface Answer {
  correct: boolean,
  title: string,
  givenAnswer: string
}

export interface FetchData {
  results: Question[]
}