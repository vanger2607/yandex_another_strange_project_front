"use client";
import { endpoints } from "./api/config";
import { useGetDataByCategory } from "./api/api-hooks";
import { Banner } from "./components/Banner/Banner";
import { CardsListSection } from "./components/CardsListSection/CardsListSection";
import { Promo } from "./components/Promo/Promo";
import { Preloader } from "./components/Preloader/Preloader";

export default function Home() {
  const popularGames = useGetDataByCategory(endpoints.games, "popular");
  const newGames = useGetDataByCategory(endpoints.games, "new");
  return popularGames && newGames ? (
    <main className="main">
      <Banner />
      <CardsListSection
        id="popular"
        title="Популярные"
        data={popularGames}
        type="slider"
      ></CardsListSection>
      <CardsListSection
        id="new"
        title="Новинки"
        data={newGames}
        type="slider"
      ></CardsListSection>
      <Promo />
    </main>
  ) : (
    <Preloader />
  );
}
