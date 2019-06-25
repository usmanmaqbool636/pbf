import React from 'react'
import banner13 from '../../Assests/img/banner13.jpg'
import banner11 from '../../Assests/img/banner11.jpg'
import banner12 from '../../Assests/img/banner12.jpg'
export default function index() {
    return (
        <div className="section section-grey">
            {/* container */}
            <div className="container">
                {/* row */}
                <div className="row">
                    {/* banner */}
                    <div className="col-md-8">
                        <div className="banner banner-1">
                            <img src={banner13} alt="" />
                            <div className="banner-caption text-center">
                                <h1 className="primary-color">HOT DEAL<br /><span className="white-color font-weak">Up to 50% OFF</span></h1>
                                <button className="primary-btn">Shop Now</button>
                            </div>
                        </div>
                    </div>
                    {/* /banner */}
                    {/* banner */}
                    <div className="col-md-4 col-sm-6">
                        <a className="banner banner-1" href="/">
                            <img src={banner11} alt="" />
                            <div className="banner-caption text-center">
                                <h2 className="white-color">NEW COLLECTION</h2>
                            </div>
                        </a>
                    </div>
                    {/* /banner */}
                    {/* banner */}
                    <div className="col-md-4 col-sm-6">
                        <a className="banner banner-1" href="/">
                            <img src={banner12} alt="" />
                            <div className="banner-caption text-center">
                                <h2 className="white-color">NEW COLLECTION</h2>
                            </div>
                        </a>
                    </div>
                    {/* /banner */}
                </div>
                {/* /row */}
            </div>
            {/* /container */}
        </div>

    )
}
