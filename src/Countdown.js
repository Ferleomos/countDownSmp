import React from 'react';
import './Countdown.css';

class Countdown extends React.Component {
    constructor() {
        super(); //used to call the parent constructor

        var today = new Date();
        var daysAfter = new Date();
        daysAfter.setDate(today.getDate()+3);

        this.state = {
            day: 0,
            hour: 0,
            minute: 0,
            second: 0,
            dateLimit: daysAfter
        };
    }
    componentWillMount() {
        this.applyCount(this.state.dateLimit);
    }
    
    componentDidMount() {
        setInterval(() => this.applyCount(this.state.dateLimit), 1000);
    } 

    completeFormat(n) {
        return n < 10 ? '0' + n : n;
    }

    applyCount(dateLimit) {
        const cTime = Date.parse(dateLimit) - Date.parse(new Date());
        if(cTime < 0) {
            this.setState({ day: 0, hour: 0, minute: 0, second: 0 });
        
        } else {
            //console.log(time);
            let s = Math.floor((cTime/1000)%60);
            let m = Math.floor((cTime/1000/60)%60);
            let h = Math.floor((cTime/(1000*60*60))%24);
            let d = Math.floor(cTime/(1000*60*60*24));
            this.setState({ day: d, hour: h, minute: m, second: s });
        }
    }

    render() {
      return (
        <div className="App">
            <div className="ctdnMain">
                    <div className="day ctdnChild">
                        <div className="stTypeDesc">{this.completeFormat(this.state.day)}</div>
                        <div className="ndTypeDesc">Days</div>
                    </div>
                    <div className="hour ctdnChild">
                        <div className="stTypeDesc">{this.completeFormat(this.state.hour)}</div>
                        <div className="ndTypeDesc">Hours</div>
                    </div>
                    <div className="minute ctdnChild">
                        <div className="stTypeDesc">{this.completeFormat(this.state.minute)}</div>
                        <div className="ndTypeDesc">Minutes</div>
                    </div>
                    <div className="second ctdnChild">
                        <div className="stTypeDesc">{this.completeFormat(this.state.second)}</div>
                        <div className="ndTypeDesc">Seconds</div>
                    </div>
            </div>
        </div>
      );
    }
  }

export default Countdown;