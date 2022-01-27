export default class Clock {

  constructor() {

  }

  method = () => {

    console.log("ciao");

    this.date = new Date();
    this.hours = this.date.getHours();
    this.mins = this.date.getMinutes();
    this.secs = this.date.getSeconds();

    if (this.hours < 10) this.hours = 0 + this.hours;
    if (this.mins < 10) this.mins = 0 + this.mins;
    if (this.secs < 10) this.secs = 0 + this.secs;

    console.log(this.hours + ":" + this.mins + ":" + this.secs);

  }

  stop = () => {
    clearInterval(this.interval);
  }

  start = () => {
    this.interval = setInterval(this.method(), 1000);
  }

}



