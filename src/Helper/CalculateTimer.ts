function calculateTimer(timeInSeconds: number): Array<number> {
    let hours: number = Math.floor(timeInSeconds / 3600);
    let minutes: number = Math.floor((timeInSeconds - (hours * 3600)) / 60);
    let seconds: number = timeInSeconds - (hours * 3600) - (minutes * 60);

    return [
        hours,
        minutes,
        seconds
    ];
}

export default calculateTimer;