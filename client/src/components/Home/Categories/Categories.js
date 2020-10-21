import React from 'react'
import './Categories.css'

const Home = () => {
    return (
        <div className="categories">
            <div className="small-container">
                <div className="row">
                    <div className="col-3">
                        <img src={require('../../../img/category-1.jpg')} />
                    </div>
                    <div className="col-3">
                        <img src={require('../../../img/category-2.jpg')} />
                    </div>
                    <div className="col-3">
                        <img src={require('../../../img/category-3.jpg')} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home