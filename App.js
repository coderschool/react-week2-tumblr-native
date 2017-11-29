import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TumblrBar from './TumblrBar.js';
import TumblrList from './TumblrList.js';
import TumblrProfile from './TumblrProfile.js';
import { StackNavigator } from 'react-navigation';

const apiKey = 'gh1JZAxxWZ10YxY24wSdDnxGnR4gTgIkFeaftcbHDoKBiiAqBp';

const Routes = StackNavigator({
  TumblrList: { screen: TumblrList },
  TumblrProfile: { 
    screen: TumblrProfile,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.blog_name}`
    })
  }
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.loadMore = this.loadMore.bind(this);
    this.state = {
      posts: [],
      page: 0,
      loading: true
    }
  }

  fetchWithPage(page) {
    this.setState({
      loading: true
    }, () => {
      fetch(`https://api.tumblr.com/v2/blog/artmakr/posts/photo?api_key=${apiKey}&limit=4&offset=${page * 4}`)
        .then((data) => data.json())
        .then((json) => {
          this.setState({
            posts: this.state.posts.concat(json.response.posts),
            loading: false
          });
        });
    });
  }

  componentWillMount(props) {
    this.fetchWithPage(0);
  }

  loadMore() {
    const newPage = this.state.page + 1;
    this.setState({
      page: newPage
    });
    this.fetchWithPage(newPage);
  }

  render() {
    return (
      <Routes
        style={styles.container}
        screenProps={{
          loading: this.state.loading,
          loadMore: this.loadMore,
          posts: this.state.posts
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },
  barWrapper: {
    top: 65,
  },
  mainWrapper: {
    backgroundColor: '#ddd',
    top: 65
  }  
});
