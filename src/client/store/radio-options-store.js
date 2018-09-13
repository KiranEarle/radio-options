import { observable, action, computed } from 'mobx'

class RadioOptionsStore {
  @observable questions = []
  @observable answers = []

  @action getData (data) {
    this.questions = data
  }

  @action addAnswer (value, isCorrect, name) {
    const currentAnswerCheck = this.answers.some(answer => answer.name === name)

    if (currentAnswerCheck) {
      this.answers.forEach((item, index, arr) => {
        if (item.name === name) {
          arr[index] = {
            name,
            value,
            isCorrect
          }
        }
      })
      return
    }

    this.answers.push({
      name,
      value,
      isCorrect
    })
  }

  @computed get numberOfQuestions () {
    return this.questions.map(question => question.id).length
  }

  @computed get numberOfAnsweredQuestions () {
    return this.answers.map(answer => answer.name).length
  }

  @computed get isAnswersIncorrect () {
    return this.answers.some(answer => answer.isCorrect === false)
  }

  @computed get cardStateWrong () {
    if (this.numberOfQuestions === this.numberOfAnsweredQuestions && this.isAnswersIncorrect) {
      return true
    }
    return false
  }

  @computed get cardStateTrue () {
    if (this.numberOfQuestions === this.numberOfAnsweredQuestions && !this.isAnswersIncorrect) {
      return true
    }
    return false
  }

}

const store = new RadioOptionsStore()

export default store