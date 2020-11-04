import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const Hero = () => {

    return (
        <div className="header">
            <div className="container">
                
                {/* <Navbar /> */}

                <div className="row">
                    <div className="col-2">
                        <h1>Give Your Workout<br />A New Style!</h1>
                        <p>Success isn't always about greatness. it's about consistency. Consistent<br />hard work gains 
                        success. Greatness will come.</p>
                        <Link to="/4shopping/products/all" className="btn">Explore Now &#8594;</Link>
                    </div>

                    <div className="col-2">
                        <img src={require('../../../img/image1.png')} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero