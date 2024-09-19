import React from "react";
import css from "./Board.module.css";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Tech Conference 2024",
    description:
      "Annual technology conference with key speakers from the industry.",
    eventDate: "2024-10-12",
    organizer: "TechWorld Inc.",
  },
  {
    id: 2,
    title: "Art Workshop",
    description:
      "Interactive art workshop where participants will create their own masterpieces.",
    eventDate: "2024-11-05",
    organizer: "Creative Minds",
  },
  {
    id: 3,
    title: "Music Festival",
    description:
      "Enjoy a weekend of live music performances from various artists.",
    eventDate: "2024-12-15",
    organizer: "LiveNation",
  },
  {
    id: 4,
    title: "Business Startup Meetup",
    description:
      "Networking event for aspiring entrepreneurs and business owners.",
    eventDate: "2024-09-30",
    organizer: "StartupHub",
  },
  {
    id: 5,
    title: "Health and Wellness Fair",
    description:
      "A fair focused on health and wellness topics with various exhibitors.",
    eventDate: "2024-11-22",
    organizer: "HealthFirst",
  },
];

const Board = () => {
  return (
    <main className={css.homeContainer}>
      <h1>Events</h1>
      <ul className={css.eventList}>
        {events.map(({ id, title, description }) => (
          <li key={id} className={css.eventCard}>
            <div>
              <h2 className={css.eventCardTitle}>{title}</h2>
              <p className={css.eventCardDescription}>{description}</p>
            </div>
            <div className={css.buttons}>
              <Link to="/registration" className={css.button}>
                Register
              </Link>
              <Link to="/participants" className={css.button}>
                View
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Board;
