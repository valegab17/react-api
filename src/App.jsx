import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
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
  {
    list.map((actress)=>{
      return(
        <>
        <h2>{actress.name}</h2>
        <img src={actress.image} alt="" />
        </>
      )
    })
  }
    </>
  )
}

export default App
