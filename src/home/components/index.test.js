import React from 'react'
import ReactDOM from 'react-dom'
import Main from './index'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.unmountComponentAtNode(div)
})
