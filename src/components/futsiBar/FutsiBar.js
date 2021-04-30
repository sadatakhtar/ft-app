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
               
                <li>FTSE 100 <img src={ftse} alt="sign" className="li_img"/></li>       
                <li>S&P 500  <img src={sp} alt="sign" className="li_img"/></li>       
                <li>Euro/Dollar  <img src={euro} alt="sign" className="li_img"/></li>
                <li>Pound/Dollar <img src={pound} alt="sign" className="li_img"/></li>
                <li>10 Year US Gov  <img src={ftse} alt="sign" className="li_img"/></li>
               
              
               
            </ul>
            
            
        </motion.div>
    )
}

export default FutsiBar
