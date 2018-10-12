import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducer from './reducers/reducer';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
    numbers: reducer
    });
    
const configStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk))
}

export default configStore;