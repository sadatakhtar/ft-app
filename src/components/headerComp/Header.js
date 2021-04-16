import React from 'react'
import burgerIcon from '../../assets/burgermenu.png'
import searchIcon from '../../assets/searchbox.png'
import profileIcon from '../../assets/myFT.png'
import './Header.css'

function Header({searcher, setSearcher}) {

    const handleSearch = () => {
        setSearcher(!searcher);
    
    }
    
    return (
        <div className="header_container">
            <div className="header_top">
                <div className="header_burger">
                    <img src={burgerIcon} alt="burger menu icon" width="40px" />
                </div>
                <div className="header_search">
                    
                    <img src={searchIcon} alt="search box icon" width="30" onClick={handleSearch}/>
                    {/* <input type="text" ></input> */}
                </div>
                <div className="header_title">
                    <h1>FINANCIAL TIMES</h1>
                </div>
                <div className="header_profile">
                    <img src={profileIcon} alt="profile link" width="50"/>
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
