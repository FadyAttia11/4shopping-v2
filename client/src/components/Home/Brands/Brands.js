import React from 'react'
import './Brands.css'

const Brands = () => {
    return (
        <div className="brands">
            <div className="small-container">
                <div className="row">
                    <div className="col-5">
                        <img src={require('../../../img/logo-godrej.png')} />
                    </div>
                    <div className="col-5">
                        <img src={require('../../../img/logo-oppo.png')} />
                    </div>
                    <div className="col-5">
                        <img src={require('../../../img/logo-coca-cola.png')} />
                    </div>
                    <div className="col-5">
                        <img src={require('../../../img/logo-paypal.png')} />
                    </div>
                    <div className="col-5">
                        <img src={require('../../../img/logo-philips.png')} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brands