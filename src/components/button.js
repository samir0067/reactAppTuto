import React from 'react'
import './button.css'

const Button = ({ vieillir, titleBtn }) => {
  return (
    <button onClick={vieillir}>
      {titleBtn}
    </button>
  )
}

export default Button
