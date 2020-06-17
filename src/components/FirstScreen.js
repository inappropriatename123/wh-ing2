import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { Layout } from './Layout';
import { NavigationBar } from './NavigationBar';
import Task from './Task';

export function FirstScreen() {
    return (
        <React.Fragment>
            { console.log("FirstScreen.js cargado") }
            <Router>
            <NavigationBar/>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/proyects/:id" component={Task} />
                        <Route component={NoMatch} />
                    </Switch>
                </Layout>
            </Router>
        </React.Fragment>
    )
}
