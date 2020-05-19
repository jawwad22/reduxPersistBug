import { createStore, combineReducers, applyMiddleware } from 'redux'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { persistStore, persistReducer } from 'redux-persist'
import { AsyncStorage } from 'react-native';
import ReduxThunk from 'redux-thunk';
import testReducer from './reducers/test';

const rootReducer = combineReducers({
  test: testReducer
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(
    persistedReducer,
    applyMiddleware(ReduxThunk)
  );
  let persistor = persistStore(store)

  return { store, persistor }
}
