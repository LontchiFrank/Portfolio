import React from 'react'
import './index.scss'

function AnimatedLetters({ letterClass, strArray, idx }) {
  return (
    <div>
      <span>
        {strArray.map((char, i) => (
          <span key={char + i} className={`${letterClass} _${i + idx}`}>
            {char}
          </span>
        ))}
      </span>
    </div>
  )
}

export default AnimatedLetters
