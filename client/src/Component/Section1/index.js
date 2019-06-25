import React from "react";
import { Grid } from 'semantic-ui-react';
export default function index() {
    return (
        <Grid columns={3} container centered relaxed>
            <Grid.Row>
                <Grid.Column>
                    <a className="banner banner-1" href="/">
                        <img src="./img/banner10.jpg" alt="" />
                        <div className="banner-caption text-center">
                            <h2 className="white-color">NEW COLLECTION</h2>
                        </div>
                    </a>
                </Grid.Column>
                <Grid.Column>
                    <a className="banner banner-1" href="/">
                        <img src="./img/banner11.jpg" alt="" />
                        <div className="banner-caption text-center">
                            <h2 className="white-color">NEW COLLECTION</h2>
                        </div>
                    </a>
                </Grid.Column>
                <Grid.Column>
                    <a className="banner banner-1" href="/">
                        <img src="./img/banner12.jpg" alt="" />
                        <div className="banner-caption text-center">
                            <h2 className="white-color">NEW COLLECTION</h2>
                        </div>
                    </a>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        // <div className="section">
        //     {/* container */}
        //     <div className="container">
        //         {/* row */}
        //         <div className="row">
        //             {/* banner */}
        //             <div className="col-md-4 col-sm-6">
        //                 <a className="banner banner-1" href="/">
        //                     <img src="./img/banner10.jpg" alt="" />
        //                     <div className="banner-caption text-center">
        //                         <h2 className="white-color">NEW COLLECTION</h2>
        //                     </div>
        //                 </a>
        //             </div>
        //             {/* /banner */}
        //             {/* banner */}
        //             <div className="col-md-4 col-sm-6">
        //                 <a className="banner banner-1" href="/">
        //                     <img src="./img/banner11.jpg" alt="" />
        //                     <div className="banner-caption text-center">
        //                         <h2 className="white-color">NEW COLLECTION</h2>
        //                     </div>
        //                 </a>
        //             </div>
        //             {/* /banner */}
        //             {/* banner */}
        //             <div className="col-md-4 col-md-offset-0 col-sm-6 col-sm-offset-3">
        //                 <a className="banner banner-1" href="/">
        //                     <img src="./img/banner12.jpg" alt="" />
        //                     <div className="banner-caption text-center">
        //                         <h2 className="white-color">NEW COLLECTION</h2>
        //                     </div>
        //                 </a>
        //             </div>
        //             {/* /banner */}
        //         </div>
        //         {/* /row */}
        //     </div>
        //     {/* /container */}
        // </div>
    );
}
