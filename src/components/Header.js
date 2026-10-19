import { useState, useEffect } from "react";

export default function Header() {
  const [quote, setQuote] = useState({ quote: "Loading...", author: "" });

  useEffect(() => {
    async function getQuote() {
      try {
        const res = await fetch("https://dummyjson.com/quotes/random");
        const data = await res.json();
        setQuote(data);
      } catch (err) {
        console.error("Quote failed:", err);
      }
    }

    getQuote(); // load one immediately
    const id = setInterval(getQuote, 60000); // then every 60 seconds

    return () => clearInterval(id); // cleanup when the component unmounts
  }, []);

  const weekdays = ["	Sun", "Mon", "Tue", " Wed", "Thurs", "	Fri", "Sat"];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date();
  const day = date.getDate();
  const week = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  //
  return (
    <header className="header">
      <div className="header__brand">
        <div className="header__logo">
          <ion-icon name="checkmark-outline"></ion-icon>
        </div>
        <div>
          <h2 className="header__title">
            To-Do <span>List</span>
          </h2>
          <span className="header__tagline">Small steps. Big goals.</span>
        </div>
      </div>

      <div className="header__side">
        <div className="header__date">
          <span>
            {`${day}  ${weekdays[week]} ${months[month]}  ${String(year).slice(-2)}`}
          </span>
          <ion-icon name="sunny-outline"></ion-icon>
        </div>
        <p className="header__quote">{quote.quote}</p>
        <span className="header__author">{quote.author}</span>
      </div>
    </header>
  );
}
