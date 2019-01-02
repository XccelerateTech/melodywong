import {ADD_LINK, CLEAR_LINK, LinkActions, PureLinkList} from './linkList';
import * as React from 'react';
import { connect, Provider } from "react-redux";
import {createStore, Dispatch } from "redux";
import PureUserList from './user'



interface IRootState {
  links: {
    title: string,
    url: string,
    id: number
  }[],
  users: {
    name: string,
    age: number
  }[]
}

const rootReducer = (state: IRootState, action: LinkActions) => {
  switch (action.type) {
    case ADD_LINK:
      if(!state){
        return {
          links:[action.link] // Use concat to add a new link
        }
      }else{
        return {
          links: state.links.concat([action.link]) // Use concat to add a new link
        }

      }
      
    case CLEAR_LINK:

      let index;
      for (let i = 0; i < state.links.length; i++) {
          if(state.links[i].id === action.id) {
           
              index = i;
              /* tslint:disable */
               console.log(index)
              
              break;
              
          }
      }
      if (index || index===0) {
          let newLinks = state.links;
          let removed=newLinks.splice(index,1)
          console.log(removed)
          return {links:[...newLinks]}
      } 

    default:
      return state; // Do not change the state in case of any other actions
  }
  
};

const store = createStore<any,any,any,any>(rootReducer);


const mapStateToProps = (state: IRootState) => {
  if (!state){
    return null
  }else{
    return {
      links: state.links,
      users: state.users
    }

  }
}

let todoCounter = 1;
const mapDispatchToProps = (dispatch: Dispatch<LinkActions>) => {
   
  return {
    addLink: () => dispatch({
      type: ADD_LINK,
      link: {
        title: 'Accelerate',
        url: 'http://www.acceleratedhk.com',
        id: todoCounter++,
    
      }
    }),
    clearLink: (id:number) => dispatch({
      type: CLEAR_LINK,
      id
    })
  }
}


const LinkList = connect(mapStateToProps, mapDispatchToProps)(PureLinkList)
const UserList = connect(mapStateToProps)(PureUserList)


const App = () => (
  <Provider store={store}>
    <div>
      <h2>Links</h2>
  
      <LinkList /> 

      {/* Exercise 1 */}
      <UserList />
    </div>
  </Provider>
);

export default App;
