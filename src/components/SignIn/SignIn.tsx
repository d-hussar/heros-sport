import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../UserProvider";
import "./SignIn.styles.css";

const SignIn = () => {
  const [login, setLogin] = useState("");

  const navigate = useNavigate();
  const { userId, setUserId } = useUser();

  const onChange = ({ target: { value } }) => {
    setLogin(value);
  };
  const onSubmit = () => {
    if (userId === login) {
      navigate("/main");
    } else {
      setUserId(login);
      navigate("/create");
    }
  };
  return (
    <div className={"signin-form"}>
      <div className={"signin-form__title"}>Вход</div>
      <div className={"signin-form__row"}>
        <div className={"signin-form__field"}>
          <div className={"signin-form__field-title"}>Логин</div>
          <input
            value={login}
            onChange={onChange}
            className={"signin-form__field--text"}
          />
        </div>
      </div>
      <div className={"signin-form__row"}>
        <button
          type={"submit"}
          className={"signin-form__button"}
          onClick={onSubmit}
        >
          Войти
        </button>
      </div>
    </div>
  );
};

export default SignIn;
