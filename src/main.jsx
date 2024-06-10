import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/globals.css";
import "./styles/App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Provider from "./context/myState";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);







// import React, { createContext, useState } from "react";
// import ReactDOM from "react-dom";
// import App from "./App.jsx";
// import "./App.css";
// import "./globals.css";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from "react-toastify";

// export const Context = createContext({ isAuthenticated: false });

// // const AppWrapper = () => {
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);
// //   const [admin, setAdmin] = useState({});

// //   return (
// //     <Context.Provider
// //       value={{ isAuthenticated, setIsAuthenticated, admin, setAdmin }}
// //     >
// //       <App />
// //       <ToastContainer />
// //     </Context.Provider>
// //   );
// // };

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <Provider store={store}> */}
//     <App />
//     {/* </Provider> */}
//     <ToastContainer />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
