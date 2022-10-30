import React, { Component } from "react";

import "./../style/auth.css";

export default class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authCode: "",
            acceptCode: "MK58"
        }
    }

    forceMax(e) {
        const val = e.target.value.slice(0, 4);
        this.setState({
            ...this.state,
            authCode: val
        });
    }

    authenticateUser() {
        console.log(this.state);
        this.props.authenticate(this.state.authCode.toUpperCase() == this.state.acceptCode.toUpperCase());
    }

    render = () => 
        <div className="flex bg-slate-300 justify-center items-center fixed left-0 top-0 w-full h-full">
            <div className="bg-white m-5 p-5 rounded-lg flex flex-col justify-center items-center">
                <input placeholder="----" className="text-3xl flex text-center tracking-widest border-none outline-none mb-5 uppercase" onChange={(e) => this.forceMax(e)} value={this.state.authCode} />
                <button className="bg-green-400 text-white font-semibold uppercase p-2 px-10 rounded-lg hover:bg-green-600 transition-all" onClick={(e) => this.authenticateUser()}>Authenticate</button>
            </div>
        </div>
}