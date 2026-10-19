export default function Task({ todo, removefromList, setTodo }) {
  const priorityClasses = {
    High: "badge badge--high",
    Medium: "badge badge--medium",
    Low: "badge badge--low",
  };

  function checkboxfun() {
    setTodo((items) =>
      items.map((item) =>
        item.id === todo.id ? { ...item, list: !item.list } : item,
      ),
    );
  }

  return (
    <div className="task">
      <div className="task__left">
        <input
          className="task__check"
          type="checkbox"
          value={todo.list}
          onClick={checkboxfun}
        />
        <div>
          <p
            className="task__title"
            style={{
              textDecoration: todo.list ? "line-through" : "none",
            }}
          >
            {todo.task}
          </p>
          <div className="task__meta">
            <span>
              <ion-icon name="calendar-outline"></ion-icon> {todo.date}
            </span>
            <span>
              <ion-icon name="folder-outline"></ion-icon> {todo.category}
            </span>
          </div>
        </div>
      </div>

      <div className="task__right">
        <span className={priorityClasses[todo.priority]}>{todo.priority}</span>
        <button
          className="task__menu"
          title="remove"
          onClick={() => removefromList(todo.id)}
        >
          <ion-icon name="trash-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
}
