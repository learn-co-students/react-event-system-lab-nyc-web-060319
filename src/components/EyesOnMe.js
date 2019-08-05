import React, {Component} from 'react';

export default class EyesOnMe extends Component{
    onBlur = function(){
        console.log('Hey! Eyes on me!')  
    }

    onFocus = function(){
        console.log('Good!')
    }

    render(){
        return <button onFocus={this.onFocus} onBlur={this.onBlur}></button>
    }
}
