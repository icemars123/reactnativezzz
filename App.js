import React, { Component } from 'react';
import { Alert, 
         StyleSheet, 
         Text, 
         View, 
         AppRegistry, 
         Image, 
         TextInput, 
         Button,
         Platform,
         TouchableHighlight,
         TouchableOpacity,
         TouchableWithoutFeedback,
         TouchableNativeFeedback 
        } 
        from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text> Hello {this.props.name} !</Text>
    );
  }
}

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { isShowingText: true };

        // Toggle the state every second
        setInterval(() => {
            this.setState(previousState => {
                return { isShowingText: !previousState.isShowingText };
            });
        }, 1000);
    }

    render() {
        let display = this.state.isShowingText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}


export default class App extends Component {
  constructor(props) 
  {
    super(props);
    this.state = {text: ''};
  }

  _onPressButton()
  {
    Alert.alert('You tapped the button!');
  }

  _onLongPressButton()
  {
    Alert.alert("You long-pressed the button!");
  }

  render() 
  {
    return (
        <View style={{ flex: 3 }}>
            <View style={styles.first}>
               <View style={styles.buttonContainer}>
                <Button 
                  onPress={this._onPressButton}
                  title="Press Me"
                />
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  onPress={this._onPressButton}
                  title="Press Me"
                  color="#841584"
                />
              </View>
              <View style={styles.alternativeLayoutButtonContainer}> 
              <Button
                onPress={this._onPressButton}
                title="This looks great!"
              />
              <Button
                onPress={this._onPressButton}
                title="OK!"
                color="#841584"
              />
            </View>
            </View> 
            <View style={styles.second} >
              <TextInput 
                style={{height: 40}} 
                placeholder="Type here to translate!"
                onChangeText={(text) => this.setState({text})}
              />
              <Text style={{padding: 10, fontSize: 66}} >
                {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
              </Text>
              <Greeting name='Rexxar' />
              <Greeting name='Jaina' />
              <Greeting name='Valeera' />
              <Blink text='I love to blink'/>
              <Blink text='Yes blinking is so great' />
              <Blink text='Why did they ever take this out of HTML' />
              <Blink text='Look at me look at me look at me' />
            </View>
            <View style={{ flex: 1.5, backgroundColor: 'steelblue', flexDirection: 'column', justifyContent: 'space-between'}} >
              <View style={{ width: '100%', height: 50, backgroundColor: 'powderblue' }} />
              <View style={{ width: '100%', height: 50, backgroundColor: 'skyblue' }} />
              <View style={{ width: '100%', height: 50, backgroundColor: 'steelblue' }} />
            </View>
        </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject2', () => App);


const styles = StyleSheet.create({
    first: {
      flex: 1.5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'powderblue'
    },
    buttonContainer: {
      margin: 15
    },
    alternativeLayoutButtonContainer: {
      margin: 5,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    second: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%', 
      backgroundColor: 'skyblue'
  }
});
