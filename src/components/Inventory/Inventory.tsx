import React, { useState } from 'react';
import { useUser } from '../UserProvider';
import './Inventory.styles.css';

const moneySrc =
  'https://lh3.googleusercontent.com/fife/AK0iWDzHGEgV_PHocTVYZ7jRb10R5D4BEwzOJLKlU4SfIS-BA3TYn_e6_6xQQnPGLjWsCHaZOyyhexqu_ofYA-gRb71BjovKo9LCU_w1FAV14rseC5-Q5y4S-1v-aUeOnI0l8h-EtEIxcyJiOu4GbguVVHfYGVJAeUr0xHx-NY1mCKfiqmrLPBG10AOaRVwTcYQscl4IeumMWvlfdEwwNAMsCQBkddtOpqV--yAMKzajMiDur3R2EDG4fT08eCiXS9pLSLHTbuQY8Bk1Vp2jfTrUEex0Ldy08NWVgbjTVn-Mt4Z3x7GzAXRUOvaZk-fUW9EyjGcQpIash3IJhsWY0EB43nqCvDAHUtOCOL7CzbjC_wBEptvIjw_HJUnY-pyGRom7Z0z7Cpnii87zEi_5x-_bNVgR9wjTOJVw5eNzENOd_UnIRn83wGLMaMTHHM3emoopS6oDCTVOMDFBWczWQnao66OF9pk-vRUhBHKjLw08g_sCS0dAeN5ErkncG93unLftY6ZUoV3qdADwNJaM1oDeXaF-Bx9OolGmaOrMLYeuEZDkoFJZq7SKjHN5u3H-jOk0XgrjpwK5J4ogAQeahC9DoA1gsVS87pi894ppdLuDn_EeHGCGqe0LAz_D3ykc-SIXSux7nfkrsAYl04Bz45ZtUt8ZggFvxi3PBXdmzN9J11FzY1ogY7e59QBdJVRF8nv18Dat6Mrs028ZXx3d9JAOowhyTYH69-7WwqsZoYnfjtVQHM7HlYsGutyYt_VSbBruU8muA3YxEQDXjxegNLC9oOaDEdIVO55pJkfQtVrSjMeWWCxGxhTtFi_PRm6_Xsnk2WnX4XBQv7JwPpw3GYDWXWKTIt_ZjhXa9FPesc3A646ArxQs51RIpzJ6NJvS1HasHl_SfgnaByACx3nw4FzQcwuqHR0ZfZjsfx1ZuJaWFpFCSaQvqcPcILGztJAI0r7qTclKgXgE9-8_WqvwYhvOMxg363KkSCdiwjN3jr5vlwv1iQ2hANEU2qzVGH5_wSl-hAWG3GdHSRx61yRmrB0Qo7IbA9HJVql8BT_UUpCPgfZUNaX-XQHg3sceMr1b7nGoXaEpDjW525jLLk_M14v3nj-uWS06ezQdqpzKifB2UajJ367XFhRIs3q7SZKqyXnMd8Foy7Ve9Xn7PQDmekvYrR3EEOinkP0vYe1xLZFQZOJ3OGJ3DYKz-4HmIE5DNe24sHhSbZzB4w9OvyUyC-B46vuGIqouDNm7xzI8OtBnZRiyP-gfQSS1enwhwnqvZqyk8NgqLFJAwU33ydxevuoeYDB5vVUtffJeRA_dFKp6PzVHOKUiDmMi-UBqhkTYpTpNIv-Brud31KNq1mtn5P-7XWkyG_8NqjkAxk6-pIjzKhsnla8PhSEjuEmIeILECeOT58LCkNd9mpSN5_e2P5I04puLPMYt_lX9RcB0TzT5HB1f2bxS2Qwv0aHsYqSZShRoRTUKgbTsbQ8CnRqFc-1XPP-D2CatNpMtHN-XcNn15iSOsT5RYiNgBW0n-kxEdvYyv_HgXvkfk2nEJB4io9mMoKkToMmXi5gpSbr1SlqLfDpaJI58LHk5eMGC=w1848-h980';

const Inventory = () => {
  const [isShowModal, setModal] = useState(false);
  const [money, setMoney] = useState(0);
  const { character, updateMoney } = useUser();
  const formatedMoney = character.money.toLocaleString('en-EG');

  const showModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const onChageMoney = ({ target: { value } }) => {
    setMoney(value);
  };

  return (
    <>
      <div className={'inventory__slot'}>
        <img src={moneySrc} className={'inventory__item'} onClick={showModal} />
        <div className={'inventory__value'}>{formatedMoney}</div>
      </div>
      <div
        className={
          isShowModal
            ? 'inventory__modal inventory__modal--show'
            : 'inventory__modal'
        }
      >
        <div className={'inventory__row'}>
          <div className={'inventory__modalField'}>
            <div className={'inventory__modalField-title'}>Деньги</div>
            <input
              value={money}
              onChange={onChageMoney}
              className={'inventory__modalField--text'}
            />
          </div>
        </div>
        <div className={'inventory__row'}>
          <button
            type={'submit'}
            className={'inventory__button'}
            onClick={() => {
              updateMoney(money);
              closeModal();
            }}
          >
            Начислить
          </button>
        </div>
        <button className="inventory__modalClose" onClick={closeModal}>
          X
        </button>
      </div>
    </>
  );
};

export default Inventory;
