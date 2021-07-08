import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import Container from '../../components/common/container/Container';
import CustomButton from '../../components/common/custombutton/CustomButton';
import Input from '../../components/common/input/Input';

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
      <CustomButton secondary title="Submit" loading={true} disabled={true} />
      <CustomButton secondary title="Click me" loading={true} />
      <CustomButton primary title="Submit" loading={true} disabled={true} />
      <CustomButton danger title="Submit" />
    </Container>
  );
};

export default Login;
