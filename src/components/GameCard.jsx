import React from 'react'

function GameCard({ title, gameType, players, imageSrc, onSelect }) {
  return (
    <button className="game-card" onClick={onSelect} aria-label={`Select ${title}`}>
      <div className="game-card__image-wrap">
        <img className="game-card__image" src={imageSrc} alt={`${title}`} />
      </div>
      <div className="game-card__content">
        <h3 className="game-card__title">{title}</h3>
        <div className="game-card__meta">
          <span className="game-card__badge">{gameType}</span>
          <span className="game-card__players">Players: {players}</span>
        </div>
      </div>
    </button>
  )
}

export default GameCard


