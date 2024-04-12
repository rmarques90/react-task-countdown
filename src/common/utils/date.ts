export function timeToSeconds(time: string): number {
    const [hours = 0, minutes = 0, seconds] = time.split(':').map(Number)
    return hours * 3600 + minutes * 60 + seconds
}