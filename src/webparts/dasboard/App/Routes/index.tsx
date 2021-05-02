import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import routes from "./routes";

const Routes = (): JSX.Element => {
  const routerRoutes = Object.keys(routes).map((key) => {
    const route = routes[key];
    return <Route path={route.path} component={route.component}></Route>
  });

  return (
    <Switch>
      {routerRoutes}
    </Switch>
  );
};

export default Routes;