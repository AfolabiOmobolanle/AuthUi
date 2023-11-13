import { StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import assets, {colors} from '../constants/app.constants'

const LoginOptions = () => {
  return (
    <View style={styles.logInOptions}>
    <TouchableOpacity style={styles.socials}>
      <Image source={assets.facebook} resizeMode="contain" />
    </TouchableOpacity>

    <TouchableOpacity style={styles.socials}>
      <Image source={assets.google} resizeMode="contain" />
    </TouchableOpacity>

    <TouchableOpacity style={styles.socials}>
      <Image source={assets.apple} resizeMode="contain" />
    </TouchableOpacity>
  </View>
  )
}

export default LoginOptions

const styles = StyleSheet.create({
    logInOptions: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
      },
      socials: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: colors.border,
        paddingHorizontal: 10,
        paddingVertical: 20,
        width: 100,
        height: 56,
      },
})