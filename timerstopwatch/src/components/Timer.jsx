import React from 'react'
// import Footer from './Footer'
class Timer extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.state={

    //     }
    // }

    // render(){
    //     return(
    //         <>
    //            <h3>Timer</h3>
    //            <Footer/>
    //         </>
    //     )
    // }

    constructor(props) {
        super(props);
        this.state = {
            hrs: 0,
            mins: 0,
            secs: 0,
            timer: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleStart() {
        if (this.state.hrs > 0 || this.state.mins > 0 || this.state.secs > 0) {
            this.setState({
                timer: !this.state.timer
            })
        }
    }

    handleStop() {
        this.setState({
            timer: !this.state.timer
        })
    }
    handleReset() {
        this.setState({
            hrs: 0,
            mins: 0,
            secs: 0,
            timer: false

        })
    }
    handleChange(event) {
        this.setState(
            {
                [event.target.name]: Number(event.target.value)
            });
    }
    componentDidMount() {
        this.tick()
    }

    tick = () => {
        setInterval(() => {
            if (this.state.timer) {
                if (this.state.secs === 0 && this.state.mins > 0) {
                    this.setState({
                        secs: 59,
                        mins: this.state.mins - 1
                    });
                }
                else if (this.state.secs > 0) {
                    this.setState({
                        secs: this.state.secs - 1
                    })
                }
                if (this.state.mins === 0 &&  this.state.secs===0 && this.state.hrs > 0) {
                    this.setState({
                        mins: 59,
                        secs:59,
                        hrs: this.state.hrs - 1,
                    });
                }
                else if (this.state.secs === 0 && this.state.mins > 0) {
                    this.setState({
                        secs: 59,
                        mins: this.state.mins - 1
                    })
                }
                if (this.state.secs === 0 && this.state.mins === 0 && this.state.hrs === 0) {
                    this.setState({ timer: false })
                }
            }
        }, 1000);
    }
    render() {
        return (
            <div>
                <div>
                    <div>
                        <label>
                            Hours:
                                <input name="hrs"
                                type="number" value={this.state.value}
                                onChange={this.handleChange}
                            />
                        </label>
                        <label>
                            Minutes:
                            <input name="mins" type="number" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <label>
                            Seconds:
            <input name="secs" type="secs" value={this.state.value} onChange={this.handleChange} />
                        </label>
                    </div>
                    <h2>{this.state.hrs}:{this.state.mins}:{this.state.secs}.</h2>
                    <div>
                        <div  style={{
          display: "flex"
        }}>
                            {this.state.timer ? (
                                <button onClick={this.handleStop}  >
                                    Pause
                                </button>
                            ) : (
                                    <button onClick={this.handleStart} >
                                        Start
                                    </button>
                                )}
                            <button onClick={this.handleReset}  >
                                Reset
                    </button>
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
                    </div>
                </div>
            </div>
        );
    }
}

export default Timer