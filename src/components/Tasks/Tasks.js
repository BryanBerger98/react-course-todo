import Button from "../ui/Button/Button";
import TasksList from "./TasksList/TasksList";
import styles from './Tasks.module.css';
import Modal from "../ui/Modal/Modal";
import { useState } from "react";
import TaskForm from "./TaskForm/TaskForm";

export default function Tasks() {

    const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);

    return(
        <>
            <div className={styles['tasks-header']}>
                <h2>Tasks</h2>
                <Button onClick={() => setIsNewTaskModalOpen(true)}>New Task</Button>
            </div>
            <TasksList />
            <Modal isOpen={isNewTaskModalOpen} setIsOpen={setIsNewTaskModalOpen} title={'New task'}>
                <TaskForm closeModal={() => setIsNewTaskModalOpen(false)} />
            </Modal>
        </>
    )    
}