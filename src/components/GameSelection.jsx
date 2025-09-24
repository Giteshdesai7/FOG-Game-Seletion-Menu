import React, { useRef } from 'react'
import GameCard from './GameCard'

import escapeTheLava from '../assets/escapeTheLava.jpg'
import findTheColor from '../assets/findTheColor.jpg'
import redLightGreenLight from '../assets/redLightGreenLight.jpg'
import sharpShooter from '../assets/sharpShooter.jpg'
import poker from '../assets/poker.jpeg'
import miniGolf from '../assets/mini-golf.png'

const GAMES = [
  { id: 'escape-the-lava', title: 'Escape The Lava', gameType: 'Solo/Team', players: '1 - 6', imageSrc: escapeTheLava },
  { id: 'find-the-color', title: 'Find The Color', gameType: 'Competition', players: '1 - 6', imageSrc: findTheColor },
  { id: 'red-light-green-light', title: 'Red Light Green Light', gameType: 'Competition', players: '1 - 4', imageSrc: redLightGreenLight },
  { id: 'sharp-shooter', title: 'Sharp Shooter', gameType: 'Competition', players: '1 - 4', imageSrc: sharpShooter },
  { id: 'coming-soon-1', title: 'Find the Mole', gameType: 'Competition', players: '1 - 4', imageSrc: poker },
  { id: 'coming-soon-2', title: 'Mini Golf', gameType: 'Competition', players: '1 - 6', imageSrc: miniGolf },
]

function GameSelection({ onSelectGame }) {
  const railRef = useRef(null)

  function scrollByPage(direction) {
    const el = railRef.current
    if (!el) return
    const delta = direction === 'next' ? el.clientWidth : -el.clientWidth
    el.scrollBy({ left: delta, behavior: 'smooth' })
  }

  return (
    <section className="game-selection">
      <header className="game-selection__header">
        <h1 className="game-selection__title">Select Your Game</h1>
      </header>

      <div className="game-rail__wrap">
        <button className="game-rail__nav game-rail__nav--prev" aria-label="Previous" onClick={() => scrollByPage('prev')}>
          ‹
        </button>

        <div className="game-rail" ref={railRef} role="list" aria-label="Game list">
          {GAMES.map((game) => (
            <div key={game.id} role="listitem" className="game-rail__item">
              <GameCard
                title={game.title}
                gameType={game.gameType}
                players={game.players}
                imageSrc={game.imageSrc}
                onSelect={() => onSelectGame?.(game.id)}
              />
            </div>
          ))}
        </div>

        <button className="game-rail__nav game-rail__nav--next" aria-label="Next" onClick={() => scrollByPage('next')}>
          ›
        </button>
      </div>
    </section>
  )
}

export default GameSelection


