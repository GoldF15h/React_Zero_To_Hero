import React from "react";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

export default function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {/* <div>TEST LIST</div> */}
      {props.meetups.map((meetup) => (
        // <div>{meetup.id}</div>
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        ></MeetupItem>
      ))}
    </ul>
  );
}
