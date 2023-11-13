import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import assets, {colors} from '../constants/app.constants';
import ScreenContainer from '../Components/screen.container';
import {AuthHeader} from '../Components/auth-header';
import TextBox from '../Components/TextBox';
import Customtext from '../Components/custom.text';
import Icon from 'react-native-vector-icons/FontAwesome';
import ClickableText from '../Components/clickable-text';
import CustomButton from '../Components/CustomButton';
// import {Image} from 'react-native';
import LoginOptions from '../Components/login.options';

const LogIn = ({navigation}) => {
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // const navigation = useNavigation();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const forgotPassWord = () => {
    navigation.navigate('ForgotPassword');
  };

  const onLogIn = () => {
    navigation.navigate('Loginpage');
  };

  const onRegister = () => {
    navigation.navigate('RegisterPage');
  };

  // const { user } = route.params;
  return (
    <ScreenContainer>
      <AuthHeader />
      <View style={styles.screenWrapper}>
        <Customtext>Welcome back! Glad to see you, Again!</Customtext>
        {/* {user?.name} age {user?.age} */}
        <View style={{height: 30}} />

        <TextBox
          customStyle={[isEmailFocused && {borderColor: colors.primary}]}
          placeholder={'Enter your email '}
          secureTextEntry={false}
          onChangeText={(value: string) => setEmail(value)}
          onFocus={() => setIsEmailFocused(true)}
          onBlur={() => setIsEmailFocused(false)}
        />
        <View style={{height: 20}} />

        <View>
          <TextBox
            customStyle={[isPasswordFocused && {borderColor: colors.primary}]}
            placeholder={'Enter your password '}
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

        <ClickableText
          text={'Forgot Password'}
          color={colors.gray}
          textAlign={'right'}
          onPress={forgotPassWord}
        />

        <View style={{height: 20}} />

        <CustomButton onPress={onLogIn} title="Login" />
        <View style={{height: 40}} />

        <View>
          <View></View>
          <Text style={{textAlign: 'center'}}>Or Login with</Text>
          <View style={{height: 40}} />
          <LoginOptions />

          <View style={styles.linkContainer}>
            <Text style={styles.link}>Don't have an account?</Text>
            <ClickableText
              text={'Register Now'}
              color={colors.primary}
              textAlign={'right'}
              onPress={onRegister}
            />
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  screenWrapper: {
    padding: 20,
  },

  link: {
    marginTop: 10,
    color: colors.gray,
  },
  linkContainer: {
    marginVertical: 120,
    gap: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
