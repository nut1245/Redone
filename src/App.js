import Navbar from './components/Navbar';
import AppHeader from './components/AppHeader';
import React from 'react';
import Pagecontent from './components/Pagecontent ';
import Projectsection from './components/Projectsection';
import Aboutsection from './components/Aboutsection';
import Contactsection from './components/Contactsection';
import Imagelocation from './components/Imagelocation';
import AppFooter from './components/Appfooter';
function App() {
  return (
    <div>
    <Navbar/>
    <AppHeader/>
    <Pagecontent/>
    <Projectsection/>
    <Aboutsection/>
    <Contactsection/>
    <Imagelocation/>
    <AppFooter/>
   
    </div>
  );
}

export default App;
