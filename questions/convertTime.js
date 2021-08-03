/**
 The function takes number of seconds as input and return an object with keys 
 hours
 minutes
 seconds
 The value corresponding to each key should be the conversion of seconds into correponding 
 time 
 */

const convertTime = (seconds) => {
    if(isNaN(seconds)){
        throw new Error('Invalid Input');
    }
    let hours = Math.floor(seconds/3600);
    seconds = hours%3600;
    let minutes = Math.floor(seconds/60);
    seconds = minutes%60

    return {'hours': hours, 'minutes': minutes, 'seconds':seconds}
};

module.exports = convertTime;
