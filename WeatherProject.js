import React from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
import Forecast from './Forecast';
import OpenWeatherMap from './open_weather_map'
import flowers from './flowers.png'


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
            <ImageBackground
                // source={require('./flowers.png')}
                source={flowers}
                style={styles.backdrop}>
                <View style={styles.overlay}>
                    <View style={styles.row}>
                        <Text style={styles.maintext}>
                            Current weather for
                </Text>
                        <Text style={styles.enter}>Enter ZipCode:</Text>

                        <View style={styles.zipContainer}>
                            <TextInput
                                style={[styles.zipCode, styles.mainText]}
                                onSubmitEditing={event => this._handleTextChange(event)} />

                        </View>
                    </View>
                    {content}
                </View>
            </ImageBackground >



        )
    }


}

const baseFontSize = 16;

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 30,
        flexDirection: 'column',
        resizeMode: 'cover',
    },
    enter: {
        color: 'white'
    },
    overlay: {
        paddingTop: 15,
        backgroundColor: '#000000',
        opacity: 0.5,
        flexDirection: 'column',
        alignItems: 'center',

    },
    row: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'flex-start',
        padding: 30,
    },
    zipContainer: {
        height: baseFontSize + 10,
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        marginLeft: 5,
        marginTop: 3,

    },
    zipCode: { flex: 1, flexBasis: 1, width: 50, height: baseFontSize },
    mainText: { fontSize: baseFontSize, color: 'white' }
});

export default WeatherProject

