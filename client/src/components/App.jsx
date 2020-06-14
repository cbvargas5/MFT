import React from 'react';
import NavBar from './NavBar.jsx';
import Contact from './Contact.jsx';
import { BrowserRouter } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <NavBar />
        </header>
        <Contact />
      </div>
    </BrowserRouter>

  )
}

export default App