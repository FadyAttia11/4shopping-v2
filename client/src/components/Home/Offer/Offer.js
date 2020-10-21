import React from 'react'
import './Offer.css'
import { Link } from 'react-router-dom'

const Offer = () => {
    return (
        <div className="offer">
            <div className="small-container">
                <div className="row">
                    <div className="col-2">
                        <img src={require('../../../img/exclusive.png')} className="offer-img" />
                    </div>

                    <div className="col-2">
                        <p>Exclusively Available on RedStore</p>
                        <h1>Smart Band 4</h1>
                        <small>
                            The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3) AMOLED color full touch 
                            display with adjustable brightness, so everything is clear  .</small><br />
                        <Link to="/cart" className="btn">Buy Now &#8594;</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offer