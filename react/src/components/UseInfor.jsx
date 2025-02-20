import React from "react";
class UseInfor extends React.UseInfor{
    state = {
        name: 'eric',
        address: 'ho dan it',
        age:26
      }
    handleOnChangeInput = (event) =>{
        this.setState({
            name: event.target.value
        })
    handleOnChangeAge =(event) => {
        this.setState({
            age: event.target.value
        })
    handleOnSubmit =(event) =>{
        event.prevenDefault();
        console.log(this.state)
    }    
    }
      }
    render(){
        return(
            <div>
                my name is {this.state.name} anh im {this.state.age}
                <from onsubmit={(event) => this.handleOnSubmit(event)}>
                    <label htmlFor="">your name:</label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <label htmlFor="">your age:</label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnChangeAge(event)}
                    />
                </from>
            </div>
        );
    }
 }
 export default UseInfor;