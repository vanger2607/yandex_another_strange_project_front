"use client";

import { useState } from "react";

import { useStore } from "@/app/store/app-store";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Styles from "./Header.module.css";

import { AuthForm } from "../Auth/AuthForm";
import { RegForm } from "../Registration/Registration";
import { Overlay } from "../Overlay/Overlay";
import { Popup } from "../Popup/Popup";

export const Header = () => {
  const authContext = useStore();
  const pathname = usePathname();

  const [popupIsOpened, setPopupIsOpened] = useState(false);
  const [regPopupIsOpened, setRegPopupIsOpened] = useState(false);

  const openPopup = () => {
    setPopupIsOpened(true);
  };

  const closePopup = () => {
    setPopupIsOpened(false);
  };
  const openRegPopup = () => {
    setRegPopupIsOpened(true);
  };

  const closeRegPopup = () => {
    setRegPopupIsOpened(false);
  };

  const handleLogout = () => {
    authContext.logout();
  };

  return (
    <header className={Styles["header"]}>
      {pathname === "/" ? (
        <div className={Styles["logo"]}>
          <img
            className={` ${Styles["logo__image"]}`}
            src="/images/logo.svg"
            alt="Логотип Pindie"
          />
        </div>
      ) : (
        <Link href="/" className={Styles["logo"]}>
          <img
            className={Styles["logo__image"]}
            src="/images/logo.svg"
            alt="Логотип Pindie"
          />
        </Link>
      )}
      <nav className={Styles["menu"]}>
        <Overlay isOpened={popupIsOpened} close={closePopup} />
        <Popup isOpened={popupIsOpened} close={closePopup}>
          <AuthForm close={closePopup} />
        </Popup>
        <Overlay isOpened={regPopupIsOpened} close={closeRegPopup} />
        <Popup isOpened={regPopupIsOpened} close={closeRegPopup}>
          <RegForm close={closeRegPopup} />
        </Popup>
        <ul className={Styles["menu__list"]}>
          <li className={Styles["menu__item"]}>
            <Link
              href="/new"
              className={`${Styles["menu__link"]} ${
                pathname === "/new" ? Styles["menu__link_active"] : ""
              }`}
            >
              Новинки
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/popular"
              className={`${Styles["menu__link"]} ${
                pathname === "/popular" ? Styles["menu__link_active"] : ""
              }`}
            >
              Популярные
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/shooters"
              className={`${Styles["menu__link"]} ${
                pathname === "/shooters" ? Styles["menu__link_active"] : ""
              }`}
            >
              Шутеры
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/runners"
              className={`${Styles["menu__link"]} ${
                pathname === "/runners" ? Styles["menu__link_active"] : ""
              }`}
            >
              Ранеры
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/pixel-games"
              className={`${Styles["menu__link"]} ${
                pathname === "/pixel-games" ? Styles["menu__link_active"] : ""
              }`}
            >
              Пиксельные
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/tds"
              className={`${Styles["menu__link"]} ${
                pathname === "/tds" ? Styles["menu__link_active"] : ""
              }`}
            >
              TDS
            </Link>
          </li>
        </ul>
        <div className={Styles["auth"]}>
          {authContext.isAuth ? (
            <Link
              className={`${Styles["profile-button"]} ${
                pathname === "/profile" ? Styles["profile-button-active"] : ""
              } `}
              href="/profile"
            >
              Мой профиль
            </Link>
          ) : (
            <button className={Styles["auth__button"]} onClick={openRegPopup}>
              зарегистрироваться
            </button>
          )}
          <span className={Styles["divider"]}></span>
          {authContext.isAuth ? (
            pathname === "/profile" ? (
              <Link
                href="/"
                className={Styles["auth__button"]}
                onClick={handleLogout}
              >
                Выйти
              </Link>
            ) : (
              <button className={Styles["auth__button"]} onClick={handleLogout}>
                Выйти
              </button>
            )
          ) : (
            <button className={Styles["auth__button"]} onClick={openPopup}>
              Войти
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};
