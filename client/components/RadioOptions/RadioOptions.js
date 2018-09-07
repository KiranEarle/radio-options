import React, { Component } from 'react'
import RadioOption from '../RadioOption'
import './RadioOptions.scss'

class RadioOptions extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isChecked: false,
      options: props.questionOptions
    }
    // this.focus = this.focus.bind(this)
    // this.blur = this.blur.bind(this)
  }

  // focus () {
  //   this.setState({
  //     isFocus: true
  //   })
  //   console.log('fired focus')
  // }

  // blur () {
  //   this.setState({
  //     isFocus: false
  //   })
  //   console.log('fired blur')
  // }

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

  // renderOption () {
  //   const { questionOptions, name } = this.props
  //   const checked = this.state.isChecked === true ? 'is-focus' : ''

  //   return questionOptions.map((option, i) => {
  //     return (
  //       <div>
  //         <div className={`option-${i} ${checked}`} >
  //           <span>{option.lable}</span>
  //           <input
  //           className='radio'
  //           onFocus={this.focus}
  //           onBlur={this.blur}
  //           type='radio'
  //           key={i}
  //           name={name}
  //           onChange={(e) => this.handleChange(e, option.isCorrect, name)}
  //           value={option.value} />
  //         </div>
  //         <label htmlFor={option.value} />
  //       </div>
  //     )
  //   })
  // }

  render () {
    const { questionOptions, name } = this.props
    const checked = 'is-focus'

    return (
    <div className='card-container'>
      {questionOptions.map((option, i) => {
      return <RadioOption questionOptions={option} i={i} name={name} />
      //  (
      //   <div>
      //     <RadioOption questionOptions={option}  name={name} />
      //     {/* <div className={`option-${i} ${this.state.isChecked ? checked : ''}`} >
      //       <span>{option.lable}</span>
      //       <input
      //       className='radio'
      //       onFocus={this.focus}
      //       onBlur={this.blur}
      //       type='radio'
      //       key={i}
      //       name={name}
      //       onChange={(e) => this.handleChange(e, option.isCorrect, name)}
      //       value={option.value} />
      //     </div>
      //     <label htmlFor={option.value} /> */}
      //   </div>
      // )
    })}
    </div>
    )
  }
}

export default RadioOptions