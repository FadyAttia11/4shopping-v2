import React, { useState, useEffect } from 'react'
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faIndent } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Product = (props) => {

    const [productId, setProductId] = useState('')
    const [product, setProduct] = useState({})
    const [productReviews, setProductReviews] = useState([])
    const [productColors, setProductColors] = useState([])
    const [productSizes, setProductSizes] = useState([])
    const [productKeywords, setProductKeywords] = useState([])

    useEffect(() => {
        setProductId(props.location.pathname.slice(19)) //slice /4shopping/product from the path & just keep the id
    }, [])

    useEffect(() => {
        if(productId !== '') {
            async function getProductInfo() {
                const product = await getProductFromDB() 
                // console.log(items)
                setProduct(product)
            }
            getProductInfo()
        }
    }, [productId])

    useEffect(() => {
        if(Object.keys(product).length !== 0) {
            console.log(product)
            setProductReviews(product.reviews)
            setProductColors(product.colors)
            setProductSizes(product.sizes)
            setProductKeywords(product.keywords)
        }
    }, [product])

    const getProductFromDB = () => {
        const request = axios.get(`/api/items/${productId}`)
                            .then(response => response.data)
            return request
    }

    const displaySizes = () => {
        if(productSizes.length !== 0) {
            console.log(productSizes[0])
            productSizes.map((size, i) => (
                <div key={i}>
                    <a href="#" className="item-size"><p>{size}</p></a>
                </div>
            ))
        }
    }

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
                    <p>Home / {product.category}</p>
                    <h1>{product.name}</h1>
                    <div className="rating">
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <a href="#reviews" data-after="Reviews">{productReviews.length} reviews</a>
                    </div>
                    <div className="price-wrapper">
                        <p className="price-before">${product.price} USD</p>
                        <p className="price-after">${product.salePrice} USD</p>
                    </div>
                    <p className="colors-title">Available Colors: </p>
                    <div className="item-colors">
                        <div className="item-color"></div>
                        <div className="item-color"></div>
                        <div className="item-color"></div>
                        <div className="item-color"></div>
                    </div>
                    <p className="sizes-title">Available Sizes: </p>
                    
                    <div className="item-sizes">
                    {
                        <div>{displaySizes()}</div>
                    }

                        {/* <a href="#" className="item-size"><p>S</p></a>
                        <a href="#" className="item-size"><p>M</p></a>
                        <a href="#" className="item-size"><p>L</p></a>
                        <a href="#" className="item-size"><p>XL</p></a>
                        <a href="#" className="item-size"><p>XXL</p></a>
                        <a href="#" className="item-size"><p>XXXL</p></a> */}
                    </div>
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

            <section className="small-container" id="reviews">
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
            </section>
        </div>
    )
}

export default Product