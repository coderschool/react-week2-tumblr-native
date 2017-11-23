import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TumblrBar from './TumblrBar.js';
import TumblrList from './TumblrList.js';

const apiKey = 'gh1JZAxxWZ10YxY24wSdDnxGnR4gTgIkFeaftcbHDoKBiiAqBp';

const TEST_DATA = require('./data.json');


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true
    }
  }

  componentDidMount() {
    fetch(`https://api.tumblr.com/v2/blog/artmakr/posts/photo?api_key=${apiKey}`)
      .then((data) => data.json())
      .then((json) => {
        this.setState({
          posts: json.response.posts,
          loading: false
        });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.barWrapper}>
          <TumblrBar />
        </View>
        <View style={styles.mainWrapper}>
          <TumblrList 
            loading={this.state.loading}
            posts={this.state.posts}/>
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
