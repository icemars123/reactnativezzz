import React, { Component } from 'react';
import Expo, { Font, Contacts } from 'expo';
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
         TouchableNativeFeedback,
         ScrollView,
         FlatList,
         SectionList,
         ActivityIndicator,
         UIManager,
         findNodeHandle,
         ActionSheetIOS,
         DatePickerIOS,
         Animated,
        } 
        from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text> Hello {this.props.name} !</Text>
    );
  }
}

class Blink extends Component 
{
    constructor(props) 
    {

        super(props);
        this.state = { isShowingText: true };

        // Toggle the state every second
        setInterval(() => 
        {
            this.setState(previousState => {
                return { isShowingText: !previousState.isShowingText };
            });
        }, 1000);
    }

    render() 
    {
        let display = this.state.isShowingText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}

class AppDate extends Component 
{
  constructor(props) 
   {
     super(props);
     this.state = { chosenDate: new Date() };

     this.setDate = this.setDate.bind(this);
   }

  setDate(newDate) {
    this.setState({ chosenDate: newDate })
  }

  render() {
    console.log('test');
    return (
       
        <DatePickerIOS
          date={this.state.chosenDate}
          onDateChange={this.setDate}
        >{this.props.time}
        </DatePickerIOS>
        
    )
  }

}


export default class App extends React.Component 
{
  constructor(props) 
  {
    super(props);
    this.state = {text: ''};
    // this.state = { chosenDate: new Date() };
    
  }

  setDate(newDate) 
  {
    this.setState({ chosenDate: newDate })
  }

  _onPress()
  {
    const radioButton = this.state.radioButton === 'radiobutton_checked' ?
      'radiobutton_unchecked' : 'radiobutton_checked'

    this.setState
    ({
      radioButton: radioButton
    });

    if (radioButton === 'radiobutton_checked') 
    {
      UIManager.sendAccessibilityEvent(
        findNodeHandle(this),
        UIManager.AccessibilityEventTypes.typeViewClicked);
    }
  }

  _onPressButton()
  {
    Alert.alert
    (
      'Alert Title',
      'Hello Gavin',
      [
        { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    );
  }

  _onLongPressButton()
  {
    Alert.alert("You long-pressed the button!");
  }

  componentDidMount() 
  {
    Font.loadAsync({
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });
    // return fetch('https://facebook.github.io/react-native/movies.json')
    //   .then((response) => response.json())
    //   .then((responseJson) => 
    //   {
    //     this.setState
    //     ({
    //       isLoading: false,
    //       dataSource: responseJson.movies,
    //     }, function () 
    //     {

    //     });
    //   })
    //   .catch((error) => 
    //   {
    //     console.error(error);
    //   });
  }

  showActionSheetWithOptions()
  {
    ActionSheetIOS.showActionSheetWithOptions
    (
      {
        options: ['Cancel', 'Add', 'Remove',],
        destructiveButtonIndex: 1,
        cancelButtonIndex: 0,
      },
      (buttonIndex) => 
      {
        if (buttonIndex === 1) 
        { /* destructive action */ }
      }
    );
  }

  showShareActionSheetWithOptions()
  {
    ActionSheetIOS.showShareActionSheetWithOptions
    (
      {
          url: 'https://code.facebook.com',
      },
      (error) => 
      {
        console.error(error);
      },
      (success, method) => 
      {
        var text;
        if (success) 
        {
          text = `Shared via ${method}`;
        } 
        else 
        {
          text = 'You didn\'t share';
        }
        // this.setState({text});
      }
    );
  }

  render() 
  {
    if (this.state.isLoading) 
    {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }
    return (
        
        <ScrollView style={{ flex: 3 }}>
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="Tap me!">
              <View>
                <FlatList
                data={this.state.dataSource}
                renderItem={({ item }) => <Text>{item.title}, {item.releaseYear}</Text>}
                keyExtractor={({ id }, index) => id}
              />
              </View>
            </TouchableOpacity>
            <View style={styles.first}>
              <TouchableOpacity
                accessible={true}
                accessibilityLabel="Tap me!">
                <View style={styles.buttonContainer}>
                  <Button 
                    onPress={this._onPressButton}
                    title="Press Me"
                  />
                </View>
              </TouchableOpacity>
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
              <Text selectable={true} style={{padding: 10, fontSize: 66}} >
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
            <View style={styles.third} >
              <View style={{ width: '100%', height: 50, backgroundColor: 'powderblue' }} />
              <View style={{ width: '100%', height: 50, backgroundColor: 'skyblue' }} >
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="Tap me!"
              onPress={this._onPress}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Press me!</Text>
              </View>
            </TouchableOpacity>
              </View>
              <View style={{ width: '100%', height: 50, backgroundColor: 'steelblue' }} />
            </View>
            <View>
              <SectionList 
                sections=
                {[
                  { title: 'A', data: ['Andy', 'Andrew']},
                  { title: 'D', data: ['Devin', 'Danny'] },
                  { title: 'G', data: ['Gavin'] },
                  { title: 'I', data: ['Ian', 'Ivy']},
                  { title: 'J', data: ['Jackson', 'James', 'Joel', 'John', 'Jillian','Jimmy'] },
                  { title: 'V', data: ['Vivian', 'Vivian', 'Victory'] },
                ]}
                renderItem={({item}) => <Text selectable={true} style={styles.item}>{item}</Text>}
                renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                keyExtractor={(item, index) => index}
              />
            </View>
            <View style={styles.fifth}>
              <Text onPress={this.showActionSheetWithOptions} style={styles.button}>
                Click to show ActionSheetWithOptions
              </Text>
              <Text onPress={this.showShareActionSheetWithOptions} style={styles.button}>
                Click to show ShareActionSheetWithOptions
              </Text>
            </View>
        </ScrollView>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject2', () => App);


const styles = StyleSheet.create
({
    first: 
    {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'powderblue'
    },
    buttonContainer: 
    {
      margin: 15
    },
    alternativeLayoutButtonContainer: 
    {
      margin: 5,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    second:
    {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%', 
      backgroundColor: 'skyblue'
    },
    third: 
    {
      backgroundColor: 'steelblue', 
      flexDirection: 'column', 
      justifyContent: 'space-between'
    },
    fourth:
    {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'powderblue',
      paddingTop: 22
    },
    item: 
    {
      padding: 10,
      fontSize: 18,
      height: 44,
    }, 
    sectionHeader: 
    {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    fifth:
    {
      height: 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'skyblue',
    },
    button: 
    {
      // fontFamily: 'open-sans-bold',
      height: 50,
      marginBottom: 10,
      // fontSize: 18,
    },
    dateSelection:
    {
      flex: 1,
      justifyContent: 'center'
    }
});
