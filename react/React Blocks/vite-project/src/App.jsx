import React from 'react';
import './App.css';
import Header from './components/header';
import Navigation from './components/Navigation';
import MainContent from './components/mainContent';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Navigation />
        <MainContent />
      </div>
    </div>
  );
};
                
export default App;              

