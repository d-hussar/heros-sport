import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { characters } from "./data";
import "./CharacterCreator.styles.css";

const CharacterCreator = () => {
  const login = localStorage.getItem("login") as string;
  const character = localStorage.getItem(JSON.parse(login)) as string;
  const [characterId, setCharacterId] = useState(
    JSON.parse(character)?.characterId || 0,
  );
  const navigate = useNavigate();

  const getPreview = () => {
    if (characterId <= 0) {
      setCharacterId(characters.length - 1);
    } else {
      setCharacterId(characterId - 1);
    }
  };
  const getNext = () => {
    if (characterId >= characters.length - 1) {
      setCharacterId(0);
    } else {
      setCharacterId(characterId + 1);
    }
  };

  const save = () => {
    localStorage.setItem(
      JSON.parse(login),
      JSON.stringify({
        characterId,
        equipments: [],
      }),
    );
    navigate("/main");
  };
  const cancel = () => {
    navigate("/");
  };

  return (
    <>
      <div className={"character-window"}>
        <img
          src={characters[characterId]}
          alt={""}
          className={"charcter-window__avatar"}
        />
        <button
          onClick={getPreview}
          className={
            "character-window__control character-window__control--left"
          }
        />
        <button
          onClick={getNext}
          className={
            "character-window__control character-window__control--right"
          }
        />
      </div>
      <div className={"character__menu"}>
        <button className={"character__button"} onClick={cancel}>
          Отменить
        </button>
        <button className={"character__button"} onClick={save}>
          Принять
        </button>
      </div>
    </>
  );
};

export default CharacterCreator;
