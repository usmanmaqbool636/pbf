import React from "react";
import { connect } from 'react-redux';
import { toogleSideBar } from '../../store/Action/responsiveAction';

import TopHeader from './topHeader';
import Left from './left';
import Right from './right';
const Header = (props) => {
    console.log(props);
    return (
        <header>
            {/* top Header */}
            <TopHeader />
            {/* /top Header */}


            {/* header */}
            <div id="header">
                <div className="container">
                    <Left />
                    <Right toogleSideBar={props.toogleSideBar} />
                </div>
                {/* header */}
            </div>
            {/* container */}
        </header>
    );
};
export default connect(null, { toogleSideBar })(Header);
