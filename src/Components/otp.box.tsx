import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../constants/app.constants'

const OtpBox = ({onChangeText,onFocus,onBlur,customStyle}) => {

    const [inputValues, setInputValues] = useState(['', '', '', '']);

    const handleInputChange = (text, index) => {
        if (/^[0-9]*$/.test(text)) {
          const newInputValues = [...inputValues];
          newInputValues[index] = text;
          setInputValues(newInputValues);
        }
    }
  return (
<TouchableOpacity style ={styles.otpWrapper}>
<TextInput
    style ={[styles.input,customStyle]}
    onChangeText={(text) => handleInputChange(text, 0)}
    value={inputValues[0]}
    onFocus={onFocus}
    onBlur={onBlur}
    maxLength={1}
    />
    <TextInput
    style ={[styles.input,customStyle]}
    onChangeText={(text) => handleInputChange(text, 0)}
    value={inputValues[0]}
    onFocus={onFocus}
    onBlur={onBlur}
    maxLength={1}
    />
    <TextInput
    style ={[styles.input,customStyle]}
    onChangeText={(text) => handleInputChange(text, 0)}
    value={inputValues[0]}
    onFocus={onFocus}
    onBlur={onBlur}
    maxLength={1}
    />
    <TextInput
    style ={[styles.input,customStyle]}
    onChangeText={(text) => handleInputChange(text, 0)}
    value={inputValues[0]}
    onFocus={onFocus}
    onBlur={onBlur}
    maxLength={1}
    />
    
</TouchableOpacity>
  )
}

export default OtpBox

const styles = StyleSheet.create({
    otpWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 25,
      },
      input: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: colors.border,
        width: 70,
        height: 56,
      },
})