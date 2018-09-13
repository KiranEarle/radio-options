import React, { Component } from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import questions from './../../constants/questions'
import RadioOptionsStore from './../../store/radio-options-store'
import RadioOptions from '../RadioOptions'
import './QuestionCard.scss'

@observer
class QuestionCard extends Component {
  @observable isQuestionsWrong = null

  componentWillMount () {
    RadioOptionsStore.getData(questions)
  }

  @action handleOnChange = (value, isCorrect, name) => {
    RadioOptionsStore.addAnswer(value, isCorrect, name)

    if (RadioOptionsStore.cardStateWrong) {
      this.isQuestionsWrong = true
      return
    }

    if (RadioOptionsStore.cardStateTrue) {
      this.isQuestionsWrong = false
      return
    }

  }

  renderQuestionOptions () {
    return RadioOptionsStore.questions.map((question, i) => {
      return (
        <div key={i}>
          <RadioOptions
            onChange={this.handleOnChange}
            questionAnswers={question.answerOptions}
            name={question.name}
            />
        </div>
      )
    })
  }

  @action renderCardAnswer () {
    if (this.isQuestionsWrong === false) {
      return <p className='render-answer'>This answer is correct</p>
    }

    if (this.isQuestionsWrong === true) {
      return <p className='render-answer'>This answer is incorrect</p>
    }
  }

  render () {
    let cardState = ''
    if (this.isQuestionsWrong === true) {
        cardState = 'radio-card-wrong'
    } else if (this.isQuestionsWrong === false) {
        cardState = 'radio-card-right'
    }


    return (
      <div className={`radio-card ${cardState}`}>
        <div className='radio-container'>
        {this.renderQuestionOptions()}
        {this.renderCardAnswer()}
        </div>
      </div>
    )
  }
}

export default QuestionCard