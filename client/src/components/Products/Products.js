import React from 'react'
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Products = () => {
    return (
        <div className="small-container">
            <div className="row row-2">
                <h2>All Products</h2>
                <select>
                    <option>Default sorting</option>
                    <option>sort by price</option>
                    <option>sort by popularity</option>
                    <option>sort by rating</option>
                    <option>sort by sale</option>
                </select>
            </div>


            <div className="row">
                <div className="col-4">
                    <img src={require('../../img/product-1.jpg')} />
                    <h4>Red Printed T-Shirt</h4>
                    <div className="rating">
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                    </div>
                    <p>$50.00</p>
                </div>

                <div className="col-4">
                    <img src={require('../../img/product-2.jpg')} />
                    <h4>Red Printed T-Shirt</h4>
                    <div className="rating">
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                    </div>
                    <p>$50.00</p>
                </div>

                <div className="col-4">
                    <img src={require('../../img/product-3.jpg')} />
                    <h4>Red Printed T-Shirt</h4>
                    <div className="rating">
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                    </div>
                    <p>$50.00</p>
                </div>

                <div className="col-4">
                    <img src={require('../../img/product-4.jpg')} />
                    <h4>Red Printed T-Shirt</h4>
                    <div className="rating">
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                    </div>
                    <p>$50.00</p>
                </div>
            </div>


            <div className="row">
                <div className="col-4">
                    <img src={require('../../img/product-5.jpg')} />
                    <h4>Red Printed T-Shirt</h4>
                    <div className="rating">
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                    </div>
                    <p>$50.00</p>
                </div>

                <div className="col-4">
                    <img src={require('../../img/product-6.jpg')} />
                    <h4>Red Printed T-Shirt</h4>
                    <div className="rating">
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                    </div>
                    <p>$50.00</p>
                </div>

                <div className="col-4">
                    <img src={require('../../img/product-7.jpg')} />
                    <h4>Red Printed T-Shirt</h4>
                    <div className="rating">
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                    </div>
                    <p>$50.00</p>
                </div>

                <div className="col-4">
                    <img src={require('../../img/product-8.jpg')} />
                    <h4>Red Printed T-Shirt</h4>
                    <div className="rating">
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                    </div>
                    <p>$50.00</p>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <img src={require('../../img/product-9.jpg')} />
                    <h4>Red Printed T-Shirt</h4>
                    <div className="rating">
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                    </div>
                    <p>$50.00</p>
                </div>

                <div className="col-4">
                    <img src={require('../../img/product-10.jpg')} />
                    <h4>Red Printed T-Shirt</h4>
                    <div className="rating">
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                    </div>
                    <p>$50.00</p>
                </div>

                <div className="col-4">
                    <img src={require('../../img/product-11.jpg')} />
                    <h4>Red Printed T-Shirt</h4>
                    <div className="rating">
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                    </div>
                    <p>$50.00</p>
                </div>

                <div className="col-4">
                    <img src={require('../../img/product-12.jpg')} />
                    <h4>Red Printed T-Shirt</h4>
                    <div className="rating">
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                    </div>
                    <p>$50.00</p>
                </div>
            </div>


            <div className="page-btn">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>&#8594;</span>
            </div>
        </div>
    )
}

export default Products