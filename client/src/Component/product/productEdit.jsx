import React, { Component } from "react";
import { Form, Message, Button, Icon, Grid, Header, Transition } from "semantic-ui-react";
import { connect } from "react-redux";
import axios from "../../axios";

class ProductEdit extends Component {
  state = {
    name: "",
    desription: "",
    price: "",
    category: "",
    subcategory: "",
    errors: {},
    loading: false,
    images: [],
    imagespath: [],
    message: '',
    success: "",
    loading: false,
    // storageRef: firebase.storage().ref(),
    // loading: false,
    // user: this.props.currentUser,
    // errors: [],
    // modal: false,
    // uploadState: '',
    // uploadTask: null,
    // percentUploaded: 0,

    // file: null,
    // authorized: ['image/jpeg', 'image/png']
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`/api/product/${id}`).then(p => {
      this.setState({ ...p.data });
    });
  }
  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  handleSubmit = () => {
    const id = this.props.match.params.id;
    const {
      name,
      price,
      desription,
      category,
      subcategory,
      imagespath,
       loading
    } = this.state;
    const product = {
      name,
      price,
      desription,
      category,
      subcategory,
      imagespath
    };
    const headers = { Authorization: this.props.token };
    this.setState({loading:true})

    axios.put(`/api/product/${id}`, product, { headers }).then(res => {
      if (res.data.success) {
        this.setState(
          { 
            success: res.data.success, 
            message: res.data.message,
            loading:false 
          }
        );
        setTimeout(() => {
          this.setState({ success: false, message: '' })
          // this.setState({ name: "", desription: "", price: "", category: "", subcategory: "",image:[] })
        }, 3000);
      }
      else{
        this.setState({loading:false})
      }
    });
  };
  render() {
    const {
      name,
      desription,
      price,
      category,
      subcategory,
      errors,
      loading,
      success,
      message
    } = this.state;
    return (
      <Grid container textAlign="center">
        <Grid.Column computer={8} mobile={16} tablet={10}>
          <div style={{ textAlign: "center" }} >
            <Transition visible={success} animation='scale' duration={500}>
              <Message size="tiny" compact>
                <Message.Header>Message </Message.Header>
                <Message.Content>{message}</Message.Content>
              </Message>
            </Transition>
          </div>
          <Header as="h1" icon color="orange" textAlign="center">
            <Icon name="connectdevelop" color="orange" />
            Create Product
          </Header>
          <Form size="large" onSubmit={this.handleSubmit}>
            <Form.Input
              fluid
              name="name"
              // icon="user"
              // iconPosition="left"
              placeholder="Name"
              onChange={this.handleChange}
              type="text"
              value={name}
            // error={errors.username}
            />
            <Form.Input
              fluid
              name="desription"
              // icon="mail"
              // iconPosition="left"
              placeholder="Desription"
              onChange={this.handleChange}
              type="text"
              value={desription}
            // error={errors.email || errors.message ? true : false}
            />
            <Form.Input
              fluid
              name="price"
              // icon="mail"
              // iconPosition="left"
              placeholder="price"
              onChange={this.handleChange}
              type="number"
              value={price}
            // error={errors.email || errors.message ? true : false}
            />

            <Form.Input
              fluid
              name="category"
              // icon="lock"
              // iconPosition="left"
              placeholder="Category"
              onChange={this.handleChange}
              type="string"
              value={category}
            // error={errors.password}
            />

            <Form.Input
              fluid
              name="subcategory"
              // icon="repeat"
              // iconPosition="left"
              placeholder="Subcategory"
              onChange={this.handleChange}
              type="string"
              value={subcategory}
            // error={errors.password}
            />
            <input
              type="file"
              className="inputfile"
              id="embedpollfileinput"
              name="0"
              onChange={this.imageChangeHandler}
            />
            <input
              type="file"
              className="inputfile"
              id="embedpollfileinput"
              name="1"
              onChange={this.imageChangeHandler}
            />
            <input
              type="file"
              className="inputfile"
              id="embedpollfileinput"
              name="2"
              onChange={this.imageChangeHandler}
            />
            <input
              type="file"
              className="inputfile"
              id="embedpollfileinput"
              name="3"
              onChange={this.imageChangeHandler}
            />

            <Button color="orange" fluid size="large" loading={loading}>
              Save
            </Button>
          </Form>
          {Object.entries(errors).length > 0 && (
            <Message error>
              <h3>Error</h3>
              {errors.message}
            </Message>
          )}
        </Grid.Column>
      </Grid>
    );
  }
}
const mapDispatchToProps = state => {
  return {
    token: state.user.token
  };
};
export default connect(mapDispatchToProps)(ProductEdit);