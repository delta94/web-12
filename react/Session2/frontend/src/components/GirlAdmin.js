import React, { Component } from 'react';
import axios from '../axios';
import _ from 'lodash';
import { Table, Button } from 'reactstrap';

class GirlAdmin extends Component {


    componentWillMount() {
        axios.get("/api/images")
            .then(response => {
                this.setState({
                    girls: _.mapKeys(response.data, "_id")
                })

            })
            .catch(err => console.log(err));
    }

    state = {
        girls: {}
    }

    deleteGirl = (girlId) => {
        axios.delete(`/api/images/${girlId}`)
        .then(response => {
            this.setState({
                girls: _.omit(this.state.girls, girlId)
            })  
        })
        .catch(err => console.log(err))
        //1. Send DELETE request to server
        //axios.delete("/api/image/:girl")
        //2. Delete girl in State
        
    }

    editGirl = (girlId) => {
        //1. Change page or open a modal (HOMEWORK)
        // Made a callback
        const onGirlEditDone = (updatedGirl) => {
            const newGirls = {
                ...this.state.girls,
                [girlId]: updatedGirl
            }
            this.setState({
                girls: newGirls

            });
        }

        //Call Modal
        onGirlEditDone ({
            title: "New Title",
            description: "New Description",
            imageUrl: "..."
        });
    }

    render() {
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>ImageUrl</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        _.map(this.state.girls, (girl, _id) => {
                            return (
                                <tr key={_id}>
                                    <td>{girl.title}</td>
                                    <td>{girl.description}</td>
                                    <td>{girl.imageUrl}</td>
                                    <td>
                                        <Button onClick={() => this.editGirl(_id)} color="warning" size="sm" >Edit</Button>
                                        <Button onClick={() => this.deleteGirl(_id)} color="danger" size="sm">Delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        );
    }
}

export default GirlAdmin;