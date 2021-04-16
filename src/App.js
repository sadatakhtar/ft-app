import React, { useState, useEffect } from 'react'
import './App.css';
import Footer from './components/footerComp/Footer';
import Header from './components/headerComp/Header'
import MainPage from './pages/MainPage';

function App() {
  const [searcher, setSearcher] = useState(false);
  const [headLine, setHeadLine] = useState('');
    
    useEffect(() => {
        fetch('http://127.0.0.7:3008/news')
        .then(res => {
            return res.json();
        })
        .then(data => {
            //console.log(data[0].title);
            setHeadLine(data);
            console.log(headLine);
        })
        .catch(err => {
            console.error(err);
        })

    }, [headLine])

  
  return (
    <div className="App">
      <Header searcher={searcher} setSearcher={setSearcher}/>
      <MainPage searcher={searcher} setSearcher={setSearcher} headLine={headLine}/>
      <Footer />
    </div>
  );
}

export default App;
