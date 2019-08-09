import React, { Component } from 'react'
import { Table } from 'semantic-ui-react';
import axios from '../../axios';
import { connect } from 'react-redux';
class Myorder extends Component {
    state = {
        myorder: []
    }
    componentDidMount() {
        const headers = { Authorization: this.props.user.token };
        axios.get(`/api/product/myorder/${this.props.user._id}`, { headers })
            .then(res => {
                this.setState({ myorder: res.data.myorder })

            })
    }
    render() {
        const { myorder } = this.state;
        console.log(myorder);
        const displayMyOrder = Boolean(myorder) && myorder.map(order => {
            return (
                <Table.Row key={order._id} >
                    <Table.Cell>{order.name}</Table.Cell>
                    <Table.Cell>{order.price}</Table.Cell>
                    <Table.Cell>{order.desription}</Table.Cell>
                </Table.Row>
            )
        })
        return (
            <div>
                <Table color="black" >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>name</Table.HeaderCell>
                            <Table.HeaderCell>price</Table.HeaderCell>
                            <Table.HeaderCell>discription</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {displayMyOrder}
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};
export default connect(mapStateToProps)(Myorder);