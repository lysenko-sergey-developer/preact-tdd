import { h } from 'preact';
import { Route, Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';
import Login from '../routes/login';

const App = () => (
	<div id="app">
        <Header />
        <Router>
            <Route path="/" component={Home} />
            <Route path="/profile/" component={Profile} user="me" />
            <Route path="/profile/:user" component={Profile} />
            <Route path="/login" component={Login} />
        </Router>
    </div>
);

export default App;
