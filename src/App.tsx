import { useEffect, useState } from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskComponent from "./components/TaskComponent";
import type Task from "./types/Task";

export default function App() {
  const savedTasks = JSON.parse(localStorage.getItem("to_do_items") || "[]");
  const [tasks, setTasks] = useState(savedTasks);

  useEffect(() => {
    localStorage.setItem("to_do_items", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <Header />
      <TaskInput setTasks={setTasks} />
      {
        tasks.length == 0 ? <h2>No tasks yet!</h2> :
          tasks.map((task: Task) => <TaskComponent key={task.id} task={task} />)
      }
    </div>
  )
}