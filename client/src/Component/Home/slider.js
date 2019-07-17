import React from 'react';
import './my-slider.css';
import image1 from './image/slides/beautiful-701678_1280.jpg'

export default function slider() {
    return (
        <div className="container1" >
            <div
                className="ism-slider"
                data-transition_type="zoom"
                data-play_type="loop"
                data-interval={3000}
                data-image_fx="zoomrotate"
                id="my-slider"
            >
                <ol>
                    <li>
                        <img src={image1} alt="" />
                        <div className="ism-caption ism-caption-0">
                            My slide caption text
        </div>
                    </li>
                    <li>
                        <img src={image1} alt="" />
                        <div className="ism-caption ism-caption-0">
                            My slide caption text
        </div>
                    </li>
                    <li>
                        <img src={image1} alt="" />

                        <div className="ism-caption ism-caption-0">
                            My slide caption text
        </div>
                    </li>
                    <li>
                        <img src={image1}  alt =""/>
                        <div className="ism-caption ism-caption-0">
                            My slide caption text
        </div>
                    </li>
                </ol>
            </div>
            {/* <script src="/js/ism-2.2.min.js"></script> */}
        </div>

    )
}
