import React, { Component } from 'react'
import axios from '../../axios';
import firebase from '../../firebase';
import { Button } from 'semantic-ui-react'
import jwt from 'jsonwebtoken';
import { connect } from 'react-redux';
import { deleteFromCart } from '../../store/Action/cartAction'
class Chackout extends Component {
    state = {
        cart: [],
    }
    componentDidMount() {
        const token = localStorage.getItem("token");
        const headers = { Authorization: token };
        if (token) {
            const user = jwt.decode(token.split(" ")[1]);
            user.token = token;
            axios.get(`api/user/cart/${user._id}`, { headers })
                .then(res => {
                    this.setState({ cart: res.data[0].cart })
                })
        }
    }

    loadImages = (ImageUrl, _id) => {
        const storageRef = firebase.storage().ref(`/products`);
        storageRef.child(`/${ImageUrl}.jpg`).getDownloadURL().then((url) => {
            document.getElementById(_id).src = url;
        })
    }
    changeHandler = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value })
    }
    deleteFromCart = (_id) => {
        const token = localStorage.getItem("token");
        const headers = { Authorization: token };
        axios.put(`/api/user/cart/${_id}`, {}, { headers })
            .then(res => {
                // const cart = this.state.cart.filter(c => {
                //     return c._id !== _id;
                // });
                // this.setState({ cart })
                this.props.deleteFromCart(_id)

            })
    }
    handleSubmit=(evt)=>{
        evt.preventDefault();
    }
    render() {
        const { cart } = this.props;
        let sum = 0;
        const displayCart = cart.map(c => {
            sum = sum + c.price;
            this.loadImages(c.imagespath[0], `${c._id}ab`)
            return (
                <tr>
                    <td className="thumb"><img id={`${c._id}ab`} alt="image" /></td>
                    <td className="details">
                        <a href="#">{c.name}</a>
                        <ul>
                            <li><span>Size: XL</span></li>
                            <li><span>Color: Camelot</span></li>
                        </ul>
                    </td>
                    <td className="price text-center"><strong>{c.price}</strong>
                        {/* <br /><del className="font-weak"><small>$40.00</small></del> */}
                    </td>
                    <td className="qty text-center"><input className="input" type="number" defaultValue={1} /></td>
                    <td className="total text-center"><strong className="primary-color">{c.price}</strong></td>
                    <td className="text-right">
                        <Button circular color='google plus' icon='close' onClick={() => this.deleteFromCart(c._id)} />
                    </td>
                </tr>
            )
        })
        return (
            <div className="section">
                {/* container */}
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <form onSubmit={this.handleSubmit} className="clearfix">
                            <div className="col-md-6">
                                <div className="billing-details">
                                    {/* <p>Already a customer ? <a href="#">Login</a></p> */}
                                    <div className="section-title">
                                        <h3 className="title">Billing Details</h3>
                                    </div>
                                    <div className="form-group">
                                        <input className="input" type="text" name="firstname" placeholder="First Name" value={this.state.firstname} onChange={this.changeHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input className="input" type="text" name="lastname" placeholder="Last Name"
                                            value={this.state.lastname} onChange={this.changeHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input className="input" type="email" name="email" placeholder="Email"
                                            value={this.state.email} onChange={this.changeHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input className="input" type="text" name="address" placeholder="Address"
                                            value={this.state.address} onChange={this.changeHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input className="input" type="text" name="city" placeholder="City"
                                            value={this.state.city} onChange={this.changeHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input className="input" type="text" name="country" placeholder="Country"
                                            value={this.state.country} onChange={this.changeHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input className="input" type="text" name="zipcode" placeholder="ZIP Code"
                                            value={this.state.zipcode} onChange={this.changeHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input className="input" type="tel" name="contact" placeholder="Telephone"
                                            value={this.state.contact} onChange={this.changeHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        {/* <div className="input-checkbox">
                                            <input type="checkbox" id="register" />
                                            <label className="font-weak" htmlFor="register">Create Account?</label>
                                            <div className="caption">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                  </p><p>
                                                    <input className="input" type="password" name="password" placeholder="Enter Your Password" />
                                                </p></div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="shiping-methods">
                                    <div className="section-title">
                                        <h4 className="title">Shiping Methods</h4>
                                    </div>
                                    {/* <div className="input-checkbox">
                                        <input type="radio" name="shipping" id="shipping-1" defaultChecked />
                                        <label htmlFor="shipping-1">Free Shiping -  $0.00</label>
                                        <div className="caption">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p><p>
                                            </p></div>
                                    </div> */}
                                    <div className="input-checkbox">
                                        <input type="radio" name="shipping" id="shipping-2" checked />
                                        <label htmlFor="shipping-2">Standard - 250</label>
                                        <div className="caption">
                                            <p>
                                                shiping via tcs or by Pakistan Post
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="payments-methods">
                                    <div className="section-title">
                                        <h4 className="title">Payments Methods</h4>
                                    </div>
                                    {/* <div className="input-checkbox">
                                        <input type="radio" name="payments" id="payments-1" defaultChecked />
                                        <label htmlFor="payments-1">Direct Bank Transfer</label>
                                        <div className="caption">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p><p>
                                            </p></div>
                                    </div> */}
                                    <div className="input-checkbox">
                                        <input type="radio" name="payments" id="payments-2" checked />
                                        <label htmlFor="payments-2">cash on Delivery</label>
                                        <div className="caption">
                                            <p>
                                                {/* shiping via tcs or Pakistan Post */}
                                            </p>
                                        </div>
                                    </div>
                                    {/* <div className="input-checkbox">
                                        <input type="radio" name="payments" id="payments-3" />
                                        <label htmlFor="payments-3">Paypal System</label>
                                        <div className="caption">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p><p>
                                            </p></div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="order-summary clearfix">
                                    <div className="section-title">
                                        <h3 className="title">Order Review</h3>
                                    </div>
                                    <table className="shopping-cart-table table">
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th />
                                                <th className="text-center">Price</th>
                                                <th className="text-center">Quantity</th>
                                                <th className="text-center">Total</th>
                                                <th className="text-right" />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {displayCart}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th className="empty" colSpan={3} />
                                                <th>SUBTOTAL</th>
                                                <th colSpan={2} className="sub-total">{sum}</th>
                                            </tr>
                                            <tr>
                                                <th className="empty" colSpan={3} />
                                                <th>SHIPING</th>
                                                <td colSpan={2}>250</td>
                                            </tr>
                                            <tr>
                                                <th className="empty" colSpan={3} />
                                                <th>TOTAL</th>
                                                <th colSpan={2} className="total">{sum + 250}</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                    <div className="pull-right">
                                        <button type="submit" className="primary-btn">Place Order</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* /row */}
                </div>
                {/* /container */}
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}
export default connect(mapStateToProps, { deleteFromCart })(Chackout);