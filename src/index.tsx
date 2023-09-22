import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import SignIn from "./components/SignIn";
import Shop from "./components/Shop";
import Character from "./components/Character";
import CharacterCreator from "./components/CharacterCreator";

const Game = () => (
  <App>
    <div className="main">
      <Shop />
      <Character />
    </div>
  </App>
);

const router = createHashRouter([
  {
    path: "/",
    element: (
      <App>
        <SignIn />
      </App>
    ),
  },
  {
    path: "/create",
    element: (
      <App>
        <CharacterCreator />
      </App>
    ),
  },
  {
    path: "/main",
    element: <Game />,
  },
]);

const rootElement = document.getElementById("root") as any;
ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
