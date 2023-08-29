import React, {useState, useEffect} from 'react';

function LiveClock() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const formattedTime = `${formatDigit(hours)}:${formatDigit(minutes)}:${formatDigit(seconds)}`;

    return (
        formattedTime
    );
}

function formatDigit(digit: number): string {
    return digit < 10 ? '0' + digit : digit.toString();
}

export default LiveClock;
