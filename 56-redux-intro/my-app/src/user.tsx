import * as React from 'react';

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

  export default PureUserList;