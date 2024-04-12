import style from './list.module.scss';
import ListItem from "./ListItem";
import ITask from '../../types/ITask';

interface Props {
    tasks: ITask[],
    selectTask: (selectedTask: ITask) => void
}

function List({tasks, selectTask}: Props) {

    return (
        <aside className={style.taskList}>
            <h2>Tasks</h2>
            <ul>
                {tasks.map(task => (
                    <ListItem key={task.id}
                              name={task.name}
                              time={task.time}
                              selected={task.selected}
                              completed={task.completed}
                              id={task.id}
                              selectTask={selectTask}
                    ></ListItem>
                ))}
            </ul>
        </aside>
    )
}

export default List;