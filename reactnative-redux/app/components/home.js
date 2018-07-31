'use strict';

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions';

class Home extends Component {
  constructor(props){
    super(props);
    this.state={
    }; // this.stateは空だがthis.props.getDataにはApp.jsから渡されたstoreが格納されている
  }
  componentDidMount(){
  }
  render() {
    if (this.props.loading){
      return (
        <View style={{backgroundColor: '#000000'}}>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <View style={{flex:1,backgroundColor: '#FF0000',paddingTop:20}}>
          <Text>aaa</Text>
          <FlatList
            ref='listRef'
            data={this.props.data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index} />
        </View>
      );
    }
    renderItem = ({item,index}) => {
      <View style={styles.row}>
        <Text style={styles.title}>
        </Text>
        <Text style={styles.description}>
            {item.description}
        </Text>
      </View>
   }
  }
};

function mapStateToProps(state,props) { // stateにはreturnに記述したオブジェクトに加えてcombineReducersに記述したreducerが入っている
  return {
    loading: false,
    data: ''
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  activityIndicatorContainer:{
      backgroundColor: "#fff",
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
  },

  row:{
      borderBottomWidth: 1,
      borderColor: "#ccc",
      padding: 10
  },

  title:{
      fontSize: 15,
      fontWeight: "600"
  },

  description:{
      marginTop: 5,
      fontSize: 14,
  }
});
