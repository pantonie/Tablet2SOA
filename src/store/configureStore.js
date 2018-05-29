import { applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import initialState from './InitialState';

export default function configureStore(){
    let store = createStore(rootReducer, initialState, applyMiddleware(thunk));
    return store;
}
