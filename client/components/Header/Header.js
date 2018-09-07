import React, { Component } from 'react'
import './Header.scss'

class Header extends Component {
  constructor () {
    super()
    this.options = [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Product',
        link: '/'
      },
      {
        text: 'About Us',
        link: '/'
      },
      {
        text: 'Resources',
        link: '/'
      },
      {
        text: 'Sign In',
        link: '/'
      }
    ]
  }
  renderNav (options) {
    return options.map((option, i) => {
      return (
        <li className='list-item'>
          <a href={option.link}>{option.text}</a>
        </li>
      )
    })
  }

  render () {
    return (
      <div className='header'>
        <nav className='navbar'>
          <ul className='nav-list'>
            {this.renderNav(this.options)}
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header