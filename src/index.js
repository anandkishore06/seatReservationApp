import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { appRouter } from './App';
import Section01 from "./components/Section01";
import Section02 from "./components/Section02";
import Section03 from "./components/Section03";
import Section04 from "./components/Section04";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App />
  },
  {
    path: "/section01",
    element: <Section01 />
  },
  {
    path: "/section02",
    element: <Section02 />
  },
  {
    path: "/section03",
    element: <Section03 />
  },
  {
    path: "/section04",
    element: <Section04 />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {appRouter} />
  </React.StrictMode>
);

reportWebVitals();
