import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { withRouter, Link, Redirect } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

import Reselect from "./pages/Reselect";

const baseUrl = process.env.PUBLIC_URL;

const App = ({ classes, location }) => {
  return (
    <Fragment>
      <AppBar position="static" color="default">
        <Tabs centered value={location.pathname}>
          <Tab
            label="What is Reselect?"
            value={`${baseUrl}/reselect`}
            component={Link}
            to={`${baseUrl}/reselect`}
          />
        </Tabs>
      </AppBar>
      <Grid container justify="center">
        <Switch>
          <Route
            exact
            path={`${baseUrl}/`}
            render={() => <Redirect to={`${baseUrl}/reselect`} />}
          />
          <Route exact path={`${baseUrl}/reselect`} component={Reselect} />
        </Switch>
      </Grid>
    </Fragment>
  );
};

export default withRouter(App);
