const initState = {
    links: [
        {id:1, title:'Yahoo', url: 'yahoo.com'},
        {id:2, title:'Google', url: 'google.com'},
    ]
}

const linksReducer = (state = initState , action) => {
    if (action.type==='LOAD_LINK_SUCCESS'){
        return ({

            links: action.links
        })
    }else if(action.type==='LOAD_LINK_FAILURE'){
        return ({
            links:[]
        })

    }else if(action.type==='CLEAR'){
        return ({
            links:[]
        })

    }else{
        return state
    }
    
    
}

export default linksReducer;