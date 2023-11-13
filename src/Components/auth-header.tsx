import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {colors} from '../constants/app.constants';
import {useNavigation} from '@react-navigation/native';

export const AuthHeader = () => {
  const navigation = useNavigation();
  const moveBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View
      style={{
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
      }}>
      <TouchableOpacity
        style={{
          borderColor: colors.gray,
          borderWidth: 1,
          width: 41,
          height: 41,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 12,
        }}
        onPress={moveBack}>
        <Icon name="chevron-left" size={30} color={colors.dark} />
      </TouchableOpacity>
    </View>
  );
};
