import styles from './Button.module.css'

export default function Button({type = 'button', variant = 'primary', onClick, children}) {

    return(
        <button className={`${styles.btn} ${styles[variant]}`} type={type} onClick={onClick}>
            {children}
        </button>
    )
}