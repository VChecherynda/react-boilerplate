import { connect } from 'react-redux';
import { signIn } from '../store/modules/auth/actions';

import SignIn from '../views/SignIn';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  onSubmit: () => dispatch(signIn(true))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
