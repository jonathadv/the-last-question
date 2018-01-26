import React, { Component } from 'react';
import countdown from './countdownjs.org/countdown.min.js';

class Countdown extends Component {

    constructor(props){
        super(props);

        this.state = {
            time: this.getDateString()
        };
    }

    componentDidMount() {
        this.timerId = setInterval(()=>{this.updateState()}, 1000);
    }


    getDateString(){
        return countdown(this.props.targetDate).toString();
    }

    updateState() {
        this.setState({time: this.getDateString()})
    }

    render() {
        return (
            <p className="counter">
                {this.state.time}
            </p>
        );
    }
}

export default Countdown;
