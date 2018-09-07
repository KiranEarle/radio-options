import React, { Component } from 'react'
import RadioOptions from '../RadioOptions'
import './QuestionCard.scss'

class QuestionCard extends Component {
  constructor () {
    super()

    this.state = {
      boardState: true,
      isFocus: false
    }

    this.questions = [
      {
        id: 1,
        name: 'question1',
        answerOptions: [
          {
            value: 'option1',
            lable: 'option1',
            isCorrect: true
          },
          {
            value: 'option2',
            lable: 'option2',
            isCorrect: false
          },
        ]
      },
      {
        id: 2,
        name: 'question2',
        answerOptions: [
          {
            value: 'option1',
            lable: 'option1',
            isCorrect: false
          },
          {
            value: 'option2',
            lable: 'option2',
            isCorrect: true
          },
        ]
      },
      {
        id: 3,
        name: 'question3',
        answerOptions: [
          {
            value: 'option1',
            lable: 'option1',
            isCorrect: true
          },
          {
            value: 'option2',
            lable: 'option2',
            isCorrect: false
          },
        ]
      }
    ]
  }

  handleOnChange (value, isCorrect, name) {
    console.log('question card', value, isCorrect, name)
  }

  renderQuestionOptions () {
    // const { questions } = this.props
    return this.questions.map((question, i) => {

      return (
        <div key={i}>
          <RadioOptions onChange={this.handleOnChange} questionOptions={question.answerOptions} name={question.name} />
        </div>
      )
    })
  }

  render () {
    const cardState = this.state.boardState === false ? 'radio-card-wrong' : 'radio-card'
    return (
      <div className={cardState}>
        <div className='radio-container'>
        {this.renderQuestionOptions()}
        </div>
      </div>
    )
  }
}

export default QuestionCard