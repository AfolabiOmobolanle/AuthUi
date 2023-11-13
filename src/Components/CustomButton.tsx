import { StyleSheet, Text, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { colors } from '../constants/app.constants'

const CustomButton = ({onPress,title}) => {
  return (

    <TouchableOpacity
        onPress={onPress}
        style={styles.button}>
        <Text style={styles.buttonText}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({

        button: {
            backgroundColor: colors.dark,
            paddingHorizontal: 10,
            justifyContent: "center",
            alignItems: 'center',
            borderRadius: 5,
            width: "100%",
            marginTop: 20,
            height: 48
        },
        
        buttonText: {
            color: colors.bglight,
            fontSize: 17,
            fontWeight: "bold"
        },
})