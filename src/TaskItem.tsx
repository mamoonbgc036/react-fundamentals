type Task = {
    id: number,
    title: string
}

function TaskItem(task: Task) {
    return (
        <li key={task.id}>{task.title}</li>
    )
}

export default TaskItem;