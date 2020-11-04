import React, { useState, useEffect } from 'react'
import './Products.css'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const Products = () => {

    const [items, setItems] = useState([])
    const [latestItems, setLatestItems] = useState([])
    const [chunks, setChunks] = useState([]) //2 arrays of 4 products each

    const history = useHistory()

    const n = 4 //set the line to have 4 products
    const m = 8 //set the total latest items to be 8 products (2lines)

    useEffect(() => {
        async function getAllItems() {
            const items = await getAllFromDB()
            setItems(items.reverse()) //to get the latest createdAt first
        }
        getAllItems()
    }, [])

    const getAllFromDB = () => {
        const request = axios.get('/api/items/all')
                            .then(response => response.data)
            return request
    }

    useEffect(() => {
        setLatestItems(items.slice(0, m)) //get the first 8 elements of the array
    }, [items])

    useEffect(() => { //used to divide the array of products to arrays of 4 products each
        if(latestItems.length !== 0) {
            const result = new Array(Math.ceil(latestItems.length / n))
            .fill()
            .map(_ => latestItems.splice(0, n))
            setChunks(result)
        }
    }, [latestItems])

    useEffect(() => {
        console.log(chunks)
    }, [chunks])

    const displayLatestChunk = () => (
        chunks.map((chunk, i) => (
            <div className="row" key={i}>
                {displayLatestElements(chunk)}
            </div>
        )) 
    )
 

    const displayLatestElements = (chunk) => (
        chunk.map((item, i) => (
            <div className="col-4" key={i}>
                    <a onClick={() => {history.push(`/4shopping/product/${item._id}`)}}>
                        <img 
                            src={ item.productImages.length !== 0 ? `http://localhost:5000/${item.productImages[0]}` : require('../../../img/product-1.jpg')} 
                            className="product-img"
                        />
                        <h4 className="product-name">{item.name}</h4>
                    </a>
                    <div className="rating">
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                        <FontAwesomeIcon icon={faStar} className="fa-star" />
                    </div>
                    <p>${item.salePrice} USD</p>
                </div>
        ))
    )
        
    

    return (
        <div className="small-container">
            <h2 className="title">Featured Products</h2>
            <div className="row">
                <div className="col-4">
                    <img src={require('../../../img/product-1.jpg')} />
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
                    <img src={require('../../../img/product-2.jpg')} />
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
                    <img src={require('../../../img/product-3.jpg')} />
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
                    <img src={require('../../../img/product-4.jpg')} />
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



            <h2 className="title">Latest Products</h2>

            {<div>{displayLatestChunk()}</div>}

            {/* <div className="row">
                <div className="col-4">
                    <img src={require('../../../img/product-5.jpg')} />
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
                    <img src={require('../../../img/product-6.jpg')} />
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
                    <img src={require('../../../img/product-7.jpg')} />
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
                    <img src={require('../../../img/product-8.jpg')} />
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
                    <img src={require('../../../img/product-9.jpg')} />
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
                    <img src={require('../../../img/product-10.jpg')} />
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
                    <img src={require('../../../img/product-11.jpg')} />
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
                    <img src={require('../../../img/product-12.jpg')} />
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
            </div> */}
            
        </div>
    )
}

export default Products