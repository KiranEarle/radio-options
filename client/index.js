import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import QuestionCard from './components/QuestionCard'
import './styles.scss'

class App extends Component {
  render () {
    return (
    <div className='outer'>
      <Header />
      <div className='page-container'>
        <QuestionCard />
      </div>
    </div>
    )
  }
}


ReactDOM.render(<App/>, document.getElementById('root'))