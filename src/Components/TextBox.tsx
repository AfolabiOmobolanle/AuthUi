import { StyleSheet, TextInput} from 'react-native'
import React from 'react'
import { colors } from '../constants/app.constants'


const TextBox = ({placeholder, secureTextEntry, onChangeText, onFocus, onBlur,customStyle}) => {

  return (
    <TextInput
    style ={[styles.input,customStyle]}
    placeholder={placeholder}
    secureTextEntry = {secureTextEntry}
    onChangeText={onChangeText}
    onFocus={onFocus}
    onBlur={onBlur}
    />

  )
}

export default TextBox

const styles = StyleSheet.create({
    input: {
        height: 55,
        borderColor: colors.bglight,
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 10
    },
})