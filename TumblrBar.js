import React from 'react';
import {Button, Text, Image, View, TouchableHighlight} from 'react-native';

// import '../css/InstaBar.css';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',    
    borderBottomWidth: 1,
    height: 50,
    width: '100%',
    backgroundColor: '#eee'    
  },
  centerButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  }
};

export default class TumblrBar extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.centerButton}>Tumblr</Text>
      </View>
    );
  }
}