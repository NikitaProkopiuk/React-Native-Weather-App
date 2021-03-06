import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { colors } from '../utils/index'

const { PRIMARY_COLOR} = colors

export default function WeatherInfo({ currentWeather }) {
    const {
        main: { temp },
        weather: [details],
        name,
    } = currentWeather
    const { icon, main, description } = details

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`

    return (
        <View style={styles.weatherInfo}>
            <Text>{name}</Text>
            <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
            <Text style={styles.textPrimary}>{temp}°</Text>
            <Text style={styles.weatherDescription}>{description}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    weatherInfo: {
        marginTop: 60,
        alignItems: 'center',
    },
    weatherDescription: {
        textTransform: 'capitalize',
        fontSize: 20,
        color: 'black',
        fontWeight: '500',
        marginTop: 10,
    },
    weatherIcon: {
        width: 100,
        height: 100,
    },
    textPrimary: {
        fontSize: 40,
        color: PRIMARY_COLOR ,
    },
})