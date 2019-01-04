import React, { Component } from 'react';
import {connect} from 'react-redux';
import {clear,loadLink} from './Action/links'

class loadLinks extends Component {
    constructor(props){
        super(props);
        this.state={
            links:this.props.links,
        }

    }

    load = () => {
        this.props.load()
    }

    clear = () => {
        this.props.clear()
    }

      
    render(){
        let links= this.props.links.links.map((each)=>{
            return (
                <li key={each.id} >{each.title} - {each.url}</li>
            )
        })

        return(
            <div>
                <h5>Links</h5>
                <button onClick={this.load}>Load</button>
                <button onClick={this.clear}>Clear</button>
                {links}

            

            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        links: state.links
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        load: ()=>dispatch(loadLink()),
        clear: ()=>dispatch(clear())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(loadLinks);