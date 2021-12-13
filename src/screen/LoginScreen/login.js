import React from "react";
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style.js'

class Login extends React.Component {

  state = {
    email: "",
    password: "",
    emailError: '',
    passwordError: ''
  }

  onSubmit = () => {
    const { email, password } = this.state
    //  if (email.toLowerCase() === 'admin' && password.toLowerCase() === '12345') {
    this.props.navigation.replace('HomeScreen')
    // } else {
    //   this.setState({ emailError: 'Email required.' })
    //   this.setState({ passwordError: 'Password required.' })
    // }
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.logo}>Demo App</Text>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="white"
            onChangeText={text => this.setState({ email: text })} />
        </View>
        {!!this.state.emailError && (
          <Text style={{ color: "red", alignSelf: 'flex-start', marginLeft: '13%' }}>{this.state.emailError}</Text>
        )}
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="white"
            onChangeText={text => this.setState({ password: text })} />
        </View>
        {!!this.state.passwordError && (
          <Text style={{ color: "red", alignSelf: 'flex-start', marginLeft: '13%' }}>{this.state.passwordError}</Text>
        )}
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() => this.onSubmit()}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.signupText}>Signup</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Login;