import React from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input/index';

const Login = () => {
  const [value, onChangeText] = React.useState('');
  return (
    <Container>
      <SafeAreaView>
        <Input
          label="Username"
          onChangeText={text => onChangeText(text)}
          value={value}
          iconPosition="right"
          icon={<Text></Text>}

          // error={'This field is required'}
        />
        <Input
          label="Password"
          onChangeText={text => onChangeText(text)}
          value={value}
          icon={<Text>HIDE</Text>}
          iconPosition="right"
        />
      </SafeAreaView>
    </Container>
  );
};

export default Login;
