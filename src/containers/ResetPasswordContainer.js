import { connect } from 'react-redux';
import { resetPassword } from '../store/modules/auth/actions';

import ResetPassword from '../views/ResetPassword';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  onSubmit: () => dispatch(resetPassword('resetPassword'))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
