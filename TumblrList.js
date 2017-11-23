import React from 'react';
import { StyleSheet, FlatList, Text, View} from 'react-native';
import TumblrPost from './TumblrPost.js';


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'    
  },  
  list: {
    flex: 1,
    height: 600,
    backgroundColor: '#fff'
  }  
});

export default class TumblrList extends React.Component {
  render() {
    return (
      <View>
        <FlatList
          style={styles.list}
          data={this.props.posts}
          keyExtractor={(post) => post.id}
          renderItem={(post) => <TumblrPost key={post.id} {...post} />}
          contentContainerStyle={styles.container}
          refreshing={this.props.loading} />
      </View>
    )
  }
}