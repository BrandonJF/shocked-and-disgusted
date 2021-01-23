import React from 'react'
import logo from './logo.svg'
import './App.scss'
import Footer from './layout/Footer/Footer'
import MainMenu from './layout/MainMenu/MainMenu'
import store from './redux/store'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Brandon John-Freso</p>
        <MainMenu onButtonClicked={() => alert('Button clicked!')}/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://github.com/EliEladElrom/react-tutorials" target="_blank" rel="noopener noreferrer">
          Eli Elad Elrom - React Tutorial
        </a>
      </header>
    </div>
  )
}

export default App
