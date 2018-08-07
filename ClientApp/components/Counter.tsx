import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import Products from './Products';

interface CounterState {
    currentCount: number;
}

export class Counter extends React.Component<RouteComponentProps<{}>, CounterState> {
    constructor() {
        super();
        this.state = { currentCount: 0 };
    }

    public render() {
        return <div>
            <h1>Counter</h1>

            <p>This is a simple example of a React component.</p>

            <p>Current count: <strong>{this.state.currentCount}</strong></p>

            <Products></Products>
        </div>;
    }

    private incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }
}
