import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import assets, { colors } from '../constants/app.constants';
import CustomButton from '../Components/CustomButton';
import ClickableText from '../Components/clickable-text';

const { width, height } = Dimensions.get('window');

const Landing: React.FC = ({ navigation }) => {
  const onLogIn = () => {
    // const userDetails = {
    //   name: "Bola",
    //   age: 12
    // }, { user: userDetails }s
    navigation.navigate("Loginpage");
  };

  const onRegister = () => {
    navigation.navigate("RegisterPage");

  };

  const onContinue = () => { };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={assets.backgroundCover}
        resizeMode="cover"
        style={StyleSheet.absoluteFill}>
        <View style={styles.bottomContainer}>
          <View style={styles.brandContent}>
            <Image
              source={assets.branding}
              resizeMode="contain"
              style={styles.branding}
            />
          </View>

          <View style={styles.buttonContainer}>
            <CustomButton onPress={onLogIn} title="Login" />

            <View style={styles.btnWrapper}>
              <TouchableOpacity onPress={onRegister} style={styles.button}>
                <Text style={styles.btnText}>Register</Text>
              </TouchableOpacity>
              

              <ClickableText text={'Continue as a guest'} color={colors.primary} onPress={onContinue}
              textAlign={'center'}/>
            
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bottomContainer: {
    marginTop: 400,
    flexDirection: 'column',
  },
  brandContent: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonContainer: {
    marginVertical: 150,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  btnWrapper: {
    paddingVertical: 5,
    paddingHorizontal: 2,
    width: '100%',
  },
  button: {
    backgroundColor: colors.bglight,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: colors.dark,
    borderWidth: 3,
    marginTop: 20,
    height: 48,
    width: '100%',
  },

  clickableText: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  guest: {
    marginTop: 20,
    color: colors.primary,
    fontWeight: '600'
  },

  btnText: {
    color: colors.dark,
    fontSize: 17,

  },

  branding: {
    width: '50%',
    height: height * 0.15,
  },
});
