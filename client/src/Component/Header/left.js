import React from 'react'
import logo from "../../Assests/img/logo.png";

const left = () => {
    return (
        <div className="pull-left">
            {/* Logo */}
            <div className="header-logo">
                <a
                    className="logo"
                    href="/"
                >
                    <img src={logo} alt="Logo" title="Logo" />
                </a>
            </div>
            {/* /Logo */}
            {/* Search */}
            {/* <div className="header-search">
                <form>
                    <input
                        className="input search-input"
                        type="text"
                        placeholder="Enter your keyword"
                    />
                    <select className="input search-categories">
                        <option value={0}>All Categories</option>
                        <option value={1}>Category 01</option>
                        <option value={1}>Category 02</option>
                    </select>
                    <button className="search-btn">
                        <i className="fa fa-search" />
                    </button>
                </form>
            </div> */}
            {/* /Search */}
        </div>
    )
}

export default left;