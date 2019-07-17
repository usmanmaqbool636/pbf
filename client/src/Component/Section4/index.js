import React, { Component } from 'react'
import axios from '../../axios';
import Product from '../product/product';
// import product1 from '../../Assests/img/product01.jpg'
// import product2 from '../../Assests/img/product02.jpg'
// import product3 from '../../Assests/img/product03.jpg'
// import product4 from '../../Assests/img/product04.jpg'
// import product5 from '../../Assests/img/product05.jpg'
// import product6 from '../../Assests/img/product06.jpg'
// import product7 from '../../Assests/img/product07.jpg'
// import banner15 from '../../Assests/img/banner15.jpg';




class LatestProduct extends Component {
    state = {
        latestProduct: [],
        pickedProduct: [],
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
        const { latestProduct, pickedProduct } = this.state;
        let displayLatestProducts, displayPickedProducts;
        displayLatestProducts = latestProduct.map((p, i) => {
            return <Product key={p._id + i} {...p} i={i} ImageUrl={p.imagespath[0]} name={p.name} price={p.price} />
        })
        displayPickedProducts = pickedProduct.map((p, i) => {
            return <Product key={p._id + i} {...p} i={i} ImageUrl={p.imagespath[0]} name={p.name} price={p.price} />
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