import React from 'react'
import burgerIcon from '../../assets/burgermenu.png'
import searchIcon from '../../assets/searchbox.png'
import profileIcon from '../../assets/myFT.png'
import { motion } from 'framer-motion'
import './Header.css'
import FutsiBar from '../futsiBar/FutsiBar'

function Header({searcher, setSearcher}) {

    const handleSearch = () => {
        setSearcher(!searcher);
    
    }
    
    return (
        <div 
        initial={{ y: -200}}
        animate={{ y: 0}}
        transition={{ delay: 1, duration: 1, type: 'spring'}}
        className="header_container"
        >
            <FutsiBar />
            <div className="header_top">
                <div className="header_burger">
                    <img src={burgerIcon} alt="burger menu icon" className="header_burger_icon" />
                </div>
                <div className="header_search">
                    <img src={searchIcon} alt="search box icon" className="header_search_icon" onClick={handleSearch}/>
                    {/* <input type="text" ></input> */}
                </div>
                <div className="header_title">
                    <h1>FINANCIAL TIMES</h1>
                </div>
                <div className="header_profile">
                    <img src={profileIcon} alt="profile link" className="header_profile_myFT"/>
                </div>
            </div>
            <hr/>
            <div className="header_bottom">
                <ul>
                    <li>HOME</li>
                    <li>WORLD</li>
                    <li>UK</li>
                    <li>COMPANIES</li>
                    <li>TECH MARKETS</li>
                    <li>CLIMATE OPINION</li>
                    <li>WORK & CAREERS</li>
                    <li>LIFE & ARTS</li>
                </ul>
            </div>
            
            
        </div>
    )
}

export default Header
