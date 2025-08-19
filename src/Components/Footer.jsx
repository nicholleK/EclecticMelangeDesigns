import React from 'react'
import '../Styles/Footer.css'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <> 

    <div className='footer-container'> 

        <div className='quote-image-container'>
            <div className='quote-box'> <p>  Simplicity is the ultimate sophistication. <br /> - Leonardo da Vinci </p> </div>
            <div className='image-box'>
                <img src='/Images/rene-bohmer-footer-unsplash.jpg' alt='Rene Bohmer abstract photo @ Unsplash'/>
                 </div>
               

        </div>


       
            
            <div className='copyright-attribution'> 
                <p> &copy; 2024-2025 Eclectic Mélange Designs. All rights reserved.</p>
                Some media used on this website are royalty free sourced from <a href='https://unsplash.com/' target='_blank' rel='noopener noreferrer'>Unsplash</a> and <a href='https://www.pexels.com/' target='_blank' rel='noopener noreferrer'>Pexels</a>
            </div>

    </div>


    </>
  )
}

export default Footer