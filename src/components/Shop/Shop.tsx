import React, { useState } from "react";
import { useUser } from "../UserProvider";
import "./Shop.styles.css";
import { shopItems } from "./data";

const Shop = () => {
  const { character, setEquipments } = useUser();
  const { equipments } = character;

  const [_, setUpdate] = useState<any>([]);

  const buy = (item) => () => {
    setEquipments(item);
    setUpdate([...character?.equipments, item]);
  };

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
