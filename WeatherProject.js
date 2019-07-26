import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Forecast from './Forecast';
import OpenWeatherMap from './open_weather_map'

class WeatherProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zip: '',
            forecast: null,
        };
    }

    _handleTextChange = event => {
        let zip = event.nativeEvent.text;
        this.setState({ zip: zip })
        OpenWeatherMap.fetchForecast(zip).then(forecast => {
            console.log(forecast)
            this.setState({ forecast: forecast })
        })
    }

    render() {
        let content = null;
        if (this.state.forecast !== null) {
            content = (
                <Forecast
                    main={this.state.forecast.main}
                    description={this.state.forecast.description}
                    temp={this.state.forecast.temp}
                />
            )
        }
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    You input {this.state.zip}
                </Text>
                {content}
                <TextInput
                    style={styles.input}
                    onSubmitEditing={this._handleTextChange}
                />
            </View>

        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#666666',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

    input: {
        fontSize: 20,
        borderWidth: 2,
        height: 40,
        width: 100
    },
});

export default WeatherProject
