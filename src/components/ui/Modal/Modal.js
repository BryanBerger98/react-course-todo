import styles from './Modal.module.css';
import Button from '../Button/Button';

export default function Modal({variant = 'primary', isOpen, setIsOpen}) {

    return(
        <>
            {
                isOpen &&
                <div className={styles.overlay}>
                    <div className={styles.modal}>
                        <div className={styles['modal-header']}>
                            <h3 className={styles[`text-${variant}`]}>Modal Title</h3>
                            <Button variant={'danger'} onClick={() => setIsOpen(false)}>Close</Button>
                        </div>
                        <div className={styles['modal-content']}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis possimus delectus tempora dolor? Molestiae, nostrum sed magnam delectus in, obcaecati natus repellendus officia perspiciatis error voluptatibus ut reprehenderit illo similique?
                            </p>
                        </div>
                        <div className={styles['modal-footer']}>
                            <Button variant={variant}>Save</Button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}