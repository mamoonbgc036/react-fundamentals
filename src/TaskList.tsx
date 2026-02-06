import TaskItem from './TaskItem';
const tasks = [
    { id: 1, title: "Learn React" },
    { id: 2, title: "Practice TypeScript" },
    { id: 3, title: "Build Todo App" }
];

export default function TaskList() {
    return (
        <ul>
            {tasks.map(task => <TaskItem key={task.id} {...task} />)}
        </ul>
    )
}