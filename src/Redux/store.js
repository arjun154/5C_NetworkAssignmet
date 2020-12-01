import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import repoReducers from "./Repos/reducers";
import followersReducers from "./Followers/reducers";

const rootReducer = combineReducers({
  repo: repoReducers,
  follower: followersReducers,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
