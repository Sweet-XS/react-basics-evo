import React, { PureComponent } from 'react';
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
import ConditionalRendery from './components/ConditionalRendery';
import ListRender from './components/ListRendery';
import Stylesheet from './components/Stylesheet';
import StyleInline from './components/StyleInline';
import StyleModule from './components/StyleModule';
import FormBasic from './components/FormBasic';
import LifecycleA from './components/LifecycleA';
import Fragmenty from './components/Fragmenty';
import FragmentyTable from './components/FragmentyTable';
import ParentComp from './components/PureCompsParentReg';
import PureCompsParentReg from './components/PureCompsParentReg';
import MemoCompRegParent from './components/MemoCompRegParent';
import RefsDemo from './components/RefsDemo';
import RefsParentInput from './components/RefsParentInput';
import PortalDemo from './components/PortalDemo';
import ErrorBeta from './components/ErrorBeta';

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
      <EventyBind/>
      <ParentComponent/>
      <ConditionalRendery/>
      <ListRender/>
      <Stylesheet bleu={true}/>
      <StyleInline/>
      <StyleModule/>
      <FormBasic/>
      <LifecycleA/>
      <Fragmenty/>
      <FragmentyTable/>
      <PureCompsParentReg/>
      <MemoCompRegParent/>
      <RefsDemo/>
      <RefsParentInput/>
      <PortalDemo/>*/}
      <ErrorBeta/>
    </div>
  );
}

export default App;
