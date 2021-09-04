import React, { Component } from 'react'

 class LightSwitch extends Component 
{
    constructor()
    {
        super();
        this.state = 
            {
                toggled: false,
            };
    }

      

     handleClick = () => 
     {
         this.setState((previousState) => 
            {
             return {
                 toggled: !previousState.toggled
                    };
            }
            );
     };

   
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>{this.state.toggled ? "On" : "Off"} </button>
            </div>
        )
    }
}

export default LightSwitch