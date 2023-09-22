import React, { useState } from "react";
import "./Shop.styles.css";
import { shopItems } from "./data";

const Shop = () => {
  const login = localStorage.getItem("login") as string;
  const character = JSON.parse(
    localStorage.getItem(JSON.parse(login)) as string,
  );
  const { equipments } = character;

  const [_, setUpdate] = useState<any>([]);

  const buy = (item) => () => {
    localStorage.setItem(
      JSON.parse(login),
      JSON.stringify({
        ...character,
        equipments: [...character.equipments, item],
      }),
    );
    setUpdate([...character.equipments, item]);
  };
  console.log("render", equipments);

  return (
    <div className="shop__board">
      {shopItems.map((item) => {
        const classes = ["shop__slot"];

        if (equipments.includes(item.id)) {
          classes.push("shop__slot--sold");
        }
        return (
          <div className={classes.join(" ")} key={item.id}>
            <img className="shop__item" src={item.img} onClick={buy(item.id)} />
            <div className="shop__cost">{item.cost}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
