import * as React from 'react';
import { connect, Provider } from "react-redux";
import { Action, createStore, Dispatch } from "redux";

// Define ADD_LINK const and its type
const ADD_LINK = 'ADD_LINK';
type ADD_LINK = typeof ADD_LINK;

// Define how AddLinkAction should look like
interface AddLinkAction extends Action {
  type: ADD_LINK;
  link: {
    title: string,
    url: string,
    id: number
  };
}

// Define CLEAR_LINK const and its type
const CLEAR_LINK = 'CLEAR_LINK';
type CLEAR_LINK = typeof CLEAR_LINK;

// Define ClearLinkAction. No additional information is needed
interface ClearLinkAction extends Action {
  type: CLEAR_LINK;
  id: number
}

// Collection of both for easier integration
type LinkActions = AddLinkAction | ClearLinkAction;

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
          console.log(state.links)
          let newLinks = state.links;
          let removed=newLinks.splice(index,1)
          console.log(removed,newLinks)
          return {links:[...newLinks]}
      } 

      // return {
      //   links: state.links.map((each)=>{
      //     if (each.id!==action.id){
      //       return each
      //     } else {return }
      //   }) // Reset the link
      // }
    default:
      return state; // Do not change the state in case of any other actions
  }
  
};

const store = createStore<any,any,any,any>(rootReducer);

interface LinkListProps {
  links: {
    title: string,
    url: string,
    id: number,
  }[],
  addLink: () => void, // Add a new mapped prop
  clearLink: (id:number) => void// Add a new mapped prop
}



const PureLinkList = (props: LinkListProps) => {
  return (
    <div>
      <button onClick={props.addLink}>New Link</button> 
      {props.links && props.links.map((l) => (
        <div key={l.id}>
        {l.id} {l.title} - {l.url}
        <button onClick={()=>props.clearLink(l.id)}>Clear</button>
        </div>
        
      ))}
    </div>
  );
}

interface UserListProps {
 
  users: {
    name: string,
    age: number
  }[]
}

const PureUserList = (props: UserListProps) => {
  return (
    <div>
      {props.users && props.users.map(l => (
        <div>{l.name} : {l.age}</div>
      ))}
    </div>
  );
}


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
