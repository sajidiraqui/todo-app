import { useState } from "react";

const TodoCard = ({ data }) => (
  <div className="flex flex-col border-black rounded border-2">
    <p>title : {data.title}</p>
    <p>description : {data.description}</p>
    <p>priority : {data.priority}</p>
    <p>eggs : {data.eggs}</p>
    <p>completed : {data.completed ? "completed" : "incomplete"}</p>
  </div>
);

function App() {
  const [todoList, setTodoList] = useState();

  const printKaro = async () => {
    const res = await fetch("http://localhost:5000/api/todo");
    const data = await res.json();
    setTodoList(data);
  };

  return (
    <>
      <div className="flex justify-center flex-col-reverse items-center text-xl">
        <button onClick={printKaro}>clickHere</button>
        <div className="flex flex-col gap-y-2">
          {todoList &&
            todoList.length > 0 &&
            todoList.map((data, index) => <TodoCard key={index} data={data} />)}
        </div>
      </div>
    </>
  );
}

export default App;
