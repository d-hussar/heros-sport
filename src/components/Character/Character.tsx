import React from "react";
import { characters } from "../CharacterCreator/data";
import { equipment } from "./data";
import { useUser } from "../UserProvider";

const Character = () => {
  const { character } = useUser();
  const { characterId, equipments } = character;

  return (
    <div>
      <div className={"character-window"}>
        <img
          src={characters[characterId]}
          alt={""}
          className={"charcter-window__avatar"}
        />
        {equipments.map((item) => (
          <img
            src={equipment[item]}
            alt={""}
            className={"charcter-window__avatar"}
          />
        ))}
      </div>
    </div>
  );
};

export default Character;
