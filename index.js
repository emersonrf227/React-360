import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';

export default class Hello360 extends React.Component {

  state = {
    count: 0,
}
_increment_Count =() => { 
this.setState({count: this.state.count + 1 });
}

_dincrement_Count =() => { 
  this.setState({count: this.state.count - 1 });
  }
  

// componentDidMount(){
// (this._increment_Count, 1000); 
// }

  render() {
    return (
      <View style={styles.panel}>
      <VrButton onClick={this._increment_Count}  style={styles.greetingBox} >
      <Text style={styles.greeting}>
          Credito
        </Text>
      </VrButton>
        
        <VrButton onClick={this._dincrement_Count}  style={styles.greetingBox2} >
        <Text style={styles.greeting}>
          Debito
        </Text>
        </VrButton>
        <Text style={styles.greeting}>
           {'Minha carteira R$ ' + this.state.count}
        </Text>
      </View>
    
      
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    width: 1000,
    height: 600,
   // backgroundColor: 'rgba(255, 0, 0, 1.0)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 48,
  },

  greetingBox: {
    padding: 1,
    backgroundColor: '#000',
    borderColor: '#FFFFFF',
    borderWidth: 2,

  },

  greetingBox2: {
    padding: 1,
    marginTop: 10,
    backgroundColor: '#000',
    borderColor: '#FFFFFF',
    borderWidth: 2,

  },




});

AppRegistry.registerComponent('Hello360', () => Hello360);
