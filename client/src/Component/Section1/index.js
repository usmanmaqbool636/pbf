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
    );
}
