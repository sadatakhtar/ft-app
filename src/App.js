import React, { useState, useEffect } from 'react'
import './App.css';
import Footer from './components/footerComp/Footer';
import Header from './components/headerComp/Header'
import MainPage from './pages/MainPage';

function App() {

  const [searcher, setSearcher] = useState(false);
  
  return (
    <div className="App">
      <Header searcher={searcher} setSearcher={setSearcher}/>
      <MainPage searcher={searcher} setSearcher={setSearcher}  />
      <Footer />
    </div>
  );
}

export default App;
