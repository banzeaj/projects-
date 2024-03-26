import React from 'react'

export const User = (props) => {
    const  count =50;
    const {name,age} =props;
  return (
    <div>
        <h1>{name}</h1>
        <p>{age}</p>
        <h2>{count}</h2>
    </div>
  )
}

export default User; 