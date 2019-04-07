import React from 'react';

const signIn = props => {
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={props.onSubmit}>Submit</button>
    </div>
  );
}

export default signIn;