import React from 'react';
import faker from 'faker';

const commentcard = (props) => {
    return(
        <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={faker.image.avatar()} alt="faker"></img>
            <div className="card-body">
            <h3 className="card-title">{props.author}</h3>
            <div>
                <p className="card-text">Today at {props.date}</p>
                <p className="card-text">{props.comment}</p>
            </div>
            </div>

        </div>
    )
}

export default commentcard;