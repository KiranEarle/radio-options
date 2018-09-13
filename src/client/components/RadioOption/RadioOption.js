import React, { Component } from 'react'
import { action } from 'mobx'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import './RadioOption.scss'

@observer
class RadioOption extends Component {

  @action handleChange (e, isCorrect, name) {
    this.props.onChange(e.target.value, isCorrect, name)
  }

  render () {
    const { option, name, selected } = this.props
    const isSelected = selected === option.value ? 'is-selected' : ''
    const isChecked = selected === option.value ? true : false

    return (
      <div>
        <div className={`option ${isSelected}`} >
          <span>{option.lable}</span>
          <input
          className='radio'
          onFocus={this.focus}
          onBlur={this.blur}
          type='radio'
          checked={isChecked}
          name={name}
          onChange={(e) => this.handleChange(e, option.isCorrect, name)}
          value={option.value} />
        </div>
        <label htmlFor={option.value} />
      </div>
    )
  }
}

RadioOption.propTypes = {

  /*
  * An object that takes in all the details of the answer option
  */
  option: PropTypes.object,

  /**
   * Takes a string that has the name of the question
   */
  name: PropTypes.string,

  /**
   * Passes the option value that has been selected
   */
  selected: PropTypes.string
}

export default RadioOption