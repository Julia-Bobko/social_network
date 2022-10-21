import { combineReducers,legacy_createStore as createStore  } from 'redux';
import profile_reducer from './profile-reducer';
import dialogs_reducer from './dialogs-reducer';


let reducers = combineReducers({
    profileInfo: profile_reducer,
    dialog: dialogs_reducer
});

let store = createStore(reducers);

export default store;