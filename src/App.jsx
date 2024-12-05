import React,{useEffect,useState} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
//*--------------------------------------------------------------

import Navbar from './Components/Navbar';
import Home from './Pages/Home'
import News from './Pages/News';
import Service from './Pages/Service';

export default function App()
{
  let [SearchData,SetSearchData] = useState('india')
  return(
    <>
     <BrowserRouter>
       <Navbar SetSearchData = {SetSearchData}/>
       <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/News' element={<News SearchData={SearchData}/>}/>
        <Route path='/Service' element={<Service/>}/>

        <Route/>

       </Routes>

     </BrowserRouter>
    </>
  )
}