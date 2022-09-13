import './App.css'
import Slideshow from './Slideshow.js'
import {useState, useEffect} from 'react'

function App() {
  const [data, setData] = useState(null);
  const getData = () => {
    fetch('film-data.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson)
      });
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="slides-app">
      <h1 className="title">Ghibli</h1>
      {data ? <Slideshow films={data} /> : <div></div>}
    </div>
  )
}

export default App
