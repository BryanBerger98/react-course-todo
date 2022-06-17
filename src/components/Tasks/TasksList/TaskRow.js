export default function TaskRow({task}) {

    return(
        <tr>
            <td></td>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{new Date(task.createdAt).toLocaleDateString()}</td>
        </tr>
    )
}