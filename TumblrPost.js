import React from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
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

export default class TumblrPost extends React.Component {
  render() {
    return (
      <TouchableHighlight onPress={() => this.props.loadProfile()}>
        <View style={styles.container}>
          <Image 
            style={styles.image}
            source={{uri: this.props.photos[0].original_size.url}}
          />
        </View>
      </TouchableHighlight>
    );
  }
}
