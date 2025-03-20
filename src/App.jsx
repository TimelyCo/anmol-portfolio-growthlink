import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero'
import About from './Components/About/About';
import Service from './Components/Service/Service';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const App = () =>{
    return (
        <div>
            <NavBar/>
            <Hero/>
            <About/>
            <Service/>
            <MyWork/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App