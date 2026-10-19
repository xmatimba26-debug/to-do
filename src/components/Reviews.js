export default function Reviews({ todo }) {
  const inprogress = todo.length;
  const completed = todo.filter((item) => item.list === true).length;
  const pending = todo.filter((item) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const dueDate = new Date(`${item.pending}T00:00:00`);

    const diff = Math.round((dueDate - today) / (1000 * 60 * 60 * 24));

    return diff > 10 && !item.list;
  }).length;

  const total = inprogress + completed + pending;

  return (
    <>
      <div className="stats">
        <div className="stats__item">
          <ion-icon
            className="stats__icon"
            name="checkmark-circle-outline"
          ></ion-icon>
          <span className="stats__num">{completed}</span>
          <span className="stats__label">Completed</span>
        </div>
        <div className="stats__item">
          <ion-icon className="stats__icon" name="hourglass-outline"></ion-icon>
          <span className="stats__num">{pending}</span>
          <span className="stats__label">Pending</span>
        </div>
        <div className="stats__item">
          <ion-icon className="stats__icon" name="disc-outline"></ion-icon>
          <span className="stats__num">{inprogress}</span>
          <span className="stats__label">In Progress</span>
        </div>
        <div className="stats__item">
          <ion-icon
            className="stats__icon"
            name="stats-chart-outline"
          ></ion-icon>
          <span className="stats__num">{total}</span>
          <span className="stats__label">Total</span>
        </div>
      </div>

      <p className="footer-note">Better habits. A greater you.</p>
    </>
  );
}
