import React from 'react'
import './App.css'
import Home from './components/Home';
import { Routes,Route } from 'react-router';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Demon from './components/Demon';
import Haikyuu from './components/Haikyuu';
import Jujutsu from './components/Jujutsu';
import Kamisama from './components/Kamisama';
import Nav from './components/Nav';
import NewRelease from './components/NewRelease';

const App = () => {
  return (
    <div style={{"borderLeft":'2px'}} className='container-fluid'>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/demon' element={<Demon/>}/>
      <Route path='/haikyuu' element={<Haikyuu/>}/>
      <Route path='/jujutsu' element={<Jujutsu/>}/>
      <Route path='/kami' element={<Kamisama/>}/>
      <Route path='/nav' element={<Nav/>}/>
      <Route path='/new' element={<NewRelease/>}/>
     </Routes>
    </div>
  )
}

export default App