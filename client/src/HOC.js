import React from 'react'
import Header from './Component/Header/index';
import Footer from './Component/Footer/index';
import Navigation from './Component/Navigation/index';
export default function layout(props) {
    console.log(props.open)
    return (
        <div className="home_sidebar">
            <div className="home_box">
                <Header />
                <Navigation open={props.open} />
                {props.children}
                < Footer />
            </div>
        </div>
    )
}
