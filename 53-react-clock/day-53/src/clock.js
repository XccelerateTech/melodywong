import React, { Component } from 'react';

class Clock extends Component {
    constructor(props){
        super(props);
        this.state={
            date: null,
        }
    

    }

    componentDidMount(){
        this.timeID=setInterval(
            ()=>this.tick(),
            1000
        );
    }

    componentWillMount(){
        this.setState({
            date: "Wowwww"
        })
        clearInterval(this.timerID)
    }

    tick(){
        this.setState({
            date: new Date().toLocaleTimeString()
        })
    }

    render(){

        return(
            <div>
                <p> Hello clock. </p>
                {this.state.date}

            </div>
        )

    }


}

export default Clock;