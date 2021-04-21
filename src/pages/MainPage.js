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
      const res = await axios.get('http://127.0.0.1:3007/news');
      setHeadLine(res.data);
      setIsLoading(true);
      console.log(headLine);
     
    };
    
    fetchData();
   
}, []);

 console.log(searchValue);
 
    //FUNCTION TO HANDLE THE SEARCH VALUE
    const handleSearch = (e) => {
        setSearchValue(e.target.value);
        

        setNewSearchValue(headLine.filter(({title, description, content, source}) => {
            // return (title.toLowerCase().includes(searchValue) || 
            // description.toLowerCase().includes(searchValue)) ||
            // content.toLowerCase().includes(searchValue) ||
          return   source.name.toLowerCase().includes(searchValue) ||
            title.toLowerCase().includes(searchValue);

        }))
      
    }

    // console.log(headLine);
    // console.log(newSearchValue);
   
    return !isLoading ? (<p>Loading....</p>) : (
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
                        <h3>{newSearchValue.length > 1 ? (newSearchValue[0].source.name) : (headLine[7].source.name)}</h3>
                        <div className="box1_inner">
                             <h2>{newSearchValue.length > 1 ? (newSearchValue[0].title) : (headLine[7].title)}</h2>
                             <img src={newSearchValue.length > 1 ? (newSearchValue[0].urlToImage) : (headLine[7].urlToImage)} alt="pic" width="350"/>
                        </div>
                         <p>{newSearchValue.length > 1 ? (newSearchValue[0].description) : (headLine[7].description)}</p>
                         <h4>{newSearchValue.length > 1 ? (newSearchValue[0].publishedAt) : (headLine[7].publishedAt)}</h4>

                    </div>
                  
                    <div className="mainpage_left_borders">
                        <div>
                        <img src={border} alt="border" width="410px" />
                        </div>
                        <div>
                        <img src={border} alt="border" width="410px"/>
                        </div>
                        
                    </div>
                    <div className="mainpage_left_sub_wrapper">
                        <div className="bottom_box1">
                            <h3 className="bottom_box_small_title">{newSearchValue.length > 1 ? (newSearchValue[1].source.name) : (headLine[6].source.name)}</h3>
                            <h3>{newSearchValue.length > 1 ? (newSearchValue[1].title) : (headLine[6].title)}</h3>
                            <p>{newSearchValue.length > 1 ? (newSearchValue[1].description) : (headLine[6].description)}</p>
                        </div>
                        <div className="bottom_box2">
                        <h3 className="bottom_box_small_title">{headLine[5].source.name}</h3>
                        <h3>{headLine[5].title}</h3>
                            <p>{headLine[5].description}</p>
                        </div>
                    </div>
                   

                </div>
                <div className="mainpage_right">
                    <div className="borders">
                        <img src={border} alt="line" />
                    </div>
                   
                    <h3>Recommended</h3>
                    <div className="sideboxes">
                        <h3>{headLine[4].source.name}</h3>
                        <img src={headLine[4].urlToImage} alt="tree " width="300px"/>
                        <p>{headLine[4].title}</p>   
                    </div>

                    <div className="sideboxes">
                    <h3>{headLine[2].source.name}</h3>
                        <img src={headLine[2].urlToImage} alt="scenic" width="300px"/>
                        <p>{headLine[2].title}</p>   
                    </div>

                    <div className="sideboxes">
                        <h3>{headLine[1].source.name}</h3>
                        <img src={headLine[1].urlToImage} alt="" width="300px"/>
                        <p>{headLine[1].title}</p>   
                    </div>
                    <div className="borders">
                        <img src={border} alt="line" />
                    </div>
                    

                </div>

            </div>
            
            
        </div>
    )
}

export default MainPage
