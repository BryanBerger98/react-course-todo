import { useContext } from 'react';
import { TasksContext } from '../../../context/TasksContext';
import TaskRow from './TaskRow';
import styles from './TasksList.module.css';

export default function TasksList() {

    const { tasksData } = useContext(TasksContext);

    return(
        <div className={`${styles['tasks-list-container']}`}>
            <table className={`${styles['tasks-table']}`}>
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Created at</th>
                    </tr>
                </thead>
                <tbody>
                    {tasksData && tasksData.tasks && tasksData.tasks.map((task, index) => (
                        <TaskRow key={index} task={task} />
                    ))}
                </tbody>
            </table>
            {(!tasksData || !tasksData.tasks || tasksData.tasks.length === 0) && <p style={{marginTop: '1rem', marginBottom: 0, textAlign: 'center'}}>No task</p>}
        </div>
    )
}