import { useState } from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskComponent from "./components/TaskComponent";
import type Task from "./types/Task";

export default function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <Header />
      <TaskInput setTasks={setTasks} />
      {
        tasks.map((task: Task) => <TaskComponent key={task.id} task={task} />)
      }
    </div>
  )
}