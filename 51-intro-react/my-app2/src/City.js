import React, {Component} from 'react';

class City extends Component{

    constructor() {
        super();
        this.like = this.like.bind(this);
      }

      like(id) {
       
        this.props.add(id);
      }

      dislike(id){
      
        this.props.cancel(id);
      }
    

    render(){
        let attraction=this.props.attraction;
        let newList = attraction.map((each)=>{
            if (each.bookmark===true){
                return(
                    <div className="col-4 card" key={each.id}>
                        <h5>{each.name} <i className="fas fa-heart" onClick={(e)=>this.dislike(each.id)}></i></h5>
                        
                    </div>
                )
                
            }else{
                return(
                    <div className="col-4 card"  key={each.id}>
                        <h5>{each.name} <i className="far fa-heart" onClick={(e)=>this.like(each.id)}></i></h5>
                        
                    </div>
                )
            }
        })
        return(
            <div className="city">
            <h1>Attraction</h1>
            <p>Click on the hearts to bookmark the attraction</p>
            <div className="row">
            {newList}
            </div>
            </div>
        )
    }

}

export default City;