import React from 'react';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
