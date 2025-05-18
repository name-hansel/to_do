import { useState } from "react";
import Task from "../types/Task";

export default function TaskComponent({ task }: { task: Task }) {
    const [completed, setCompleted] = useState(task.isCompleted);

    function onCompleted() {
        setCompleted(!completed);
    }

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <div>
                <button onClick={onCompleted}>
                    {completed ? <h3>Completed!</h3> : <h3>Not Completed :(</h3>}
                </button>
            </div>
            <div>
                {task.text}
            </div>
        </div>
    );
}