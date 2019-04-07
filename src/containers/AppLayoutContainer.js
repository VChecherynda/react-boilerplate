import { connect } from 'react-redux';
import AppLayout from '../views/AppLayout';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
