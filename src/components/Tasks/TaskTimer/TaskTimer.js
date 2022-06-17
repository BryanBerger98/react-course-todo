import { useEffect } from 'react';
import Button from '../../ui/Button/Button';
import styles from './TaskTimer.module.css';
import useTimer from '../../../hooks/useTimer';
import { useContext } from 'react';
import { TasksContext } from '../../../context/TasksContext';
import PropTypes from 'prop-types';

export default function TaskTimer({index, onCloseModal}) {

    const { editTask } = useContext(TasksContext)
    const { startTimer, stopTimer, getTimeAsHms } = useTimer();

    useEffect(() => {
        startTimer();
    }, [startTimer, stopTimer, editTask, index])

    const handleStopTimer = () => {
        const { time } = stopTimer();
        editTask({taskIndex: index, task: {time}});
        onCloseModal();
    }

    return(
        <div className={styles['timer-container']}>
            <p className={styles.timer}>{getTimeAsHms()}</p>
            <Button onClick={handleStopTimer}>Stop</Button>
        </div>
    )

}

TaskTimer.propTypes = {
    index: PropTypes.number,
    onCloseModal: PropTypes.func
};