import { combineReducers}from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import auth from './auth';
import messages from './messages';
import users from './users';
import shopReducer from './shopping';


const persistConfig = {
  key: 'woozadmin',
  storage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({
  auth,
  messages,
  users,
  toastr: toastrReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer)

