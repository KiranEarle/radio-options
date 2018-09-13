import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import RadioOption from '../RadioOption'
import './RadioOptions.scss'

@observer
class RadioOptions extends Component {
  @observable isSelected = ''

  handleChange (value, isCorrect, Name) {
    this.props.onChange(value, isCorrect, Name)
  }

  onClickHandler (value) {
    this.isSelected = value
  }


  render () {
    const { questionAnswers, name } = this.props
    return (
    <div className='question'>
      <span>{name}</span>
      <div className='card-container'>
        {questionAnswers.map((option, i) => {
        return (
          <div key={i} className='radio-option' onClick={() => this.onClickHandler(option.value)}>
            <RadioOption
              option={option}
              i={i}
              name={name}
              selected={this.isSelected}
              onChange={(value, isCorrect, Name) => this.handleChange(value, isCorrect, Name)} />
          </div>
        )
      })}
      </div>
    </div>
    )
  }
}

RadioOptions.propTypes = {
  /**
   * NOTE: This is actually an obseravble array but is classed
   * as an object because it is a mobx obseravble being passed in
   *
   * Takes in an array which contains the question's awnser options
   */
  questionAnswers: PropTypes.object,
  /**
   * Take the name of the question
   */
  name: PropTypes.string
}

export default RadioOptions