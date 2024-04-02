// App.js

import React from 'react';
import Header from './Header';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Skills from './Skills';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <div className="app-background">
      <div className="App">
        <Header />
        <WorkExperience />
        <Education />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
