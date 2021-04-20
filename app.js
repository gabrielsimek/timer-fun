function startTimer(duration, display, callback) {
   
  // the timer is basically an interval that is subtracting from and displaying the number (duration) we pass in as an argument. most of the stuff is just turning seconds into minutes and seconds so it looks nicer.
    var myInterval = setInterval(function() {
        console.log(duration);

  //break down seconds into minutes and seconds
        let minutes = Math.floor(duration / 60);

  //seconds / 60 = minutes. round down to get rid of all the xtra digits. 

        let seconds = Math.floor(duration % 60);

      //same deal with seconds. but the amount of seconds is whatever is left after we divide into minutes. remainder modulo divides duration by 60 (minutes) and returns the remainder which will be the seconds. 60 / 60 = 0. remainder is 60.
    
        if (minutes < 10){
            minutes = '0' + minutes;
        } 
  // want the timer to display a zero in front of the minutes if they are less than 10. 
        if (seconds < 10){
            seconds = '0' + seconds;
        }
    // same deal with the seconds
   
        --duration;
    //subtract 1 from the duration on every interval. since intervals are set to one 1000ms in practice 1 is subtracted every second.


        display.textContent = minutes + ':' + seconds;
  //display the current duration  in minutes and seconds in HTML. updates every second.
     
    //if the duration is less than 0 time is up. Clear the interval to stop it from going into negatives (or resetting  like in the org code.)
        if (duration < 0) {
            clearInterval(myInterval);
            console.log('times out');
            callback();

        //call whatever function is passed in as an argument to the timer function.
        }
        

    }, 1000);
}
  

const input = document.getElementById('timer-input');
const button = document.getElementById('start-timer');
button.addEventListener('click', () => {
    const time = Number(input.value);
    const display = document.querySelector('#time');
    startTimer(time, display, function() {
        alert('times up');
    });
});
