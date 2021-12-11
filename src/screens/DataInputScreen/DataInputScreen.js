import React from 'react';
import {TextInput, Text, View} from 'react-native';

class DataInputScreen extends React.Component {
  convertTextToDob = text => {
    let arr = text.split('/');
    this.setState({resultText: `day ${arr[0]} month ${arr[1]} year ${arr[2]}`});
  };

  state = {
    resultText: 'Not typed yet',
    inputText: '',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={text => (resultText = this.convertTextToDob(text))}
        />
        <Text>{this.state.resultText}</Text>
      </View>
    );
  }
}

export default DataInputScreen;
