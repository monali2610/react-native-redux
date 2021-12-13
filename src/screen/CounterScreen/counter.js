import React, { Component } from 'react';
import {
  View,
  Button,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import * as changeCount from '../../Redux/Actions/counts';
import { bindActionCreators } from 'redux';
import { styles } from './style'

class CounterScreen extends Component {

  decrementCount() {
    let { count, actions } = this.props;
    count++;
    actions.changeCount(count);
  }

  incrementCount() {
    let { count, actions } = this.props;
    count++;
    actions.changeCount(count);
  }

  render() {
    const { count } = this.props;
    return (
      <View styles={styles.container}>
        <Button
          title="increment"
          onPress={() => this.incrementCount()}
        />
        <Text style={styles.textColor}>{count}</Text>
        <Button
          title="decrement"
          onPress={() => this.decrementCount()}
        />
      </View>
    );
  }
};

//for get value from store actions
const mapStateToProps = state => ({
  count: state.count.count,
});

const ActionCreators = Object.assign(
  {},
  changeCount,
);
//for store value on actions
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

//connnect state and dispatch props
export default connect(mapStateToProps, mapDispatchToProps)(CounterScreen)
