import React from "react";
import { View, Text, FlatList, Image, Button } from 'react-native'
import { styles } from './style.js'

class Home extends React.Component {

  state = {
    DATA: [{ title: 'ehjjfhe', body: 'efjehj' }
    ]
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("djshdjshd", json)
        this.setState({ DATA: json })
      })
      .catch((error) => {
        console.error(error);
      });
  }


  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{
        uri: 'https://picsum.photos/200/300'
      }}
        style={{ width: 40 }}
      />
      <View style={styles.column}>
        <Text style={styles.title} ellipsizeMode="clip" numberOfLines={1}>{item.title}</Text>
        <Text style={styles.subTitle} ellipsizeMode="clip" numberOfLines={1}>{item.body}</Text>
      </View>
    </View>
  );

  render() {
    const { DATA } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

export default Home;