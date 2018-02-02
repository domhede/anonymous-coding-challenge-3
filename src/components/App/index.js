import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchProperties, fetchSavedProperties } from 'data/actions/propertyActions';

import App from './component';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    fetchProperties,
    fetchSavedProperties
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(App);