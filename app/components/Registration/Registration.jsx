"use client";

import { useState, useEffect } from "react";
import { useStore } from "../../store/app-store";

import { endpoints } from "@/app/api/config";

import { register } from "@/app/api/api-utils";
import { isResponseOk } from "@/app/api/api-utils";

import Styles from "./Registration.module.css";

export const RegForm = (props) => {
  const regContext = useStore();
  const [secondPassword, setSecondPassword] = useState("");
  const [regData, setregData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState({ status: null, text: null });

  const handleSecondPassword = (e) => {
    setSecondPassword(e.target.value);
  };

  const handleInput = (e) => {
    /* 
        В объекте regData по ключу e.target.name находится 
        изменяемое значение и перезаписывается
        новым текстом из поля ввода (e.target.value). 
        Спред ... перед regData нужен, чтобы сохранить
        данные, не изменившиеся при вводе текста в одном из полей
    */
    setregData({ ...regData, [e.target.name]: e.target.value });

    setMessage({ status: null, text: null });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (regData.password !== secondPassword) {
      setMessage({ status: "error", text: "Пароли не совпадают" });
    } else {
      const userData = await register(endpoints.reg, regData);
      if (isResponseOk(userData)) {
        setMessage({ status: "success", text: "Вы зарегистрировались!" });
      } else {
        setMessage({ status: "error", text: "Не удалось зарегистрироваться!" });
      }
    }
  };

  useEffect(() => {
    let timer;
    if (regContext.user) {
      timer = setTimeout(() => {
        setMessage({ status: null, text: null });
        props.close();
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [regContext.user]);
  return (
    <form onSubmit={handleSubmit} className={Styles["form"]}>
      <h2 className={Styles["form__title"]}>Регистрация</h2>
      <div className={Styles["form__fields"]}>
        <label className={Styles["form__field"]}>
          <span className={Styles["form__field-title"]}>Имя пользователя</span>
          <input
            onInput={handleInput}
            className={Styles["form__field-input"]}
            name="username"
            type="text"
            placeholder="Имя"
          />
        </label>

        <label className={Styles["form__field"]}>
          <span className={Styles["form__field-title"]}>Почта</span>
          <input
            onInput={handleInput}
            className={Styles["form__field-input"]}
            name="email"
            type="email"
            placeholder="hello@world.com"
          />
        </label>
        <label className={Styles["form__field"]}>
          <span className={Styles["form__field-title"]}>Пароль</span>
          <input
            onInput={handleInput}
            name="password"
            className={Styles["form__field-input"]}
            type="password"
            placeholder="***********"
          />
        </label>
        <label className={Styles["form__field"]}>
          <span className={Styles["form__field-title"]}>Повторите пароль:</span>
          <input
            onInput={handleSecondPassword}
            name="secondPassword"
            className={Styles["form__field-input"]}
            type="password"
            placeholder="***********"
          />
        </label>
      </div>
      {message.status && (
        <p className={Styles["form__message"]}>{message.text}</p>
      )}
      <div className={Styles["form__actions"]}>
        <button className={Styles["form__reset"]} type="reset">
          Очистить
        </button>
        <button className={Styles["form__submit"]} type="submit">
          Зарегистрироваться
        </button>
      </div>
    </form>
  );
};
