import React, { Component } from 'react'
import axios from '../../axios';
import Product from '../product/product';



class LatestProduct extends Component {
    state = {
        latestProduct: [],
        pickedProduct: [],
        rating: [...Array(5)]
    }
    componentDidMount() {
        axios.get('/api/product/latest')
            .then(res => {
                this.setState({ latestProduct: res.data })
            })
        axios.get('/api/product/picked')
            .then(res => {
                this.setState({ pickedProduct: res.data })
            })
    }

    render() {
        const { latestProduct, pickedProduct, rating } = this.state;
        let displayLatestProducts, displayPickedProducts;
        displayLatestProducts = latestProduct.map((p, i) => {
            return <Product key={p._id + 'latest'} {...p} i={i} ImageUrl={p.imagespath[0]} name={p.name} price={p.price} />
        })
        displayPickedProducts = pickedProduct.map((p, i) => {
            return <Product key={p._id + 'picked'} {...p} i={i} ImageUrl={p.imagespath[0]} name={p.name} price={p.price} />
        })

        return (
            <div className="section">
                {/* container */}
                <div className="container">
                    {/* row */}
                    <div className="row">
                        {/* section title */}
                        <div className="col-md-12">
                            <div className="section-title">
                                <h2 className="title">Latest Products</h2>
                            </div>
                        </div>
                        {displayLatestProducts}
                    </div>

                    <div className="row">
                        {/* section title */}
                        <div className="col-md-12">
                            <div className="section-title">
                                <h2 className="title">Picked For You</h2>
                            </div>
                        </div>
                        {displayPickedProducts}
                    </div>
                    {/* /row */}
                </div>
                {/* /container */}
            </div>
        )
    }
}

export default LatestProduct;