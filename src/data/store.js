import { createStore, compose } from 'redux';
import reducers from './reducers';


const createStoreWithDevToolsExtension = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export default createStoreWithDevToolsExtension(reducers);