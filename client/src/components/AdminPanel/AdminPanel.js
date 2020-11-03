import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import { categoryOptions, colourOptions, colourStyles } from './data'
import axios from 'axios'
var FormData = require('form-data');

const AdminPanel = () => {

    var bodyFormData = new FormData();

    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState(0)
    const [salePrice, setSalePrice] = useState(0)
    const [colors, setColors] = useState('')
    const [sizes, setSizes] = useState('') //string
    const [keywords, setKeywords] = useState('') //string

    const [colorsArray, setColorsArray] = useState([])

    const fileInput = React.createRef()
 
    useEffect(() => {
        setColors(Array.isArray(colorsArray) ? colorsArray.map((colorElement) => colorElement.value).join(" "): [])
    }, [colorsArray])


    //all debugging
    useEffect(() => {
        console.log(colorsArray)
    }, [colorsArray])

    useEffect(() => {
        console.log(sizes)
    }, [sizes])

    useEffect(() => {
        console.log(colors)
    }, [colors])

    useEffect(() => {
        console.log(keywords)
    }, [keywords])

    useEffect(() => {
        console.log(category)
    }, [category])


    const productToSubmit = {
        name,
        category: category.value,
        // productImages,
        price,
        salePrice,
        colors,
        sizes,
        keywords
    }

    bodyFormData.append('name', name);
    bodyFormData.append('category', category.value);
    bodyFormData.append('price', price);
    bodyFormData.append('salePrice', salePrice);
    bodyFormData.append('colors', colors);
    bodyFormData.append('sizes', sizes);
    bodyFormData.append('keywords', keywords);

    const handleSubmitForm = async (e) => {
        e.preventDefault()
        // console.log(productToSubmit)

        // fileInput.current.files.map((file) => {
        //     bodyFormData.append('productImages', file, 'product-1.jpg');
        // })

        let imagesArray = Array.from(fileInput.current.files)
        console.log(imagesArray)

        imagesArray.map((image) => bodyFormData.append('productImages', image, 'product-1.jpg'))

        await sendFormToDB(productToSubmit)
        // console.log(bodyFormData)
        // console.log(fileInput.current.files)
        
        // fileInput.current.files.map(file => console.log(file.name))
    }

    const sendFormToDB = async (productToSubmit) => {
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
        <div>
            <h1>Admin Panel</h1>

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
                />

                <label htmlFor="images">Product Images: </label>
                <input type="file" accept="image/png, image/jpeg" multiple ref={fileInput} />

                <label htmlFor="category">Category: </label>
                <Select options={categoryOptions} onChange={(selected) => setCategory(selected)} />
                

                <label htmlFor="category">Price: </label>
                <input 
                    name="price"
                    type="number" 
                    id="price"
                    placeholder="Product Price"
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} 
                    required 
                />

                <label htmlFor="salePrice">Sale Price: </label>
                <input 
                    name="salePrice"
                    type="number" 
                    id="salePrice"
                    placeholder="Product Price after Discount"
                    value={salePrice} 
                    onChange={(e) => setSalePrice(e.target.value)} 
                    required 
                />



                <label htmlFor="colors">Colors: </label>
                <Select

                    // defaultValue={[colourOptions[2], colourOptions[3]]}
                    name="colors"
                    isMulti
                    closeMenuOnSelect={false}
                    options={colourOptions}
                    styles={colourStyles}
                    onChange={(selected) => setColorsArray(selected)}
                />

                {/* <input 
                    name="colors"
                    type="color" 
                    id="colors"
                    placeholder="Product Colors" 
                    onChange={(e) => setColorCurrentValue(e.target.value)}
                    required 
                />
                <button onClick={(e) => handleNewColor(e)}>Add This Color</button><br />  */}

                <label htmlFor="sizes">Sizes: (Seperated by a Space)</label>
                <input 
                    name="sizes"
                    type="text" 
                    id="sizes"
                    placeholder="Example: M L XL   Or: 42 43 44"
                    value={sizes} 
                    onChange={(e) => setSizes(e.target.value)} 
                    required 
                />

                <label htmlFor="keywords">Sizes: (Seperated by a Space)</label>
                <input 
                    name="keywords"
                    type="text" 
                    id="keywords"
                    placeholder="Example: Sports Sea Comfort Sneakers"
                    value={keywords} 
                    onChange={(e) => setKeywords(e.target.value)}  
                />

                <input type="submit" name="Add New Product"/>
            </form>
        </div>
    )
}

export default AdminPanel