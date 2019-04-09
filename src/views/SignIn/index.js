import React from 'react';

import classes from './styles.module.scss';

const signIn = props => {
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={props.onSubmit} className={classes.btnBg}>Submit</button>
    </div>
  );
}

export default signIn;