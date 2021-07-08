import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import Container from '../../components/common/container/Container';
import Input from '../../components/input/Input';

const Login = () => {
  const [value, onChangeText] = useState('Useless Placeholder');
  return (
    <Container>
      <Input
        label="Username"
        onChangeText={text => onChangeText(text)}
        value={value}
        iconPosition="right"
      />
      <Input
        label="Password"
        onChangeText={text => onChangeText(text)}
        value={value}
        icon={<Text>HIDE</Text>}
        iconPosition="right"
        // error="This field is required"
      />
    </Container>
  );
};

export default Login;
