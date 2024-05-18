"use client";

import Link from "next/link";
import { useStore } from "../../store/app-store";
import Styles from "./Profile.module.css";
export const Me = (props) => {
  const user = props.data;

  return (
    <main className={Styles["p-main"]}>
      <h1>профиль</h1>
      <div className={Styles["wrapper"]}>
        <div className={Styles["info-block"]}>
          <p className={Styles["text"]}>Имя: {user.username}</p>
          <p className={Styles["text"]}>Почта: {user.email}</p>
          {user["games"] !== null ? (
            <p className={Styles["text"]}>Кол-во Игр: {user.games}</p>
          ) : (
            <p className={Styles["text"]}>
              Вы не разместили на нашем сайте ни одной игры!
            </p>
          )}
          <Link
            className={Styles["mega-button"]}
            href="/"
            onClick={useStore().logout}
          >
            Выйти
          </Link>
        </div>
        <div className="chill-gif">
          <img src="/images/cat-head-shaking.gif" alt="качающий головой кот" />
        </div>
      </div>
    </main>
  );
};
