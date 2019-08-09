
import React from "react";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { Tab, Menu } from "semantic-ui-react";
import MyProduct from "./myProduct";
import Order from './Order';
import Myorder from './myorder';
import Deliver from './Deliver';
const grid = { paneWidth: 13, tabWidth: 3 };
const DashBoard = (props) => {
  const panes = [
    // { menuItem: "Overview", render: () => <Tab.Pane>Overview Content</Tab.Pane> },
    { menuItem: "My Product",active:true, render: () => <MyProduct /> },
    // props.user.role === 1 || props.user.role == 2 && { menuItem: "deliver order", render: () => <Deliver userId={props.user._id} /> },
    // { menuItem: "Selling", render: () => <Tab.Pane>Selling Content</Tab.Pane> },
    props.user.role === 1 || props.user.role == 2 && { menuItem: "order", render: () => <Order userId={props.user._id} /> },
    props.user.role === 0 || props.user.role == 2 && { menuItem: "myorder", render: () => <Myorder userId={props.user._id} /> },

  ];
  return (
    <React.Fragment>
      <Menu.Item link>
        <Link to="/" style={{ fontSize: "150%" }}> back to home </Link>
      </Menu.Item>
      <Tab
        menu={{
          color: "grey",
          inverted: true,
          fluid: true,
          vertical: false,
          tabular: true
        }}
        // activeIndex={props.match.params.active || 0} 
        panes={panes}
        renderActiveOnly
        grid={grid}
        className="pane"
      />
    </React.Fragment >
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(DashBoard);