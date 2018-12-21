import React, { Component } from 'react';
import { Input, List, Label, Button} from 'semantic-ui-react';

class Links extends Component {
    constructor(props){
        super(props);
        this.state={ 
            list:this.props.list,
            taglist:this.props.list,
            message:'No links yet!'
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.list !== this.state.list) {
          this.setState({ list:nextProps.list, taglist: nextProps.list });
        }
      }

    tag = (tagName) =>{
        let newList=this.state.list.filter((each)=>{
            return (each.tags.indexOf(tagName) >= 0);
          })
        this.setState({
        taglist: newList
        })
        
    }

    removeTag=()=>{
        this.setState({
            taglist:this.props.list
        })
    }

    search=(e)=>{
        let name=this.state.list.map((each)=>{
            return each.name
        })
        let filter = e.target.value.toUpperCase();

        let list = this.state.list;

        if(e.target.value!=null && e.target.value!=='') {
            for (let i = 0; i < name.length; i++) {
               if (name[i].toUpperCase().indexOf(filter) <0){
                    list = list.filter((each)=>{return each.name!==name[i]})
                }
            } 
        }else if(e.target.value==null && e.target.value===''){
            this.setState({
                taglist:this.props.list,
            })
        }
      
        this.setState({
            taglist:list,
            message:'No matching links!'
        })
        
    }

    render(){
        

        let newList=this.state.taglist.length ? this.state.taglist.map((each)=>{
            let tagList=each.tags.map((each)=>{
                return(
                    <Label as='a' key={each} onClick={(e)=>this.tag(each)}>{each} </Label>
                )
            })
    
            return(
                <List.Item key={each.id}>
                <List.Content>
                    <List.Header  style={{'margin':'10px 0 10px 0'}}><a href={each.link} target="_blank" rel="noopener noreferrer">{each.name}</a></List.Header>
                    <List.Description >
                    {tagList}
                    </List.Description>
                </List.Content>
                </List.Item>
            )
        }) : this.state.message;


        return(
            <div className="links">
      
            <div className="d-flex justify-content-end">
            <Input icon='search' placeholder='Search...' onChange={this.search}/>
            </div>

            <h2>Links</h2>
            
            <div className="d-flex justify-content-end">
                <Button color='olive' onClick={this.removeTag} >Remove Tags</Button>
            </div>
              
            <List divided relaxed>
                {newList}
            </List>

   
            </div>
        )
    }
}

export default Links;