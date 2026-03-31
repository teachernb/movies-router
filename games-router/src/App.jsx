import { useState } from 'react'
import GamesForm from './components/GamesForm'
import GamesList from './components/GamesList'
import './App.css'

function App() {
  const [games, setGames] = useState([])

  const sendDataToApp = (newGame) => {
    setGames([...games, newGame])
  }

  return (
    <>
     <GamesForm gatherData={sendDataToApp}/>
     <GamesList games={games} />
    </>
  )
}

export default App
