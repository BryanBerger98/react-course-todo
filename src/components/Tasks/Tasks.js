import Button from "../ui/Button/Button";
import TasksList from "./TasksList/TasksList";
import styles from './Tasks.module.css';
import Modal from "../ui/Modal/Modal";
import { useState } from "react";
import TaskForm from "./TaskForm/TaskForm";
import { useContext } from "react";
import { TasksContext } from "../../context/TasksContext";

export default function Tasks() {

    const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);

    const { tasksData } = useContext(TasksContext);

    return(
        <>
            <div className={styles['tasks-header']}>
                <h2>{tasksData.count} Task{tasksData.count > 1 ? 's' : ''}</h2>
                <Button onClick={() => setIsNewTaskModalOpen(true)}>New Task</Button>
            </div>
            <TasksList />
            <Modal isOpen={isNewTaskModalOpen} setIsOpen={setIsNewTaskModalOpen} title={'New task'}>
                <TaskForm closeModal={() => setIsNewTaskModalOpen(false)} />
            </Modal>
        </>
    )    
}