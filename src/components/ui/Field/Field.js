import { useId, useState } from "react"
import styles from './Field.module.css'

export default function Field({label, type = 'text', placeholder, value, validation, onChange}) {

    const id = useId();
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { value } = e.target;
        if (validation) {
            if (validation.type && typeof value !== validation.type) {
                setError(`The value must be a ${validation.type}`);
            } else if (validation.required && !value) {
                setError('This field is required');
            } else if (validation.length && value.length < validation.length) {
                setError(`The value must have at least ${validation.length} characters`);
            } else {
                setError(null);
            }
        }
        onChange(value);
    }

    return(
        <div className={styles['input-group']}>
            <label htmlFor={`${id}-${label}`}>{label} {validation && validation.required && <span style={{color: '#B80C09'}}>*</span>}</label>
            {
                type === 'text' && <input type={type} id={`${id}-${label}`} value={value} placeholder={placeholder} className={styles.input} onChange={handleInputChange} />
            }
            {
                type === 'textarea' && <textarea id={`${id}-${label}`} rows={5} value={value} placeholder={placeholder} className={styles.input} onChange={handleInputChange} />
            }
            {error && <p className={styles.error}>{error}</p>}
        </div>
    )
}