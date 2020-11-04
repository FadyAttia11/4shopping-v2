import React from 'react'
import './Offer.css'
import { Link } from 'react-router-dom'

const Offer = () => {

    const handleArrowClick = (e) => {
        e.preventDefault()
    }

    return (
        <div className="offer">
            {/* <Link onClick={(e) => handleArrowClick(e)}><img src={require('../../../img/left-arrow.png')} className="arrow" /></Link> */}
            <div className="small-container">
                <div className="row">
                    <div className="col-2 offer-arrow">
                        
                        <img src={require('../../../img/exclusive-1.png')} className="offer-img" />
                    </div>

                    <div className="col-2 offer-arrow">
                        <div>
                            <p>Exclusively Available on <span>4</span>Shopping Website</p>
                            <h1>Leather Jacket</h1>
                            <small>
                                Give your self a warmer and more confident winter with this Mens Brown Military
                                Flight Bomber RAF Leather Jacket Winter Special.</small><br />
                            <Link to="/cart" className="btn">Buy Now &#8594;</Link>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* <Link onClick={handleArrowClick}><img src={require('../../../img/right-arrow.png')} className="arrow" /></Link> */}
        </div>
    )
}

export default Offer