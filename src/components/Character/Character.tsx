import React from "react";
import { useState } from "react";
import { characters } from "../CharacterCreator/data";
import { equipment } from "./data";

const Character = () => {
  const login = localStorage.getItem("login") as string;
  const character = JSON.parse(
    localStorage.getItem(JSON.parse(login)) as string,
  );
  const { characterId, equipments } = character;

  return (
    <div>
      <div className={"character-window"}>
        <img
          src={characters[characterId]}
          alt={""}
          className={"charcter-window__avatar"}
        />
        {equipments?.length > 0 ? (
          <img
            src={equipment[equipments[0]]}
            alt={""}
            className={"charcter-window__avatar"}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Character;
