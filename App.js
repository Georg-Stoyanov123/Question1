import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import 'react-native-gesture-handler'
import HomeScreen from './screens/HomeScreen'
import BowelCancerScreen from './screens/BowelCancerScreen'
import BoneCancerScreen from './screens/BoneCancerScreen'
import BreastCancerScreen from './screens/BreastCancerScreen'
import BloodCancerScreen from './screens/BloodCancerScreen'
import ColonCancerScreen from './screens/ColonCancerScreen'
import SkinCancerScreen from './screens/SkinCancerScreen'
import LungCancerScreen from './screens/LungCancerScreen'
import KidneyCancerScreen from './screens/KidneyCancerScreen'
import OralCancerScreen from './screens/OralCancerScreen'
import BronchusCancerScreen from './screens/BronchusCancerScreen'
import ProstateCancerScreen from './screens/ProstateCancerScreen'
import {NavigationContainer} from '@react-navigation/native'
import BoneCancerDescription from './descriptions/BoneCancerDescription'
import BoneCancerSymptoms from './symptoms/BoneCancerSymptoms'
import BoneCancerPrecautions from './precautions/BoneCancerPrecautions'
import BoneCancerTreatments from './treatments/BoneCancerTreatments'
import { RFValue } from 'react-native-responsive-fontsize'
import * as Font from "expo-font";
import { HeaderBackButton } from '@react-navigation/stack'

let customFonts = {
  "Aldrich-Regular": require("./assets/fonts/Aldrich-Regular.ttf"),
  "Game-Of-Squids": require("./assets/fonts/Game-Of-Squids.ttf")
};
const Stack = createStackNavigator()
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }
  componentDidMount() {
    this._loadFontsAsync();
  }
  
  render() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home screen" screenOptions={{
            headerShown: true
        }}>
            <Stack.Screen name="Home screen" component={HomeScreen} options={{headerStyle: {backgroundColor: "#222222", height: RFValue(102)}, headerTintStyle:{fontWeight: "bold"}, headerTitleStyle:{marginLeft: RFValue(119), fontFamily: "Aldrich-Regular", color: "white"}}}/>
            <Stack.Screen name="Bowel cancer" component={BowelCancerScreen} /> 
            <Stack.Screen name="Bone cancer" component={BoneCancerScreen} options={{headerStyle: {backgroundColor: "#000000", height: RFValue(102)}, headerTintStyle:{fontWeight: "bold"}, headerTitleStyle:{marginLeft: RFValue(72), fontFamily: "Aldrich-Regular", color: "white"}}} />
            <Stack.Screen name="Breast cancer" component={BreastCancerScreen} />
            <Stack.Screen name="Blood cancer" component={BloodCancerScreen} options={{headerStyle: {backgroundColor: "#000000", height: RFValue(102)}, headerTintStyle:{fontWeight: "bold"}, headerTitleStyle:{marginLeft: RFValue(72), fontFamily: "Aldrich-Regular", color: "white"}}} />
            <Stack.Screen name="Colon cancer" component={ColonCancerScreen} />
            <Stack.Screen name="Skin cancer" component={SkinCancerScreen} />
            <Stack.Screen name="Lung cancer" component={LungCancerScreen} />
            <Stack.Screen name="Kidney cancer" component={KidneyCancerScreen} />
            <Stack.Screen name="Oral cancer" component={OralCancerScreen} />
            <Stack.Screen name="Bronchus cancer" component={BronchusCancerScreen} />
            <Stack.Screen name="Prostate cancer" component={ProstateCancerScreen} />
            <Stack.Screen name="Bone Cancer Description" component={BoneCancerDescription} />
            <Stack.Screen name="Bone Cancer Symptoms" component={BoneCancerSymptoms} />
            <Stack.Screen name="Bone Cancer Precautions" component={BoneCancerPrecautions} />
            <Stack.Screen name="Bone Cancer Treatments" component={BoneCancerTreatments} />
        </Stack.Navigator>
        </NavigationContainer>
    
  )
  };
}
