import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import UserProvider from './components/UserProvider';

import SignIn from './components/SignIn';
import Shop from './components/Shop';
import Inventory from './components/Inventory';
import Character from './components/Character';
import CharacterCreator from './components/CharacterCreator';

const Game = () => (
  <div>
    <div className="main">
      <Shop />
      <Character />
    </div>
    <Inventory />
  </div>
);

const router = createHashRouter([
  {
    path: '/',
    element: <SignIn />,
  },
  {
    path: '/create',
    element: <CharacterCreator />,
  },
  {
    path: '/main',
    element: <Game />,
  },
]);

const rootElement = document.getElementById('root') as any;
ReactDOM.createRoot(rootElement).render(
  <App>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </App>,
);
