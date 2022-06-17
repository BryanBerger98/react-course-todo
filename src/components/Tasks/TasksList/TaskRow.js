import { useContext, useState } from "react";
import { TasksContext } from "../../../context/TasksContext";
import Button from "../../ui/Button/Button";
import Modal from "../../ui/Modal/Modal";
import TaskForm from "../TaskForm/TaskForm";

export default function TaskRow({task, index}) {

    const [isEditTaskModalOpen, setIsEditTaskModalOpen] = useState(false);

    const { toggleTaskIsDone, removeTask } = useContext(TasksContext);

    const handleChangeStatus = (e) => {
        const value = e.target.checked;
        toggleTaskIsDone({taskIndex: index, isDone: value});
    }

    const handleDeleteTask = () => {
        removeTask(index);
    }

    return(
        <>
            <tr>
                <td>
                    <input type="checkbox" checked={task.isDone} onChange={handleChangeStatus} />
                </td>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{new Date(task.createdAt).toLocaleDateString()}</td>
                <td>
                    <div style={{display: 'flex', gap: 4, justifyContent: 'end'}}>
                        <Button variant="danger" onClick={handleDeleteTask}>Delete</Button>
                        <Button onClick={() => setIsEditTaskModalOpen(true)}>Edit</Button>
                    </div>
                </td>
            </tr>
            <Modal isOpen={isEditTaskModalOpen} setIsOpen={setIsEditTaskModalOpen} title={task.title}>
                <TaskForm closeModal={() => setIsEditTaskModalOpen(false)} value={{title: task.title, description: task.description}} index={index} />
            </Modal>
        </>
    )
}