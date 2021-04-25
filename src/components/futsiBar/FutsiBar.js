import React from 'react'
import './FutsiBar.css'
import { motion } from 'framer-motion'
import ftse from '../../assets/ftse_Box.png'
import sp from '../../assets/sp.png'
import euro from '../../assets/eurodollar.png'
import pound from '../../assets/pounddollar.png'

function FutsiBar() {
    return (
        <motion.div 
        initial={{opacity: 0}}
        animate={{ opacity: 1,}}
        transition={{ delay: 2, duration: 2}}
        className="futsibar_container"
        >
            <ul>
                <div className="futsibar_li_div">
                <li>FTSE 100</li>
                <img src={ftse} alt="sign" className="li_img"/>
                </div>

                <div className="futsibar_li_div">
                <li>S&P 500</li>
                <img src={sp} alt="sign" className="li_img"/>
                </div>
                
                <div className="futsibar_li_div">
                <li>Euro/Dollar</li>
                <img src={euro} alt="sign" className="li_img"/>
                </div>

                <div className="futsibar_li_div" id="pound">
                <li>Pound/Dollar</li>
                <img src={pound} alt="sign" className="li_img"/>
                </div>
                
                <div className="futsibar_li_div_last">
                <li>10 Year US Gov</li>
                <img src={ftse} alt="sign" className="li_img"/>
                </div>
               
            </ul>
            
            
        </motion.div>
    )
}

export default FutsiBar
