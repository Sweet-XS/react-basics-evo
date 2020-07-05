import React from 'react';
import logo from './logo.svg';
import './App.css';
import Funky from './components/Funk.js';
import Classy from './components/Classy';
import Jsxy from './components/Jsxy';
import ProperFunk from './components/ProperFunk';
import ProperClassy from './components/ProperClassy';
import StatyClassy from './components/StatyClassy';
import StatyCounter from './components/StatyCounter';
import EventyHandFunk from './components/EventyHandFunk';
import EventyHandClassy from './components/EventyHandClassy';
import EventyBind from './components/EventyBind';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      {/* <Classy/>
      <Funky/>
      <Jsxy/> 
      <ProperFunk name = "Clark" heroName = "Superman">
        <p>This is chidren props</p>
      </ProperFunk>
      <ProperFunk name = "Diana" heroName = "Wonder Woman">
        <button>Action</button>
      </ProperFunk>
      <ProperFunk name = "Bruce" heroName = "Batman"/>
      <ProperClassy name = "Peter Parker" heroName = "Spiderman"/>
      <ProperClassy name = "Tony Stark" heroName = "Ironman"/>
      <StatyClassy/>
      <StatyCounter/>
      <EventyHandFunk/>
      <EventyHandClassy/>
      <EventyBind/>*/}
      <ParentComponent/>
    </div>
  );
}

export default App;
