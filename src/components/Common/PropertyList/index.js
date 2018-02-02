import { connect } from 'react-redux';
import PropertyList from './component';

const mapStateToProps = (state, {listType}) => ({
  properties: state.properties[listType]
});

export default connect(mapStateToProps, null)(PropertyList);