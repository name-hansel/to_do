import { Stack, Typography } from "@mui/material";
import Task from "../types/Task";
import TaskComponent from "./TaskComponent";

export default function Tasks({ tasks }: { tasks: Task[] }) {
  if (tasks.length > 0) {
    return (
      <Stack spacing={2} marginTop={2}>
        {tasks.map((task: Task) => (
          <TaskComponent key={task.id} task={task} />
        ))}
      </Stack>
    );
  }

  return <Typography variant="h2">No tasks yet</Typography>;
}
