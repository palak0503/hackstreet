import React, { Component} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

export default class App extends Component {

  render() {
  return (
    <div>
      <Header />
      <h1>Home</h1>
    </div>
  );
  }
}