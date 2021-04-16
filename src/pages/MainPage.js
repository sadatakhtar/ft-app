import React, { useState } from 'react'
import './MainPage.css'
import border from '../assets/Line.png'
import image1 from '../assets/tree.jpeg'
import image2 from '../assets/scene.jpg'
import image3 from '../assets/ltcode.jpg'


function MainPage({searcher, setSearcher, headLine}) {
    
    return (
        <div className="mainpage_container">
         
            <div className="mainpage_heading">
                <h2>UK</h2>   
            </div>
            <div className={searcher ? "searchbox": "toggle"}>
                 <input type="text" placeholder="Search..." />
                 <button type="submit">Search</button>
            </div>
            <div className="mainpage_wrapper">
                <div className="mainpage_left">
                    <div className="mainpage_left_box1">
                        <h3>{headLine[0].source.name}</h3>
                        <div className="box1_inner">
                            <h2>{headLine[0].title}</h2>
                            <img src={headLine[0].urlToImage} alt="pic" width="350"/>
                        </div>
                        <p>{headLine[0].description}</p>
                        <h4>{headLine[0].publishedAt}</h4>

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
                            <h3 className="bottom_box_small_title">Brexit</h3>
                            <h3>EU and UK head towards a trade deal for Northern Ireland</h3>
                            <p>Just some random text here which will get replaced once the API is attached</p>
                        </div>
                        <div className="bottom_box2">
                        <h3 className="bottom_box_small_title">Brexit</h3>
                            <h3>EU and UK head towards a trade deal for Northern Ireland</h3>
                            <p>Just some random text here which will get replaced once the API is attached</p>
                        </div>
                    </div>
                   

                </div>
                <div className="mainpage_right">
                    <div className="borders">
                        <img src={border} alt="line" />
                    </div>
                   
                    <h3>Recommended</h3>
                    <div className="sideboxes">
                        <img src={image1} alt="tree " width="300px"/>
                        <h3>title</h3>
                        <p>Just some wording here describing the image</p>   
                    </div>

                    <div className="sideboxes">
                        <img src={image2} alt="scenic" width="300px"/>
                        <h3>title</h3>
                        <p>Just some wording here describing the image</p>   
                    </div>

                    <div className="sideboxes">
                        <img src={image3} alt="" width="300px"/>
                        <h3>title</h3>
                        <p>Just some wording here describing the image</p>   
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
