import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';

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


export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      // <Image source={pic} style={{width: 193, height: 110}}/>
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      //   <Text>Welcome Gavin!!!</Text>
      //   <Text>Hello world!</Text>
      // </View>
      // <View style={styles.container}>
      //   <View style={styles.subcontainer}>
      //     <Greeting name='Rexxar' />
      //     <Greeting name='Jaina' />
      //     <Greeting name='Valeera' />
      //     <Blink text='I love to blink'/>
      //     <Blink text='Yes blinking is so great' />
      //     <Blink text='Why did they ever take this out of HTML' />
      //     <Blink text='Look at me look at me look at me' />
      //   </View>
      // </View>
        <View style={{ flex: 3 }}>
            <View style={{ flex: 1.5, backgroundColor: 'powderblue', flexDirection: 'row'}}>
              <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View> 
            <View style={styles.subcontainer} >
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    subcontainer: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%', 
      backgroundColor: 'skyblue'
  }
});
