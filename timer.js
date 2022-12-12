class Timer{

    constructor(durationInput, startButton, pauseButton, callbacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if(callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause); 
    }

    start = () => { // start timer
        if(this.onStart){
            this.onStart(this.timeRemaining);
        }
        this.tick();
        this.interval = setInterval(this.tick, 10);
    }

    pause = () => { // pause timer
        clearInterval(this.interval);
    }

    tick = () => { // one timer tick
        if(this.timeRemaining <= 0){
            this.pause();
            if(this.onComplete){
                this.onComplete();
            }
        }else{
            this.timeRemaining = this.timeRemaining - 0.01;
            if(this.onTick){
                this.onTick(this.timeRemaining);
            }
        }
        
    }


    get timeRemaining(){ // get time value
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time){ // set time value
        this.durationInput.value = time.toFixed(2);
    }
}