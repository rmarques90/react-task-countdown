import React from 'react';
import style from "./ListItem.module.scss";

import ITask from "../../../types/ITask";

interface Props extends ITask {
    selectTask: (selectedTask: ITask) => void
}

export default function ListItem({name, time, selected, completed, id, selectTask}: Props) {

    return (
        <li className={`${style.item} ${selected ? style.itemSelected : ''} ${completed ? style.itemFinished: ''}`} onClick={() => selectTask({
            name,
            time,
            selected,
            completed,
            id
        })}>
            <h3>{name}</h3>
            <span>{time}</span>
            {completed && <span className={style.finished} aria-label={"finished-task"}></span>}
        </li>
    )
}