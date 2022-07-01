import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/f1.png'
import Logo from './Logo'
import './index.scss'

function Home() {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['r', 'a', 'n', 'k', 'y']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  //   useEffect(() => {
  //     return setTimeout(() => {
  //       setLetterClass('text-animate-hover')
  //     }, 4000)
  //   }, [])
  setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 4000)

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <div style={{ display: 'flex' }}>
              {' '}
              <div
                style={{
                  paddingTop: '12px',
                }}
              >
                {' '}
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>{' '}
              </div>
              <div style={{ display: 'flex' }}>
                <div
                  style={{
                    height: '100px',
                    width: '100px',
                  }}
                >
                  <img
                    style={{ height: 'fit-content', width: '100%' }}
                    src={LogoTitle}
                    alt="JavaScript Developer Name, Web Developer Name"
                  />
                </div>
                <div
                  style={{
                    paddingTop: '18px',
                  }}
                >
                  <AnimatedLetters
                    letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}
                  />
                </div>
              </div>
            </div>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer / JavaScript Developer / WebXR enthusiast</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
