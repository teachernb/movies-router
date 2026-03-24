import { useState } from 'react'
import MovieForm from './components/MovieForm'
import MovieList from './components/MovieList'
import './App.css'

function App() {
  const [movies, setMovies] = useState([])

  const sendDataToApp = (newMovie) => {
    setMovies([...movies, newMovie])
  }

  return (
    <>
     <MovieForm gatherData={sendDataToApp}/>
     <MovieList movies={movies} />
    </>
  )
}

export default App
