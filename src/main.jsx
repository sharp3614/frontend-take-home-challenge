import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./store/index.jsx";
import NewsDetail from "./components/NewsDetail.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "news/:newsId",
    element: <NewsDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
