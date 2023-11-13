import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import ScreenContainer from '../Components/screen.container';
import {AuthHeader} from '../Components/auth-header';
import Customtext from '../Components/custom.text';
import {colors} from '../constants/app.constants';
import TextBox from '../Components/TextBox';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../Components/CustomButton';
import PasswordChanged from './PasswordChanged';

const CreateNewPassword = ({navigation}) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isNewPasswordFocused, setIsNewPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const passwordChanged = () => {

    navigation.navigate('PasswordChanged')
  }

  return (
    <ScreenContainer>
      <AuthHeader />
      <View style={styles.container}>
        <Customtext>Create New Password</Customtext>
        <View style={{height: 15}} />
        <Text>
          Your new password must be unique from those previously used.
        </Text>
        <View style={{height: 15}} />

        <View>
          <TextBox
            customStyle={[
              isNewPasswordFocused && {borderColor: colors.primary},
            ]}
            placeholder={'Password '}
            secureTextEntry={!showPassword}
            onChangeText={(value: string) => setNewPassword(value)}
            onFocus={() => setIsNewPasswordFocused(true)}
            onBlur={() => setIsNewPasswordFocused(false)}
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
            customStyle={[
              isConfirmPasswordFocused && {borderColor: colors.primary},
            ]}
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

        <CustomButton
         onPress={passwordChanged}
         title={'Reset Password'}/>
      </View>
    </ScreenContainer>
  );
};

export default CreateNewPassword;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
