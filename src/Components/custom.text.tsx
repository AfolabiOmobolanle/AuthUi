import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/app.constants'

const Customtext = ({children}) => {
  return (
    <View >
      <Text style={styles.text} >{children}</Text>
    </View>
  )
}

export default Customtext

const styles = StyleSheet.create({
   text:{
    fontSize: 30,
    fontWeight: '700',
    color: colors.dark,
   } 

})