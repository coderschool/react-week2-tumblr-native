import React from 'react';
import {View, Text, Image} from 'react-native';
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
      <View style={styles.container}>
        <Image 
          style={styles.image}
          source={{uri: this.props.item.photos[0].original_size.url}}
        />
        <View style={styles.webview}>
          <HTMLView          
            value={this.props.item.caption} />
        </View>
      </View>
    );
  }
}
