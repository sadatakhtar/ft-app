import React, { useState, useEffect } from 'react'
import './MainPage.css'
import border from '../assets/Line.png'


const axios = require('axios');

function MainPage({searcher, setSearcher}) {

    const [headLine, setHeadLine] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [newSearchValue, setNewSearchValue] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://strengthened-battle-march.glitch.me/news');
      setHeadLine(res.data);
      setIsLoading(true);
      console.log(headLine);
     
    };
    
    fetchData();
   
}, []) //eslint-disable-line react-hooks/exhaustive-deps

 
    //FUNCTION TO HANDLE THE SEARCH VALUE
    const handleSearch = (e) => {
        setSearchValue(e.target.value);
        setNewSearchValue(headLine.filter(({ main }) => {
          return main.toLowerCase().includes(searchValue);  
        }));
      
    };
  
    return !isLoading ? (<p className="loader">Loading....</p>) : (
        <div className="mainpage_container">
         
            <div className="mainpage_heading">
                <h2>UK</h2>   
            </div>
            <div className={searcher ? "searchbox": "toggle"}>
                 <input type="text" placeholder="Search..." onChange={handleSearch}/>
                 {/* <button type="submit" onClick={handleSearchBtn}>Search</button> */}
            </div>
            <div className="mainpage_wrapper">
                <div className="mainpage_left">
                    <div className="mainpage_left_box1">
                        <h3>{newSearchValue.length > 1 ? (newSearchValue[0].main) : (headLine[7].main)}</h3>
                        <div className="box1_inner">
                             <h2>{newSearchValue.length > 1 ? (newSearchValue[0].title) : (headLine[7].title)}</h2>
                             <img src={newSearchValue.length > 1 ? (newSearchValue[0].urlToImage) : (headLine[7].urlToImage)} alt="pic" width="350"/>
                        </div>
                         <p id="main_ptag">{newSearchValue.length > 1 ? (newSearchValue[0].description) : (headLine[7].description)}</p>
                         <h4>{newSearchValue.length > 1 ? (newSearchValue[0].publishedAt) : (headLine[7].publishedAt)}</h4>

                    </div>
                  
                    <div className="mainpage_left_borders">
                        {/* <div>
                        <img src={border} alt="border" className="borderz" id="one_border" />
                        </div>
                        <div>
                        <img src={border} alt="border" className="borderz"/>
                        </div> */}
                        
                    </div>
                    <div className="mainpage_left_sub_wrapper">
                        <div className="bottom_box1">
                            <h2 className="bottom_box_small_title">{newSearchValue.length > 1 ? (newSearchValue[1].main) : (headLine[6].main)}</h2>
                            <h3>{newSearchValue.length > 1 ? (newSearchValue[1].title) : (headLine[6].title)}</h3>
                            <p id="box1_p">{newSearchValue.length > 1 ? (newSearchValue[1].description) : (headLine[6].description)}</p>
                        </div>
                        <div className="bottom_box2">
                        <h2 className="bottom_box_small_title">{newSearchValue.length > 1 ? (newSearchValue[1].main) : (headLine[5].main)}</h2>
                        <h3>{headLine[5].title}</h3>
                            <p id="box1_p">{headLine[5].description}</p>
                        </div>
                    </div>
                   

                </div>
                <div className="mainpage_right">
                    <div className="borders">
                        <img src={border} alt="line" className="borderz"/>
                    </div>
                   
                    <h3>Recommended</h3>
                    <div className="sideboxes">
                        <h3>{newSearchValue.length > 1 ? (newSearchValue[1].source.name) : (headLine[6].source.name)}</h3>
                        <img src={newSearchValue.length > 1 ? (newSearchValue[1].urlToImage) : (headLine[6].urlToImage)} alt="tree " className="side_images"/>
                        <p>{newSearchValue.length > 1 ? (newSearchValue[1].title) : (headLine[7].title)}</p>   
                    </div>

                    <div className="sideboxes">
                    <h3>{newSearchValue.length > 1 ? (newSearchValue[2].source.name) : (headLine[2].source.name)}</h3>
                        <img src={newSearchValue.length > 1 ? (newSearchValue[2].urlToImage) : (headLine[2].urlToImage)} alt="scenic" className="side_images"/>
                        <p>{newSearchValue.length > 1 ? (newSearchValue[2].title) : (headLine[2].title)}</p>   
                    </div>

                    <div className="sideboxes">
                        <h3>{newSearchValue.length > 1 ? (newSearchValue[3].source.name) : (headLine[1].source.name)}</h3>
                        <img src={newSearchValue.length > 1 ? (newSearchValue[3].urlToImage) : (headLine[1].urlToImage)} alt="" className="side_images"/>
                        <p>{newSearchValue.length > 1 ? (newSearchValue[3].title) : (headLine[1].title)}</p>   
                    </div>
                    <div className="borders">
                        <img src={border} alt="line" className="borderz" />
                    </div>
                    

                </div>

            </div>
            
            
        </div>
    )
}

export default MainPage;
