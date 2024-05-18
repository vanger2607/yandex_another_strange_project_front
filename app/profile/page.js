"use client";
import { useStore } from "../store/app-store";
import { useState } from "react";
import { Me } from "../components/Profile/Profile";
import { Preloader } from "../components/Preloader/Preloader";
import { NotFound } from "../components/NotFound/NotFound";
export default function Profile() {
  const user = useStore().user;
  const [preloaderVisible, setPreloaderVisible] = useState(true);
  const store = useStore();
  const handleLogout = () => {
    store.logout();
  };
  const wait = () => {
    setPreloaderVisible(false);
  };

  setTimeout(wait, 30 * 1000);
  if (user) {
    return (
      <main>
        <Me data={user} name="ff"></Me>
      </main>
    );
  } else if (preloaderVisible) {
    return (
      <main>
        <Preloader></Preloader>
      </main>
    );
  }
  return (
    <main className="main-inner">
      <NotFound></NotFound>
    </main>
  );
}
