import React, { Component } from "react";
import Auth from "../components/Auth";
import Main from "../components/Main";

export default class Home extends Component {


    constructor(props) {
        super(props);
        this.state = {
            auth: false
        }

        this.authenticate = this.authenticate.bind(this);
    }

    authenticate(el) {
        this.setState({
            auth: el
        })
    }

    render() {
        return (
            <main>
                { this.state.auth ? 
                    <Main />
                    :
                    <Auth authenticate={this.authenticate} />
                }
            </main>
        );
    }
}