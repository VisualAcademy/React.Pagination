import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

import './custom.css'
import { PagerComponent1 } from './components/Pager/PagerComponent1';
import { PagerComponent2 } from './components/Pager/PagerComponent2';
import { PagerComponent3 } from './components/Pager/PagerComponent3';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <AuthorizeRoute path='/fetch-data' component={FetchData} />
                <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
                <Route path='/pager1' component={PagerComponent1} />
                <Route path='/pager2' component={PagerComponent2} />
                <Route path='/pager3' component={PagerComponent3} />
            </Layout>
        );
    }
}
