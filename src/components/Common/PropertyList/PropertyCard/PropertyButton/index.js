import { connect } from 'react-redux';
import PropertyButton from './component';
import { bindActionCreators } from 'redux';

import { saveProperty, removeProperty } from 'data/actions/propertyActions';

const mapDispatchToProps = dispatch => (
   bindActionCreators({
      saveProperty,
      removeProperty
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(PropertyButton);