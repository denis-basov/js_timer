class Timer{

    constructor(durationInput, startButton, pauseButton){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause); 
    }

    start = () => { // start timer
        this.tick();
        this.interval = setInterval(this.tick, 1000);
    }

    pause = () => { // pause timer
        clearInterval(this.interval);
    }

    tick = () => { // one timer tick
        console.log('tick');
    }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);