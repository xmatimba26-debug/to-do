import { useState } from "react";
import Reviews from "./Reviews";
import Lists from "./Lists";
import SubHeader from "./SubHeader";
import Form from "./Form";
import Header from "./Header";
//

function App() {
  const [todo, setTodo] = useState([]);

  function addtoList(newTask) {
    setTodo((todo) => [...todo, newTask]);
  }
  function removefromList(id) {
    setTodo((todo) => todo.filter((item) => item.id !== id));
  }

  function removeAllitem() {
    setTodo((todo) => (todo = []));
  }

  return (
    <div className="app">
      <Header />
      <Form addtoList={addtoList} />
      <SubHeader removeAllitem={removeAllitem} todo={todo} />
      <Lists todo={todo} removefromList={removefromList} setTodo={setTodo} />
      <Reviews todo={todo} />
    </div>
  );
}

export default App;
