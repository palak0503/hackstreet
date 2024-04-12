import React, { Component} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Cover from './components/Cover';
import FrontPageFooter from './components/FrontPageFooter';

export default class App extends Component {

  render() {
  return (
    <div>
      <Header />
      <Cover/>
      <FrontPageFooter/>
    </div>
  );
  }
}