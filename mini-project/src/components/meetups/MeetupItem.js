import { useContext, React } from "react";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorite-context";

export default function MeetupItem(props) {
  const favouriteCtx = useContext(FavoritesContext);
  const itemIsFavorite = favouriteCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favouriteCtx.removeFavorite(props.id);
    } else {
      favouriteCtx.addFavourite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title}></img>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from favourite" : "Add to favourite"}
          </button>
        </div>
      </li>
    </Card>
  );
}
