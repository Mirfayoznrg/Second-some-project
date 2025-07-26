import React, { useEffect } from 'react'
import Button from './components/button_blue'
import Buttong from './components/button_green'
import Buttonr from './components/button_red'

const App = () => {

  useEffect(() => {
    document.querySelector('body').style.backgroundColor = 
    localStorage.getItem('color')
  })

  const blue = (color)=> {
    localStorage.setItem('color', color)
    document.querySelector('body').style.backgroundColor = color
  }

  return (
    <div className='Container'>
      <button className='btn1' onClick={() => blue('#4ADC2A')}>Button</button>
      <button className='btn2' onClick={() => blue('#1B1BE6')}>Button</button>
      <button className='btn3' onClick={() => blue('#BA1B1B')}>Button</button>

    </div>
  )
}

export default App