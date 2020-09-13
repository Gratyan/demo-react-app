import React, { Component } from 'react';
// import Task from './Task'



class ToDo extends Component {
    state = {
        
        tasks: [
            {value: '',
            showValue: ''},
        ]
    };
    
    handleChange = (event) => {
        this.setState({value: event.target.value})
    };
    handleClick = () => {
        this.setState({showValue: this.state.value})
    };
    render() {
        let {showValue} = this.state;
        // let tasks = this.state.tasks.map((item, index) => <p key={index}> tasks: {item, showValue}</p>);
        

        return (
            <div>
                <input type="text" onChange={this.handleChange} />
                <button onClick={this.handleClick}>Add</button>
                <p>{showValue}</p>

            </div>
        )
    }
}

export default ToDo