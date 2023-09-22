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
  const [update, setUpdate] = useState(false);

  const buy = () => {
    localStorage.setItem(
      JSON.parse(login),
      JSON.stringify({
        characterId,
        equipments: ["boots"],
      }),
    );
    setUpdate(true);
  };

  return (
    <>
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
      <div className={"character__menu"}>
        {equipments?.length > 0 ? (
          <div className={"charter__text"} title={"1 золотой"}>
            Куплено
          </div>
        ) : (
          <button className={"character__button"} onClick={buy}>
            Купить
          </button>
        )}
        <div className={"charter__text"} title={"Стоимость: 1 золотой"}>
          Кожаные башмаки
        </div>
      </div>
    </>
  );
};

export default Character;
