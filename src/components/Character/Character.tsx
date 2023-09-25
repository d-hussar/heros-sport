import React from 'react';
import { characters } from '../CharacterCreator/data';
import { equipment } from './data';
import { useUser } from '../UserProvider';
import Equipment from '../Equipment';

const Character = () => {
  const { character } = useUser();
  const { characterId, equipments } = character;

  return (
    <div>
      <div className={'character-window'}>
        <img
          src={characters[characterId]}
          alt={''}
          className={'charcter-window__avatar'}
        />
        <Equipment items={equipments} />
      </div>
    </div>
  );
};

export default Character;
