/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/MainMenu/MainMenu.tsx
*/

import React from 'react'
import './MainMenu.scss'

import Container from '@material-ui/core/Container';
import { Box, Button, Color, Grid, PropTypes, Typography } from '@material-ui/core';

export default class MainMenu extends React.PureComponent<IMainMenuProps, IMainMenuState> {

  constructor(props: IMainMenuProps) {
    super(props);
    this.state = {
      title: "Shocked and Disgusted",
      buttons: ["Display an article", "Display an action", "Display a donation"]
    }
  }

  // If you need 'shouldComponentUpdate' -> Refactor to React.Component
  // Read more about component lifecycle in the official docs:
  // https://reactjs.org/docs/react-component.html

  /*
  public shouldComponentUpdate(nextProps: IMyPageProps, nextState: IMyPageState) {
    // invoked before rendering when new props or state are being received.
    return true // or prevent rendering: false
  } */

  static getDerivedStateFromProps:
    React.GetDerivedStateFromProps<IMainMenuProps, IMainMenuState> = (props: IMainMenuProps, state: IMainMenuState) => {
      // invoked right before calling the render method, both on the initial mount and on subsequent updates
      // return an object to update the state, or null to update nothing.
      return null
    }

  public getSnapshotBeforeUpdate(prevProps: IMainMenuProps, prevState: IMainMenuState) {
    // invoked right before the most recently rendered output is committed
    // A snapshot value (or null) should be returned.
    return null
  }

  componentDidUpdate(prevProps: IMainMenuProps, prevState: IMainMenuState, snapshot: IMainMenuSnapshot) {
    // invoked immediately after updating occurs. This method is not called for the initial render.
    // will not be invoked if shouldComponentUpdate() returns false.
  }

  getColorForPosition(x: number): PropTypes.Color {
    let colors: string[] = ["primary", "secondary", "default"]
    if (x < colors.length) {
      return colors[x] as PropTypes.Color;
    }
    return colors[0] as PropTypes.Color;
  }

  render() {
    return (

      <Grid container spacing={1} alignItems="center" justify="center">
        <Grid item xs={12}>
          <Typography variant="h4" component="h1" gutterBottom>
            {this.state.title}
          </Typography>
        </Grid>

        {
          this.state.buttons.map((item, index) => (
            <Grid item xs={8} md={4}>
              <Box my={2}>
              <Button variant="contained" fullWidth={true} color={this.getColorForPosition(index)}>{item}</Button>
              </Box>
            </Grid>
          ))
        }
      </Grid>

      // <div className="MainMenu">
      //   {this.state.primaryButtonName}
      // </div>
    )
  }
}

interface IMainMenuProps {
  // TODO
}

interface IMainMenuState {
  title: string,
  buttons: string[]
}

interface IMainMenuSnapshot {
  // TODO
}