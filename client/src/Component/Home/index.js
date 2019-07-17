import React from 'react';
import Slider from './slider';
// import banner1 from '../../Assests/img/banner01.jpg'
// import banner2 from '../../Assests/img/banner02.jpg'
// import banner3 from '../../Assests/img/banner03.jpg'
import { Grid } from 'semantic-ui-react';

export default function index() {
    return (
        <div id="home">
            {/* container */}
            <div className="container">
                {/* home wrap */}
                <div className="home-wrap">
                    {/* home slick */}
                    {/* <div id="home-slick" className="slick-initialized slick-slider"> */}
                        <Grid padded>
                                <Grid.Column mobile={16}>
                                    <Slider />
                                </Grid.Column>
                        </Grid>
                        {/* <button className="slick-prev slick-arrow" aria-label="Previous" type="button" style={{ display: 'block' }}>Previous</button> */}
                        {/* banner */}
                        {/* <div className="slick-list draggable"><div className="slick-track" style={{ opacity: 1, width: 6090, transform: 'translate3d(-1740px, 0px, 0px)' }}><div className="banner banner-1 slick-slide slick-cloned" data-slick-index={-1} aria-hidden="true" tabIndex={-1} style={{ width: 870 }}>
                                <img src={banner1} alt="" />
                                <div className="banner-caption">
                                    <h1 className="white-color">New Product <span>Collection</span></h1>
                                    <button className="primary-btn" tabIndex={-1}>Shop Now</button>
                                </div>
                            </div><div className="banner banner-1 slick-slide" data-slick-index={0} aria-hidden="true" tabIndex={-1} style={{ width: 870 }}>
                                    <img src={banner2} alt="" />
                                    <div className="banner-caption text-center">
                                        <h1>Bags sale</h1>
                                        <h3 className="white-color font-weak">Up to 50% Discount</h3>
                                        <button className="primary-btn" tabIndex={-1}>Shop Now</button>
                                    </div>
                                </div><div className="banner banner-1 slick-slide slick-current slick-active" data-slick-index={1} aria-hidden="false" tabIndex={0} style={{ width: 870 }}>
                                    <img src={banner2} alt="" />
                                    <div className="banner-caption">
                                        <h1 className="primary-color">HOT DEAL<br /><span className="white-color font-weak">Up to 50% OFF</span></h1>
                                        <button className="primary-btn" tabIndex={0}>Shop Now</button>
                                    </div>
                                </div><div className="banner banner-1 slick-slide" data-slick-index={2} aria-hidden="true" tabIndex={-1} style={{ width: 870 }}>
                                    <img src={banner3} alt="" />
                                    <div className="banner-caption">
                                        <h1 className="white-color">New Product <span>Collection</span></h1>
                                        <button className="primary-btn" tabIndex={-1}>Shop Now</button>
                                    </div>
                                </div><div className="banner banner-1 slick-slide slick-cloned" data-slick-index={3} aria-hidden="true" tabIndex={-1} style={{ width: 870 }}>
                                    <img src="file:///C:/Users/usman/Desktop/e-shop/img/banner01.jpg" alt="" />
                                    <div className="banner-caption text-center">
                                        <h1>Bags sale</h1>
                                        <h3 className="white-color font-weak">Up to 50% Discount</h3>
                                        <button className="primary-btn" tabIndex={-1}>Shop Now</button>
                                    </div>
                                </div><div className="banner banner-1 slick-slide slick-cloned" data-slick-index={4} aria-hidden="true" tabIndex={-1} style={{ width: 870 }}>
                                    <img src="file:///C:/Users/usman/Desktop/e-shop/img/banner02.jpg" alt="" />
                                    <div className="banner-caption">
                                        <h1 className="primary-color">HOT DEAL<br /><span className="white-color font-weak">Up to 50% OFF</span></h1>
                                        <button className="primary-btn" tabIndex={-1}>Shop Now</button>
                                    </div>
                                </div><div className="banner banner-1 slick-slide slick-cloned" data-slick-index={5} aria-hidden="true" tabIndex={-1} style={{ width: 870 }}>
                                    <img src="file:///C:/Users/usman/Desktop/e-shop/img/banner03.jpg" alt="" />
                                    <div className="banner-caption">
                                        <h1 className="white-color">New Product <span>Collection</span></h1>
                                        <button className="primary-btn" tabIndex={-1}>Shop Now</button>
                                    </div>
                                </div></div></div> */}
                        {/* /banner */}
                        {/* banner */}
                        {/* /banner */}
                        {/* banner */}
                        {/* /banner */}
                        {/* <button className="slick-next slick-arrow" aria-label="Next" type="button" style={{ display: 'block' }}>Next</button> */}
                    {/* </div> */}
                    {/* /home slick */}
                </div>
                {/* /home wrap */}
            </div>
            {/* /container */}
        </div>

    )
}
