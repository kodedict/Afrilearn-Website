import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Route, Switch} from "react-router-dom";
import './index.css';
import App from './App';


const SiteDomain = () => (
    <Router>
            <Switch>
                <Route exact path={'/'} component={App} />
            </Switch>
    </Router>
);

ReactDOM.render(<SiteDomain />, document.getElementById('root'));

