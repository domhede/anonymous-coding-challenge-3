import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchProperties } from 'data/actions/propertyActions';

import App from './component';


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    fetchProperties
  }, dispatch)
});

export default connect(null, mapDispatchToProps)(App);