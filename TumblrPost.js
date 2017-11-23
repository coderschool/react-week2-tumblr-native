import React from 'react';
import {View, Text, Image, WebView} from 'react-native';

const styles = {
  container: {
    marginVertical: 20,
  },
  image: {
    width: 400,
    height: 200
  },
  webview: {
    width: '100%',
    height: 100
  }
}

export default class TumblrPost extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={styles.image}
          source={{uri: this.props.item.photos[0].original_size.url}}
        />
        <Text>{this.props.item.caption}</Text>
      </View>
    );
  }
}
