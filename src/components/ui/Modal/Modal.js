import styles from './Modal.module.css';
import Button from '../Button/Button';
import { createPortal } from 'react-dom';

export default function Modal({variant = 'primary', isOpen = false, setIsOpen, title = 'Default modal title', children}) {

    return createPortal(
        <>
            {
                isOpen &&
                <div className={styles.overlay}>
                    <div className={styles.modal}>
                        <div className={styles['modal-header']}>
                            <h3 className={styles[`text-${variant}`]}>{title}</h3>
                            <Button variant={'danger'} onClick={() => setIsOpen(false)}>Close</Button>
                        </div>
                        <div className={styles['modal-content']}>
                            {children}
                        </div>
                    </div>
                </div>
            }
        </>,
        document.body
    )
}