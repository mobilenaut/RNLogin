import {Text, View} from 'react-native';
import React from 'react';

import styles from './styles';

import Button from '../../components/Button';

const LoginScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Text>LoginScreen</Text>
      <Button />
    </View>
  );
};

export default LoginScreen;
