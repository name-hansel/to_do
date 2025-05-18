import { useEffect, useState } from "react";

import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import Tasks from "./components/Tasks";

import { Box } from "@mui/material";

export default function App() {
  const savedTasks = JSON.parse(localStorage.getItem("to_do_items") || "[]");
  const [tasks, setTasks] = useState(savedTasks);

  useEffect(() => {
    localStorage.setItem("to_do_items", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Header />
      <TaskInput setTasks={setTasks} />
      <Tasks tasks={tasks} />
    </Box>
  );
}
