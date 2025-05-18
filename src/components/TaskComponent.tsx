import { Checkbox, Stack, Typography } from "@mui/material";
import { useState } from "react";
import Task from "../types/Task";

export default function TaskComponent({ task }: { task: Task }) {
  const [completed, setCompleted] = useState(task.isCompleted);

  function onCompleted() {
    setCompleted(!completed);
  }

  return (
    <Stack direction="row" spacing={2} alignItems={"center"}>
      <Checkbox checked={completed} onChange={onCompleted} />
      <Typography>{task.text}</Typography>
    </Stack>
  );
}
