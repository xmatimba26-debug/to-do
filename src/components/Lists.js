import Task from "./Task";

export default function Lists({ todo, removefromList, setTodo }) {
  return (
    <div className="list">
      {/* one task card - copy this block / use .map() later */}
      {todo.map((todos) => (
        <Task
          todo={todos}
          removefromList={removefromList}
          setTodo={setTodo}
          key={todos.id}
        />
      ))}
    </div>
  );
}
