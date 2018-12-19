import React, { useState } from "react";
import PrismCode from "react-prism";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Basic from "./demos/Basic";

const styles = {
  heading: {
    marginTop: 10
  },
  content: {
    fontSize: 20,
    maxWidth: 1000,
    marginBottom: 20
  }
};

const Reselect = ({ classes }) => {
  const [basicComponents, setBasicComponents] = useState([true]);
  const addBasicComponent = () =>
    setBasicComponents([...basicComponents, true]);

  return (
    <div className={classes.content}>
      <Typography className={classes.heading} variant="h2" gutterBottom>
        What is Reselect?
      </Typography>
      <Typography className={classes.content} component="p">
        Reselect is a simple “selector” library for Redux (and others).
        Selectors can compute derived data, they are efficient (memoization) and
        are composable.
      </Typography>
      <Typography variant="h4">Reselect Example</Typography>
      <PrismCode component="pre" className="language-jsx">
        {`import { createSelector } from 'reselect';

const shopItemsSelector = state => state.shop.items;

const subtotalSelector = createSelector(
  shopItemsSelector,
  items => items.reduce((acc, item) => acc + item.value, 0)
);

const data = {
  shop: {
    items: [
      { name: 'Milk', value: 150 },
      { name: 'Cheese', value: 300 }
    ]
  }
};

const subtotal = subtotalSelector(data);
`}
      </PrismCode>
      {basicComponents.map((_, i) => (
        <Basic key={i} />
      ))}
      <Button variant="contained" color="primary" onClick={addBasicComponent}>
        More usages
      </Button>
    </div>
  );
};

export default withStyles(styles)(Reselect);
