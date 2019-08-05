// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {
    render() {
        return (
            <button onFocus={_ => console.log('Good!')}
                onBlur={_ => console.log('Hey! Eyes on me!')}>

            </button>
        );
    }
}

