import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

class Forecast extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.bigText}>
                    {this.props.main}
                </Text>
                <Text style={styles.mainText}>
                    Current Conditions: {this.props.description}
                </Text>
                <Text style={styles.bigText}>
                    {this.props.temp}ºF
            </Text>


            </View>
        )
    }


}