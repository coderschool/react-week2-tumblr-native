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
    const props = this.props.screenProps;
    const { navigate } = this.props.navigation;
    return (
      <FlatList
        style={styles.list}
        data={props.posts}
        keyExtractor={(post) => post.id}
        renderItem={(post) => {
          return <TumblrPost 
            key={post.index} 
            loadProfile={() => {
              return navigate('TumblrProfile', post.item);
            }}
            {...post.item} />
        }}
        contentContainerStyle={styles.container}
        onEndReachedThreshold={0.05}
        onEndReached={props.loadMore}        
        refreshing={props.loading} />
    )
  }
}