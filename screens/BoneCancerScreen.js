import * as React from 'react'
import {Text, StyleSheet, Platform, OS, Dimensions, StatusBar, TouchableOpacity, View} from 'react-native'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-view';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize'
export default class BoneCancerScreen extends React.Component {
    render() {
        return (
            <View style={styles.safeAreaViewStyle}>
                                      <LinearGradient
                            colors={["#0000FF", "#49a09d", "#fdbb2d"]}
                            style={styles.background}
                            start={{ x: -1, y: 0 }}
                            end={{ x: 0.6, y: 1 }}
                      />
                <TouchableOpacity style={styles.boneCancerDescription1} onPress={()=>this.props.navigation.navigate("Bone Cancer Description")}><Text>Description/definition</Text></TouchableOpacity>
                <TouchableOpacity style={styles.symptomStyle1} onPress={()=>this.props.navigation.navigate("Bone Cancer Symptoms")}><Text>Symptoms</Text></TouchableOpacity>
                <TouchableOpacity style={styles.precautionStyle1} onPress={()=>this.props.navigation.navigate("Bone Cancer Precautions")}><Text>Precautions</Text></TouchableOpacity>
                <TouchableOpacity style={styles.treatmentStyle1} onPress={()=>{this.props.navigation.navigate("Bone Cancer Treatments")}}><Text>Treatments</Text></TouchableOpacity>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    safeAreaViewStyle:{
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    symptomStyle1:{
        width: RFValue(70),
        backgroundColor: "red",
        marginTop: RFValue(20)
    },
    causesStyle1:{
        backgroundColor: "red",
        width: RFValue(47),
        marginTop: RFValue(20)
    },
    boneCancerDescription1:{
        width: RFValue(138),
        backgroundColor: "red"
    },
    precautionStyle1:{
        width: RFValue(75),
        backgroundColor: "red",
        marginTop: RFValue(20)
    },
    treatmentStyle1:{
        width: RFValue(70),
        backgroundColor: "red",
        marginTop: RFValue(18)
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: RFValue(-48),
        height: RFValue(692.5),
      },
})