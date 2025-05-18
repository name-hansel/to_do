import { useState } from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import Task from "./components/Task";

export default function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <Header />
      <TaskInput setTasks={setTasks} />
      {
        tasks.map((task: Task) => <Task key={task.id} task={task} />)
      }
    </div>
  )
}