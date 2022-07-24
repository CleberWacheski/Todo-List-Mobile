import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons';
import { KeyboardAvoidingView } from 'react-native';

export const Container = styled.View`
  flex:1;

  background-color:${({theme})=> theme.colors.background};
`;
export const Content = styled.View`

  margin-top: 20px;

  flex: 1;
  justify-content: flex-start;
  align-items: center;

`
export const BoxAddNewTask = styled.View`
  width: 100%;

  justify-content: space-between;
  align-items: center;
  

`
export const Input = styled.TextInput`
  width: 70%;
  height: 50px;

  padding: 0 20px;

  border-radius: 5px;
  background-color: ${({theme})=>theme.colors.text_primary};
  
  font-family: ${({theme})=>theme.fonts.medium};
  font-size: ${RFValue(15)}px;
  
`
export const AlertText = styled.Text`
  color: ${({theme})=> theme.colors.alert};

  font-family: ${({theme})=> theme.fonts.medium};
  font-size: ${RFValue(10)}px;

  padding: 10px;


`
export const ButtonTaskDetail = styled.TouchableOpacity`
  width: 70%;
  height: 50px;

  padding: 0 20px;

  border-radius: 5px;
  background-color: ${({theme})=>theme.colors.text_primary};

  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  margin-bottom: 13px;
 
`

export const TextDetail = styled.Text`
   font-family: ${({theme})=>theme.fonts.medium};
   font-size: ${RFValue(15)}px;


`
export const IconArrowDown = styled(AntDesign)``

export const Button = styled.TouchableOpacity`

    background-color: ${({theme})=>theme.colors.primary};

    padding: 10px 15px;
    margin-top: 15px;

    border-radius: 5px;
  
`
export const TextButton = styled.Text`
 font-family: ${({theme})=>theme.fonts.medium};
 font-size: ${RFValue(13)}px;

 color: white;

`

