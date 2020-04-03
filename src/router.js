import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import TodoListPage from './routes/todoListPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/todo" exact component={TodoListPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
