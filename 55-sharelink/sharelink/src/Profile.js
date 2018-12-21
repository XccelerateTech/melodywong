import React, { Component } from 'react';
import faker from 'faker';
import {Button, Modal, Form} from 'semantic-ui-react'

class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
           number: this.props.number,
           open: false,
           name: null,
           link: null,
           tags: []
        }
    }

    show = dimmer => (e) => {
        e.preventDefault();
        this.setState({ dimmer, open: true })
    }

    close = (e) => {
        e.preventDefault();
        this.setState({ open: false })
    }

    handleChange =(e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleTag =(e) =>{
        this.setState({
            tags: e.target.value.split(' ')
        })
    }

    add = (e) =>{
        let object={
            id: Math.random(),
            name: this.state.name,
            link: this.state.link,
            tags: this.state.tags
        }
        this.props.add(object);
        this.setState({ open: false });
    }

    render(){
        const { open, dimmer } = this.state
        const length=this.props.list.length

        
        return(
            <div className="profile">
            
            <img src={faker.image.avatar()} alt="avatar"/>
            <h3>King of JS</h3>
            <p>Number of links: {length}</p>

          
            <Button color='olive' onClick={this.show('inverted')} >Add a link</Button>
        

            <Modal dimmer={dimmer} open={open} onClose={this.close}>
            <Modal.Header>Add a link</Modal.Header>
            <Modal.Content>
               
                <Modal.Description>
                <Form>
                <Form.Field>
                    <label>Name of link</label>
                    <input placeholder='e.g. Google' name="name" onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <label>Website link</label>
                    <input placeholder='e.g. https://www.google.com' name="link" onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <label>Tags (seperate with a space)</label>
                    <input placeholder='e.g. search news' onChange={this.handleTag}/>
                </Form.Field>
                </Form>
                
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={this.close}>Cancel</Button>
                <Button color='green' onClick={this.add}>Add</Button>
                
            </Modal.Actions>
            </Modal>
   

            </div>
        )
    }
}

export default Profile;