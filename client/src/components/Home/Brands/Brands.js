import React from 'react'
import './Brands.css'

const Brands = () => {
    return (
        <div className="brands">
            <div className="small-container">
                <div className="row">
                    <div className="col-5">
                        <img src={require('../../../img/logo-nike.png')} />
                    </div>
                    <div className="col-5">
                        <img src={require('../../../img/logo-adidas.png')} />
                    </div>
                    <div className="col-5">
                        <img src={require('../../../img/logo-puma.png')} />
                    </div>
                    <div className="col-5">
                        <img src={require('../../../img/logo-zara.png')} />
                    </div>
                    <div className="col-5">
                        <img src={require('../../../img/logo-lacoste.png')} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brands