import React from 'react';

const resetPassword = props => {
  return (
    <div>
      <h1>Reset Password</h1>
      <button onClick={props.onSubmit}>Submit</button>
    </div>
  );
}

export default resetPassword;