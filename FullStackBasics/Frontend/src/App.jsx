import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';
import axios from 'axios'
function App() {
  const [jokes,setJokes] = useState([]);


  // cors is cross origin policy means it is a saftey from accessing the data if port number is diffrent or the 
  //domain is diffrent 
  useEffect(()=>
    {
      axios.get('/api/jokes')
      .then((res)=>
      {
        setJokes(res.data);
      })
      .catch((error)=>
      {
        console.log("this is error");
      })
    },[])
  return (
    <>
    <h1>Nikhil Yadav</h1>

    <h2>Jokes count:{jokes.length}</h2>

    {jokes.map((jokes,index)=>
    (
      <div key={jokes.id}>
        <p>{jokes.id}</p>
        <p>{jokes.title}</p>
        <p>{jokes.content}</p>
      </div>
     
    ))}

    </>
  )
}

export default App
