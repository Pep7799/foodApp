import React from "react";
import {Routes, Route} from 'react-router-dom'
import { Nav, MainContainer, CreateContainer } from './components'
import {AnimatePresence} from 'framer-motion'

function App() {
  return (
    <AnimatePresence exitBeforeEnter>

    <div className="w-screen h-auto flex flex-col bg-primary">
      <Nav/>

      <main className="mt-14 md:mt-16 md:py-16 px-10 py-4 w-full"> 
       <Routes>
        <Route path="/*" element = {<MainContainer/>}/>
        <Route path="/create" element = {<CreateContainer/>}/>
       </Routes>
      </main>
    </div>
      
    </AnimatePresence>
  );
}

export default App;
