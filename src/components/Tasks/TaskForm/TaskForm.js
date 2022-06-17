import Button from "../../ui/Button/Button";
import Field from "../../ui/Field/Field";

export default function TaskForm() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <Field label='Title' validation={{length: 5, required: true}} />
            <Field label='Description' type="textarea" />
            <Button type={'submit'}>Save</Button>
        </form>
    )
}