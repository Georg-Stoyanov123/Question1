import * as React from 'react'
import {Text, StyleSheet, Platform, OS, Dimensions, StatusBar, TouchableOpacity, View} from 'react-native'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-view';
import LinearGradient from 'react-native-linear-gradient'
export default class KidneyCancerScreen extends React.Component {
    render() {
        return (
            <View style={styles.safeAreaViewStyle}>
                <TouchableOpacity style={styles.symptomStyle1}><Text>Symptoms</Text></TouchableOpacity>
                <TouchableOpacity style={styles.precautionStyle1}><Text>Precautions</Text></TouchableOpacity>
                <TouchableOpacity style={styles.treatmentStyle1}><Text>Treatments</Text></TouchableOpacity>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    safeAreaViewStyle:{
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    symptomStyle1:{
        flex: 0.2,
        color: 'red'
    },
    precautionStyle1:{
        flex: 0.2,
        color: 'red'
    },
    treatmentStyle1:{
        flex: 0.2,
        color: 'red'
    }
})