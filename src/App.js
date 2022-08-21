import React from "react";
import {Routes, Route} from 'react-router-dom'
import { Nav, MainContainer, CreateContainer } from './components'
import {AnimatePresence} from 'framer-motion'

function App() {
  return (
    <AnimatePresence>

    <div className="w-screen h-auto flex flex-col bg-primary">
      <Nav/>

      <main className="mt-24 p-8 w-full"> 
       <Routes>
        <Route path="/" element = {<MainContainer/>}/>
        <Route path="/create" element = {<CreateContainer/>}/>
       </Routes>
      </main>
    </div>
      
    </AnimatePresence>
  );
}

export default App;
