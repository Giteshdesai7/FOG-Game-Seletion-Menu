import React from 'react'
import './App.css'
import GameSelection from './components/GameSelection'

function App() {
  function handleSelectGame(gameId) {
    // Placeholder handler - integrate with routing or game launcher later
    console.log('Selected game:', gameId)
  }

  return (
    <div className="app-shell">
      <GameSelection onSelectGame={handleSelectGame} />
    </div>
  )
}

export default App
