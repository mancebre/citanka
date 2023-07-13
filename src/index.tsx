import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";
import './index.css';
import App from "./App";
import PlainTextConvert from "./contexts/PlainTextConvert/PlainTextConvert";

const router = createBrowserRouter([
    {
        path: "/randomStory",
        element: <App />,
        errorElement: <ErrorPage />,
        // loader: rootLoader,
    },
    {
        path: "/",
        element: <PlainTextConvert />,
        errorElement: <ErrorPage />,
        // loader: rootLoader,
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

