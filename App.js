import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TumblrBar from './TumblrBar.js';
import TumblrList from './TumblrList.js';

const apiKey = 'gh1JZAxxWZ10YxY24wSdDnxGnR4gTgIkFeaftcbHDoKBiiAqBp';

export default class App extends React.Component {
  //https://api.tumblr.com/v2/blog/artmakr/posts/photo?api_key=
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.barWrapper}>
          <TumblrBar />
        </View>
        <View style={styles.mainWrapper}>
          <TumblrList />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  barWrapper: {
    top: 65,
  },
  mainWrapper: {
    backgroundColor: '#ddd',
    top: 65
  }  
});
