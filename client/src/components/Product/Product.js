import React from 'react'
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faIndent } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Product = () => {
    return (
        <div className="small-container single-product">
            <div className="row">
                <div className="col-2">
                    <img src={require('../../img/gallery-1.jpg')} style={{width: "100%"}} id="productImg" />
                    <div className="small-img-row">
                        <div className="small-img-col">
                            <img 
                                src={require('../../img/gallery-1.jpg')} 
                                style={{width: "100%"}} 
                                className="small-img"
                                onClick={() => document.getElementById("productImg").src = document.getElementsByClassName("small-img")[0].src}
                            />
                        </div>

                        <div className="small-img-col">
                            <img 
                                src={require('../../img/gallery-2.jpg')} 
                                style={{width: "100%"}} 
                                className="small-img" 
                                onClick={() => document.getElementById("productImg").src = document.getElementsByClassName("small-img")[1].src}
                            />
                        </div>

                        <div className="small-img-col">
                            <img 
                                src={require('../../img/gallery-3.jpg')} 
                                style={{width: "100%"}} 
                                className="small-img"
                                onClick={() => document.getElementById("productImg").src = document.getElementsByClassName("small-img")[2].src}
                            />
                        </div>

                        <div className="small-img-col">
                            <img 
                                src={require('../../img/gallery-4.jpg')} 
                                style={{width: "100%"}} 
                                className="small-img"
                                onClick={() => document.getElementById("productImg").src = document.getElementsByClassName("small-img")[3].src}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-2">
                    <p>Home / T-Shirt</p>
                    <h1>Red Printed T-Shirt by HRX</h1>
                    <h4>$50.00</h4>
                    <select>
                        <option>Select Size</option>
                        <option>XXL</option>
                        <option>XL</option>
                        <option>Large</option>
                        <option>Medium</option>
                        <option>Small</option>
                    </select>
                    <input type="number" value="1" />
                    <Link to="cart" className="btn">Add To Cart</Link>

                    <h3>Product Details <FontAwesomeIcon icon={faIndent} className="fa-indent" /></h3>
                    <br />
                    <p>Give your summer wardrobe a style upgrade with the HRX Men's active T-Shirt. Team it with a 
                        pair of shorts for your morning workout or a denims for an evening out with the guys.
                    </p>
                </div>
            </div>


            {/* Related Products  */}

            <div className="small-container">
                <div className="row row-2">
                    <h2>Related Products</h2>
                    <p>View More</p>
                </div>
            </div>

            <div className="small-container">
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
            </div>
        </div>
    )
}

export default Product