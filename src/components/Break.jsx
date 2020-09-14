import React, { useState } from 'react';
import moment from 'moment';

const Break = () => {   
    const [breakLength, setBreakLength] = useState(300);

    const decrementBreakLengthByOneMinute = () => {
        const newBreaklength = breakLength - 60;

        if (newBreaklength < 0) {
            setBreakLength(0);
        } else {
            setBreakLength(newBreaklength);
        }
    };

    const incrementBreakLengthByOneMinute = () => {
        setBreakLength(breakLength + 60)
    };
const breakLengthInMinutes = moment.duration(breakLength, 's').minutes()
    return (
        <div>
            <p id="break-label">Break</p>
            <p id="break-length">{breakLengthInMinutes}</p>
            <button id="break-decrement" onClick={decrementBreakLengthByOneMinute}>-</button>
            <button id="break-increment" onClick={incrementBreakLengthByOneMinute}>+</button>
        </div>

    );

}

export default Break