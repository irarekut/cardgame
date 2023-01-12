let minutes = 0;
let seconds = 0;

const tick = () => {
    seconds++;
    if (seconds >= 60) {
        minutes++;
        seconds = 0;
        if (minutes >= 60) {
            minutes = 0;
        }
    }
};

const getSeconds = function () {
    return seconds;
};

const getMinutes = function () {
    return minutes;
};

const resetTime = function () {
    seconds = 0;
    minutes = 0;
};

module.exports = { tick, getSeconds, getMinutes, resetTime };
