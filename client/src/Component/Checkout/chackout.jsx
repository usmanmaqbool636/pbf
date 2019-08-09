import React, { Component } from 'react'
import axios from '../../axios';
import firebase from '../../firebase';
import { Button } from 'semantic-ui-react'
import jwt from 'jsonwebtoken';
import { connect } from 'react-redux';
import { deleteFromCart } from '../../store/Action/cartAction'
import { socket } from '../../sockets';
class Chackout extends Component {
    state = {
        cart: this.props.cart,
        sum: 0
    }
    componentDidMount() {
        const token = localStorage.getItem("token");
        const headers = { Authorization: token };
        if (token) {
            const user = jwt.decode(token.split(" ")[1]);
            user.token = token;
            this.setState({ email: user.email, userId: user.id })
            axios.get(`api/user/cart/${user._id}`, { headers })
                .then(res => {

                    this.setState({ cart: res.data[0].cart })
                    this.setState({ user: this.props.user })
                })
        }

        // socket.on('user', ({ user }) => {
        //     console.log(user._id);
        // })
        // socket.on('notuser', (user) => {
        //     console.log(user)
        // })
    }

    loadImages = (ImageUrl, id) => {
        const { cart } = this.state;
        const storageRef = firebase.storage().ref(`/products`);
        storageRef.child(`/${ImageUrl}.jpg`).getDownloadURL().then((url) => {
            const item = document.getElementById(id);
            if (item) {
                console.log(item);
                document.getElementById(id).src = url
            }
            // const newCart = cart.map(c => {
            //     if (c._id === id) {
            //         return { ...c, image: url }
            //     }
            //     else {
            //         return { ...c }
            //     }
            // })
            // this.setState({ cart: newCart })
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
                this.props.deleteFromCart(_id)

            })
    }
    qtyChange = (id, e) => {
        const { cart } = this.state;
        const newCart = cart.map((item) => {
            if (item._id === id) {
                const newItem = { ...item, qty: e.target.value };
                return newItem
            }
            else {
                return item
            }
        })
        this.setState({ cart: newCart })
    }
    handleSubmit = (evt) => {
        evt.preventDefault();
        let { cart } = this.props;
        const { user, firstname, lastname, email, address, province, city, zipcode, contact } = this.state;
        const token = localStorage.getItem("token");

        const headers = { Authorization: token };

        if (cart.length > 0) {
            axios.post('/api/product/order', { cart, userId: user.id, detail: { firstname, lastname, email, address, province, city, zipcode, contact } }, { headers })
                .then(res => {
                    if (res.data.success) {
                        console.log(res.data);
                        this.setState({ cart: [], firstname: "", lastname: "", address: "", province: "", city: "", zipcode: "", contact: "" })
                        axios.delete('/api/product/empty/cart', { headers })
                            .then(res => console.log(res));
                    }
                })
        }
        else {
            this.setState({ message: "cart is empty" })
        }
    }
    displayCart = () => {
        const { cart } = this.state;
        let sum = 0;
        const displayCart = cart.map(c => {
            // const {sum}=this.state;
            sum = sum + c.price;
            // this.setState({sum:sum+c.price})
            this.loadImages(c.imagespath[0], c._id+'checkout')
            return (
                <tr>
                    <td className="thumb">
                        <img 
                        // src={c.image} 
                        id={c._id+'checkout'}
                        alt=" " />
                        </td>
                    <td className="details">
                        <span>{c.name}</span>
                        <ul>
                            <li><span>Size: XL</span></li>
                            <li><span>Color: Camelot</span></li>
                        </ul>
                    </td>
                    <td className="price text-center"><strong>{c.price}</strong>
                        {/* <br /><del className="font-weak"><small>$40.00</small></del> */}
                    </td>
                    <td className="qty text-center">
                        <input className="input" type="number" min="1" defaultValue={1} id={`${c._id}`} onChange={(e) => this.qtyChange(c._id, e)} /></td>
                    <td className="total text-center"><strong className="primary-color">{c.price}</strong></td>
                    <td className="text-right">
                        <Button circular type="button" color='google plus' icon='close' onClick={() => this.deleteFromCart(c._id)} />
                    </td>
                </tr>
            )
        })
        return { displayCart, sum }
    }
    render() {
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
                                        <input required minLength="5" maxLength="15" className="input" type="text" name="firstname" placeholder="First Name" value={this.state.firstname} onChange={this.changeHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input required minLength="5" maxLength="15" className="input" type="text" name="lastname" placeholder="Last Name"
                                            value={this.state.lastname} onChange={this.changeHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input required className="input" type="email" name="email" placeholder="Email"
                                            value={this.state.email}
                                        // onChange={this.changeHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input required minLength="5" maxLength="50" className="input" type="text" name="address" placeholder="Address"
                                            value={this.state.address} onChange={this.changeHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input required className="input" type="text" name="province" placeholder="province"
                                            value={this.state.country} onChange={this.changeHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input required className="input" type="text" name="city" placeholder="City"
                                            value={this.state.city} onChange={this.changeHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input required className="input" type="text" name="zipcode" placeholder="ZIP Code"
                                            value={this.state.zipcode} onChange={this.changeHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input className="input" type="tel" name="contact" placeholder="Telephone"
                                            value={this.state.contact} onChange={this.changeHandler}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="shiping-methods">
                                    <div className="section-title">
                                        <h4 className="title">Shiping Methods</h4>
                                    </div>
                                    <div className="input-checkbox">
                                        <input type="radio" name="shipping" id="shipping-2" checked />
                                        <label htmlFor="shipping-2">Standard - 250</label>
                                        <div className="caption">
                                            <p>
                                                shiping via tcs or by Pakistan Post
                                            </p>
                                            <p>
                                                <b><i>Note: </i></b> &nbsp;&nbsp; different vendor products deliver separately
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="payments-methods">
                                    <div className="section-title">
                                        <h4 className="title">Payments Methods</h4>
                                    </div>                                    <div className="input-checkbox">
                                        <input type="radio" name="payments" id="payments-2" checked />
                                        <label htmlFor="payments-2">cash on Delivery</label>
                                        <div className="caption">
                                            <p>
                                                {/* shiping via tcs or Pakistan Post */}
                                            </p>
                                        </div>
                                    </div>
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
                                            {this.displayCart().displayCart}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th className="empty" colSpan={3} />
                                                <th>SUBTOTAL</th>
                                                <th colSpan={2} className="sub-total">{this.displayCart().sum}</th>
                                            </tr>
                                            <tr>
                                                <th className="empty" colSpan={3} />
                                                <th>SHIPING</th>
                                                <td colSpan={2}>250</td>
                                            </tr>
                                            <tr>
                                                <th className="empty" colSpan={3} />
                                                <th>TOTAL</th>
                                                <th colSpan={2} className="total">{this.displayCart().sum + 250}</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                    <div className="pull-right">
                                        <button type="submit" className="primary-btn" >Place Order</button>
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
        cart: state.cart,
        user: state.user
    }
}
export default connect(mapStateToProps, { deleteFromCart })(Chackout);