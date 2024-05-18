"use client";

import {useState, useEffect } from "react";
import { useStore } from "../../store/app-store";

import { endpoints } from "@/app/api/config";

import { authorize } from "@/app/api/api-utils";
import { isResponseOk} from "@/app/api/api-utils";

import Styles from "./AuthForm.module.css";

export const AuthForm = (props) => {
  const authContext = useStore();
  const [authData, setAuthData] = useState({ email: "", password: "" }); 
  const [message, setMessage] = useState({ status: null, text: null });
  const handleInput = (e) => {
    /* 
        В объекте authData по ключу e.target.name находится 
        изменяемое значение и перезаписывается
        новым текстом из поля ввода (e.target.value). 
        Спред ... перед authData нужен, чтобы сохранить
        данные, не изменившиеся при вводе текста в одном из полей
    */
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await authorize(endpoints.auth, authData);
    console.log(`userData: ${JSON.stringify(userData)}`);
    if (isResponseOk(userData)) {
      authContext.login({...userData, id: userData._id}, userData.jwt);
      setMessage({ status: "success", text: "Вы авторизовались!" });
    } else {
      setMessage({ status: "error", text: "Неверные почта или пароль" });
    }
  };

  useEffect(() => {
    let timer; 
    console.log(`this is auth: ${JSON.stringify(authContext.user)}`)
    if(authContext.user) {
      timer = setTimeout(() => {
        setMessage({ status: null, text: null});
        props.close();
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [authContext.user]);
  return (
    <form onSubmit={handleSubmit} className={Styles["form"]}>
      <h2 className={Styles["form__title"]}>Авторизация</h2>
      <div className={Styles["form__fields"]}>
        <label className={Styles["form__field"]}>
          <span className={Styles["form__field-title"]}>Email</span>
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
      </div>
      {message.status && (
        <p className={Styles["form__message"]}>{message.text}</p>
      )}
      <div className={Styles["form__actions"]}>
        <button className={Styles["form__reset"]} type="reset">
          Очистить
        </button>
        <button className={Styles["form__submit"]} type="submit">
          Войти
        </button>
      </div>
    </form>
  );
};