import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import ScreenContainer from '../Components/screen.container';
import {AuthHeader} from '../Components/auth-header';
import Customtext from '../Components/custom.text';
import TextBox from '../Components/TextBox';
import {colors} from '../constants/app.constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../Components/CustomButton';
import LoginOptions from '../Components/login.options';
import ClickableText from '../Components/clickable-text';

const Register = ({navigation}) => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] =
    useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onRegister = () => {
    navigation.navigate('RegisterPage');
  };

  const onLogIn = () => {
    navigation.navigate('Loginpage');
  };
  return (
    <ScreenContainer>
      <AuthHeader />
      <View style={styles.screenContainer}>
        <Customtext>Hello! Register to get started</Customtext>
        <View style={{height: 30}} />

        <TextBox
          placeholder={'Username'}
          secureTextEntry={false}
          onChangeText={(value: string) => setUserName(value)}
          onFocus={() => setIsUsernameFocused(true)}
          onBlur={() => setIsUsernameFocused(false)}
          customStyle={[isUsernameFocused && {borderColor: colors.primary}]}
        />
        <View style={{height: 20}} />

        <TextBox
          customStyle={[isEmailFocused && {borderColor: colors.primary}]}
          placeholder={'Email '}
          secureTextEntry={false}
          onChangeText={(value: string) => setEmail(value)}
          onFocus={() => setIsEmailFocused(true)}
          onBlur={() => setIsEmailFocused(false)}
        />
        <View style={{height: 20}} />
        <View>
          <TextBox
            customStyle={[isPasswordFocused && {borderColor: colors.primary}]}
            placeholder={'Password '}
            secureTextEntry={!showPassword}
            onChangeText={(value: string) => setPassword(value)}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
          />
          <TouchableOpacity
            onPress={togglePassword}
            style={{position: 'absolute', right: 10, top: 10, paddingTop: 5}}>
            <Icon
              name={showPassword ? 'eye-slash' : 'eye'}
              size={20}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <View style={{height: 20}} />

        <View>
          <TextBox
            customStyle={[isConfirmPasswordFocused && {borderColor: colors.primary}]}
            placeholder={'Confirm password '}
            secureTextEntry={!showPassword}
            onChangeText={(value: string) => setConfirmPassword(value)}
            onFocus={() => setIsConfirmPasswordFocused(true)}
            onBlur={() => setIsConfirmPasswordFocused(false)}
          />
          <TouchableOpacity
            onPress={togglePassword}
            style={{position: 'absolute', right: 10, top: 10, paddingTop: 5}}>
            <Icon
              name={showPassword ? 'eye-slash' : 'eye'}
              size={20}
              color="black"
            />
          </TouchableOpacity>
        </View>
        
        <View style={{height: 20}} />

        <CustomButton onPress={onRegister} title="Register" />
        <View style={{height: 20}} />
        <Text style={{textAlign: 'center'}}>Or Register with</Text>
        <View style={{height: 20}} />

        <LoginOptions />

        <View style={styles.linkContainer}>
            <Text style={styles.link}>Already have an account?</Text>
            <ClickableText
              text={'Login Now'}
              color={colors.primary}
              textAlign={'right'}
              onPress={onLogIn}
            />
          </View>


      </View>
    </ScreenContainer>
  );
};

export default Register;

const styles = StyleSheet.create({
  screenContainer: {
    padding: 20,
  },
  link: {
    marginTop: 10,
    color: colors.gray,
  },
  linkContainer: {
    marginTop:40,
    gap: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
