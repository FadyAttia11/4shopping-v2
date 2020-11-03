import React from 'react'
import './Categories.css'

const Home = () => {
    return (
        <div className="categories">
            <div className="small-container">
                <div className="row">
                    <div className="col-3">
                        <img src={require('../../../img/category-1.jpeg')} />
                        <h2>T-shirts</h2>
                    </div>
                    <div className="col-3">
                        <img src={require('../../../img/category-2.jpeg')} />
                        <h2>Jeans</h2>
                    </div>
                    <div className="col-3">
                        <img src={require('../../../img/category-3.jpeg')} />
                        <h2>Shoes</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home