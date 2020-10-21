import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'


const Cart = () => {
    return (
        <div className="small-container cart-page">
            <table>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
                <tr>
                    <td>
                        <div className="cart-info">
                            <img src={require('../../img/buy-1.jpg')} />
                            <div>
                                <p>Red Printed T-Shirt</p>
                                <small>Price: $50.00</small>
                                <br />
                                <Link to="" className="remove-btn">Remove</Link>
                            </div>
                        </div>
                    </td>
                    <td><input type="number" value="1" /></td>
                    <td>$50.00</td>
                </tr>

                <tr>
                    <td>
                        <div className="cart-info">
                            <img src={require('../../img/buy-2.jpg')} />
                            <div>
                                <p>Red Printed T-Shirt</p>
                                <small>Price: $75.00</small>
                                <br />
                                <Link to="" className="remove-btn">Remove</Link>
                            </div>
                        </div>
                    </td>
                    <td><input type="number" value="1" /></td>
                    <td>$75.00</td>
                </tr>

                <tr>
                    <td>
                        <div className="cart-info">
                            <img src={require('../../img/buy-3.jpg')} />
                            <div>
                                <p>Red Printed T-Shirt</p>
                                <small>Price: $75.00</small>
                                <br />
                                <Link to="" className="remove-btn">Remove</Link>
                            </div>
                        </div>
                    </td>
                    <td><input type="number" value="1" /></td>
                    <td>$75.00</td>
                </tr>
            </table>

            <div className="total-price">
                <table>
                    <tr>
                        <td>Subtotal</td>
                        <td>$200.00</td>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td>$35.00</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>$235.00</td>
                    </tr>
                </table>
            </div>

        </div>
    )
}

export default Cart