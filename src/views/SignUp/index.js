import React from 'react';

const signUp = props => {
  return (
    <div>
      <h1>Sign Up</h1>
      <button onClick={props.onSubmit}>Submit</button>
    </div>
  );
}

export default signUp;