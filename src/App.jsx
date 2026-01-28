import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import ActressCard from './assets/ActressCard'
const endpoint = ' https://lanciweb.github.io/demo/api/actresses/'
function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get(endpoint)
      .then((res)=>{
        console.log(res.data)
        setList(res.data)
      })
  },[])

  return (
    <>
  <ActressCard list={list} /> 
    </>
  )
}

export default App
