import React from 'react';
import Hero from './Hero';
import Issues from './Issues';
import Benefits from './Benefits';
import Risks from './Risks';
import Methods from './Methods';
import ExitStrategy from './ExitStrategy';

const Home = () => {
  return (
    <>
      <Hero />
      <Issues />
       <Benefits /> 
       <Methods />
      <Risks />
      <ExitStrategy /> 
    </>
  );
}

export default Home;