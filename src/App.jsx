import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ErrorFetch from './components/ErrorFetch'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'

function App() {

  //https://rickandmortyapi.com/api/location/3

  const [location, setLocation] = useState()
  const [locationInput, setLocationInput] = useState()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    
    let URL
    if (locationInput) {
      URL = `https://rickandmortyapi.com/api/location/${locationInput}`
    } else {
      const randomIdLocation = Math.floor(Math.random() * 126) + 1
      URL = `https://rickandmortyapi.com/api/location/${randomIdLocation}`
    }

    axios
    .get(URL)
    .then (res => {
      setLocation(res.data)
      setHasError(false)
    })
    .catch(err => {
      setHasError(true)
      console.log(err)
    })
    
  }, [locationInput])

  const handleSubmit = e => {
    e.preventDefault()
    setLocationInput(e.target.inputSearch.value)
  }

  return (
    <div className="App">
      <div className='images-area'>
      <img className='image' src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png" alt="" />
      </div>
      
      <form className='form' onSubmit={handleSubmit}>
        <input id='inputSearch' type="text" />
        <button>Search</button>
      </form>
      {
        hasError ?
        <ErrorFetch />
        :
        <>
        <div className='local-info'>
        <LocationInfo location ={location}/> 
        </div>
        <div className='residents-container'>
          {
            location?.residents.map(url => (
              <ResidentCard key={url} url={url} />
            ))
          }
        </div>
        </>
      }
    </div>
  )
}

export default App
