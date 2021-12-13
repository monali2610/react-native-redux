import React from "react";
import {
  ActivityIndicator,
  View,
  Image
} from 'react-native';
import { styles } from "./style";


class SplashScreen extends React.Component {
  state = {
    animating: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ animating: false });
      this.props.navigation.replace('LoginScreen')
    }, 2000);
  }
  render() {

    const { animating } = this.state
    return (
      <View style={styles.container}>
        <ActivityIndicator
          animating={animating}
          color="#FFFFFF"
          size="large"
          style={styles.activityIndicator}
        />
      </View>
    );
  }
}
export default SplashScreen;