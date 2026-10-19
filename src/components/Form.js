import { useState } from "react";

export default function Form({ addtoList }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");
  const [personal, setPersonal] = useState("");
  const [date, setDate] = useState("");
  const id = Date.now();
  const [count, setCount] = useState(1);
  ///
  function formatTaskDate(dateString) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const date = new Date(`${dateString}T00:00:00`);
    if (isNaN(date.getTime())) return dateString;

    const diff = Math.round((date - today) / (1000 * 60 * 60 * 24));

    if (diff === 0) return "Today";
    if (diff === 1) return "Tomorrow";

    const formattedDate = date.toLocaleDateString("en-ZA", {
      day: "numeric",
      month: "short",
    });

    if (diff >= 2 && diff <= 6) {
      return date.toLocaleDateString("en-ZA", {
        weekday: "long",
      });
    }

    if (diff >= 7 && diff <= 13) {
      return `Next week, ${formattedDate}`;
    }

    const isNextMonth =
      date.getMonth() !== today.getMonth() &&
      date.getFullYear() * 12 +
        date.getMonth() -
        (today.getFullYear() * 12 + today.getMonth()) ===
        1;

    if (isNextMonth) {
      return `Next month, ${formattedDate}`;
    }

    return date.toLocaleDateString("en-ZA", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }
  ///
  const today = new Date().toLocaleDateString("en-CA"); // "2026-10-15" format
  function addBtn(e) {
    e.preventDefault();

    if (!task || !priority || !personal || !date) return;

    ///
    setCount(count + 1);
    ///
    const newArray = {
      id,
      task,
      priority,
      category: personal,
      date: formatTaskDate(date),
      list: false,
      pending: date,
      count,
    };
    addtoList(newArray);

    //
    setTask("");
    setPriority("");
    setPersonal("");
    setDate("");
  }

  return (
    <section className="form">
      <div className="form__row">
        <div className="field field--grow">
          <i className="fa-solid fa-plus field__icon"></i>
          <input
            className="field__input"
            placeholder="Add a new task"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
        </div>
        <button className="btn-add" onClick={addBtn}>
          Add
        </button>
      </div>

      <div className="form__filters">
        <div className="field">
          <select
            className="field__input field__input-select "
            value={priority}
            onChange={(e) => {
              setPriority(e.target.value);
            }}
          >
            <option value="" disabled>
              Priority
            </option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <ion-icon className="field__icon" name="flag-outline"></ion-icon>
        </div>

        <div className="field">
          <select
            className="field__input field__input--select"
            value={personal}
            onChange={(e) => {
              setPersonal(e.target.value);
            }}
          >
            <option value="" disabled>
              Category
            </option>
            <option>Personal</option>
            <option>Work</option>
            <option>Education</option>
            <option>Business</option>
            <option>Other</option>
          </select>
          <ion-icon className="field__icon" name="folder-outline"></ion-icon>
        </div>

        <div className="field">
          <input
            className="field__input"
            type="date"
            min={today}
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <ion-icon className="field__icon" name="calendar-outline"></ion-icon>
        </div>
      </div>
    </section>
  );
}
