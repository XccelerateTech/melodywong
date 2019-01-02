import { Action} from "redux";
import * as React from 'react';

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

  export {LinkActions, ADD_LINK, CLEAR_LINK, PureLinkList} ;