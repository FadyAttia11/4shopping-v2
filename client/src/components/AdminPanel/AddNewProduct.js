import React, { useState, useEffect } from 'react'
import './Admin.css'
import Select from 'react-select'
import { categoryOptions, colourOptions, colourStyles } from './data'
import axios from 'axios'

var FormData = require('form-data');

const AddNewProduct = () => {
    
    var bodyFormData = new FormData();

    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [salePrice, setSalePrice] = useState('')
    const [colors, setColors] = useState('')
    const [sizes, setSizes] = useState('') //string
    const [keywords, setKeywords] = useState('') //string

    const [colorsArray, setColorsArray] = useState([])

    const fileInput = React.createRef()
 
    useEffect(() => {
        setColors(Array.isArray(colorsArray) ? colorsArray.map((colorElement) => colorElement.value).join(" "): [])
    }, [colorsArray])


    bodyFormData.append('name', name);
    bodyFormData.append('category', category.value);
    bodyFormData.append('price', price);
    bodyFormData.append('salePrice', salePrice);
    bodyFormData.append('colors', colors);
    bodyFormData.append('sizes', sizes);
    bodyFormData.append('keywords', keywords);
    

    const handleSubmitForm = async (e) => {
        e.preventDefault()        

        let imagesArray = Array.from(fileInput.current.files)
        console.log(imagesArray)

        imagesArray.map((image) => bodyFormData.append('productImages', image, 'product-1.jpg'))
        await sendFormToDB()
    }


    const sendFormToDB = async () => {
        await axios({
            method: 'post',
            url: '/api/items',
            data: bodyFormData,
            headers: {'Content-Type': 'multipart/form-data' }
            })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }


    return (
        <div className="admin-form test">
            <div className="admin-form-sm test2">
                <h2>Add New Product</h2>
                <form id="newProductForm" onSubmit={(e) => handleSubmitForm(e)}>

                    <label htmlFor="name">Name: </label><br/>
                    <input 
                        name="name"
                        type="text" 
                        id="name"
                        placeholder="Product Name"
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    /><br/>

                    <label htmlFor="images">Product Images: </label><br/>
                    <input type="file" accept="image/png, image/jpeg" multiple ref={fileInput} /><br/>

                    <label htmlFor="category">Category: </label>
                    <Select className="select" options={categoryOptions} onChange={(selected) => setCategory(selected)} />
                    

                    <label htmlFor="category">Price: </label><br/>
                    <input 
                        name="price"
                        type="number" 
                        id="price"
                        placeholder="Product Price"
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                        required 
                    /><br/>

                    <label htmlFor="salePrice">Sale Price: </label><br/>
                    <input 
                        name="salePrice"
                        type="number" 
                        id="salePrice"
                        placeholder="Product Price after Discount"
                        value={salePrice} 
                        onChange={(e) => setSalePrice(e.target.value)} 
                        required 
                    /><br/>



                    <label htmlFor="colors">Colors: </label><br/>
                    <Select

                        // defaultValue={[colourOptions[2], colourOptions[3]]}
                        name="colors"
                        isMulti
                        closeMenuOnSelect={false}
                        options={colourOptions}
                        styles={colourStyles}
                        onChange={(selected) => setColorsArray(selected)}
                        className="select"
                    />

                    <label htmlFor="sizes">Sizes: (Seperated by a Space)</label>
                    <input 
                        name="sizes"
                        type="text" 
                        id="sizes"
                        placeholder="Example: M L XL   Or: 42 43 44"
                        value={sizes} 
                        onChange={(e) => setSizes(e.target.value)} 
                        required 
                    /><br/>

                    <label htmlFor="keywords">Keywords: (Seperated by Space)</label>
                    <input 
                        name="keywords"
                        type="text" 
                        id="keywords"
                        placeholder="Example: Sports Sea Comfort Sneakers"
                        value={keywords} 
                        onChange={(e) => setKeywords(e.target.value)}  
                    />

                    <input className="submit" type="submit" name="Add New Product"/>
                </form>
            </div>
        </div>
    )
}

export default AddNewProduct