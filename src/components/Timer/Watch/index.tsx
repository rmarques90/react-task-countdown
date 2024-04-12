import style from './Watch.module.scss';

interface Props {
    time: number | undefined
}

export default function Watch({time = 0}: Props) {

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minutesFirst, minutesSecond] = minutes.toString().padStart(2, '0');
    const [secondsFirst, secondsSecond] = seconds.toString().padStart(2, '0');

    return (
        <>
            <span className={style.watchNumber}>{minutesFirst}</span>
            <span className={style.watchNumber}>{minutesSecond}</span>
            <span className={style.watchDivision}>:</span>
            <span className={style.watchNumber}>{secondsFirst}</span>
            <span className={style.watchNumber}>{secondsSecond}</span>
        </>
    )
}