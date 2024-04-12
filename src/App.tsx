import React, {useState} from 'react';
import Form from "./components/Form";
import List from "./components/List";
import style from './style.module.scss';
import Timer from "./components/Timer";
import ITask from "./types/ITask";

function App() {
    const [tasks, setTasks] = useState<ITask[]>([])
    const [selectedTask, setSelectedTask] = useState<ITask>();

    function selectTask(selectedTask: ITask) {
        if (selectedTask.completed) {
            return;
        }
        setSelectedTask(selectedTask);
        setTasks(oldTasks => oldTasks.map(task => ({
            ...task,
            selected: selectedTask.id === task.id
        })));
    }

    function completeTask() {
        if (selectedTask) {
            setTasks(oldTasks => oldTasks.map(task => {
                if (task.id === selectedTask.id) {
                    return {
                        ...task,
                        selected: false,
                        completed: true
                    }
                }
                return task;
            }));
            setSelectedTask(undefined);
        }
    }

    return (
        <div className={style.AppStyle}>
            <Form setTasks={setTasks}/>
            <List tasks={tasks} selectTask={selectTask}/>
            <Timer selectedTask={selectedTask} completeTask={completeTask} />
        </div>
    );
}

export default App;
