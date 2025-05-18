import { useEffect, useState } from "react";
import type Task from "../types/Task";

export default function TaskInput({ setTasks }) {
    const [inputValue, setInputValue] = useState("");

    function addTask() {
        if (inputValue === "") return;

        setTasks((prevTasks: Task[]) => [
            {
                id: prevTasks.length + 1,
                text: inputValue,
                isCompleted: false,
                createdAt: Date.now()
            },
            ...prevTasks,
        ])

        setInputValue("");
    }

    return (
        <div>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button type="button" onClick={addTask}>Add Task</button>
        </div>
    )
}