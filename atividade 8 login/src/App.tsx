
import './App.css'
import DefaultInput from './components/DefaultInput'
import DefaultButton from './components/DefaultButton'
import { useState } from 'react'

function App() {
  

  
  return (
    <>
      <section id="center" className="center">
        <div id="content" className="content">
          <h1>Login insanoppp</h1>
          <div className="center">
          <p>Digite o seu nickname!!</p>
           <DefaultInput />
            <p>Digite a sua senha!!</p>
           <DefaultInput  senha={true}/>
            <DefaultButton  />
          </div>
          </div>
        </section>
      <section ></section>
    </>
  )
}

export default App
