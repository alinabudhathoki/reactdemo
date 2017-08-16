import React, { Component } from 'react';

export class Home extends Component {
    constructor(props){
        super();
        this.state = {
            age: props.age
        };
    }

    MakeOlder() {
        this.setState({
            age: this.state.age + 3
        })
    }

    render() {
        return (
            <div>
                <h1>Home!!</h1>
                <p>name => {this.props.name} and age => {this.state.age}</p>
                <hr/>
                <button onClick={() => this.MakeOlder()}>Make me older</button>
                <div>
                <hr/>
                    <h2>Hobbies</h2>
                    <ul>
                        {this.props.user.hobbies.map((hobby, i) => <li key = {i}>{hobby}</li>)}
                    </ul>
                    <hr/>
                    {this.props.children}
                </div>
            </div>


        );
    }
}
