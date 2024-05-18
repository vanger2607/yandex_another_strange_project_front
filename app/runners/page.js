"use client";

import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";

import { Preloader } from "../components/Preloader/Preloader";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";

export default function New() {
  const newGames = useGetDataByCategory(endpoints.games, "runner");
  return (
    <main className="main-inner">
      {newGames ? (
        <CardsListSection id="runner" title="Ранеры" data={newGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
