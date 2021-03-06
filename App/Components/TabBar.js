'use strict';

import React, {
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

import Main from './Main';
import Friends from './Friends';
import Profile from './Profile';
import Map from './Map';
import MapboxMap from './MapboxMap';

class TabBar extends React.Component {
  constructor(){
    super();
    this.state = {
      selectedTab: 'tabOne'
    }
  }
  setTab(tabId){
    this.setState({selectedTab: tabId})
  }
  render(){
    return (
      <TabBarIOS
        tintColor='#498183'
      >
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'tabOne'}
          onPress={() => this.setTab('tabOne')}
          title="Friends"
          icon={require("../Images/friends.png")}>
          <Friends {...this.props} />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'tabTwo'}
          onPress={() => this.setTab('tabTwo')}
          title="Profile"
          icon={require("../Images/profile.png")}>
            <View style={styles.tabContent}>
            <Profile {...this.props} />
            </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'tabThree'}
          onPress={() => this.setTab('tabThree')}
          title="Connection"
          icon={require("../Images/map.png")}>
            <View style={styles.tabContent}>
            <MapboxMap {...this.props} />
            </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center'
  },
  tabText: {
    color: 'white',
    margin: 50,
    fontSize: 45
  }
});


module.exports = TabBar;
