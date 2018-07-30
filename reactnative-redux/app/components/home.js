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
        <View>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <View style={{}}>
          <FlatList
            ref='listRef'
            data={{}}
            renderItem={{}}
            keyExtractor={(item, index) => index} />
        </View>
      );
    }
  }
};

function mapStateToProps(state,props) {
  return {
    loading: '',
    data: '',
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
