import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './containers/Welcome.js'
import { Provider } from 'react-redux';
import { store } from './store/store.js'
import TabView from './containers/TabView.js'


export default class App extends Component {
  constructor(){
    super()
      this.state = {
        started: false
      }
  }

  startWorkout = () => {
    this.setState({started: true})
  }

  renderRoot(ComponentToRender){
    return(
      <Provider store={store}>
        <ComponentToRender startWorkout={this.startWorkout} />
      </Provider>
    )
  }

  render(){
    const { started } = this.state
    return started ? this.renderRoot(TabView) : this.renderRoot(Welcome)
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
