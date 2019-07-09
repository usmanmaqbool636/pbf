import React, { Component } from 'react'
// import {} from 'semantic-ui-react';
import Aside from './aside/Aside';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from '../../axios';
import { setCatSub } from '../../store/Action/productAction';
import Product from './product';

class ProductPage extends Component {
    state = {
        category: [],
        selected_cat: {},
        products: [],
        range: [],
        filterProduct: [],
        gender: ''
    }

    componentWillReceiveProps() {
        this.getCategory();
    }
    componentDidMount() {
        this.getCategory();
    }
    getCategory = () => {
        axios.get("/api/sub")
            .then(res => {
                const { category, sub } = this.props.match.params;
                this.setState({ category: res.data })
                this.state.category.forEach(c => {
                    if (c.text === category.split('-').join(' '))
                        c.subcategory.forEach(subcat => {
                            if (subcat.text === sub.split('-').join(' ')) {
                                this.setState({ selected_cat: subcat })
                                this.getProduct();
                            }
                        })
                })
            })
    }
    getProduct = () => {
        const { category, _id } = this.state.selected_cat;
        console.log('this.getProduct')
        axios.get(`/api/product/${category}/${_id}`)
            .then(res => {
                this.setState({ products: res.data, filterProduct: res.data })
                console.log(res.data);
            })
    }
    FilterChange = (value) => {
        this.setState({ range: value })
        const { products, range } = this.state;
        const filterProduct = products.filter(p => {
            return p.price > range[0] && p.price < range[1]
        })
        this.setState({filterProduct})
    }
    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value })

    }
    render() {
        const { products,filterProduct } = this.state;
        console.log(filterProduct);
        const displayProduct = filterProduct.map((p, i) => {
            return <Product {...p} i={i} ImageUrl={p.imagespath[0]} name={p.name} price={p.price} />
        })
        return (
            <div className="section">
                {/* <div class="ui segment">
                    <div id="double" class="ui double range"></div>
                    <p id="display-d"></p>
                </div> */}
                {/* container */}
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <Aside
                            value={this.state.range}
                            FilterChange={this.FilterChange}
                            handleChange={this.handleChange}
                            gender={this.state.gender}
                        />
                        {/* MAIN */}
                        <div id="main" className="col-md-9">
                            {/* store top filter */}
                            <div className="store-filter clearfix">
                                <div className="pull-left">
                                    <div className="row-filter">
                                        <a href="#">
                                            <i className="fa fa-th-large" />
                                        </a>
                                        <a href="#" className="active">
                                            <i className="fa fa-bars" />
                                        </a>
                                    </div>
                                    <div className="sort-filter">
                                        <span className="text-uppercase">Sort By:</span>
                                        <select className="input">
                                            <option value={0}>Position</option>
                                            <option value={0}>Price</option>
                                            <option value={0}>Rating</option>
                                        </select>
                                        <a href="#" className="main-btn icon-btn">
                                            <i className="fa fa-arrow-down" />
                                        </a>
                                    </div>
                                </div>
                                <div className="pull-right">
                                    <div className="page-filter">
                                        <span className="text-uppercase">Show:</span>
                                        <select className="input">
                                            <option value={0}>10</option>
                                            <option value={1}>20</option>
                                            <option value={2}>30</option>
                                        </select>
                                    </div>
                                    <ul className="store-pages">
                                        <li>
                                            <span className="text-uppercase">Page:</span>
                                        </li>
                                        <li className="active">1</li>
                                        <li>
                                            <a href="#">2</a>
                                        </li>
                                        <li>
                                            <a href="#">3</a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-caret-right" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* /store top filter */}
                            {/* STORE */}
                            <div id="store">
                                {/* row */}

                                <div className="row">
                                    {displayProduct}
                                </div>
                                {/* /row */}
                            </div>
                            {/* /STORE */}
                            {/* store bottom filter */}
                            <div className="store-filter clearfix">
                                <div className="pull-left">
                                    <div className="row-filter">
                                        <a href="#">
                                            <i className="fa fa-th-large" />
                                        </a>
                                        <a href="#" className="active">
                                            <i className="fa fa-bars" />
                                        </a>
                                    </div>
                                    <div className="sort-filter">
                                        <span className="text-uppercase">Sort By:</span>
                                        <select className="input">
                                            <option value={0}>Position</option>
                                            <option value={0}>Price</option>
                                            <option value={0}>Rating</option>
                                        </select>
                                        <a href="#" className="main-btn icon-btn">
                                            <i className="fa fa-arrow-down" />
                                        </a>
                                    </div>
                                </div>
                                <div className="pull-right">
                                    <div className="page-filter">
                                        <span className="text-uppercase">Show:</span>
                                        <select className="input">
                                            <option value={0}>10</option>
                                            <option value={1}>20</option>
                                            <option value={2}>30</option>
                                        </select>
                                    </div>
                                    <ul className="store-pages">
                                        <li>
                                            <span className="text-uppercase">Page:</span>
                                        </li>
                                        <li className="active">1</li>
                                        <li>
                                            <a href="#">2</a>
                                        </li>
                                        <li>
                                            <a href="#">3</a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-caret-right" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* /store bottom filter */}
                        </div>
                        {/* /MAIN */}
                    </div>
                    {/* /row */}
                </div>
                {/* /container */}
            </div>

        )
    }
}
const mapDispatchToProps = (state) => {
    // console.log(state.product.category)
    return {
        category: state.product.category
    }
}
export default withRouter(connect(mapDispatchToProps, { setCatSub })(ProductPage));