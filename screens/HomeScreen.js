import * as React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from "expo-font";
let customFonts = {
    "Aldrich-Regular": require("../assets/fonts/Aldrich-Regular.ttf"),
    "Game-Of-Squids": require("../assets/fonts/Game-Of-Squids.ttf")
  };
export default class HomeScreen extends React.Component {
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
        return(
            <View>
                      <LinearGradient
                            colors={['#FEAC5E', '#C779D0', '#4BC0C8']}
                            style={styles.background}
                      />
                      <TouchableOpacity style={styles.touchableOpacityStyle} onPress={()=>this.props.navigation.navigate("Bone cancer")}>
                    <LinearGradient
                            colors={["#0000FF", "#49a09d", "#fdbb2d"]}
                            style={styles.background1}
                            start={{ x: -1, y: 0 }}
                            end={{ x: 0.7, y: 3 }}
                      />
                        <Text style={styles.textStyle}>Bone Cancer</Text></TouchableOpacity>
                <TouchableOpacity style={styles.touchableOpacityStyle1} onPress={()=>this.props.navigation.navigate("Blood cancer")}>
                <LinearGradient
                            colors={["#FF0000", "#cc5333", "#fdbb2d"]}
                            style={styles.background1}
                            start={{ x: -1, y: 0 }}
                            end={{ x: 0.7, y: 3 }}
                      />
                    <Text style={styles.textStyle1}>Blood Cancer</Text></TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    textStyle:{
        color: "#123456",
        textAlign: "center",
        marginTop: RFValue(10),
        fontFamily: "Aldrich-Regular"
    },
    touchableOpacityStyle:{
        width: RFValue(290),
        backgroundColor: 'red',
        alignItems: "center",
        alignSelf: "center",
        marginTop: 40,
        height: RFValue(40),
        borderRadius: RFValue(10),
        borderWidth: 2,
        borderColor: "black",
    },
    touchableOpacityStyle1:{
        width: RFValue(290),
        backgroundColor: 'red',
        alignItems: "center",
        alignSelf: "center",
        marginTop: 40,
        height: RFValue(40),
        borderRadius: RFValue(10),
        borderWidth: 2,
        borderColor: "black",
    },  
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: RFValue(672.5),
      },
      background1: {
        position: 'absolute',
        left: RFValue(-1.5),
        right: 0,
        top: RFValue(-2),
        height: RFValue(40),
        width: RFValue(290),
        borderRadius: RFValue(10),
      },
    textStyle1:{
        color: "#123456",
        textAlign: "center",
        marginTop: RFValue(10),
        fontFamily: "Aldrich-Regular"
    }
})