import React, { useState, useEffect } from 'react'
import './Products.css'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const Products = () => {

    const [items, setItems] = useState([])
    const[chuncks, setChunks] = useState([])
    const[productImages, setProductImages] = useState([])
    const n = 4 //tweak this to add more items per line

    const history = useHistory()

    useEffect(() => {
        async function getAllItems() {
            const items = await getItemFromDB() 
            // console.log(items)
            setItems(items)
            setProductImages(items.productImages)
        }
        getAllItems()
    }, [])

    useEffect(() => { //used to divide the array of products to arrays of 4 products each
        if(items.length !== 0) {
            const result = new Array(Math.ceil(items.length / n))
            .fill()
            .map(_ => items.splice(0, n))
            setChunks(result)
        }
    }, [items])

    const getItemFromDB = () => {
        const request = axios.get('/api/items/all')
                            .then(response => response.data)
            return request
    }


    const displayChuncks = () => (
        chuncks.map((chunk, i) => (
            <div className="row all-product" key={i}>
                {displayElements(chunk)}
            </div>
        )) 
    )


    const displayElements = (chunk) => (
        chunk.map((item, i) => (
            <div className="col-4" key={i}>
                <a onClick={() => {history.push(`/4shopping/product/${item._id}`)}}>
                    <img 
                        src={ item.productImages.length !== 0 ? `http://localhost:5000/${item.productImages[0]}` : require('../../img/product-1.jpg')} 
                        style={{width: "100%"}} 
                        className="product-img"
                        alt="product-img" 
                    />
                    <h4 className="product-name">{item.name}</h4>
                </a>
                <div className="rating">
                    <FontAwesomeIcon icon={faStar} className="fa-star" />
                    <FontAwesomeIcon icon={faStar} className="fa-star" />
                    <FontAwesomeIcon icon={faStar} className="fa-star" />
                    <FontAwesomeIcon icon={faStar} className="fa-star" />
                    <FontAwesomeIcon icon={faStar} className="fa-star" />
                    <a href="#reviews" data-after="Reviews">{item.reviews.length} reviews</a>
                </div>
                <div className="price-wrapper">
                    <p className="price-before">${item.price} USD</p>
                    <p className="price-after">${item.salePrice} USD</p>
                </div>
            </div>
        ))
    )



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

            {
                <div>{displayChuncks()}</div>
            }
        

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