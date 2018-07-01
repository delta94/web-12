import React, { Component } from 'react';
import axios from "../axios";

import NavBar from "../components/NavBar";
import MainContent from '../components/MainContent';

class HomeScreen extends Component {

    state = {
        displayedImages: []
    };

    // Điểm mạnh lớn nhất của React là các component có thể xử lý logic tốt hơn so với html
    // state, props
    // state: biến thuộc về từng component 
    componentDidMount() { // khi web dựng tự động gửi request
        axios
            .get("/api/images")
            .then(response => this.setState({ displayedImages: response.data }))
            .catch(err => console.error(err));
    }
    render() {
        return (
            <div className="App">
                <NavBar />
                <MainContent images={this.state.displayedImages} />
            </div>
        );
    }
}

export default HomeScreen;