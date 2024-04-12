import React from 'react';
import Button from "../Button";
import style from './form.module.scss';
import ITask from '../../types/ITask';
import { v4 as uuidv4 } from 'uuid';

class Form extends React.Component<{
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}> {
    state = {
        name: "",
        time: "00:00:00"
    }

    addNewTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.setTasks((prevTasks) => [...prevTasks, {...this.state, selected: false, completed: false, id: uuidv4()}]);
        this.setState({
            name: "",
            time: "00:00:00"
        })
    }

    render() {
        return (
            <form className={style.newTask} onSubmit={this.addNewTask.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="task-name">
                        Task
                    </label>
                    <input
                        type="text"
                        id="task-name"
                        name="task-name"
                        required
                        value={this.state.name}
                        onChange={(event) => {
                            this.setState({...this.state, name: event.target.value})
                        }}
                        placeholder="Type the task name..."
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor={"time"}>
                        Time
                    </label>
                    <input type={"time"}
                           step={"1"}
                           name={"time"}
                           id={"time"}
                           value={this.state.time}
                           onChange={(event) => {
                                 this.setState({...this.state, time: event.target.value})
                           }}
                           min={"00:00:00"}
                           max={"01:30:00"} required />
                </div>
                <Button text={"Save"} type={"submit"} />
            </form>
        );
    }
}

export default Form;