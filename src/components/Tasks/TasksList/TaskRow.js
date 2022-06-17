import { useContext } from "react";
import { TasksContext } from "../../../context/TasksContext";

export default function TaskRow({task, index}) {

    const { toggleTaskIsDone } = useContext(TasksContext);

    const handleChangeStatus = (e) => {
        const value = e.target.checked;
        toggleTaskIsDone({taskIndex: index, isDone: value});
    }

    return(
        <tr>
            <td>
                <input type="checkbox" checked={task.isDone} onChange={handleChangeStatus} />
            </td>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{new Date(task.createdAt).toLocaleDateString()}</td>
        </tr>
    )
}