import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Botao from './components/Botao/Botao'
import Header from './components/Header/Header'

function App() {


  return (
    <>
    <Header/>
      <h1>eu sou o app</h1>
      <Botao texto="vamos" />
      <Botao texto="oi"/>
      <Botao texto="oo"/>
      <Botao texto="vamo dormi"/>
      <Botao />
      <Botao />
    </>
  )
}

export default App
