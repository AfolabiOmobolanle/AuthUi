import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import assets, {colors} from '../constants/app.constants';
import ScreenContainer from '../Components/screen.container';
import {AuthHeader} from '../Components/auth-header';
import Customtext from '../Components/custom.text';
import OtpBox from '../Components/otp.box';
import CustomButton from '../Components/CustomButton';
import ClickableText from '../Components/clickable-text';

const PasswordReset = ({navigation}) => {
  const [code, setCode] = useState('');
  const [isCodeFocused, setIsCodeFocused] = useState(false);

  const onResend = () => {
    navigation.navigate('CreateNewPassword');
  };

  const onPasswordReset = () => {
    navigation.navigate('PasswordReset');
  };

  return (
    <ScreenContainer>
      <AuthHeader />
      <View style={styles.screen}>
        <Customtext>OTP Verification</Customtext>

        <View style={{height: 10}} />

        <Text>
          Enter the verification code we just sent on your email address.
        </Text>
        <View style={{height: 30}} />

        <OtpBox
          onChangeText={(value: string) => setCode(value)}
          onFocus={() => setIsCodeFocused(true)}
          onBlur={() => setIsCodeFocused(false)}
          customStyle={[isCodeFocused && {borderColor: colors.primary}]}
        />
        <View style={{height: 20}} />

        <CustomButton onPress={onResend} title={'Verify'} />

        <View style={styles.linkContainer}>
          <Text style={styles.link}>Didn't receive code?</Text>
          <ClickableText
            text={'Resend'}
            color={colors.primary}
            textAlign={'right'}
            onPress={onPasswordReset}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default PasswordReset;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  link: {
    marginTop: 10,
    color: colors.gray,
  },
  linkContainer: {
    marginTop: 380,
    gap: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
