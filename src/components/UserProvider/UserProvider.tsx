import React, { createContext, useContext, useState } from "react";

const UserContext = createContext({} as any);

export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const login = localStorage.getItem("login");
  const [userId, setUserId] = useState(
    JSON.parse(login as string) || undefined,
  );
  const [character, setCharacter] = useState(
    JSON.parse(localStorage.getItem(JSON.stringify(userId)) as string) ||
      undefined,
  );

  const setLogin = (login) => {
    setUserId(login);
    localStorage.setItem("login", JSON.stringify(login));
  };
  const setPlayer = (characterId) => {
    localStorage.setItem(
      JSON.stringify(userId),
      JSON.stringify({
        characterId,
        equipments: [],
      }),
    );
    setCharacter({
      characterId,
      equipments: [],
    });
  };
  const setEquipments = (item) => {
    localStorage.setItem(
      JSON.stringify(userId),
      JSON.stringify({
        ...character,
        equipments: [...character.equipments, item],
      }),
    );
    setCharacter({
      ...character,
      equipments: [...character.equipments, item],
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
