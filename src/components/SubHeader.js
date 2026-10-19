export default function SubHeader({ removeAllitem, todo }) {
  const inprogress = todo.length;
  const completed = todo.filter((item) => item.list === true).length;

  const pending = todo.filter((item) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const dueDate = new Date(`${item.pending}T00:00:00`);

    const diff = Math.round((dueDate - today) / (1000 * 60 * 60 * 24));

    return diff > 10 && !item.list;
  }).length;

  return (
    <div className="subheader">
      <div className="subheader__tabs">
        <h3 className="tab tab--active">
          All<span>0</span>
        </h3>
        <h3 className="tab">
          Pending<span>{pending}</span>
        </h3>
        <h3 className="tab">
          In Progress<span>{inprogress}</span>
        </h3>
        <h3 className="tab">
          Completed<span>{completed}</span>
        </h3>
      </div>

      <button className="subheader__clear" onClick={removeAllitem}>
        Clear all
      </button>
    </div>
  );
}
