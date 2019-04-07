import { connect } from 'react-redux';
import { signUp } from '../store/modules/auth/actions';

import SignUp from '../views/SignUp';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  onSubmit: () => dispatch(signUp('signUp'))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
