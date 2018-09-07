import React, { Component } from 'react'

class RadioOption extends Component {

  handleChange (e, isCorrect, name) {
    if (e.target.checked) {
      console.log('options', this.state.options)
      this.setState({
        isChecked: e.target.checked
      })
    } else if (!e.target.checked) {
      console.log(e.target.checked)
      this.setState({
        isChecked: false
      })
    }


    this.props.onChange(e.target.value, isCorrect, name)
  }
  render () {
    return (
      <div>
        <div className={`option-${this.prop} ${this.state.isChecked ? checked : ''}`} >
          <span>{option.lable}</span>
          <input
          className='radio'
          onFocus={this.focus}
          onBlur={this.blur}
          type='radio'
          key={i}
          name={name}
          onChange={(e) => this.handleChange(e, option.isCorrect, name)}
          value={option.value} />
        </div>
        <label htmlFor={option.value} />
      </div>
    )
  }
}

export default RadioOption