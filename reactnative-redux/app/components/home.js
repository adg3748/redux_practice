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
    this.state={};
  }
  conponentDidMount(){
    this.props.getData();
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
          <FlatList
            ref='listRef'
            data={this.props.data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index} />
        </View>
      );
    }
    renderItem = ({item,index}) => {
      <View>
      </View>
    }
  }
};

function mapStateToProps(state,props) {
  return {
    loading: false,
    data: '',
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
