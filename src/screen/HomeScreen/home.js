import React from "react";
import { View, Text, FlatList, Image, Button } from 'react-native'
import { styles } from './style.js'

import { connect } from "react-redux";
import apiCall from "../../Axios";

class Home extends React.Component {
  componentDidMount() {
    this.props
      .apiCall("https://jsonplaceholder.typicode.com/posts")
  }

  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{
        uri: 'https://picsum.photos/200/300'
      }}
        style={{ width: 40 }}
      />
      <View style={styles.column}>
        <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.subTitle} numberOfLines={1}>{item.body}</Text>
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.data}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  apiCall: url => dispatch(apiCall(url))
});

const mapStateToProps = state => ({
  data: state.apiReducer.data,
  error: state.apiReducer.error,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);