import React from 'react';
import { StyleSheet, ScrollView, Text, View} from 'react-native';
import TumblrPost from './TumblrPost.js';


const styles = StyleSheet.create({
  container: {
    paddingVertical: 0
  }
});

const TEST_DATA = require('./data.json');

export default class TumblrList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: TEST_DATA.response.posts
    }
  }

  render() {
    const posts = this.state.posts.map((post) => {
      return (<TumblrPost key={post.id} {...post}/>);
    });

    return (
      <View>
        <ScrollView contentContainerStyle={styles.container}>
          {posts}
        </ScrollView>
      </View>
    )
  }
}