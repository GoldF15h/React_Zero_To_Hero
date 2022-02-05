import { useContext, React } from "react";

import FavouriteContext from "../store/favorite-context";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorite-context";

export default function FavouritesPage() {
  const favouriteCtx = useContext(FavouriteContext);

  let content;

  if (favouriteCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favouriteCtx.favorites}></MeetupList>;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}
