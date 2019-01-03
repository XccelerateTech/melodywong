const initState = {
    list: [
        {id:1, item: 'Shampoo'},
        {id:2, item: 'Apple'}
    ]
}

const listReducer = (state = initState , action) => {
    if(action.type==="DELETE"){
        let newList= state.list.filter((each)=>{
            return each.id!==action.id
        })
        return{
            ...state,
            list: newList
        }
    }else if(action.type==="ADD"){
        return {
            ...state,
            list: [...state.list,action.item.item]
        }
    }else{
        return state
    }
    
}

export default listReducer;