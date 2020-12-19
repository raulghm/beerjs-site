import React, { useEffect } from 'react'

import styles from './index.module.css'
import data from '../../../data.json'

const meetupActive = data['meetup-active']
const title = meetupActive ? 'Ingresar al meetup' : 'Asistiré'
const url = meetupActive ? data['meetup-url'] : data['meetup-calendar']

function Attend () {
  useEffect(() => {
    const slide = {
      distance: '30px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'right',
      interval: 100,
      delay: 2000
    }
    const ScrollReveal = require('scrollreveal').default
    ScrollReveal().reveal('.attend', { ...slide })
  }, [])

  return (
    <div className={`${styles.attend} attend`}>
      {meetupActive !== null ? (
        <>
          <div>
            <div className={styles.attendHeading}>Jueves . {data.day}</div>
            <div className="text-sm">
              {data.edition} . {data.hour} <span className="hidden sm:inline">hrs</span>
            </div>
          </div>
          <div className="flex flex-row ml-4">
            <a target="_blank" rel="noreferrer" href={url}>
              <h4 className="flex items-center justify-center rounded-lg cursor-pointer bg-primary hover:bg-primary-light">
                <div className="p-2 text-lg md:text-xl title text-background">{title}</div>
              </h4>
            </a>
          </div>
        </>
      ) : (
        <div>
          <div className={styles.attendHeading}>🍺 ¡hasta la próxima!</div>
          <div className="text-sm">Gracias por participar de la última edición.</div>
          <div className="text-sm">
            <a
              className="text-primary"
              href="https://www.youtube.com/channel/UCy9e3yxv9Vy99RflcL7mQng">
              Revive las presentaciones aquí.
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Attend
