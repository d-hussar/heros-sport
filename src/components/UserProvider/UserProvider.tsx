import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext({} as any);

export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const login = localStorage.getItem('login');
  const [userId, setUserId] = useState(
    JSON.parse(login as string) || undefined,
  );
  const [character, setCharacter] = useState(
    JSON.parse(localStorage.getItem(JSON.stringify(userId)) as string) ||
      undefined,
  );

  const setLogin = (login) => {
    setUserId(login);
    localStorage.setItem('login', JSON.stringify(login));
  };
  const setPlayer = (characterId) => {
    localStorage.setItem(
      JSON.stringify(userId),
      JSON.stringify({
        characterId,
        equipments: {
          primary: {
            legs: null,
            breast: null,
            shoulders: null,
            hands: null,
            head: null,
            weapon: null,
            shield: null,
          },
          secondary: {
            shoulders: null,
            hands: null,
          },
        },
      }),
    );
    setCharacter({
      characterId,
      equipments: {
        primary: {
          legs: null,
          breast: null,
          shoulders: null,
          hands: null,
          head: null,
          weapon: null,
          shield: null,
        },
        secondary: {
          shoulders: null,
          hands: null,
        },
      },
    });
  };
  const setEquipments = (item, type) => {
    const items = {
      ...character.equipments,
    };
    if (type !== 'shield') {
      items.primary[type] = item;
    }
    if (type === 'hands' || type === 'shoulders' || type === 'shield') {
      console.log(type, item);
      items.secondary[type] = item;
    }
    console.log(items);

    localStorage.setItem(
      JSON.stringify(userId),
      JSON.stringify({
        ...character,
        equipments: items,
      }),
    );
    setCharacter({
      ...character,
      equipments: items,
    });
  };

  return (
    <UserContext.Provider
      value={{
        userId,
        setUserId: setLogin,
        character,
        setCharacter: setPlayer,
        setEquipments,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
