import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title'
import Cars from './components/Cars'

function App() {
  const [count, setCount] = useState(0)

  let n = 12;
  let myName = "Bonnie";
  
  const cars = ["Buggy","Gol","Clio","March","Ka"];

  const redTitle = true;

  return (
    <>
      <h1>React with CSS : I am using global CSS</h1>
      <MyComponent />
      <p>This is the app's paragraph</p>
      <h1>Inline style for an element</h1>
      <p style={{color: "blue", padding: "25px", borderTop:"2px solid red"}}>They used inline style on me</p>
      <h1>Dynamic inline style</h1>
      <p style={n <= 10 ? ({color: "purple"}) : ({color: "pink"}) }>They used a dynamic inline style on me</p>
      <p style={n > 10 ? ({color: "purple"}) : ({color: "pink"}) }>They used a dynamic inline style on me</p>
      <h2 style={myName === "Bonnie" ? {color:"green",backgroundColor:"yellow"} : {color:'yellow',backgroundColor:'green'}}>I am testing with the name {myName}</h2>
      <h2 style={myName === "Eleni" ? {color:"green",backgroundColor:"yellow"} : {color:'yellow',backgroundColor:'green'}}>I am testing with the name {myName}</h2>
      <h1>Dynamic class</h1>
      <h2 className={redTitle ? "red-title" : "title" }>This title will have a dynamic class</h2>
      <h2 className={!redTitle ? "red-title" : "title" }>This title will have a dynamic class</h2>
      <h1>CSS Modules</h1>
      <Title />
      <p1>CSS modules are useful to scope the style only for that component</p1>
      <h1>Challenge : print some cars because why...</h1>
      {cars.map((car) =>
        <Cars name={myName} model={car}/>
      )}

    </>
  )
}

export default App
