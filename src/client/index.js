import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import QuestionCard from './components/QuestionCard'
import './styles.scss'

class App extends Component {
  render () {
    return (
    <div className='outer'>
      <div className='page-container'>
        <QuestionCard />
      </div>
    </div>
    )
  }
}


ReactDOM.render(<App/>, document.getElementById('root'))