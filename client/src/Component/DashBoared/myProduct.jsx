import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, TransitionablePortal, Segment, Icon, Image, Button, Header, Modal } from 'semantic-ui-react';
import axios from '../../axios';


class MyProduct extends Component {
    state = {
        products: [],
        message: '',
        open: false,
        openModal: false,
        animation: 'fade'
    }
    componentDidMount() {
        const headers = { Authorization: this.props.user.token }
        axios.get(`/api/product/myproduct/123123`, { headers })
            .then(res => {
                this.setState({ products: res.data.products })
            })
            .catch(err => console.log('nothing'))
    }
    DeleteHandler = (id) => {
        const headers = { Authorization: this.props.user.token }
        axios.delete(`/api/product/${id}`, { headers })
            .then(res => {
                this.setState({ message: res.data.message, open: true })
                const products = this.state.products.filter((p) => {
                    return p._id != id;
                })
                this.setState({ products })
                setTimeout(() => {
                    this.setState({ message: '', open: false })
                }, 2500);
                console.log(res.data)

            })
    }
    // show = () => this.setState({ openModal: true })
    // close = () => this.setState({ openModal: false })
    render() {
        const { products, open, message, openModal } = this.state;
        const displayProducts = products.map(product => {
            return (
                <React.Fragment key={product._id}>
                    <TransitionablePortal open={open}>
                        <Segment style={{ left: '45%', position: 'fixed', top: '0%', zIndex: 1000, width: "15%", backgroundColor: "gainsboro", textAlign: "center" }} >
                            <Header>Message</Header>
                            <p>{message}</p>
                        </Segment>
                    </TransitionablePortal>
                    <Card>
                        <Card.Content>
                            <Image floated='right' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
                            <Card.Header>{product.name}</Card.Header>
                            <Card.Meta>{product.category}</Card.Meta>
                            <Card.Description>
                                {product.description}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                                    <Button basic color='green'>
                                <Link to={`/edit/${product._id}`}>
                                        Edit
                                </Link>
                                    </Button>
                                <Button basic color='red' onClick={() => this.DeleteHandler(product._id)}>
                                    Delete
                                </Button>
                            </div>
                        </Card.Content>
                    </Card>
                </React.Fragment>
            )
        })
        return (
            <div>
                <Card.Group>
                    {displayProducts}
                </Card.Group>
            </div>
        )
    }
}
const mapDispatchToProps = (state) => {
    return {
        user: state.user.user
    }
}
export default connect(mapDispatchToProps)(MyProduct);