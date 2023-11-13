import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import assets, {colors} from '../constants/app.constants';

import ScreenContainer from '../Components/screen.container';
import Customtext from '../Components/custom.text';
import CustomButton from '../Components/CustomButton';

const PasswordChanged = ({navigation}) => {
  const onLogIn = () => {
    navigation.navigate('Loginpage');
  };
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Image source={assets.successMark} />
        <View style={{height: 30}} />

        <Customtext>Password Changed</Customtext>
        <View style={{height: 10}} />

        <Text>Your password has been changed successfully.</Text>
        <View style={{height: 20}} />

        <View style={styles.button}>
          <CustomButton onPress={onLogIn} title={'Back to Login'} />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default PasswordChanged;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  button: {
    width: '100%',
    paddingHorizontal: 10,
  },
});
