import React from "react";
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style.js'
import { connect } from "react-redux";
import { actionUserCreator } from "../../Axios";

class Login extends React.Component {

  state = {
    email: "shanna@melissa.tv",
    password: "12345",
    emailError: '',
    passwordError: ''
  }

  componentDidMount() {
    this.props.actionUserCreator("https://jsonplaceholder.typicode.com/users")
  }
  onSubmit = () => {
    const userList = this.props.user.map((item) => item.email.toLowerCase())
    const { email, password } = this.state
    if (userList.includes(email.toLowerCase()) && password.toLowerCase() === '12345') {
      this.props.navigation.push('HomeScreen')
    } else {
      this.setState({ emailError: 'Email required.' })
      this.setState({ passwordError: 'Password required.' })
    }
  }

  render() {
    const { email, password } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Demo App</Text>
        <View style={styles.inputView} >
          <TextInput
            value={email}
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
            value={password}
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


const mapDispatchToProps = dispatch => ({
  actionUserCreator: (url) => dispatch(actionUserCreator(url))
});

const mapStateToProps = state => ({
  user: state.apiUserReducer.user,
  error: state.apiUserReducer.error,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);