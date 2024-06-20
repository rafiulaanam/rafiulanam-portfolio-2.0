import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from '../redux/features/auth/authSlice';
import projectReducer from './features/project/projectSlice';
import blogReducer from './features/blog/blogSlice';
import paginationReducer from '../redux/features/pagination/paginationSlice';
import { persistReducer, persistStore } from 'redux-persist';
import { baseApi } from './api/baseApi';
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem(_key:any) {
      return Promise.resolve(null);
    },
    setItem(_key:any, value:any) {
      return Promise.resolve(value);
    },
    removeItem(_key:any) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  auth: authReducer,
  project:projectReducer,
  blog:blogReducer,
  pagination:paginationReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
    .concat(baseApi.middleware),
});

export const persistor = persistStore(store);

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']