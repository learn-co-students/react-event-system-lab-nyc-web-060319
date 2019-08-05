import React, {Component} from 'react';


export default class Keypad extends Component{
    inputPassword = function(){
        console.log('Entering password...')
     }
    
    // inputPassword = () => console.log('Entering password...')
   
    render(){
       return(
           <div>
               <input type="password"
               onKeyUp={this.inputPassword}/>
           </div>
       )
   }
}
