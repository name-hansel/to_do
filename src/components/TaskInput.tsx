import { useState } from "react";

export default function TaskInput({ setTasks }) {
    const [inputValue, setInputValue] = useState("");

    function addTask() {
        setTasks((prevTasks: Task[]) => [
            ...prevTasks,
            {
                id: prevTasks.length + 1,
                text: inputValue,
                completed: false,
                createdAt: Date.now()
            }
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