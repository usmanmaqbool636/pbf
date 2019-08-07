import React, { Component } from "react";
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import "./navigation.css"
import { toogleSideBar, responsiveNave } from '../../store/Action/responsiveAction';
import { setCatSub, setCat } from '../../store/Action/productAction';
import { Link, withRouter } from 'react-router-dom';
import axios from '../../axios';
class Navigation extends Component {
  state = {
    res_nav: false,
    category: []
  }
  componentDidMount() {
    axios.get("api/sub")
      .then(res => {
        this.setState({ category: res.data })
        this.props.setCat(res.data)
      })
  }

  toogleSideBar = () => {
    this.props.toogleSideBar()
  }
  over = (evt) => {
    evt.target.parentNode.classList.add("open");
    this.setState({ expanded: true })

  }
  down = (evt) => {
    evt.target.parentNode.classList = "dropdown side-dropdown";
    this.setState({ expanded: false })

  }

  render() {
    const { open } = this.props;
    const { category, expanded } = this.state;
    const displaycategory = category.map(cat => {
      return (
        <li className="dropdown side-dropdown" key={cat._id}>
          <Link
            to={`/${cat.text}`}
            className="dropdown-toggle"
            // onMouseOver={this.over}
            // onMouseOut={this.down}
            // onClick={() => this.props.history.push(`/${cat.text}`)}
            data-toggle="dropdown"
            aria-expanded={expanded}
          >
            {cat.text} <Icon name='angle right' />
          </Link>
          <div className="custom-menu">
            <div className="row">
              <div className="col-md-4">
                <ul className="list-links">
                  <li>
                    <h3 className="">Sub Categories</h3>
                  </li>
                  {cat.subcategory.map(sub => {
                    const result = cat.text.split(' ').join('-')
                    const result1 = sub.text.split(' ').join('-')
                    return (
                      <li
                        key={sub._id}
                      // onClick={()=>this.props.history.push(`/products/${result}/${result1}`)}
                      >
                        <a href={`/products/${result}/${result1}`}
                        >
                          {sub.text}
                        </a>
                      </li>
                    )
                  })}
                </ul>
                <hr />
              </div>
            </div>
          </div>
        </li>)
    })
    return (
      <div id="navigation"
        onClick={this.toogleSideBar}
        className={this.props.sidebar ? "shadow" : ""}
      >
        {/* container */}
        < div className="container">
          <div onClick={this.toogleSideBar} id="responsive-nav" className={this.props.sidebar ? "open shadow" : ""}>
            {/* category nav */}
            <div className="category-nav">
              <span className="category-header">
                Categories <i
                  className="fa fa-list"
                  onClick={this.props.responsiveNave} />
              </span>
              <ul className={`category-list`}
                style={{ display: open ? "block" : "none" }}
              >
                {displaycategory}
              </ul>
            </div>
            {/* /category nav */}
            {/* menu nav */}
            <div className="menu-nav">
              {/* <span className="menu-header">
                Menu <i className="fa fa-bars" />
              </span> */}
              <ul className="menu-list">
                <li>
                  <Link to="/">
                    Home
                </Link>
                </li>
              </ul>
            </div>
            {/* menu nav */}
            {/* <div style={{ backgroundColor: 'red', zIndex: 100,height:"100%",width:"100%" }}></div> */}
          </div>
        </div>
        {/* /container */}
      </div >
    );
  }
}
const mapStateToProps = (state) => {
  return {
    sidebar: state.responsive.sidebar
  }
}
export default withRouter(connect(mapStateToProps, { toogleSideBar, responsiveNave, setCatSub, setCat })(Navigation));
