import * as React from 'react';
import { LabFesState } from './store';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { Router, Switch, Route,  } from 'react-router';
import { History } from "history";
import Home from './view/Home'

interface MainProps {
    store: Store<LabFesState>;
    history: History
}

const Main: React.FC<MainProps> = ({ store, history }) => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        </Provider>
    );
}

export default Main
