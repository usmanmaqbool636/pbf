import React, { Component } from 'react';
import axios from '../../axios';
class Review extends Component {
    state = {
        name: '',
        email: '',
        review: '',
        rating: 0,
    }


    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value })
        console.log(evt.target.name, evt.target.value);
    }
    handleSubmit = (evt) => {
        evt.preventDefault();
        const token = localStorage.getItem('token');
        const headers = { Authorization: token };
        const { name, email, review, rating } = this.state;

        axios.post(`/api/product/review`, { name, email, review, rating, product: this.props.productId }, { headers })
            .then(res => {
                this.setState({name:'',email:'',review:'',rating:0})
                this.props.getReview();
            })
    }
    render() {
        const { name, email, review } = this.state;
        return (
            <div className="col-md-6">
                <h4 className="text-uppercase">
                    Write Your Review
                                                    </h4>
                <p>Your email address will not be published.</p>
                <form className="review-form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            required
                            minLength="4"
                            className="input"
                            type="text"
                            placeholder="Your Name"
                            name="name"
                            onChange={this.handleChange}
                            value={name}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="input"
                            required
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            onChange={this.handleChange}
                            value={email}
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            required
                            minLength="10"
                            className="input"
                            placeholder="Your review"
                            defaultValue={""}
                            name="review"
                            onChange={this.handleChange}
                            value={review}
                        />
                    </div>
                    <div className="form-group">
                        <div className="input-rating">
                            <strong className="text-uppercase">
                                Your Rating:{" "}
                            </strong>
                            <div className="stars">
                                <input
                                    type="radio"
                                    id="star5"
                                    name="rating"
                                    defaultValue={5}
                                    onChange={this.handleChange}
                                />
                                <label htmlFor="star5" />
                                <input
                                    type="radio"
                                    id="star4"
                                    name="rating"
                                    defaultValue={4}

                                    onChange={this.handleChange}
                                // value={rating}
                                />
                                <label htmlFor="star4" />
                                <input
                                    type="radio"
                                    id="star3"
                                    name="rating"
                                    defaultValue={3}
                                    onChange={this.handleChange}
                                // value={rating}
                                />
                                <label htmlFor="star3" />
                                <input
                                    type="radio"
                                    id="star2"
                                    name="rating"
                                    defaultValue={2}
                                    onChange={this.handleChange}
                                // value={rating}
                                />
                                <label htmlFor="star2" />
                                <input
                                    type="radio"
                                    id="star1"
                                    name="rating"
                                    defaultValue={1}
                                    onChange={this.handleChange}
                                // value={rating}
                                />
                                <label htmlFor="star1" />
                            </div>
                        </div>
                    </div>
                    <button className="primary-btn" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default Review