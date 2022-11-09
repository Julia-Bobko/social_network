import { combineReducers,legacy_createStore as createStore  } from 'redux';
import profile_reducer from './profile-reducer';
import dialogs_reducer from './dialogs-reducer';
import users_reducer from './users-reducer';
import auth_reducer from './auth-reducer'

let reducers = combineReducers({
    profileInfo: profile_reducer,
    dialog: dialogs_reducer,
    usersPage: users_reducer,
    auth: auth_reducer
});

let store = createStore(reducers);

export default store;