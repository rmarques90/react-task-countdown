import Watch from "./Watch";
import Button from "../Button";
import style from './Timer.module.scss';
import ITask from "../../types/ITask";
import {timeToSeconds} from "../../common/utils/date";
import {useEffect, useState} from "react";

interface Props {
    selectedTask: ITask | undefined,
    completeTask: () => void
}

export default function Timer({selectedTask, completeTask}: Props) {

    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (selectedTask?.time) {
            const time = timeToSeconds(selectedTask.time);
            setTime(time);
        }
    },[selectedTask])

    function countdown(counter: number | undefined) {
        if (counter === undefined) {
            return;
        }
        setTimeout(() => {
            if (counter > 0) {
                setTime(counter - 1);
                return countdown(counter - 1);
            }
            completeTask();
        }, 1000);
    }

    return (
        <div className={style.timer}>
            <p className={style.title}>Pick a task to start the timer</p>
            <div className={style.watchWrapper}>
                <Watch time={time} />
            </div>
            <Button text={"Start"} onClick={() => countdown(time)} />
        </div>
    )
}