import { useState } from "react";
import Button from "../../ui/Button/Button";
import Field from "../../ui/Field/Field";

export default function TaskForm({closeModal}) {

    const [formValue, setFormValue] = useState({
        title: '',
        description: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValue);
        closeModal();
    }

    return(
        <form onSubmit={handleSubmit}>
            <Field label='Title' validation={{length: 5, required: true}} value={formValue.title} onChange={(value) => setFormValue({...formValue, title: value})} />
            <Field label='Description' type="textarea" value={formValue.description} onChange={(value) => setFormValue({...formValue, description: value})} />
            <Button type={'submit'}>Save</Button>
        </form>
    )
}