import {VStack } from '@chakra-ui/react'
import * as React from 'react';

import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Demo from './components/Demo';
import Register from './components/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    
	
    
	<VStack>
	 
	    <Router>
        
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/login' element={< Login />} ></Route>
          <Route exact path='/register'  element={< Register />}></Route>
          <Route exact path='/demo' element={< Demo />}></Route>

        </Routes>
      
    </Router>
	   </VStack>
	  
   
  );
}

export default App;
