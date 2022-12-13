import { applyMiddleware, combineReducers,legacy_createStore as createStore, compose  } from 'redux';
import profile_reducer from './profile-reducer';
import dialogs_reducer from './dialogs-reducer';
import users_reducer from './users-reducer';
import auth_reducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    profileInfo: profile_reducer,
    dialog: dialogs_reducer,
    usersPage: users_reducer,
    auth: auth_reducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers( compose(applyMiddleware(thunkMiddleware)
  )));

// let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;