import { useState } from "react";
import type Task from "../types/Task";

import AddIcon from "@mui/icons-material/Add";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function TaskInput({ setTasks }) {
  const [inputValue, setInputValue] = useState("");

  function addTask() {
    if (inputValue === "") return;

    setTasks((prevTasks: Task[]) => [
      {
        id: prevTasks.length + 1,
        text: inputValue,
        isCompleted: false,
        createdAt: Date.now(),
      },
      ...prevTasks,
    ]);

    setInputValue("");
  }

  return (
    <Grid container spacing={2}>
      <TextField
        variant="outlined"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        disableElevation
        onClick={addTask}
      >
        Add Task
      </Button>
    </Grid>
  );
}
