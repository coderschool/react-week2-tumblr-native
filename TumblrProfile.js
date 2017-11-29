import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import HTMLView from 'react-native-htmlview';


const styles = {
  container: {
    marginVertical: 20,
  },
  image: {
    width: 350,
    height: 400
  },
  webview: {
    width: 200,
    height: 100
  }
}

export default class TumblrProfile extends React.Component {
  render() {
    const props = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Image 
          style={styles.image}
          source={{uri: props.photos[0].original_size.url}}
        />
        <View style={styles.webview}>
          <HTMLView          
            value={props.caption} />
        </View>
      </View>
    )
  }
}