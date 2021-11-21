import * as React from 'react'
import {Text, View, StyleSheet} from 'react-native'

export default class BoneCancerSymptoms extends React.Component {
    render() {
        return(
            <View>
                <Text>
                The symptoms of bone cancer are: {`\n\n`}

Pain and swelling in the affected bones{`\n\n`}
Palpable hard mass in the long bones of the limbs{`\n\n`}
Feeling tired or fatigued{`\n\n`}
                </Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({

})