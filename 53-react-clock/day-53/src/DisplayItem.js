import React from 'react';
import {withRouter} from 'react-router-dom'

const DisplayItem = ({match}) =>{
    return(
        <div>
            The item will be displayed here {match.params.id}
        </div>
    )
}

export default withRouter(DisplayItem);