import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ClickableText = ({text, color, onPress, textAlign}) => {
  return (
    <TouchableOpacity onPress={onPress} style ={styles.container}>
    <Text style={{ color,textAlign }}>{text}</Text>
    </TouchableOpacity>
  )
}

export default ClickableText

const styles = StyleSheet.create({
    container:{
        paddingTop:10,
     
    }
})