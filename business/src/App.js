import React from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';
import Financial from './cardsSer/Financial';
import Training from './cardsSer/Training';
import Marketing from './cardsSer/Marketing';
import Taxation from './cardsSer/Taxation';
import StarUp from './cardsSer/StarUp';
import BusPlan from './cardsSer/BusPlan';
import VidioDeg from './cardsSer/VidioDeg';
import BusAnalytic from './cardsSer/BusAnalytic';
import StockInves from './cardsSer/StockInves';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Services' element={<Services/>}/>
    <Route path='/Financial' element={<Financial/>}/>
    <Route path='/Training' element={<Training/>}/>
    <Route path='/Marketing' element={<Marketing/>}/>
    <Route path='/Taxation' element={<Taxation/>}/>
    <Route path='/StarUp' element={<StarUp/>}/>
    <Route path='/BusPlan' element={<BusPlan/>}/>
    <Route path='/VidioDeg' element={<VidioDeg/>}/>
    <Route path='/BusAnalytic' element={<BusAnalytic/>}/>
    <Route path='/StockInves' element={<StockInves/>}/>

   </Routes>
   </BrowserRouter>
  )
}

export default App