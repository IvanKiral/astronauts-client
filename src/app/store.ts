import {ThunkAction, Action, compose, createStore, applyMiddleware} from '@reduxjs/toolkit';
import thunkMiddleware, {ThunkMiddleware} from 'redux-thunk';
import {IStore, rootReducer} from './rootReducer';


const composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose

const thunkMiddlewareTyped: ThunkMiddleware<IStore, Action> = thunkMiddleware;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddlewareTyped)));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;