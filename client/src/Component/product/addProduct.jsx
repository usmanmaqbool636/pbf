import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "../../axios";
// import { Link } from "react-router-dom";
import uuid from "uuid";
import mime from "mime-types";
import firebase from "../../firebase";
import { Grid, Button, Form, Header, Message, Icon, Dropdown, Transition } from "semantic-ui-react";


class AddProduct extends Component {
  state = {
    value: '',
    name: "",
    desription: "",
    price: "",
    category: "",
    subcategory: "",
    brand: '',
    errors: {},
    loading: false,
    images: [],
    imagespath: [],
    cat: [],
    subcat: [],
    storageRef: firebase.storage().ref(),
    user: this.props.currentUser,
    modal: false,
    uploadState: "",
    uploadTask: null,
    percentUploaded: 0,
    open: false,

    file: null,
    authorized: ["image/jpeg", "image/png"],
    message: "",
    success: false
  };
  componentDidMount() {
    document.title += "! create Product";
    axios.get('/api/cat')
      .then(res => {
        this.setState({ cat: res.data })
      })
      .catch(err => console.log(err));
  }

  uploadFile = (file, metadata, i) => {
    this.setState({ image: file });
    const { imagespath } = this.state;
    const u = uuid();
    if (u) {
      imagespath[i] = u;
      this.setState({ imagespath });
    }

    const filePath = `products/${u}.jpg`;
    this.setState(
      {
        uploadState: "uploading",
        uploadTask: this.state.storageRef.child(filePath).put(file, metadata)
      },
      () => {
        this.state.uploadTask.on(
          "state_changed",
          snap => {
            const percentUploaded = Math.round(
              (snap.bytesTransferred / snap.totalBytes) * 100
            );
            this.setState({ percentUploaded });
          },
          err => {
            console.error(err);
            this.setState({
              errors: this.state.errors.concat(err),
              // uploadState: 'error',
              uploadState: null
            });
          },
          async () => {
            try {
              const downloadUrl = await this.state.uploadTask.snapshot.ref.getDownloadURL();
              const token = localStorage.getItem("token");
              const headers = { Authorization: token };
              if (downloadUrl) {
                axios
                  .put(
                    `/api/product/image/${this.state.res._id}`,
                    { image: u, i },
                    { headers }
                  )
                  .then(res => console.log("====>>>>", res.data));
              }
            } catch (err) {
              this.setState({
                errors: this.state.errors.concat(err),
                uploadState: "error",
                uploadTask: null
              });
            }
          }
        );
      }
    );
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  handleChange1 = (e, { name, value }) => {
    this.setState({ [name]: value })
  }
  handleChange2 = (e, { value2 }) => this.setState({ value2 })


  handleCategoryChange = (evt, name, { value }) => {
    this.setState({ name: value });
  }

  imageChangeHandler = evt => {
    const { images } = this.state;
    const file = evt.target.files[0];
    images[Number(evt.target.name)] = file;
    this.setState({ images });
  };
  handleSubmit = () => {
    const {
      name,
      desription,
      price,
      category,
      subcategory,
      images,
      brand
    } = this.state;
    images.forEach((file, i) => {
      const metadata = { contentType: mime.lookup(file.name) };
      this.uploadFile(file, metadata, i);
    });
    const token = localStorage.getItem("token");
    const headers = { Authorization: token };
    this.setState({ loading: true })
    axios
      .post(
        "/api/product/create",
        { name, price, desription, category, subcategory, brand },
        { headers }
      )
      .then(res => {
        if (res.data.success) {
          this.setState(
            {
              success: res.data.success, message: res.data.message,
              loading: false
            }
          );
          setTimeout(() => {
            this.setState({ success: false, message: '' })
            this.setState({ name: "", desription: "", price: "", category: "", subcategory: "", image: [] })
          }, 3000);
        }
        else{
        this.setState({loading:false})
        }
      })
      .catch(err => {
        this.setState({loading:false})
        console.log("err=>>>", err);
      });
  };
  SubCategory = () => {
    const { category } = this.state;
    axios.get(`/api/sub/${category}`)
      .then(res => this.setState({ subcat: res.data }))
  }
  render() {
    const {
      name,
      desription,
      price,
      category,
      subcategory,
      errors,
      loading,
      cat, subcat, images,
      success,
      message,
      brand,
    } = this.state;
    return (
      <Grid container textAlign="center" container>
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
              required
            // error={errors.username}
            />
            <Form.Input
              fluid
              name="desription"
              placeholder="Desription"
              onChange={this.handleChange}
              type="text"
              value={desription}
              required
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
              required

            // error={errors.email || errors.message ? true : false}
            />
            <Form.Field
              onBlur={this.SubCategory}
              placeholder="Category"
              name="category"
              control={Dropdown}
              fluid
              selection
              onChange={this.handleChange1}
              options={cat}
              value={category}
              required

            />

            {/* <Dropdown
              fluid
              onChange={this.handleChange1}
              options={options}
              placeholder='Choose an option'
              selection
              value={category}
              name="category"
            /> */}
            <Form.Field
                          required

              disabled={subcat.length <= 0}
              placeholder="SubCategory"
              name="subcategory"
              control={Dropdown}
              fluid
              selection
              onChange={this.handleChange1}
              options={subcat}
              value={subcategory}
            />
            {/* this should be if needed */}
            {/* <Form.Field
              placeholder="Brands"
              name="brand"
              control={Dropdown}
              fluid
              selection
              onChange={this.handleChange1}
              options={[
                { text: 'nike', key: "nike", value: 'nike' },
                { text: 'addidas', key: "addidas", value: 'addidaas' },
                { text: 'polo', key: "polo", value: 'polo' },
                { text: 'sumsang', key: "sumsang", value: 'sumsang' },
                { text: 'huawei', key: "huawei", value: 'huawei' }]}
              value={brand}
            /> */}
            {/* <Form.Input
              fluid
              name="category"
              // icon="lock"
              // iconPosition="left"
              placeholder="Category"
              onChange={this.handleChange}
              type="string"
              value={category}
            // error={errors.password}
            /> */}
            <input
              type="file"
              className={`inputfile`}
              id="embedpollfileinput"
              name="0"
              onChange={this.imageChangeHandler}
              required
              accept=".jpeg,.jpg,.png"
            />

            <input
              type="file"
              className="inputfile imageHide"
              id="embedpollfileinput"
              name="1"
              onChange={this.imageChangeHandler}
              disabled={images.length > 0 ? false : true}
              required
              
              accept=".jpeg,.jpg,.png"
            />
            <input
              type="file"
              className={`inputfile`}
              id="embedpollfileinput"
              name="2"
              onChange={this.imageChangeHandler}
              disabled={images.length > 1 ? false : true}
              
              accept=".jpeg,.jpg,.png"
            />
            <input
              type="file"
              className={`inputfile`}
              id="embedpollfileinput"
              name="3"
              onChange={this.imageChangeHandler}
              disabled={images.length > 2 ? false : true}

              accept=".jpeg,.jpg,.png"
            />
            <Message hidden={!success} positive floating
              header="Message"
              content={message}
            />
            <Button color="orange" fluid size="large" loading={loading}>
              Create Product
            </Button>
          </Form>
          {/* {Object.entries(errors).length > 0 && (
          <Message error>
            <h3>Error</h3>
            {errors.message}
          </Message>
        )} */}
        </Grid.Column>
      </Grid >
    );
  }
}
const mapDispatchToProps = state => {
  return {
    user: state.user
  };
};
export default connect(mapDispatchToProps)(AddProduct);
