import * as React from "react";
import { ClockState } from "ClientApp/components/clock/ClockTypes";

class Clock extends React.Component<{}, ClockState> {
    private intervalId: number = 0;
    public constructor(props: any) {
        super(props);
        this.state = {
            time: new Date().toLocaleString(),
        }
        this.handleClick = this.handleClick.bind(this);
    }

    public componentDidMount() {
        this.intervalId = setInterval(
            () => this.tick(),
            1000
        );
    }

    public componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    public render() {
        const time = this.state.time;
        return (<div>
            <p className="App-clock">
                The time is {time}.
      </p>
            <button onClick={this.handleClick}>
                Click
      </button>
        </div>
        );
    }

    private tick() {
        this.setState({
            time: new Date().toLocaleString()
        });
    }
    private handleClick() {
        console.log(this);
    }
}

export default Clock;