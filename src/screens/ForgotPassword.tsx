import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import assets, {colors} from '../constants/app.constants';

import ScreenContainer from '../Components/screen.container';
import {AuthHeader} from '../Components/auth-header';
import Customtext from '../Components/custom.text';
import TextBox from '../Components/TextBox';
import CustomButton from '../Components/CustomButton';
import ClickableText from '../Components/clickable-text';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const onPasswordReset = () => {
    navigation.navigate('PasswordReset');

  };
  const onLogIn = () => {
    navigation.navigate('Loginpage');
  };
  return (
    <ScreenContainer>
      <AuthHeader />
      <View style={styles.screen}>
        <Customtext>Forgot Password?</Customtext>
        <View style={{height: 10}} />

        <Text>
          Don't worry! It occurs. Please enter the email address linked with
          your account.
        </Text>
        <View style={{height: 30}} />

        <TextBox
          customStyle={[isEmailFocused && {borderColor: colors.primary}]}
          placeholder={'Enter your email '}
          secureTextEntry={false}
          onChangeText={(value: string) => setEmail(value)}
          onFocus={() => setIsEmailFocused(true)}
          onBlur={() => setIsEmailFocused(false)}
        />

<View style={{height: 40}} />


        <CustomButton onPress={onPasswordReset} title={'Send Code'} />

        <View style={styles.linkContainer}>
          <Text style={styles.link}>Remember Password?</Text>
          <ClickableText
            text={'Login'}
            color={colors.primary}
            textAlign={'right'}
            onPress={onLogIn}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  link: {
    marginTop: 10,
    color: colors.gray,
  },
  linkContainer: {
    marginTop:350,
    gap: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
