import React from 'react';
import './my-slider.css';

export default function slider(props) {
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
                    {props.images.map(img => {
                        return (
                            <li>
                                <img src={img} alt=" "/>
                                {/* <div className="ism-caption ism-caption-0">
                                    My slide caption text
                            </div> */}
                            </li>
                        )
                    })}
                    {/* 
                    <li>
                        <img src={} />
                        <div className="ism-caption ism-caption-0">
                            My slide caption text
        </div>
                    </li>
                    <li>
                        <img src={} />

                        <div className="ism-caption ism-caption-0">
                            My slide caption text
        </div>
                    </li>
                    <li>
                        <img src={} />
                        <div className="ism-caption ism-caption-0">
                            My slide caption text
        </div>
                    </li> */}
                </ol>
            </div>
            <script src="/js/ism-2.2.min.js"></script>
        </div>

    )
}
