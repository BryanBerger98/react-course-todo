import TaskRow from './TaskRow';
import styles from './TasksList.module.css';

export default function TasksList() {

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
                    <TaskRow />
                </tbody>
            </table>
        </div>
    )
}