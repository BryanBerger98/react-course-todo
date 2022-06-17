import { useContext } from "react";
import { useState } from "react";
import { TasksContext } from "../../../context/TasksContext";
import Button from "../../ui/Button/Button";
import Field from "../../ui/Field/Field";

export default function TaskForm({closeModal}) {


    const [formValue, setFormValue] = useState({
        title: '',
        description: ''
    })

    const { addTask } = useContext(TasksContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({
            ...formValue,
            createdAt: new Date()
        });
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