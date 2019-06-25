import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from '../../axios';
// import { Link } from "react-router-dom";
import uuid from 'uuid';
import mime from 'mime-types';
import firebase from '../../firebase';
import {
    Grid,
    Button,
    Form,
    Header,
    Message,
    Icon,
} from "semantic-ui-react";

class AddProduct extends Component {
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
        storageRef: firebase.storage().ref(),
        loading: false,
        user: this.props.currentUser,
        errors: [],
        modal: false,
        uploadState: '',
        uploadTask: null,
        percentUploaded: 0,



        file: null,
        authorized: ['image/jpeg', 'image/png']
    };
    componentDidMount() {
        document.title += '! create Product';
        const headers = localStorage.getItem('token').split(' ')[1];
        console.log(headers);
    }

    uploadFile = (file, metadata, i) => {
        this.setState({ image: file })
        const { imagespath } = this.state;
        const u = uuid();
        console.log(u);
        if (u) {
            console.log('yes u')
            imagespath[i] = u
            console.log(imagespath)
            this.setState({ imagespath })
        }

        const filePath = `products/${u}.jpg`;
        this.setState({
            uploadState: 'uploading',
            uploadTask: this.state.storageRef.child(filePath).put(file, metadata)
        },
            () => {
                this.state.uploadTask.on('state_changed', snap => {
                    const percentUploaded = Math.round((snap.bytesTransferred / snap.totalBytes) * 100)
                    this.setState({ percentUploaded });
                },
                    err => {
                        console.error(err);
                        this.setState({
                            errors: this.state.errors.concat(err),
                            uploadState: 'error',
                            uploadState: null

                        })
                    }
                    ,
                    async () => {
                        try {
                            const downloadUrl = await this.state.uploadTask.snapshot.ref.getDownloadURL()
                            console.log(downloadUrl)
                        }
                        catch (err) {
                            this.setState({
                                errors: this.state.errors.concat(err),
                                uploadState: 'error',
                                uploadTask: null

                            })
                        }
                    }
                )
            },
        )
    }

    handleChange = evt => {
        this.setState({ [evt.target.name]: evt.target.value });
    };

    imageChangeHandler = (evt) => {
        const { images } = this.state;
        const file = evt.target.files[0];
        const metadata = { contentType: mime.lookup(file.name) }
        images[Number(evt.target.name)] = file;
        this.setState({ images })
    }
    handleSubmit = () => {


        const { name, desription, price, category, subcategory, images, imagespath } = this.state;
        images.forEach((file, i) => {
            const metadata = { contentType: mime.lookup(file.name) }
            this.uploadFile(file, metadata, i);
        })
        const token = localStorage.getItem('token');
        const headers={Authorization:token}
        axios.post('/api/product/create', { name, price, desription, category, subcategory, imagespath }, { headers })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log('err=>>>', err)
            })
       
    }


    render() {
        const {
            name,
            desription,
            price,
            category,
            subcategory,
            errors,
            loading
        } = this.state;
        return (
            <Grid container textAlign="center" container>
                <Grid.Column computer={8} mobile={16} tablet={10} >

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
                        <input type="file" className="inputfile" id="embedpollfileinput" name="0" onChange={this.imageChangeHandler} />
                        <input type="file" className="inputfile" id="embedpollfileinput" name="1" onChange={this.imageChangeHandler} />
                        <input type="file" className="inputfile" id="embedpollfileinput" name="2" onChange={this.imageChangeHandler} />
                        <input type="file" className="inputfile" id="embedpollfileinput" name="3" onChange={this.imageChangeHandler} />

                        <Button color="orange" fluid size="large" loading={loading}>
                            Create Product
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
        )
    }
}
const mapDispatchToProps = (state) => {
    return {
        user: state.user.user
    }
}
export default connect(mapDispatchToProps)(AddProduct);