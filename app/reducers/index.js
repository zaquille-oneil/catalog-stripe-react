//reducers manage state and share it with the rest of the app
import { combineReducers } from 'redux';
import products from './products';
export default combineReducers({
   products
})
