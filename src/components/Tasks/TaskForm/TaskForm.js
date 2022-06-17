import { useContext } from "react";
import { useState } from "react";
import { TasksContext } from "../../../context/TasksContext";
import Button from "../../ui/Button/Button";
import Field from "../../ui/Field/Field";

export default function TaskForm({closeModal, value, index}) {


    const [formValue, setFormValue] = useState(value ? value :{
        title: '',
        description: ''
    })

    const { addTask, editTask } = useContext(TasksContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value && !isNaN(+index)) {
            editTask({
                taskIndex: index,
                task: formValue
            });
        } else {
            addTask({
                ...formValue,
                createdAt: new Date(),
                isDone: false
            });
        }
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