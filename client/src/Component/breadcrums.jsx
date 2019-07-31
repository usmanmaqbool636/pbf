import React from 'react'

export default function breadcrums() {
    return (
        <div id="breadcrumb">
            <div class="container">
                <ul class="breadcrumb">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Category</a></li>
                    <li class="active">Product Name Goes Here</li>
                </ul>
            </div>
        </div>
    )
}
