import React, { Component } from 'react';

class Clock extends Component {
    constructor(props){
        super(props);
        this.state={
            date: null,
        }
    

    }

    jump=()=>{
        this.props.history.push('/displayitem/2')
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
                <button onClick={this.jump}> Jump </button>

             

            </div>
        )

    }


}

export default Clock;