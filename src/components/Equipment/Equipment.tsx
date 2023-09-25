import React, { FC } from 'react';
import { EquipmentProps } from './Equipment.types';
import { equipment } from './Equipment.data';
import './Equipment.styles.css';

const Equipment: FC<EquipmentProps> = ({ items }) => {
  return (
    <div className={'equipment-window'}>
      {Object.keys(items.primary).map((key) => {
        const item = items.primary[key];
        const src = equipment[item];

        if (!item || key === 'shield') return null;

        return (
          <div key={key}>
            {key === 'hands' || key === 'shoulders' ? (
              <>
                <img
                  src={equipment[`${item}-r`]}
                  className={'equipment-window__item'}
                />
              </>
            ) : (
              <img src={src} className={'equipment-window__item'} />
            )}
          </div>
        );
      })}
      {Object.keys(items.secondary).map((key) => {
        const item = items.secondary[key];
        const src = equipment[item];

        if (!item) return null;

        return (
          <div key={key}>
            {key === 'shield' ? (
              <img src={src} className={'equipment-window__item'} />
            ) : (
              <img
                src={equipment[`${item}-l`]}
                className={'equipment-window__item'}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Equipment;
