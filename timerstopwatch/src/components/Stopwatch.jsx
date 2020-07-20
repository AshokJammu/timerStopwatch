import React from "react";
// import Footer from "./Footer";

class Stopwatch extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     millisec: 0,
  //     isRunning: false
  //   };
  //   // this.time;
  // }

  // togglePause = () => {
  //   this.setState(
  //     {
  //       isRunning: !this.state.isRunning
  //     },
  //     this.timerHandler
  //   );
  // };

  // timerHandler = () => {
  //   console.log(this.state.isRunning);
  //   if (this.state.isRunning) {
  //     this.time = setInterval(() => {
  //       this.setState({
  //         millisec: this.state.millisec + 10
  //       });
  //     }, 10);
  //   } else {
  //     clearInterval(this.time);
  //   }
  // };

  // timerReset = () => {
  //   clearInterval(this.time);
  //   this.setState({
  //     millisec: 0,
  //     isRunning: false
  //   });
  // };

  // getTimeInFormat = () => {
  //   const { millisec } = this.state;
  //   let sec, min, hour,ms;
  //   ms = Math.floor((millisec / 10) % 100);
  //   sec = Math.floor((millisec / 1000) % 60);
  //   min = Math.floor((millisec / (60 * 1000)) % 60);
  //   hour = Math.floor((millisec / (60 * 60 * 1000)) % 24);
  //   console.log(sec, min, hour);
  //   return `${hour < 10 ? "0" + hour : hour} : ${
  //     min < 10 ? "0" + min : min
  //   } : ${sec < 10 ? "0" + sec : sec} : ${ms < 10 ? "0" + ms : ms}`;
  // };
  // componentWillUnmount() {
  //   this.timerReset();
  // }
  // render() {
  //   const { isRunning, millisec } = this.state;
  //   const { isActive } = this.props;
  //   const style = { display: isActive === "stopwatch" ? "" : "none" };
  //   return (
  //     <div style={style}>
  //       <h3>{this.getTimeInFormat()}</h3>
  //       <Footer
  //         active={isRunning}
  //         toggle={this.togglePause}
  //         reset={this.timerReset}
  //       />
  //     </div>
  //   );
  // }

  constructor(props){
    super(props)
    this.state={
        start:0,
        time:0,
        isComplete:false
    }
}

startTime=()=>{
    // console.log("ash")
    this.setState({
        isComplete:true,
        time:this.state.time,
        start:Date.now()-this.state.time
    })
     this.timerId = setInterval(()=>
        this.setState({
            time:Date.now()-this.state.start
        }),10)
        console.log(Date.now())      
}

stopTime=()=>{
    console.log("kumar")
    this.setState({
        isComplete:false
    })
    clearInterval(this.timerId)
}

resetTime=()=>{
    console.log("Jammu")
    clearInterval(this.timerId)
    this.setState({
        time:0,
        start:0
    })
}

render(){
    // const { time} = this.state;
    let total = this.state.time
    let hours = ("0" + Math.floor(total / 3600000)) ;
    let minutes = ("0" + (Math.floor(total / 60000) % 60)) ;
    let seconds = ("0" + (Math.floor(total / 1000) % 60)).slice(-2);
    let milliseconds = ("0" + (Math.floor(total / 10) % 100)).slice(-2);

    // var total = Number(h * 3600) + Number(m * 60) + Number(s);
    // var hours = Math.floor(total / 60 / 60);
    // var minutes = Math.floor(total / 60) - hours * 60;
    // var seconds = Math.floor(total % 60);
    // var milliseconds = Math.floor(total/10);
    return (
        <>
            <h1>StopWatch</h1>
            <div>
                 <h3>Timer:{hours}:{minutes}:{seconds}:{milliseconds}</h3>
            </div>
            <div>
            {/* {this.state.isComplete === true && this.state.time} */}
            <button onClick={this.startTime}>Start</button>
            <button onClick={this.stopTime}>Stop</button>
            <button onClick={this.resetTime}>Reset</button>        
            <style jsx>
          {`
            button {
              flex: 1;
              padding: 10px;
              font-size: 16px;
            }
          `}
        </style>       
            </div>
        </>
    )
}
}

export default Stopwatch;
