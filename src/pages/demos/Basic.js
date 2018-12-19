import React, { memo, useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { createSelector } from "reselect";

let shopItemsSelectorCounter = 0;
let shopItemsMapperCounter = 0;

const shopItemsSelector = state => {
  shopItemsSelectorCounter++;
  return state.shop.items;
};

const subtotalSelector = createSelector(
  shopItemsSelector,
  items => {
    shopItemsMapperCounter++;
    return items.reduce((acc, item) => acc + item.value, 0);
  }
);

const generateData = () => ({
  shop: {
    items: [
      { name: "Milk", value: 150 + Math.floor(Math.random() * 10 - 5) },
      { name: "Cheese", value: 300 + Math.floor(Math.random() * 10 - 5) }
    ]
  }
});

const styles = {
  paper: {
    textAlign: "center"
  },
  button: {
    display: "block",
    margin: "0 auto"
  },
  datademo: {
    padding: 5,
    marginBottom: 20
  }
};

const Basic = ({ classes }) => {
  const [counter, setCounter] = useState(1);
  const [data, setData] = useState(generateData());
  const incrementCounter = () => setCounter(counter + 1);

  const subtotal = subtotalSelector(data);

  return (
    <Paper className={classes.datademo} elevation={1}>
      <Grid container justify="center" className={classes.root} spacing={16}>
        <Grid item md={3} lg={3}>
          <Paper className={classes.paper}>
            <Typography component="span">Subtotal: {subtotal}</Typography>
          </Paper>
        </Grid>
        <Grid item md={3} lg={3}>
          <Paper className={classes.paper}>
            <Typography component="span">
              shopItemsSelector: {shopItemsSelectorCounter}
            </Typography>
          </Paper>
        </Grid>
        <Grid item md={3} lg={3}>
          <Paper className={classes.paper}>
            <Typography component="span">
              subtotalSelector (mapper): {shopItemsMapperCounter}
            </Typography>
          </Paper>
        </Grid>
        <Grid item md={3} lg={3}>
          <Paper className={classes.paper}>
            <Typography component="span">counter: {counter}</Typography>
          </Paper>
        </Grid>
        <Grid item md={3} lg={3}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={incrementCounter}
          >
            Run Selectors
          </Button>
        </Grid>
        <Grid item md={3} lg={3}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={() => {
              setData(generateData());
              incrementCounter();
            }}
          >
            New data
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default memo(withStyles(styles)(Basic));
