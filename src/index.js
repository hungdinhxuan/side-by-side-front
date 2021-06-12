import React  from "react";
import ReactDOM from "react-dom";
import '@progress/kendo-theme-default/dist/all.css';
import "./Styles";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//Setup redux
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./Redux/Reducers/index";

const middleware = applyMiddleware(thunk);
const enhance = compose(
  middleware,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer,enhance);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
