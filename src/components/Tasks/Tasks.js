import Button from "../ui/Button/Button";
import TasksList from "./TasksList/TasksList";
import styles from './Tasks.module.css';

export default function Tasks() {

    return(
        <>
            <div className={styles['tasks-header']}>
                <h2>Tasks</h2>
                <Button>New Task</Button>
            </div>
            <TasksList />
        </>
    )    
}