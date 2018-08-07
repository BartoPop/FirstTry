import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import Clock from './clock/Clock';
import Products from './Products';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {

    public render() {
        return <div>
            <Products></Products>
        </div>;
    }
}